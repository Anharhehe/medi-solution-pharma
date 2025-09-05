'use client'

import { useLoading } from '../../contexts/LoadingContext'

export default function TestLoadingButton() {
  const { isLoading, setIsLoading } = useLoading()

  const handleTestLoading = () => {
    setIsLoading(true)
    // Auto hide after 3 seconds for testing
    setTimeout(() => {
      setIsLoading(false)
    }, 3000)
  }

  return (
    <div className="fixed bottom-4 right-4 z-40">
      <button
        onClick={handleTestLoading}
        disabled={isLoading}
        className="bg-blue-500 hover:bg-blue-600 disabled:bg-gray-400 text-white px-4 py-2 rounded-lg shadow-lg transition-colors"
      >
        {isLoading ? 'Loading...' : 'Test Loading'}
      </button>
    </div>
  )
}
