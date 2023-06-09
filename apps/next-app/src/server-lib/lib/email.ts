'use server'

/* eslint-disable class-methods-use-this */

/* eslint-disable consistent-return */

// @ts-ignore

/**
 * Send Email Feature with Nodemon
 *
 * -> constructor
 *
 * -> _buildTransport
 *
 * -> send universal function
 *
 * -> sendWelcome
 *
 * -> sendConfirmationAccount
 *
 * -> sendPasswordReset
 */
// import path from 'path'
import { env } from 'process'
import { createTransport } from 'nodemailer'

import htmlToText, { HtmlToTextOptions } from 'html-to-text'

import Mail from 'nodemailer/lib/mailer'
import { htmlTemplateLoader } from '@server/view/email_template'

interface IEmailOptions {
  url?: string
  subject?: string
  recipient?: { email: string; name: string }
  message?: string
}

class Email {
  from: string

  to: string | boolean

  recipientName: string | boolean

  message: string | boolean

  subject: string | boolean

  url: string | boolean

  /**
   * Initialize email options
   * @param options Email constructor options
   */
  constructor(
    options: IEmailOptions = {
      recipient: { email: '', name: '' },
      url: '',
      message: 'Message',
      subject: '',
    },
    isContact?: boolean,
  ) {
    // Initialize from
    this.from = `${env.APP_USER!} <${env.APP_USER_EMAIL!}>`

    // Initialize to
    this.to = this.setToRecipient(!!isContact, options)

    // initialize user name
    this.recipientName = options.recipient
      ? options.recipient.name.split(' ').at(0)!
      : false

    // initialize message
    this.message = options.message ? options.message : false

    // Initialize subject
    this.subject = options.subject ? options.subject : false

    // Initialize url
    this.url = options.url ? options.url : false
  }

  private setToRecipient(isContact: boolean, options: IEmailOptions) {
    if (isContact) return env.APP_USER_EMAIL!
    return options.recipient ? options.recipient.email : false
  }

  /**
   * Build transport based on the environnement variable
   *
   * Use sendGrid if on production
   *
   * Use Mailtrap is on development
   */
  // eslint-disable-next-line class-methods-use-this
  private buildTransport() {
    const isNotProd = env.NODE_ENV !== 'production'
    const isNotDev = env.NODE_ENV !== 'development'

    if (isNotDev && isNotProd) return false

    // Based on production
    if (env.NODE_ENV === 'production') {
      // Send mail using sendGrid settings
      const host = env.BREVO_HOST || false
      const port = env.BREVO_PORT || false
      const user = env.BREVO_USER || false
      const pass = env.BREVO_PASS || false

      if (!user || !pass || !port || !host) return false

      return createTransport({
        /* @ts-ignore */
        host,
        port,
        auth: {
          user,
          pass,
        },
      })
    }

    /// check for dev env
    const host = env.ETHEREAL_HOST || false
    const port = env.ETHEREAL_PORT || false
    const user = env.ETHEREAL_USER || false
    const pass = env.ETHEREAL_PASS || false

    if (!user || !pass || !port || !host) return false

    // Based on development
    // use ethereal/mailtrap for testing
    return createTransport({
      /* @ts-ignore */
      host,
      port,
      auth: {
        user,
        pass,
      },
    })
  }

  /**
   * Send email
   * @param subject Default email subject
   * @param template Template name for pug html
   */
  async send(subject: string) {
    const transport = this.buildTransport()

    if (!transport) return

    /// load local email template from a file
    const html = htmlTemplateLoader(
      this.recipientName as string,
      this.to as string,
      this.message as string,
    )

    // Prep Options
    const mailOptions = {
      from: this.from,
      to: this.to,
      subject,
      html,
      ...(this.message
        ? { text: this.message }
        : { text: htmlToText.compile(html as HtmlToTextOptions) }),
    }

    // Send Email
    await transport.sendMail(mailOptions as Mail.Options)
  }

  /**
   * Send a welcome message
   * @returns Email Instance of This class
   */
  async sendWelcomeMessage() {
    // set subject
    const setSubject = this.subject
      ? (this.subject as string)
      : 'Welcome to Mark Njoroge family 🤗🤗🤗'

    await this.send(setSubject)
    return this
  }

  /**
   * Send a email confirmation message
   * @returns Email Instance of This class
   */
  async sendConfirmAccount() {
    // set subject
    const setSubject = this.subject
      ? (this.subject as string)
      : `📝📝📝 ${this.recipientName} please confirm your account!`

    await this.send(setSubject)
    return this
  }

  /**
   * Send a email confirmation message
   * @returns Email Instance of This class
   */
  async sendPasswordReset() {
    // set subject
    const setSubject = this.subject
      ? (this.subject as string)
      : 'Account Password Reset Request (⏰ expires in 10 minutes)'

    await this.send(setSubject)
    return this
  }

  /**
   * Send account confirmation message
   * @returns Email Instance of This class
   */
  async sendAccountConfirmed() {
    // set subject
    const setSubject = this.subject
      ? (this.subject as string)
      : '😊😊😊 We are so thrilled you have confirmed your account'

    await this.send(setSubject)
    return this
  }

  async contactMe(topic: string) {
    const setSubject = `New Message from ${this.recipientName} about (${topic})`

    await this.send(setSubject)
    return this
  }
}

// Export
export default Email
