'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { useLoading } from '../../contexts/LoadingContext'

export default function NavigationEvents() {
  const pathname = usePathname()
  const { setIsLoading } = useLoading()

  useEffect(() => {
    // Hide loading when route changes complete
    setIsLoading(false)
  }, [pathname, setIsLoading])

  useEffect(() => {
    // Handle link clicks to show loading
    const handleLinkClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const link = target.closest('a')
      
      if (link && link.href && !link.href.startsWith('mailto:') && !link.href.startsWith('tel:')) {
        const url = new URL(link.href)
        const currentUrl = new URL(window.location.href)
        
        // Only show loading for internal navigation
        if (url.origin === currentUrl.origin && url.pathname !== currentUrl.pathname) {
          setIsLoading(true)
        }
      }
    }

    // Handle form submissions
    const handleFormSubmit = (e: SubmitEvent) => {
      const form = e.target as HTMLFormElement
      if (form && form.method.toLowerCase() !== 'get') {
        setIsLoading(true)
      }
    }

    // Handle browser back/forward buttons
    const handlePopState = () => {
      setIsLoading(true)
    }

    document.addEventListener('click', handleLinkClick)
    document.addEventListener('submit', handleFormSubmit)
    window.addEventListener('popstate', handlePopState)

    return () => {
      document.removeEventListener('click', handleLinkClick)
      document.removeEventListener('submit', handleFormSubmit)
      window.removeEventListener('popstate', handlePopState)
    }
  }, [setIsLoading])

  return null
}
