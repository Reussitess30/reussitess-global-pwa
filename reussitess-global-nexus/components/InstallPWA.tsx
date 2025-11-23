'use client'
import { useEffect, useState } from 'react'

export default function InstallPWA() {
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null)
  const [showButton, setShowButton] = useState(false)

  useEffect(() => {
    const handler = (e: any) => {
      e.preventDefault()
      setDeferredPrompt(e)
      setShowButton(true)
    }

    window.addEventListener('beforeinstallprompt', handler)

    if (window.matchMedia('(display-mode: standalone)').matches) {
      setShowButton(false)
    }

    return () => window.removeEventListener('beforeinstallprompt', handler)
  }, [])

  const handleInstall = async () => {
    if (!deferredPrompt) return

    deferredPrompt.prompt()
    const { outcome } = await deferredPrompt.userChoice
    
    if (outcome === 'accepted') {
      console.log('✅ PWA installée')
    }
    
    setDeferredPrompt(null)
    setShowButton(false)
  }

  if (!showButton) return null

  return (
    <button
      onClick={handleInstall}
      style={{
        display: 'inline-block',
        background: 'linear-gradient(135deg, #10b981, #3b82f6)',
        color: 'white',
        padding: '1.2rem 2.5rem',
        borderRadius: '25px',
        border: 'none',
        fontSize: '1.1rem',
        fontWeight: 'bold',
        cursor: 'pointer',
        boxShadow: '0 10px 30px rgba(16, 185, 129, 0.4)',
        transition: 'all 0.3s ease',
        margin: '20px 0'
      }}
      onMouseOver={(e) => {
        e.currentTarget.style.transform = 'translateY(-3px)'
        e.currentTarget.style.boxShadow = '0 15px 40px rgba(16, 185, 129, 0.6)'
      }}
      onMouseOut={(e) => {
        e.currentTarget.style.transform = 'translateY(0)'
        e.currentTarget.style.boxShadow = '0 10px 30px rgba(16, 185, 129, 0.4)'
      }}
    >
      📥 Installez notre app pour un accès hors ligne
    </button>
  )
}
