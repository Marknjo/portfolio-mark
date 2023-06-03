import { useSize } from '@chakra-ui/react-use-size'
import { ISliderSizes } from '@store/context/slider'
import { RefObject, useEffect, useState } from 'react'

export function useSliderSize<E extends HTMLElement>(
  imgRef: RefObject<E>,
): ISliderSizes {
  const [sliderElSize, setSliderElSize] = useState<{
    height: number
    width: number
  }>({ height: 0, width: 0 })

  const elSize = useSize(imgRef)

  /* Share Image slider data */
  useEffect(() => {
    let height = 0
    let width = 0

    if (elSize) {
      height = elSize.height
      width = elSize.width
    }
    setSliderElSize({ height, width })
  }, [elSize])

  return sliderElSize
}
