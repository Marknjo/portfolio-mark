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
  IHomePageTemplate,
  IPage,
  ISocialLink,
  TPageTemplateContent,
} from '@data/types'

enum ESocialIconType {
  contact = 'contactSocialIcons',
  about = 'aboutSocialIcons',
}
enum EHomePageReducerFnActions {
  HIDE_SECTION = 'hide section',
  CHANGE_AVAILABILITY_STATUS = 'change work availability status',
  TOGGLE_SOCIAL_ICON = 'toggle social icon',
}

/// @TODO: add socialMedia links
export interface IHomePageContext<T extends TPageTemplateContent>
  extends IHomePageTemplate<T> {
  hideSection: (isShown: boolean, pageSection: EHomePageSections) => void
  changeWorkAvailabilityStatus: (status: EWorkAvailability) => void
  toggleSocialIcon: (icon: string, iconType: ESocialIconType) => void
  content: T
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

const initialData: IHomePageContext<any> = {
  data: {
    favProject: [],
    pickedProjects: [],
    navData: [],
    aboutSocialIcons: [],
    contactSocialIcons: [],
    techStacks: [],
  },
  meta: {
    description: 'Mark Njoroge Profile',
    tagLine: '',
  },
  theme: {
    colorTheme: 'orange',
    fontFamily: '',
    nav: ESiteNavNames.TOP_NAV,
  },
  content: {},
  hideSection: (isShown, pageSection) => ({ isShown, pageSection }),
  changeWorkAvailabilityStatus: () => {},
  toggleSocialIcon: (icon, iconType) => ({ icon, iconType }),
}

const HomePageContext = createContext(initialData)

export function useHomePageData<T extends TPageTemplateContent>() {
  return useContext<IHomePageContext<T>>(HomePageContext)
}

function homePageReducerFn<T extends TPageTemplateContent>(
  state: IHomePageContext<T>,
  action: IHomePageReducerFnAction,
) {
  switch (action.type) {
    case EHomePageReducerFnActions.HIDE_SECTION: {
      const { isShown, pageSection } = action.payload.value as {
        pageSection: keyof IPage['content']
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

    case EHomePageReducerFnActions.TOGGLE_SOCIAL_ICON: {
      const { icon, iconType } = action.payload.value as {
        icon: string
        iconType: ESocialIconType
      }

      const socialIcons = [...(state.data[iconType] as Array<ISocialLink>)]

      const foundIconIndex = socialIcons.findIndex(
        iconData => iconData.icon === icon,
      )

      /// do not update state
      if (foundIconIndex < 0) return state

      const foundIconData = socialIcons[foundIconIndex]

      socialIcons[foundIconIndex] = {
        ...foundIconData,
        isHidden: !foundIconData.isHidden,
      }

      return {
        ...state,
        data: {
          ...state.data,
          [iconType]: socialIcons,
        },
      }
    }

    default:
      return state
  }
}

export function HomePageProvider<T extends TPageTemplateContent>({
  children,
  pageData,
}: {
  children: ReactNode
  pageData: IHomePageTemplate<T>
}) {
  const [state, dispatch] = useReducer(homePageReducerFn, {
    ...initialData,
    ...pageData,
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

  const toggleSocialIcon = useCallback(
    (icon: string, iconType: ESocialIconType) =>
      dispatch({
        type: EHomePageReducerFnActions.TOGGLE_SOCIAL_ICON,
        payload: { value: { icon, iconType } },
      }),
    [],
  )

  const value = useMemo(
    () => ({
      ...state,
      hideSection,
      changeWorkAvailabilityStatus,
      toggleSocialIcon,
    }),
    [state, hideSection, changeWorkAvailabilityStatus, toggleSocialIcon],
  )

  return (
    <HomePageContext.Provider value={value}>
      {children}
    </HomePageContext.Provider>
  )
}
