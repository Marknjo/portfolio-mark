export enum GradientVariants {
  /* 500to800 */
  Orange500to800 = 'Orange500to800',
  Teal500to800 = 'Teal500to800',

  /* 50to800 */
  Orange50to800 = 'Orange50to800',
  Teal50to800 = 'Teal50to800',

  /* 500to600 */
  Orange500to600 = 'Orange500to600',
  Teal500to600 = 'Teal500to600',

  /* 50to600 */
  Orange50to600 = 'Orange50to600',
  Teal50to600 = 'Teal50to600',

  /* Custom 800to800 */
  OrangeCustom500To800 = 'orangeCustom',
}

export const defaultGradients = (
  variant: GradientVariants,
  deg: number = 215,
) => {
  switch (variant) {
    case GradientVariants.OrangeCustom500To800:
      return `${deg}deg, rgba(221, 107, 32, 0.8) 35.9%, rgba(123, 52, 30, 0.88) 71.67%`

    case GradientVariants.Teal500to800:
      return `linear-gradient(${deg}deg, teal.500 45%, teal.800 88%)`

    case GradientVariants.Orange50to800:
      return `linear-gradient(${deg}deg, orange.50 45%, orange.800 88%)`

    case GradientVariants.Teal50to800:
      return `linear-gradient(${deg}deg, teal.50 45%, teal.800 88%)`

    case GradientVariants.Orange500to600:
      return `linear-gradient(${deg}deg, orange.500 45%, orange.600 88%)`

    case GradientVariants.Teal500to600:
      return `linear-gradient(${deg}deg, teal.500 45%, teal.600 88%)`

    case GradientVariants.Orange50to600:
      return `linear-gradient(${deg}deg, orange.50 45%, orange.600 88%)`

    case GradientVariants.Teal50to600:
      return `linear-gradient(${deg}deg, teal.50 45%, teal.600 88%)`

    case GradientVariants.Orange500to800:
    default:
      return `linear-gradient(${deg}deg, orange.500 45%, orange.800 88%)`
  }
}

export const customGradientWithImg = (
  variant: GradientVariants,
  url?: string,
  deg: number = 221.67,
) => {
  return `linear-gradient(${defaultGradients(variant, deg)}), ${
    url && `url(images/${url})`
  }`
}
