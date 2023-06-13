'use server'

/* eslint-disable no-useless-catch */

import Email from './email'

export interface IContactFormData {
  fullName: string
  email: string
  topic: string
  message: string
}

export async function contactMe(contactData: FormData) {
  try {
    const { fullName, email, topic, message } = Object.fromEntries(
      contactData,
    ) as unknown as IContactFormData
    /// sanitize data
    /// if form is invalid send invalid response
    /// Naive validation @TODO: Implement full validation
    if (!fullName.trim() || !email.trim() || !message.trim() || !topic) {
      throw new Error('You name/email/message/topic cannot be empty')
    }

    /// @TODO: Ensure that the sender only sends one email per 1 hour

    /// send email
    await new Email(
      {
        message,
        recipient: {
          name: fullName,
          email,
        },
      },
      true,
    ).contactMe(topic)

    /// save email to db -> JSON file @TODO: implement database & it's UI

    /// send success response
    return {
      status: 'success',
      data: {
        message: `Hi, ${fullName
          .split(' ')
          .at(
            0,
          )} your message 💌 was delivered to ${process.env.APP_USER?.split(
          ' ',
        ).at(0)} successfully 😊.`,
      },
    }
  } catch (error) {
    /// @TODO: do better error handling: send error to the client
    throw error
  }
}
