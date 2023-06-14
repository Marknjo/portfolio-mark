/* eslint-disable no-nested-ternary */
import { StyleProps, SystemStyleObject, ThemeOverride } from '@chakra-ui/react'

export enum BgVariant {
  Orange600to50 = 'orange600to50',
  Orange600to500 = 'orange600to500',
  Orange800to500 = 'orange800to500',

  /// Teal gradient
  Teal600to50 = 'teal600to50',
  Teal600to500 = 'teal600to500',
  Teal800to500 = 'teal800to500',
}

const tittleStyles = (
  size: string,
  color: string = 'orange',
  isDark: boolean = false,
) => {
  const styleMode = isDark ? ['-light', 50, 100] : ['', 900, 800]

  return {
    [`${size}-lg${styleMode[0]}`]: {
      color: `${color}.${styleMode[1]}`,
    },
    [`${size}-sub${styleMode[0]}`]: {
      color: `${color}.${styleMode[2]}`,
    },
  }
}

/// --> Gradient to left
export enum GradientLayerStyles {
  GrdLOrange600to50WithBorders = 'grdL-orange600to50-with-borders',
  GrdLOrange600to500WithBorders = 'grdL-orange600to500-with-borders',
  GrdLOrange800to500WithBorders = 'grdL-orange800to500-with-borders',
  ///
  GrdLOrange600to50WithoutBorders = 'grdL-orange600to50-without-borders',
  GrdLOrange600to500WithoutBorders = 'grdL-orange600to500-without-borders',
  GrdLOrange800to500WithoutBorders = 'grdL-orange800to500-without-borders',

  ///
  GrdLTeal600to50WithBorders = 'grdL-teal600to50-with-borders',
  GrdLTeal600to500WithBorders = 'grdL-teal600to500-with-borders',
  GrdLTeal800to500WithBorders = 'grdL-teal800to500-with-borders',
  ///
  GrdLTeal600to50WithoutBorders = 'grdL-teal600to50-without-borders',
  GrdLTeal600to500WithoutBorders = 'grdL-teal600to500-without-borders',
  GrdLTeal800to500WithoutBorders = 'grdL-teal800to500-without-borders',
  ///
  GrdROrange600to50WithBorders = 'grdR-orange600to50-with-borders',
  GrdROrange600to500WithBorders = 'grdR-orange600to500-with-borders',
  GrdROrange800to500WithBorders = 'grdR-orange800to500-with-borders',
  ///
  GrdROrange600to50WithoutBorders = 'grdR-orange600to50-without-borders',
  GrdROrange600to500WithoutBorders = 'grdR-orange600to500-without-borders',
  GrdROrange800to500WithoutBorders = 'grdR-orange800to500-without-borders',
  ///
  GrdRTeal600to50WithBorders = 'grdR-teal600to50-with-borders',
  GrdRTeal600to500WithBorders = 'grdR-teal600to500-with-borders',
  GrdRTeal800to500WithBorders = 'grdR-teal800to500-with-borders',
  ///
  GrdRTeal600to50WithoutBorders = 'grdR-teal600to50-without-borders',
  GrdRTeal600to500WithoutBorders = 'grdR-teal600to500-without-borders',
  GrdRTeal800to500WithoutBorders = 'grdR-teal800to500-without-borders',
}

const bgGradientFactory = (
  bgVariant: BgVariant = BgVariant.Orange600to500,
  direction: 'to-r' | 'to-l' = 'to-r',
  boarders: boolean = false,
) => {
  const orange500Border: StyleProps = {
    borderTop: '1px solid',
    borderTopColor: 'orange.400',
    borderBottom: '1px solid',
    borderBottomColor: 'orange.400',
  }

  const teal500Border: StyleProps = {
    borderTop: '1px solid',
    borderTopColor: 'orange.400',
    borderBottom: '1px solid',
    borderBottomColor: 'orange.400',
  }

  const layerName = `grd${direction
    .split('-')[1]
    .toLocaleUpperCase()}-${bgVariant}-${
    boarders ? 'with-borders' : 'without-borders'
  }`

  const hasBoarder =
    boarders && (BgVariant.Orange600to500 || BgVariant.Orange800to500)
      ? orange500Border
      : boarders && BgVariant.Orange600to500
      ? teal500Border
      : {}

  let bgDefaults: SystemStyleObject = hasBoarder

  switch (bgVariant) {
    case BgVariant.Orange800to500:
      bgDefaults = {
        ...bgDefaults,
        bgGradient: `linear(${direction}, orange.800 0, orange.800 60%, orange.500 90%, orange.500)`,
        color: 'orange.50',
      }
      break

    case BgVariant.Orange600to500:
      bgDefaults = {
        ...bgDefaults,
        bgGradient: `linear(${direction}, orange.600 0, orange.600 60%, orange.500 90%, orange.500)`,
        color: 'orange.50',
      }
      break

    case BgVariant.Teal600to50:
      bgDefaults = {
        ...bgDefaults,
        bgGradient: `linear(${direction}, teal.600 0, teal.600 60%, teal.50 90%)`,
        color: 'teal.50',
      }
      break

    case BgVariant.Teal600to500:
      bgDefaults = {
        ...bgDefaults,
        bgGradient: `linear(${direction}, teal.600 0, teal.600 60%, teal.500 90%)`,
        color: 'teal.50',
      }
      break

    case BgVariant.Teal800to500:
      bgDefaults = {
        ...bgDefaults,
        bgGradient: `linear(${direction}, teal.800 0, teal.800 60%, teal.500 90%, teal.500)`,
        color: 'teal.50',
      }
      break

    default:
      bgDefaults = {
        ...bgDefaults,
        bgGradient: `linear(${direction}, orange.600 0, orange.600 60%, orange.50 90%, orange.50)`,
        color: 'orange.50',
      }
      break
  }

  return {
    [layerName]: bgDefaults,
  }
}

export const layerStyles: ThemeOverride['layerStyles'] = {
  /* Orange Title */
  ...tittleStyles('h1'),
  ...tittleStyles('h1', 'orange', true),
  ...tittleStyles('h2'),
  ...tittleStyles('h2', 'orange', true),

  /* Teal Title */
  ...tittleStyles('h1-teal', 'teal'),
  ...tittleStyles('h1-teal', 'teal', true),
  ...tittleStyles('h2-teal', 'teal'),
  ...tittleStyles('h2-teal', 'teal', true),

  /* Gradients styles */
  /// -->  Orange Gradient to left
  // grdL-orange600to50-with-borders
  ...bgGradientFactory(BgVariant.Orange600to50, 'to-l', true),
  // grdL-orange600to500-with-borders
  ...bgGradientFactory(BgVariant.Orange600to500, 'to-l', true),
  // grdL-orange800to500-with-borders
  ...bgGradientFactory(BgVariant.Orange800to500, 'to-l', true),

  // grdL-orange600to50-without-borders
  ...bgGradientFactory(BgVariant.Orange600to50, 'to-l'),
  // grdL-orange600to500-without-borders
  ...bgGradientFactory(BgVariant.Orange600to500, 'to-l'),
  // grdL-orange800to500-without-borders
  ...bgGradientFactory(BgVariant.Orange800to500, 'to-l'),

  /// -->  Orange Gradient to right
  // grdR-orange600to50-with-borders
  ...bgGradientFactory(BgVariant.Orange600to50, 'to-r', true),
  // grdR-orange600to500-with-borders
  ...bgGradientFactory(BgVariant.Orange600to500, 'to-r', true),
  // grdL-teal800to500-with-borders
  ...bgGradientFactory(BgVariant.Orange800to500, 'to-r', true),

  /// --> Teal to right
  // grdL-teal600to50-without-borders
  ...bgGradientFactory(BgVariant.Orange600to50, 'to-r'),
  // grdL-teal600to500-without-borders
  ...bgGradientFactory(BgVariant.Orange600to500, 'to-r'),
  // grdL-orange800to500-without-borders
  ...bgGradientFactory(BgVariant.Orange800to500, 'to-r'),

  /// TEALS
  /// -->  Teal Gradient to left
  // grdL-Teal600to50-with-borders
  ...bgGradientFactory(BgVariant.Teal600to50, 'to-l', true),
  // grdL-Teal600to500-with-borders
  ...bgGradientFactory(BgVariant.Teal600to500, 'to-l', true),
  // grdL-Teal800to500-with-borders
  ...bgGradientFactory(BgVariant.Teal800to500, 'to-l', true),

  // grdL-Teal600to50-without-borders
  ...bgGradientFactory(BgVariant.Teal600to50, 'to-l'),
  // grdL-Teal600to500-without-borders
  ...bgGradientFactory(BgVariant.Teal600to500, 'to-l'),
  // grdL-Teal800to500-without-borders
  ...bgGradientFactory(BgVariant.Teal800to500, 'to-l'),

  /// -->  Teal Gradient to right
  // grdR-Teal600to50-with-borders
  ...bgGradientFactory(BgVariant.Teal600to50, 'to-r', true),
  // grdR-Teal600to500-with-borders
  ...bgGradientFactory(BgVariant.Teal600to500, 'to-r', true),
  // grdL-teal800to500-with-borders
  ...bgGradientFactory(BgVariant.Teal800to500, 'to-r', true),

  /// --> Teal to right
  // grdL-teal600to50-without-borders
  ...bgGradientFactory(BgVariant.Teal600to50, 'to-r'),
  // grdL-teal600to500-without-borders
  ...bgGradientFactory(BgVariant.Teal600to500, 'to-r'),
  // grdL-Teal800to500-without-borders
  ...bgGradientFactory(BgVariant.Teal800to500, 'to-r'),

  /// Other definitions
  'para-default': {
    color: 'gray.800',
  },
  'para-default-inverted': {
    color: 'gray.50',
  },
}
