import {
  ComponentType,
  ReactNode,
  useCallback,
  useEffect,
  useId,
  useState,
} from 'react'
import { Box, SystemStyleObject } from '@chakra-ui/react'
import { useSwipeable } from 'react-swipeable'

/// local
import { useSlider } from '@store/context/slider'

import SlideItem from './SliderItem'
import SliderHandles from './SliderHandles'

/// @TODO: add settings for slider handles next & prev icons, i.e. default, rounded, square,
/// @TODO: add different type of slider selector types, rounded, box, withImage and dots

function Slider<
  T extends { id: string | number; title?: string; [key: string]: any },
>({
  SliderComponent,
  children,
}: {
  SliderComponent: ComponentType<{
    data: T
  }>
  children?: ReactNode
}) {
  const sliderId = useId()
  const {
    isActive,
    curActiveSlide,
    setCurActiveSlide,
    setIsActiveSlide,
    sliderSizes,
    setSlideTitle,
    // isModal,
    isSliderOpen,
    sliderItems,
  } = useSlider<T>()
  const [stopScroll, setStopScroll] = useState(false)
  // Styles
  const styles = useStyles(stopScroll, sliderSizes.height)

  const maxSlides = sliderItems.length

  /// Add prevent previous icon from being click if there are no more slides on the left
  useEffect(() => {
    if (curActiveSlide === 0) {
      setIsActiveSlide(false)
    }
  }, [curActiveSlide, setIsActiveSlide])

  /// Enable prev slide button to allow going back to previous slider
  useEffect(() => {
    if (!isActive && curActiveSlide > 0) {
      setIsActiveSlide(true)
    }
  }, [isActive, curActiveSlide, setIsActiveSlide])

  /// set selected slide title
  useEffect(() => {
    const { title } = sliderItems[curActiveSlide]
    if (title) {
      setSlideTitle(title)
    }
  }, [sliderItems, setSlideTitle, curActiveSlide])

  /// Handle navigating to the next slide
  const nextSlideHandler = useCallback(() => {
    if (curActiveSlide === maxSlides - 1) {
      setCurActiveSlide(0)
      setIsActiveSlide(false)
    } else {
      setCurActiveSlide(curActiveSlide + 1)
    }
  }, [curActiveSlide, maxSlides, setCurActiveSlide, setIsActiveSlide])

  /// Handle navigating to the previous slide
  const prevSlideHandler = useCallback(() => {
    if (curActiveSlide > 0) {
      setCurActiveSlide(curActiveSlide - 1)
    }
  }, [setCurActiveSlide, curActiveSlide])

  /* Use keyboard to slide the slider left to right */
  useEffect(() => {
    const useKeyboard = (event: KeyboardEvent) => {
      if (event.key === 'ArrowLeft') {
        prevSlideHandler()
      }

      if (event.key === 'ArrowRight') {
        nextSlideHandler()
      }
    }

    if (isSliderOpen) {
      document.addEventListener('keyup', useKeyboard)
    }

    return () => {
      document.removeEventListener('keyup', useKeyboard)
    }
  }, [isSliderOpen, prevSlideHandler, nextSlideHandler])

  /* Prep content for the case of a modal */

  const handlers = useSwipeable({
    onSwipeStart: () => setStopScroll(true),
    onSwiped: () => setStopScroll(false),
    onSwipedLeft: nextSlideHandler,
    onSwipedRight: prevSlideHandler,
  })

  return (
    <Box sx={styles.mainWrapper} {...handlers}>
      {sliderItems.map((slideData, i) => {
        const style = {
          transform: `translateX(${100 * (i - curActiveSlide)}%)`,
        }
        return (
          <SlideItem
            key={`${sliderId}-${(slideData.id as any) + i}`}
            style={style}
          >
            <SliderComponent data={slideData} />
            {children}
          </SlideItem>
        )
      })}

      {/* Slider next and prev handles */}
      <SliderHandles onNext={nextSlideHandler} onPrev={prevSlideHandler} />
    </Box>
  )
}

export default Slider

/* Styles */
interface Styles {
  mainWrapper: SystemStyleObject
}

const useStyles = (stopScroll: boolean, minH?: number): Styles => ({
  mainWrapper: {
    display: 'flex',
    justifyContent: 'center',
    p: '0',
    overflow: 'hidden',
    ...(minH ? { minH: `${minH}px` } : {}),
    width: '100%',
    borderRadius: 'md',
    touchAction: stopScroll ? 'none' : 'auto',
  },
})
