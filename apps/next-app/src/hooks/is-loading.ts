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
    } else {
      document.addEventListener('load', onPageLoad)
    }

    return () => {
      document.removeEventListener('load', onPageLoad)
    }
  }, [])

  return {
    isLoading,
    setIsLoading,
  }
}
