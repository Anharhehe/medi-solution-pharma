'use client'

import { useEffect } from 'react'

// Declare the custom element for TypeScript
declare global {
  namespace JSX {
    interface IntrinsicElements {
      'l-cardio': {
        size?: string | number
        stroke?: string | number
        speed?: string | number
        color?: string | number
        'bg-opacity'?: string | number
      }
    }
  }
}

interface LoadingSpinnerProps {
  size?: string
  stroke?: string
  speed?: string
  color?: string
}

export default function LoadingSpinner({ 
  size = "50", 
  stroke = "4", 
  speed = "2", 
  color = "#3b82f6" 
}: LoadingSpinnerProps) {
  useEffect(() => {
    async function getLoader() {
      const { cardio } = await import('ldrs')
      cardio.register()
    }
    getLoader()
  }, [])

  return (
    <div className="fixed inset-0 bg-white/80 backdrop-blur-sm z-50 flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <l-cardio
          size={size}
          stroke={stroke}
          speed={speed}
          color={color}
        ></l-cardio>
        <p className="text-gray-600 text-sm font-medium">Loading...</p>
      </div>
    </div>
  )
}
