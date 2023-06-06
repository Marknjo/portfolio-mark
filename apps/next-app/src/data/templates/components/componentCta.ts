import { ICtaComponentData } from '@data/types'

const ctaText = `
  Let me help you build it and grow your company. Reach me from the contact form above.

  If from Kenya, call. I also don't mind to discuss the details of your project over a cup of coffee.

  I don't mind buying it 😜.

`

export const ctaComponent: ICtaComponentData = {
  theme: {
    colorTheme: 'orange',
    fontFamily: '',
  },
  content: {
    title: 'Having a project?',
    ctaText,
    contactButtonText: 'Shoot Me 💘',
    contactButtonLink: '#contact-section',
  },
}
