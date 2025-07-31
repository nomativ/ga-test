
import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [isGAConnected, setIsGAConnected] = useState(false)

  useEffect(() => {
    // Check if Google Analytics is loaded and working
    const checkGoogleAnalytics = () => {
      if (typeof window !== 'undefined' && window.gtag) {
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
      <div className="flex items-center gap-2">
        <div className={`w-3 h-3 rounded-full ${isGAConnected ? 'bg-green-500' : 'bg-red-500'}`}></div>
        <p> hi, if this light is green, ga is connected </p>
      </div>
    </>
  )
}

export default App
