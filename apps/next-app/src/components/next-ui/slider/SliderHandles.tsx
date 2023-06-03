/// Next and prev handlers
import { Box, Icon, SystemStyleObject } from '@chakra-ui/react'
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs'

import { useSlider } from '@store/context/slider'

const SliderHandles = ({
  onNext,
  onPrev,
}: {
  onNext: () => void
  onPrev: () => void
}) => {
  const { isActive } = useSlider()
  const styles = useStyles()

  return (
    <>
      <Box sx={styles.leftArrIconBox}>
        <Icon
          onClick={onPrev}
          role="button"
          as={BsChevronLeft}
          sx={styles.arrIconBase}
          aria-disabled={!isActive}
          _disabled={{
            cursor: 'not-allowed',
            color: 'blackAlpha.400',
            _hover: {
              color: 'blackAlpha.400',
              transform: 'none',
            },
          }}
        />
      </Box>

      <Box sx={styles.rightArrIconBox}>
        <Icon
          onClick={onNext}
          role="button"
          as={BsChevronRight}
          sx={styles.arrIconBase}
        />
      </Box>
    </>
  )
}

export default SliderHandles

/* Styles */
interface Styles {
  arrIconBase: SystemStyleObject
  leftArrIconBox: SystemStyleObject
  rightArrIconBox: SystemStyleObject
}

const useStyles = (): Styles => {
  const arrSizeBrkP = { base: '24px', sm: '36px', md: '48px' }
  const arrBrkP = { base: '0' }

  const arrIconBoxBaseStyles: SystemStyleObject = {
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    display: 'flex',
    alignItems: 'center',
    bgColor: 'blackAlpha.400',
  }

  return {
    arrIconBase: {
      cursor: 'pointer',
      width: arrSizeBrkP,
      height: arrSizeBrkP,
      color: 'orange.100',
      transition: 'all .15s ease-out',
      my: { base: '2', md: '4' },
      mx: '1',
      _hover: {
        color: 'orange.50',
        transform: 'scale(1.1)',
      },
    },
    leftArrIconBox: {
      userSelect: 'none',
      left: arrBrkP,
      borderRightRadius: 'md',
      ...arrIconBoxBaseStyles,
    },
    rightArrIconBox: {
      borderLeftRadius: 'md',
      right: arrBrkP,
      ...arrIconBoxBaseStyles,
    },
  }
}
