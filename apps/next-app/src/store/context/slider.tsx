import { useDisclosure } from '@chakra-ui/react'
import {
  ReactNode,
  createContext,
  useContext,
  useMemo,
  useCallback,
  useReducer,
} from 'react'

export interface ISliderSizes {
  height: number
  width: number
}

interface ISliderContext<T> {
  curActiveSlide: number //  Tracks current active slider on click next or prev slider navigator buttons,
  isActive: boolean // Update left slider handler to inactive - prevent looping to the last slide
  isSliderOpen: boolean
  sliderItems: T[]
  isModal: boolean
  sliderSizes: ISliderSizes
  slideTitle: string
  setCurActiveSlide: (curSlide: number) => void // active slide setter
  setSlideItems: (items: T) => void
  setIsActiveSlide: (isActiveStatus: boolean) => void // active slide setter
  setSliderSizes: (sizes: ISliderSizes) => void
  setSliderIsModal: (status: boolean) => void
  setSlideTitle: (title: string) => void
  openSlider: () => void
  closeSlider: () => void
}

enum DispatchTypes {
  ADD_SLIDES = 'ADD_SLIDES',
  CUR_SLIDE = 'CUR_SLIDE', // current selected slide
  SIZES = 'SIZES', // current selected slide
  IS_MODAL = 'IS_MODAL', // current selected slide
  ACTIVE = 'ACTIVE',
  TITLE = 'TITLE',
}

interface ISliderDispatch {
  type: DispatchTypes
  payload?: { value: any }
}

const initialState: ISliderContext<any> = {
  curActiveSlide: 0,
  sliderItems: [],
  isSliderOpen: false,
  isActive: false,
  isModal: false,
  sliderSizes: { height: 0, width: 0 },
  slideTitle: '',
  setCurActiveSlide: curSlide => curSlide,
  setSlideItems: items => items,
  setIsActiveSlide: () => {},
  setSliderSizes: sizes => sizes,
  setSliderIsModal: status => status,
  setSlideTitle: title => title,
  openSlider: () => {},
  closeSlider: () => {},
}

const SliderContext = createContext(initialState)

export function useSlider<T extends object>() {
  return useContext<ISliderContext<T>>(SliderContext)
}

function sliderReducerFn<T extends Array<{}>>(
  state: ISliderContext<T>,
  actions: ISliderDispatch,
): ISliderContext<T> {
  switch (actions.type) {
    case DispatchTypes.ADD_SLIDES:
      return {
        ...state,
        sliderItems: actions.payload!.value,
      }

    case DispatchTypes.CUR_SLIDE:
      return {
        ...state,
        curActiveSlide: actions.payload!.value as number,
      }

    case DispatchTypes.ACTIVE:
      return {
        ...state,
        isActive: actions.payload!.value,
      }

    case DispatchTypes.SIZES:
      return {
        ...state,
        sliderSizes: actions.payload!.value,
      }

    case DispatchTypes.IS_MODAL:
      return {
        ...state,
        isModal: actions.payload!.value,
      }

    case DispatchTypes.TITLE:
      return {
        ...state,
        slideTitle: actions.payload!.value,
      }

    default:
      return state
  }
}

export function SliderProvider<T>({ children }: { children: ReactNode }) {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [state, dispatch] = useReducer(
    sliderReducerFn,
    initialState,
    () => initialState,
  )

  const setCurActiveSlide = useCallback((curSlide: number) => {
    dispatch({ type: DispatchTypes.CUR_SLIDE, payload: { value: curSlide } })
  }, [])

  const setSlideItems = useCallback((items: T) => {
    dispatch({ type: DispatchTypes.ADD_SLIDES, payload: { value: items } })
  }, [])

  /// Set active and non active
  const setIsActiveSlide = useCallback((isActiveStatus: boolean) => {
    dispatch({ type: DispatchTypes.ACTIVE, payload: { value: isActiveStatus } })
  }, [])

  const setSliderSizes = useCallback((sizes: ISliderSizes) => {
    dispatch({ type: DispatchTypes.SIZES, payload: { value: sizes } })
  }, [])

  const setSliderIsModal = useCallback((isModal: boolean) => {
    dispatch({ type: DispatchTypes.IS_MODAL, payload: { value: isModal } })
  }, [])

  const setSlideTitle = useCallback((title: string) => {
    dispatch({ type: DispatchTypes.TITLE, payload: { value: title } })
  }, [])

  const openSlider = useMemo(() => onOpen, [onOpen])
  const closeSlider = useMemo(() => onClose, [onClose])
  const isSliderOpen = useMemo(() => isOpen, [isOpen])

  const values: ISliderContext<T> = useMemo(
    () => ({
      curActiveSlide: state.curActiveSlide,
      isActive: state.isActive,
      isModal: state.isModal,
      sliderSizes: state.sliderSizes,
      sliderItems: state.sliderItems as T[],
      slideTitle: state.slideTitle,
      setSlideItems,
      setCurActiveSlide,
      setIsActiveSlide,
      setSliderSizes,
      setSliderIsModal,
      setSlideTitle,
      openSlider,
      closeSlider,
      isSliderOpen,
    }),
    [
      state,
      setSlideItems,
      setCurActiveSlide,
      setIsActiveSlide,
      setSliderSizes,
      setSliderIsModal,
      setSlideTitle,
      openSlider,
      closeSlider,
      isSliderOpen,
    ],
  )

  return (
    <SliderContext.Provider value={values}>{children}</SliderContext.Provider>
  )
}
