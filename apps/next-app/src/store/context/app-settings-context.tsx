'use client'

import {
  EAppSettingsIsProtectedContentNames,
  EAppSettingsIsProtectedVariants,
  IAppSetting,
} from '@data/types'
import {
  ReactNode,
  createContext,
  useCallback,
  useContext,
  useMemo,
  useReducer,
} from 'react'

enum EAppSettingsActions {
  IS_PROTECTED = 'isProtected',
}

interface IAppSettingContext extends IAppSetting {
  toggleIsProtected: (
    variant: EAppSettingsIsProtectedVariants,
    contentName: EAppSettingsIsProtectedContentNames,
  ) => void
}

const initialSettingsData: IAppSettingContext = {
  data: {
    ctaConfig: {
      theme: {
        isProtected: false,
        colorTheme: '',
        fontFamily: '',
      },
      content: {
        title: '',
        ctaText: {
          text: '',
          type: 'paragraph',
          delimiter: '<--l-->',
        },
        contactButtonText: '',
        contactButtonLink: '',
      },
    },
    footerConfig: {
      data: {
        nav: [],
      },
      theme: {
        isProtected: false,
        colorTheme: '',
        fontFamily: '',
      },
      content: {
        logoText: '',
        logoImg: '',
        copyrightText: '',
      },
    },
    mainNavConfig: {
      theme: {
        isProtected: false,
      },
      content: {
        logoText: '',
        logoImg: '',
      },
    },
  },
  theme: {
    fontFamily: '',
    primaryThemeColor: '',
    accentThemeColor: '',
    darkThemeColor: '',
  },
  content: {
    tools: {
      isProtected: true,
      import: '',
      export: '',
      redirects: '',
    },
    media: {
      isProtected: true,
      allowSizing: true,
      thumbnailSize: { width: 100, height: 100, allowCrop: true },
      mediumSize: { maxW: 500, maxH: 500 },
      largeSize: { maxW: 1200, maxH: 1200 },
      imageUploadDefaultDir: 'images',
      filesUploadDefaultDir: 'files',
      organizeFiles: 'fileType',
    },
    mailingServices: {
      isProtected: true,
      mainServer: '',
      port: 300,
      login: '',
      password: '',
    },
    generalSettings: {
      isProtected: true,
      siteTitle: '',
      tagLine: '',
      adminEmail: '',
      blogBio: '',
      projectsBio: '',
    },
    google: {
      isProtected: false,
      googleId: '',
      searchConsoleConfig: '',
      googleTagsId: '',
    },
    profile: {
      isProtected: true,
      name: '',
      tagLine: '',
      bio: '',
      profileImg: '',
      cv: '',
      cvUrl: '',
    },
  },
  toggleIsProtected: (variant, contentName) => ({ variant, contentName }),
}

interface IAppSettingsReducerAction {
  type: EAppSettingsActions
  payload: {
    value: any
  }
}

const AppSettingContext = createContext(initialSettingsData)

export const useAppSettings = () => useContext(AppSettingContext)

function appSettingsReducerFn(
  state: IAppSettingContext,
  action: IAppSettingsReducerAction,
): IAppSettingContext {
  switch (action.type) {
    case EAppSettingsActions.IS_PROTECTED: {
      const { variant, contentName } = action.payload.value as {
        variant: keyof Pick<IAppSettingContext, 'data' | 'content'>
        contentName:
          | keyof IAppSettingContext['data']
          | keyof IAppSettingContext['content']
      }

      /// toggle global component isProtected status
      if (variant === EAppSettingsIsProtectedVariants.COMPONENT) {
        const keyOfData = contentName as keyof IAppSettingContext['data']

        return {
          ...state,
          data: {
            ...state.data,
            [keyOfData]: {
              ...state.data[keyOfData],
              theme: {
                isProtected: !state.data[keyOfData].theme.isProtected,
              },
            },
          },
        }
      }

      const keyOfData = contentName as keyof IAppSettingContext['content']
      return {
        ...state,
        content: {
          ...state.content,
          [keyOfData]: {
            ...state.content[keyOfData],
            isProtected: !state.content[keyOfData]?.isProtected,
          },
        },
      }
    }

    default:
      return state
  }
}

export function AppSettingsProvider({
  children,
  data,
}: {
  children: ReactNode
  data: IAppSetting
}) {
  const [state, dispatch] = useReducer(appSettingsReducerFn, {
    ...initialSettingsData,
    ...data,
  })

  const toggleIsProtected = useCallback(
    (
      variant: EAppSettingsIsProtectedVariants,
      contentName: EAppSettingsIsProtectedContentNames,
    ) =>
      dispatch({
        type: EAppSettingsActions.IS_PROTECTED,
        payload: { value: { variant, contentName } },
      }),
    [],
  )

  const values = useMemo(
    () => ({
      ...state,
      toggleIsProtected,
    }),
    [state, toggleIsProtected],
  )

  return (
    <AppSettingContext.Provider value={values}>
      {children}
    </AppSettingContext.Provider>
  )
}
