import { useCallbackRef } from '@chakra-ui/react'
import {
  EDetailPageSections,
  EDetailsPageImageThemes,
  ESiteNavNames,
  IPage,
  TPageTemplateContent,
  IProjectDetailsTemplate,
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

interface IDetailsPageContext<T extends TPageTemplateContent>
  extends IProjectDetailsTemplate<T> {
  hideSection: (isShown: boolean, pageSection: EDetailPageSections) => void
  content: T
}

interface IDetailsPageAction {
  type: EDetailsPageActions
  payload: {
    value: any
  }
}

const initialContent: IDetailsPageContext<any> = {
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
  content: {},
  hideSection: (isShown, pageSection) => ({ isShown, pageSection }),
}

const DetailsPageContext = createContext(initialContent)

export function useDetailsPageData<T extends TPageTemplateContent>() {
  return useContext<IDetailsPageContext<T>>(DetailsPageContext)
}

function detailsPageReducerFn<T extends TPageTemplateContent>(
  state: IDetailsPageContext<T>,
  action: IDetailsPageAction,
): IDetailsPageContext<T> {
  switch (action.type) {
    case EDetailsPageActions.HIDE_SECTION: {
      const { isShown, pageSection } = action.payload.value as {
        pageSection: keyof IPage['content']
        isShown: boolean
      }

      const changedSectionStatus = state.content![pageSection]

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

export function DetailsPageProvider<T extends TPageTemplateContent>({
  children,
  pageData,
}: {
  children: ReactNode
  pageData: IProjectDetailsTemplate<T>
}) {
  const [state, dispatch] = useReducer(detailsPageReducerFn, {
    ...initialContent,
    ...pageData,
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
