import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Analytics } from "@vercel/analytics/react"
import { MixpanelClient } from './lib/MixpanelClient.tsx'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MixpanelClient>
      <Analytics />
      <App />
    </MixpanelClient>
  </StrictMode>,
)
