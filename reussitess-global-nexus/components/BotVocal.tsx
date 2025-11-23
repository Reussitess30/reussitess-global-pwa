'use client'
import { useState, useEffect, useRef } from 'react'

interface Boutique {
  pays: string
  flag: string
  type: string
  lien: string
  langue: string
  description: string
}

export default function BotVocal() {
  const [isListening, setIsListening] = useState(false)
  const [transcript, setTranscript] = useState('')
  const [response, setResponse] = useState('')
  const [isOpen, setIsOpen] = useState(false)
  const [isSpeaking, setIsSpeaking] = useState(false)
  const recognitionRef = useRef<any>(null)

  // Base de données complète des 26 boutiques
  const boutiques: Boutique[] = [
    // Boutiques Personnelles (14)
    { pays: 'États-Unis', flag: '🇺🇸', type: 'Personnel', lien: 'https://www.amazon.com/shop/amourguadeloupe', langue: 'en', description: 'Boutique Amazon USA avec produits soigneusement sélectionnés' },
    { pays: 'France', flag: '🇫🇷', type: 'Personnel', lien: 'https://www.amazon.fr/shop/amourguadeloupe', langue: 'fr', description: 'Boutique Amazon France avec une sélection premium' },
    { pays: 'Italie', flag: '🇮🇹', type: 'Personnel', lien: 'https://www.amazon.it/shop/amourguadeloupe', langue: 'it', description: 'Negozio Amazon Italia con prodotti selezionati' },
    { pays: 'Espagne', flag: '🇪🇸', type: 'Personnel', lien: 'https://www.amazon.es/shop/amourguadeloupe', langue: 'es', description: 'Tienda Amazon España con productos cuidadosamente elegidos' },
    { pays: 'Allemagne', flag: '🇩🇪', type: 'Personnel', lien: 'https://www.amazon.de/shop/amourguadeloupe', langue: 'de', description: 'Amazon Shop Deutschland mit ausgewählten Produkten' },
    { pays: 'Canada', flag: '🇨🇦', type: 'Personnel', lien: 'https://www.amazon.ca/shop/amourguadeloupe', langue: 'en', description: 'Amazon Canada store with curated products' },
    { pays: 'Inde', flag: '🇮🇳', type: 'Personnel', lien: 'https://www.amazon.in/shop/amourguadeloupe', langue: 'en', description: 'Amazon India store with selected products' },
    { pays: 'Pays-Bas', flag: '🇳🇱', type: 'Personnel', lien: 'https://www.amazon.nl/shop/amourguadeloupe', langue: 'nl', description: 'Amazon Nederland winkel met geselecteerde producten' },
    { pays: 'Suède', flag: '🇸🇪', type: 'Personnel', lien: 'https://www.amazon.se/shop/amourguadeloupe', langue: 'sv', description: 'Amazon Sverige butik med utvalda produkter' },
    { pays: 'Singapour', flag: '🇸🇬', type: 'Personnel', lien: 'https://www.amazon.sg/shop/amourguadeloupe', langue: 'en', description: 'Amazon Singapore store with curated products' },
    { pays: 'Royaume-Uni', flag: '🇬🇧', type: 'Personnel', lien: 'https://www.amazon.co.uk/shop/amourguadeloupe', langue: 'en', description: 'Amazon UK shop with premium selection' },
    { pays: 'Australie', flag: '🇦🇺', type: 'Personnel', lien: 'https://www.amazon.com.au/shop/amourguadeloupe', langue: 'en', description: 'Amazon Australia store with selected products' },
    { pays: 'Belgique', flag: '🇧🇪', type: 'Personnel', lien: 'https://www.amazon.com.be/shop/amourguadeloupe', langue: 'fr', description: 'Boutique Amazon Belgique avec sélection premium' },
    { pays: 'Brésil', flag: '🇧🇷', type: 'Personnel', lien: 'https://www.amazon.com.br/shop/amourguadeloupe', langue: 'pt', description: 'Loja Amazon Brasil com produtos selecionados' },
    
    // Boutiques Influenceur (12)
    { pays: 'Australie', flag: '🇦🇺', type: 'Influenceur', lien: 'https://www.amazon.com.au/shop/influencer-fb942837', langue: 'en', description: 'Amazon Australia influencer store' },
    { pays: 'États-Unis', flag: '🇺🇸', type: 'Influenceur', lien: 'https://www.amazon.com/shop/influencer-fb942837', langue: 'en', description: 'Amazon USA influencer store' },
    { pays: 'Royaume-Uni', flag: '🇬🇧', type: 'Influenceur', lien: 'https://www.amazon.co.uk/shop/influencer-fb942837', langue: 'en', description: 'Amazon UK influencer shop' },
    { pays: 'Inde', flag: '🇮🇳', type: 'Influenceur', lien: 'https://www.amazon.in/shop/influencer-fb942837', langue: 'en', description: 'Amazon India influencer store' },
    { pays: 'Suède', flag: '🇸🇪', type: 'Influenceur', lien: 'https://www.amazon.se/shop/influencer-fb942837', langue: 'sv', description: 'Amazon Sverige influencer butik' },
    { pays: 'Singapour', flag: '🇸🇬', type: 'Influenceur', lien: 'https://www.amazon.sg/shop/influencer-fb942837', langue: 'en', description: 'Amazon Singapore influencer store' },
    { pays: 'Belgique', flag: '🇧🇪', type: 'Influenceur', lien: 'https://www.amazon.com.be/shop/influencer-fb942837', langue: 'fr', description: 'Boutique Amazon Belgique influenceur' },
    { pays: 'Espagne', flag: '🇪🇸', type: 'Influenceur', lien: 'https://www.amazon.es/shop/influencer-fb942837', langue: 'es', description: 'Tienda Amazon España influencer' },
    { pays: 'Allemagne', flag: '🇩🇪', type: 'Influenceur', lien: 'https://www.amazon.de/shop/influencer-fb942837', langue: 'de', description: 'Amazon Deutschland Influencer Shop' },
    { pays: 'Canada', flag: '🇨🇦', type: 'Influenceur', lien: 'https://www.amazon.ca/shop/influencer-fb942837', langue: 'en', description: 'Amazon Canada influencer store' },
    { pays: 'Pays-Bas', flag: '🇳🇱', type: 'Influenceur', lien: 'https://www.amazon.nl/shop/influencer-fb942837', langue: 'nl', description: 'Amazon Nederland influencer winkel' },
    { pays: 'Nouvelle-Zélande', flag: '🇳🇿', type: 'Influenceur', lien: 'https://www.amazon.co.nz/shop/influencer-fb942837', langue: 'en', description: 'Amazon New Zealand influencer store' },
  ]

  // Initialiser la reconnaissance vocale
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition
      
      if (SpeechRecognition) {
        recognitionRef.current = new SpeechRecognition()
        recognitionRef.current.continuous = false
        recognitionRef.current.interimResults = false
        recognitionRef.current.lang = 'fr-FR'

        recognitionRef.current.onresult = (event: any) => {
          const text = event.results[0][0].transcript
          setTranscript(text)
          handleUserInput(text)
        }

        recognitionRef.current.onend = () => {
          setIsListening(false)
        }
      }
    }
  }, [])

  // Fonction pour parler (Text-to-Speech)
  const speak = (text: string, lang: string = 'fr-FR') => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel()
      const utterance = new SpeechSynthesisUtterance(text)
      utterance.lang = lang
      utterance.rate = 0.9
      utterance.pitch = 1
      
      utterance.onstart = () => setIsSpeaking(true)
      utterance.onend = () => setIsSpeaking(false)
      
      window.speechSynthesis.speak(utterance)
    }
  }

  // Traiter l'input utilisateur
  const handleUserInput = (input: string) => {
    const lowerInput = input.toLowerCase()
    let reply = ''
    let lang = 'fr-FR'

    // Salutations
    if (lowerInput.match(/bonjour|salut|hello|hi|hola|ciao|guten tag/i)) {
      reply = "Bonjour ! Je suis votre assistant virtuel Reussitess Global Nexus. Je peux vous renseigner sur nos 26 boutiques Amazon dans 14 pays. Comment puis-je vous aider ?"
    }
    // Au revoir
    else if (lowerInput.match(/au revoir|bye|adios|ciao|tchao/i)) {
      reply = "Au revoir ! Merci de votre visite sur Reussitess Global Nexus. À bientôt !"
    }
    // Combien de boutiques
    else if (lowerInput.match(/combien|nombre|how many/i)) {
      reply = `Nous avons exactement 26 boutiques Amazon : 14 boutiques personnelles et 12 boutiques influenceur, réparties dans 14 pays sur 5 continents !`
    }
    // Liste des pays
    else if (lowerInput.match(/quels pays|pays disponibles|countries|où/i)) {
      const pays = [...new Set(boutiques.map(b => b.pays))].join(', ')
      reply = `Nos boutiques sont disponibles dans ces 14 pays : ${pays}.`
    }
    // Recherche par pays spécifique
    else if (lowerInput.match(/france|français/i)) {
      const boutiquesFr = boutiques.filter(b => b.pays === 'France')
      reply = `Nous avons ${boutiquesFr.length} boutique en France : une boutique personnelle. Voulez-vous le lien ?`
    }
    else if (lowerInput.match(/états-unis|usa|america/i)) {
      const boutiquesUS = boutiques.filter(b => b.pays === 'États-Unis')
      reply = `Nous avons ${boutiquesUS.length} boutiques aux États-Unis : une personnelle et une influenceur.`
    }
    else if (lowerInput.match(/allemagne|germany|deutsch/i)) {
      const boutiquesDE = boutiques.filter(b => b.pays === 'Allemagne')
      reply = `Nous avons ${boutiquesDE.length} boutiques en Allemagne : une personnelle et une influenceur.`
    }
    // Différence Personnel vs Influenceur
    else if (lowerInput.match(/différence|personnel|influenceur/i)) {
      reply = "Nous avons 2 types de boutiques : les boutiques Personnelles avec ma sélection premium de produits, et les boutiques Influenceur qui proposent des produits tendance. Les deux sont des boutiques Amazon officielles avec affiliation."
    }
    // Comment ça marche
    else if (lowerInput.match(/comment|fonctionne|marche|works/i)) {
      reply = "C'est très simple ! Cliquez sur une boutique, faites vos achats normalement sur Amazon, et je reçois une petite commission. Cela ne change rien pour vous, les prix restent identiques !"
    }
    // Avantages
    else if (lowerInput.match(/avantage|pourquoi|why|benefit/i)) {
      reply = "En passant par nos boutiques, vous soutenez Reussitess sans frais supplémentaires ! Vous accédez aux mêmes produits Amazon aux mêmes prix, avec la garantie et le service Amazon."
    }
    // Sécurité
    else if (lowerInput.match(/sécurisé|sûr|safe|secure/i)) {
      reply = "Absolument ! Tous nos liens sont des liens d'affiliation Amazon officiels et sécurisés. Vos achats sont 100% protégés par Amazon."
    }
    // Aide générale
    else if (lowerInput.match(/aide|help|info|information/i)) {
      reply = "Je peux vous renseigner sur : le nombre de boutiques, les pays disponibles, comment ça fonctionne, la différence entre boutiques personnelles et influenceur, ou vous donner le lien d'une boutique spécifique. Que voulez-vous savoir ?"
    }
    // Lien vers boutique
    else if (lowerInput.match(/lien|link|visiter|visit/i)) {
      reply = "Bien sûr ! Quel pays vous intéresse ? France, États-Unis, Allemagne, Espagne, Italie, ou un autre ?"
    }
    // Réponse par défaut
    else {
      reply = "Je n'ai pas bien compris. Vous pouvez me demander : combien de boutiques nous avons, quels pays sont disponibles, comment ça fonctionne, ou me dire bonjour et au revoir !"
    }

    setResponse(reply)
    speak(reply, lang)
  }

  // Démarrer/arrêter l'écoute
  const toggleListening = () => {
    if (isListening) {
      recognitionRef.current?.stop()
      setIsListening(false)
    } else {
      recognitionRef.current?.start()
      setIsListening(true)
    }
  }

  return (
    <>
      {/* Bouton flottant */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        style={{
          position: 'fixed',
          bottom: '30px',
          right: '30px',
          width: '70px',
          height: '70px',
          borderRadius: '50%',
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          border: 'none',
          color: 'white',
          fontSize: '2rem',
          cursor: 'pointer',
          boxShadow: '0 10px 30px rgba(102, 126, 234, 0.5)',
          zIndex: 1000,
          transition: 'all 0.3s ease',
          animation: isListening ? 'pulse 1s infinite' : 'none'
        }}
      >
        🤖
      </button>

      {/* Fenêtre du bot */}
      {isOpen && (
        <div style={{
          position: 'fixed',
          bottom: '120px',
          right: '30px',
          width: '400px',
          maxWidth: '90vw',
          height: '600px',
          background: 'white',
          borderRadius: '20px',
          boxShadow: '0 20px 60px rgba(0,0,0,0.3)',
          zIndex: 1000,
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden'
        }}>
          {/* Header */}
          <div style={{
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            padding: '20px',
            color: 'white',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}>
            <div>
              <h3 style={{margin: 0, fontSize: '1.2rem'}}>🤖 Assistant Reussitess</h3>
              <p style={{margin: '5px 0 0', fontSize: '0.9rem', opacity: 0.9}}>
                {isListening ? '🎤 J\'écoute...' : isSpeaking ? '🔊 Je parle...' : '💬 Posez-moi une question'}
              </p>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              style={{
                background: 'rgba(255,255,255,0.2)',
                border: 'none',
                color: 'white',
                fontSize: '1.5rem',
                cursor: 'pointer',
                borderRadius: '50%',
                width: '35px',
                height: '35px'
              }}
            >
              ✕
            </button>
          </div>

          {/* Conversation */}
          <div style={{
            flex: 1,
            padding: '20px',
            overflowY: 'auto',
            background: '#f5f5f5'
          }}>
            {transcript && (
              <div style={{
                background: '#667eea',
                color: 'white',
                padding: '12px 16px',
                borderRadius: '15px',
                marginBottom: '10px',
                maxWidth: '80%',
                marginLeft: 'auto'
              }}>
                {transcript}
              </div>
            )}
            {response && (
              <div style={{
                background: 'white',
                color: '#333',
                padding: '12px 16px',
                borderRadius: '15px',
                marginBottom: '10px',
                maxWidth: '80%',
                boxShadow: '0 2px 5px rgba(0,0,0,0.1)'
              }}>
                {response}
              </div>
            )}
            {!transcript && !response && (
              <div style={{
                textAlign: 'center',
                padding: '40px 20px',
                color: '#999'
              }}>
                <p style={{fontSize: '3rem', marginBottom: '10px'}}>👋</p>
                <p>Bonjour ! Cliquez sur le micro ci-dessous et demandez-moi :</p>
                <ul style={{textAlign: 'left', marginTop: '15px', lineHeight: '1.8'}}>
                  <li>Combien de boutiques avez-vous ?</li>
                  <li>Quels pays sont disponibles ?</li>
                  <li>Comment ça fonctionne ?</li>
                  <li>Quelle est la différence entre les boutiques ?</li>
                </ul>
              </div>
            )}
          </div>

          {/* Contrôles */}
          <div style={{
            padding: '20px',
            borderTop: '1px solid #eee',
            background: 'white'
          }}>
            <button
              onClick={toggleListening}
              style={{
                width: '100%',
                padding: '15px',
                background: isListening 
                  ? 'linear-gradient(135deg, #ef4444 0%, #dc2626 100%)'
                  : 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
                border: 'none',
                borderRadius: '12px',
                color: 'white',
                fontSize: '1.1rem',
                fontWeight: 'bold',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '10px'
              }}
            >
              {isListening ? '⏹️ Arrêter' : '🎤 Parler'}
            </button>
            
            <p style={{
              textAlign: 'center',
              marginTop: '10px',
              fontSize: '0.85rem',
              color: '#999'
            }}>
              26 boutiques • 14 pays • 5 continents
            </p>
          </div>
        </div>
      )}

      <style jsx global>{`
        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.1); }
        }
      `}</style>
    </>
  )
}
