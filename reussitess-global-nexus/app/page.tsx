import InstallPWA from '../components/InstallPWA'
import BotVocal from '../components/BotVocal'

export default function Home() {
  return (
    <>
      {/* Bot Vocal Flottant */}
      <BotVocal />
      
      <div style={{
        fontFamily: 'system-ui, sans-serif',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        minHeight: '100vh',
        padding: '20px'
      }}>
        <div style={{maxWidth: '1200px', margin: '0 auto'}}>
          <header style={{
            background: 'rgba(255, 255, 255, 0.95)',
            padding: '30px',
            borderRadius: '20px',
            textAlign: 'center',
            marginBottom: '40px'
          }}>
            <h1 style={{color: '#667eea', fontSize: '2.5em', marginBottom: '10px'}}>
              🏆 Reussitess® Global Nexus 🏆
            </h1>
            <p style={{color: '#666', fontSize: '1.2em'}}>26 Boutiques Amazon dans 14 Pays</p>
            
            {/* BOUTON PWA */}
            <InstallPWA />
          </header>

          <div style={{
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            color: 'white',
            padding: '20px',
            borderRadius: '15px',
            textAlign: 'center',
            fontSize: '1.8em',
            margin: '40px 0 30px 0'
          }}>
            🛍️ Boutiques Personnelles
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '25px',
            marginBottom: '40px'
          }}>
            {[
              {flag: '🇺🇸', name: 'United States', desc: 'Discover my curated Amazon shop!', link: 'https://amzlink.to/az0LY0DXMG6dR', disclaimer: 'As an Amazon Associate, I earn from qualifying purchases.'},
              {flag: '🇫🇷', name: 'France', desc: 'Découvrez ma boutique Amazon !', link: 'https://amzlink.to/az0RLMqtXqC2d', disclaimer: 'En tant que Partenaire Amazon, je réalise un bénéfice sur les achats remplissant les conditions requises.'},
              {flag: '🇮🇹', name: 'Italia', desc: 'Scopri il mio negozio Amazon!', link: 'https://amzlink.to/az0tV67jW36S7', disclaimer: 'In qualità di Affiliato Amazon, ricevo un guadagno dagli acquisti idonei.'},
              {flag: '🇪🇸', name: 'España', desc: '¡Explora mi tienda Amazon!', link: 'https://amzlink.to/az085o25FtlRd', disclaimer: 'Como Afiliado de Amazon, obtengo ingresos por las compras adscritas que cumplen los requisitos aplicables.'},
              {flag: '🇩🇪', name: 'Deutschland', desc: 'Entdecken Sie meinen Amazon-Shop!', link: 'https://amzlink.to/az00VtRPRGpmm', disclaimer: 'Als Amazon-Partner verdiene ich an qualifizierten Verkäufen.'},
              {flag: '🇨🇦', name: 'Canada', desc: 'Explore my Amazon shop!', link: 'https://amzlink.to/az0MvN3FRKKQQ', disclaimer: 'As an Amazon Associate, I earn from qualifying purchases.'},
              {flag: '🇮🇳', name: 'भारत', desc: 'मेरी Amazon शॉप देखें!', link: 'https://amzlink.to/az0GVe8b9O7cF', disclaimer: 'एक Amazon सहयोगी के रूप में, मैं योग्य खरीदारी से कमाता हूँ।'},
              {flag: '🇳🇱', name: 'Nederland', desc: 'Ontdek mijn Amazon-winkel!', link: 'https://amzlink.to/az0G27sb8ZVbI', disclaimer: 'Als Amazon-partner verdien ik aan in aanmerking komende aankopen.'},
              {flag: '🇸🇪', name: 'Sverige', desc: 'Upptäck min butik!', link: 'https://amzlink.to/az0Ig0XgFkR8o', disclaimer: 'Som Amazon-partner tjänar jag på kvalificerade köp.'},
              {flag: '🇸🇬', name: 'Singapore', desc: 'Explore my shop!', link: 'https://amzlink.to/az0b3TpUdq32r', disclaimer: 'As an Amazon Associate, I earn from qualifying purchases.'},
              {flag: '🇬🇧', name: 'United Kingdom', desc: 'Check out my shop!', link: 'https://amzlink.to/az03r8CJgliMq', disclaimer: 'As an Amazon Associate, I earn from qualifying purchases.'},
              {flag: '🇦🇺', name: 'Australia', desc: 'Discover my store!', link: 'https://amzlink.to/az05kTTrYJ06L', disclaimer: 'As an Amazon Associate, I earn from qualifying purchases.'},
              {flag: '🇧🇪', name: 'Belgique', desc: 'Découvrez ma boutique !', link: 'https://amzlink.to/az08ZB76xWpGm', disclaimer: 'En tant que Partenaire Amazon, je réalise un bénéfice sur les achats remplissant les conditions requises.'},
              {flag: '🇧🇷', name: 'Brasil', desc: 'Conheça minha loja!', link: 'https://amzlink.to/az0ymmoCLHvyA', disclaimer: 'Como Associado da Amazon, recebo comissões por compras qualificadas.'}
            ].map((shop, i) => (
              <div key={i} style={{
                background: 'white',
                borderRadius: '15px',
                padding: '25px',
                boxShadow: '0 5px 20px rgba(0,0,0,0.1)'
              }}>
                <div style={{fontSize: '3em', marginBottom: '10px'}}>{shop.flag}</div>
                <div style={{fontSize: '1.5em', color: '#667eea', fontWeight: 'bold', marginBottom: '10px'}}>{shop.name}</div>
                <p style={{color: '#666', marginBottom: '15px', minHeight: '60px'}}>{shop.desc}</p>
                <a href={shop.link} style={{
                  display: 'inline-block',
                  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                  color: 'white',
                  padding: '12px 30px',
                  borderRadius: '25px',
                  textDecoration: 'none',
                  fontWeight: 'bold'
                }}>🛒 Visit</a>
                <p style={{fontSize: '0.85em', color: '#999', marginTop: '15px', fontStyle: 'italic', borderTop: '1px solid #eee', paddingTop: '10px'}}>{shop.disclaimer}</p>
              </div>
            ))}
          </div>

          <div style={{
            background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
            color: 'white',
            padding: '20px',
            borderRadius: '15px',
            textAlign: 'center',
            fontSize: '1.8em',
            margin: '40px 0 30px 0'
          }}>
            ⭐ Boutiques Influenceur
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '25px',
            marginBottom: '40px'
          }}>
            {[
              {flag: '🇺🇸', name: 'USA', link: 'https://amzlink.to/az0G6w0uuYRlg', disclaimer: 'As an Amazon Associate, I earn from qualifying purchases.'},
              {flag: '🇮🇹', name: 'Italia', link: 'https://amzlink.to/az0yC7BiDQmPg', disclaimer: 'In qualità di Affiliato Amazon, ricevo un guadagno dagli acquisti idonei.'},
              {flag: '🇪🇸', name: 'España', link: 'https://amzlink.to/az0DKsP6Zr5IL', disclaimer: 'Como Afiliado de Amazon, obtengo ingresos por las compras adscritas.'},
              {flag: '🇩🇪', name: 'Deutschland', link: 'https://amzlink.to/az0PuGdrA0kgh', disclaimer: 'Als Amazon-Partner verdiene ich an qualifizierten Verkäufen.'},
              {flag: '🇨🇦', name: 'Canada', link: 'https://amzlink.to/az0YFa3j2fsnv', disclaimer: 'As an Amazon Associate, I earn from qualifying purchases.'},
              {flag: '🇮🇳', name: 'India', link: 'https://amzlink.to/az0Qry9pNlCkw', disclaimer: 'As an Amazon Associate, I earn from qualifying purchases.'},
              {flag: '🇳🇱', name: 'Nederland', link: 'https://amzlink.to/az0v9jdbSf7Km', disclaimer: 'Als Amazon-partner verdien ik aan aankopen.'},
              {flag: '🇸🇪', name: 'Sverige', link: 'https://amzlink.to/az0Q5qEXfyqk5', disclaimer: 'Som Amazon-partner tjänar jag på köp.'},
              {flag: '🇸🇬', name: 'Singapore', link: 'https://amzlink.to/az05gMuq73i99', disclaimer: 'As an Amazon Associate, I earn from qualifying purchases.'},
              {flag: '🇬🇧', name: 'UK', link: 'https://amzlink.to/az0VutIAPP8MY', disclaimer: 'As an Amazon Associate, I earn from qualifying purchases.'},
              {flag: '🇦🇺', name: 'Australia', link: 'https://amzlink.to/az0on91nKaQvh', disclaimer: 'As an Amazon Associate, I earn from qualifying purchases.'},
              {flag: '🇧🇪', name: 'Belgique', link: 'https://amzlink.to/az08ZB76xWpGm', disclaimer: 'En tant que Partenaire Amazon, je réalise un bénéfice.'}
            ].map((shop, i) => (
              <div key={i} style={{
                background: 'white',
                borderRadius: '15px',
                padding: '25px',
                boxShadow: '0 5px 20px rgba(0,0,0,0.1)'
              }}>
                <div style={{fontSize: '3em', marginBottom: '10px'}}>{shop.flag}</div>
                <div style={{fontSize: '1.5em', color: '#f5576c', fontWeight: 'bold', marginBottom: '10px'}}>{shop.name}</div>
                <a href={shop.link} style={{
                  display: 'inline-block',
                  background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
                  color: 'white',
                  padding: '12px 30px',
                  borderRadius: '25px',
                  textDecoration: 'none',
                  fontWeight: 'bold'
                }}>⭐ Visit</a>
                <p style={{fontSize: '0.85em', color: '#999', marginTop: '15px', fontStyle: 'italic', borderTop: '1px solid #eee', paddingTop: '10px'}}>{shop.disclaimer}</p>
              </div>
            ))}
          </div>

          <footer style={{
            background: 'rgba(255, 255, 255, 0.95)',
            padding: '30px',
            borderRadius: '20px',
            textAlign: 'center',
            marginTop: '50px'
          }}>
            <p>© 2025 Reussitess® Global Nexus</p>
          </footer>
        </div>
      </div>
    </>
  );
}
