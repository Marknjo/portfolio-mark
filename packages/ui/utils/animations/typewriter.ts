/* eslint-disable eqeqeq */
/* eslint-disable no-plusplus */
import { RefObject } from 'react'

interface ITypewriterConfig {
  typingSpeed?: number
  nextMsgDelay?: number
  loop?: boolean
  startTypingAfter?: number
}

export type TWriter<HTMLElement> = (
  refId: RefObject<HTMLElement> | Array<RefObject<HTMLElement>>,
  messages: Array<string>,
  config?: ITypewriterConfig,
) => void

export function typewriter<T extends HTMLElement>(
  refId: RefObject<T> | Array<RefObject<T>>,
  messages: Array<string>,
  config?: ITypewriterConfig,
) {
  if (!refId) return
  let timer
  let startTypingTimer

  clearTimeout(timer)
  clearTimeout(startTypingTimer)

  const { typingSpeed, nextMsgDelay, loop, startTypingAfter } = {
    typingSpeed: 120,
    nextMsgDelay: 200,
    loop: true,
    ...config,
  }

  let charPos = 0
  let msgBuffer = ''
  let msgIndex = 0
  const typewriterIcon = '|'
  let delay
  const id = refId

  const StartTyping = () => {
    // eslint-disable-next-line prefer-const
    let currentId = Array.isArray(id) ? (id[msgIndex] as RefObject<T>) : id

    if (charPos != messages[msgIndex].length) {
      msgBuffer += messages[msgIndex].charAt(charPos)

      delay = typingSpeed
      if (currentId.current) {
        currentId.current!.innerText =
          msgBuffer +
          (charPos != messages[msgIndex].length ? typewriterIcon : '')
        currentId.current!.scrollTop = currentId.current!.scrollHeight
      }
    } else {
      delay = nextMsgDelay
      msgBuffer = ''
      charPos = -2
      if (msgIndex != messages.length - 1) {
        msgIndex++
      } else {
        msgIndex = 0
      }
    }
    charPos++

    timer = setTimeout(StartTyping, delay)

    /// for multiple refs, clear typewriter cursor at the end of message index block
    if (Array.isArray(id) && messages[msgIndex].length === charPos) {
      if (currentId.current) {
        id[msgIndex].current!.innerText = messages[msgIndex]
      }
    }

    /// clear timer
    /// for multiple refs, clear timer after all items have been typed
    if (
      !loop &&
      Array.isArray(id) &&
      messages[msgIndex].length === charPos &&
      msgIndex === id.length - 1
    ) {
      clearTimeout(timer)
    }

    /// for a single id clear timer at the end of the conversation
    if (!loop && !Array.isArray(id) && messages[msgIndex].length === charPos) {
      clearTimeout(timer)
      if (currentId.current) {
        currentId.current!.innerText = messages[msgIndex]
      }
    }
  }

  if (!startTypingAfter) StartTyping()

  if (startTypingAfter) {
    startTypingTimer = setTimeout(() => {
      StartTyping()
    }, startTypingAfter)
  }
}
