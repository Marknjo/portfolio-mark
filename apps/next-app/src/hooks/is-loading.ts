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
    }
  }, [])

  return isLoading
}
