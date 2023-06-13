'use client'

import { useEffect, useState } from 'react'

export const useIsLoading = () => {
  const [isLoading, setIsLoading] = useState(true)
  useEffect(() => {
    const onPageLoad = () => {
      setIsLoading(false)
    }

    // Check if the page has already loaded
    if (document.readyState === 'complete') {
      onPageLoad()
    } else if (window) {
      window.addEventListener('load', onPageLoad)
      // Remove the event listener when component unmounts
      return () => window.removeEventListener('load', onPageLoad)
    }

    return () => {}
  }, [])

  return isLoading
}
