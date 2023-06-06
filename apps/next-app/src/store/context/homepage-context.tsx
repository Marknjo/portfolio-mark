import {
  ReactNode,
  createContext,
  useCallback,
  useContext,
  useMemo,
  useReducer,
} from 'react'
import {
  EHomePageSections,
  ESiteNavNames,
  EWorkAvailability,
  IHomePageData,
} from '@data/types'

/// @TODO: add socialMedia links
export interface IHomePageContext extends IHomePageData {
  hideSection: (isShown: boolean, page: EHomePageSections) => void
  changeWorkAvailabilityStatus: (status: EWorkAvailability) => void
}

enum EHomePageReducerFnActions {
  HIDE_SECTION = 'hide section',
  CHANGE_AVAILABILITY_STATUS = 'change work availability status',
}

interface IHomePageReducerFnAction {
  type: EHomePageReducerFnActions
  payload: {
    value:
      | { [key: string]: string | boolean | number | string }
      | boolean
      | number
      | string
  }
}

const initialData: IHomePageContext = {
  data: {
    favProject: [],
    pickedProjects: [],
    navData: [],
  },
  meta: {
    description: 'Mark Njoroge Profile',
    tagLine: 'Building beautiful softwares',
  },
  theme: {
    colorTheme: 'orange',
    fontFamily: '',
    nav: ESiteNavNames.TOP_NAV,
  },
  content: {
    hero: {
      isShown: true,
      salutationText: '',
      headerTitleMain: '',
      headerTitleSub: '',
      headerText: '',
      moreButtonText: '',
      moreButtonLink: '',
    },
    about: {
      isShown: true,
      titleMain: '',
      titleSub: '',
      subTitle: '',
      aboutText: '',
      contactButtonText: '',
      contactButtonLink: '',
      videoLink: '',
      videoSplashImg: '',
      detailsTitle: '',
      detailsNameTitle: '',
      detailsNameText: '',
      detailsWorkAvailabilityTitle: '',
      detailsWorkAvailabilityText: EWorkAvailability.AVAILABLE,
      detailsLocationTitle: '',
      detailsLocationText: '',
      detailsSocialTitle: '',
    },
    projects: {
      isShown: true,
      titleMain: '',
      titleSub: '',
      subTitle: '',
      mainImg: '',
      mainImgAlt: '',
      viewAllButtonText: '',
      viewAllButtonLink: '',
    },
    favProject: {
      isShown: true,
      titleMain: '',
      titleSub: '',
      summaryText: '',
      moreDetailsButtonText: '',
      visitProjectButtonText: '',
    },
    skills: {
      isShown: true,
      titleMain: '',
      titleSub: '',
      subTitle: '',
      progsLangTitle: '',
      frontendTitle: '',
      backendTitle: '',
      toolsTitle: '',
      desktopMobileTitle: '',
      notesTitle: '',
      notesActiveText: '',
      notesPassiveText: '',
      notesBottomText: '',
      notesListText: '',
    },
    contact: {
      isShown: true,
      titleMain: '',
      textTitle: '',
      blogText: '',
      blogLink: '',
      contactIcon: '',
      contactText: '',
      contactNo: '',
      socialIntoText: '',
      favSocial: '',
      socialText: '',
      socialTitle: '',
    },
  },
  hideSection: (isShown, page) => ({ isShown, page }),
  changeWorkAvailabilityStatus: () => {},
}

const HomePageContext = createContext(initialData)

export const useHomePageData = () => useContext(HomePageContext)

const homePageReducerFn = (
  state: IHomePageContext,
  action: IHomePageReducerFnAction,
) => {
  switch (action.type) {
    case EHomePageReducerFnActions.HIDE_SECTION: {
      const { isShown, pageSection } = action.payload.value as {
        pageSection: keyof IHomePageContext['content']
        isShown: boolean
      }

      const changedSectionStatus = state.content[pageSection]

      /// throw some kind of error/do not update
      if (!changedSectionStatus) return state

      const foundSection = {
        ...changedSectionStatus,
        isShown,
      }

      return {
        ...state,
        content: {
          ...state.content,
          [pageSection]: foundSection,
        },
      }
    }

    case EHomePageReducerFnActions.CHANGE_AVAILABILITY_STATUS: {
      return {
        ...state,
        content: {
          ...state.content,
          about: {
            ...state.content.about,
            detailsWorkAvailabilityText: action.payload
              .value as EWorkAvailability,
          },
        },
      }
    }

    default:
      return state
  }
}

export const HomePageProvider = ({
  children,
  pageData: dbData,
}: {
  children: ReactNode
  pageData: IHomePageData
}) => {
  const [state, dispatch] = useReducer(homePageReducerFn, {
    ...initialData,
    ...dbData,
  })

  const hideSection = useCallback(
    (isShown: boolean, pageSection: EHomePageSections) => {
      dispatch({
        type: EHomePageReducerFnActions.HIDE_SECTION,
        payload: { value: { isShown, pageSection } },
      })
    },
    [],
  )

  const changeWorkAvailabilityStatus = useCallback(
    (status: EWorkAvailability) => {
      dispatch({
        type: EHomePageReducerFnActions.CHANGE_AVAILABILITY_STATUS,
        payload: { value: status },
      })
    },
    [],
  )

  const value = useMemo(
    () => ({
      ...state,
      hideSection,
      changeWorkAvailabilityStatus,
    }),
    [state, hideSection, changeWorkAvailabilityStatus],
  )

  return (
    <HomePageContext.Provider value={value}>
      {children}
    </HomePageContext.Provider>
  )
}
