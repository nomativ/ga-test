import { useState, useEffect } from 'react'
import './App.css'

declare global {
  interface Window {
    gtag: (...args: any[]) => void;
  }
}

function App() {
  const [isGAConnected, setIsGAConnected] = useState(false)
  const [count, setCount] = useState(0)

  useEffect(() => {
    // Check if Google Analytics is loaded and working
    const checkGoogleAnalytics = () => {
      if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
        setIsGAConnected(true)
      } else {
        setIsGAConnected(false)
      }
    }

    checkGoogleAnalytics()

    // Recheck periodically in case GA loads later
    const interval = setInterval(checkGoogleAnalytics, 1000)

    return () => clearInterval(interval)
  }, [])

  return (
    <>
      <div className={`flex items-center gap-2 border ${isGAConnected ? 'border-green-300' : 'border-red-300'} py-4 px-5 rounded-full`}>
        <div className={`w-3 h-3 rounded-full ${isGAConnected ? 'bg-green-500' : 'bg-red-500'}`}></div>
        <p> hi, if this light is green, ga is installed</p>
      </div>
      <div className="mt-4">
        <button
          onClick={() => setCount(count + 1)}
        >
          Count: {count}
        </button>
      </div>
    </>
  )
}

export default App
