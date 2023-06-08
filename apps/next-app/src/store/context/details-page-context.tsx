import { useCallbackRef } from '@chakra-ui/react'
import {
  EDetailPageSections,
  EDetailsPageImageThemes,
  ESiteNavNames,
  IProjectDetailsPageData,
} from '@data/types'
import {
  ReactNode,
  createContext,
  useContext,
  useMemo,
  useReducer,
} from 'react'

enum EDetailsPageActions {
  HIDE_SECTION = 'hide-section',
}

interface IDetailsPageContext extends IProjectDetailsPageData {
  hideSection: (isShown: boolean, pageSection: EDetailPageSections) => void
}

interface IDetailsPageAction {
  type: EDetailsPageActions
  payload: {
    value: any
  }
}

const initialContent: IDetailsPageContext = {
  data: {
    navData: [],
    projectData: null,
    relatedProjects: null,
  },
  meta: {
    description: '',
  },
  theme: {
    largeImageTheme: EDetailsPageImageThemes.OSX,
    nav: ESiteNavNames.PROJECT_DETAILS_NAV,
  },
  content: {
    hero: {
      isShown: true,
      stacksTitle: '',
      stacksButtonText: '',
      stacksButtonLink: '',
      introButtonText: '',
      introTextTitle: '',
    },
    theChallenge: {
      isShown: true,
      headerTitleMain: '',
      headerTitleSub: '',
      goalsTitle: '',
      stacksTitle: '',
    },
    gallery: {
      isShown: true,
      headerTitleMain: '',
      headerTitleSub: '',
    },
    summary: {
      isShown: true,
      headerTitleMain: '',
      headerTitleSub: '',
      challengesTitle: '',
      lessonsTitle: '',
    },
    cta: {
      isShown: true,
      headerTitle: '',
      paginationPrevText: '',
      paginationNextText: '',
    },
  },
  hideSection: (isShown, pageSection) => ({ isShown, pageSection }),
}

const DetailsPageContext = createContext(initialContent)
export const useDetailsPageData = () => useContext(DetailsPageContext)

function detailsPageReducerFn(
  state: IDetailsPageContext,
  action: IDetailsPageAction,
): IDetailsPageContext {
  switch (action.type) {
    case EDetailsPageActions.HIDE_SECTION: {
      const { isShown, pageSection } = action.payload.value as {
        pageSection: keyof IDetailsPageContext['content']
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

    default:
      return state
  }
}

export function DetailsPageProvider({
  children,
  data,
}: {
  children: ReactNode
  data: IProjectDetailsPageData
}) {
  const [state, dispatch] = useReducer(detailsPageReducerFn, {
    ...initialContent,
    ...data,
  })

  const hideSection = useCallbackRef(
    (isShown: boolean, pageSection: EDetailPageSections) => {
      dispatch({
        type: EDetailsPageActions.HIDE_SECTION,
        payload: { value: { isShown, pageSection } },
      })
    },
    [],
  )

  // prep values
  const values = useMemo(
    () => ({
      ...state,
      hideSection,
    }),
    [state, hideSection],
  )

  return (
    <DetailsPageContext.Provider value={values}>
      {children}
    </DetailsPageContext.Provider>
  )
}
