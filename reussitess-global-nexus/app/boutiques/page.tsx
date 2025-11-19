export default function Boutiques() {
  const personalStores = [
    {flag:'🇺🇸', name:'United States', link:'https://amzlink.to/az0LY0DXMG6dR'},
    {flag:'🇫🇷', name:'France', link:'https://amzlink.to/az0RLMqtXqC2d'},
    {flag:'🇮🇹', name:'Italia', link:'https://amzlink.to/az0tV67jW36S7'},
    {flag:'🇪🇸', name:'España', link:'https://amzlink.to/az085o25FtlRd'},
    {flag:'🇩🇪', name:'Deutschland', link:'https://amzlink.to/az00VtRPRGpmm'},
    {flag:'🇨🇦', name:'Canada', link:'https://amzlink.to/az0MvN3FRKKQQ'},
    {flag:'🇮🇳', name:'भारत', link:'https://amzlink.to/az0GVe8b9O7cF'},
    {flag:'🇳🇱', name:'Nederland', link:'https://amzlink.to/az0G27sb8ZVbI'},
    {flag:'🇸🇪', name:'Sverige', link:'https://amzlink.to/az0Ig0XgFkR8o'},
    {flag:'🇸🇬', name:'Singapore', link:'https://amzlink.to/az0b3TpUdq32r'},
    {flag:'🇬🇧', name:'United Kingdom', link:'https://amzlink.to/az03r8CJgliMq'},
    {flag:'🇦🇺', name:'Australia', link:'https://amzlink.to/az05kTTrYJ06L'},
    {flag:'🇧🇪', name:'België/Belgique', link:'https://amzlink.to/az08ZB76xWpGm'},
    {flag:'🇧🇷', name:'Brasil', link:'https://amzlink.to/az0ymmoCLHvyA'}
  ];
  
  const influencerStores = [
    {flag:'🇺🇸', name:'USA', link:'https://amzlink.to/az0G6w0uuYRlg'},
    {flag:'🇮🇹', name:'Italia', link:'https://amzlink.to/az0yC7BiDQmPg'},
    {flag:'🇪🇸', name:'España', link:'https://amzlink.to/az0DKsP6Zr5IL'},
    {flag:'🇩🇪', name:'Deutschland', link:'https://amzlink.to/az0PuGdrA0kgh'},
    {flag:'🇨🇦', name:'Canada', link:'https://amzlink.to/az0YFa3j2fsnv'},
    {flag:'🇮🇳', name:'India', link:'https://amzlink.to/az0Qry9pNlCkw'},
    {flag:'🇳🇱', name:'Nederland', link:'https://amzlink.to/az0v9jdbSf7Km'},
    {flag:'🇸🇪', name:'Sverige', link:'https://amzlink.to/az0Q5qEXfyqk5'},
    {flag:'🇸🇬', name:'Singapore', link:'https://amzlink.to/az05gMuq73i99'},
    {flag:'🇬🇧', name:'UK', link:'https://amzlink.to/az0VutIAPP8MY'},
    {flag:'🇦🇺', name:'Australia', link:'https://amzlink.to/az0on91nKaQvh'},
    {flag:'🇧🇪', name:'Belgique', link:'https://www.amazon.com.be/shop/influencer-fb942837'}
  ];

  return (<>
    <style>{`
      body{background:linear-gradient(135deg,#667eea 0%,#764ba2 100%);min-height:100vh;margin:0;font-family:system-ui}
      .container{max-width:1200px;margin:0 auto;padding:20px}
      h1{text-align:center;color:white;font-size:2.5em;margin-bottom:10px}
      h2{color:white;text-align:center;font-size:2em;margin:40px 0 20px}
      .shops-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(300px,1fr));gap:20px;margin-top:20px}
      .shop-item{background:white;padding:25px;border-radius:15px;box-shadow:0 4px 15px rgba(0,0,0,0.08);display:flex;align-items:center;justify-content:space-between;transition:all .3s}
      .shop-item:hover{transform:translateY(-5px);box-shadow:0 8px 25px rgba(0,0,0,0.15)}
      .shop-item.influencer{background:linear-gradient(135deg,#fff5e6 0%,#ffe6cc 100%)}
      .shop-flag{font-size:2.5em;margin-right:15px}
      .shop-item h4{margin:0;flex-grow:1;font-size:1.2em}
      .shop-link-btn{background:linear-gradient(45deg,#ff9500,#ffb84d);color:white;padding:12px 20px;border-radius:25px;text-decoration:none;font-weight:bold;white-space:nowrap}
      .shop-link-btn:hover{background:linear-gradient(45deg,#e6860a,#ff9500)}
      .influencer-btn{background:linear-gradient(45deg,#9333ea,#c084fc)}
      .influencer-btn:hover{background:linear-gradient(45deg,#7e22ce,#9333ea)}
    `}</style>
    <div className="container">
      <h1>🏆 Reussitess® Global Nexus 🏆</h1>
      <p style={{textAlign:'center',color:'white',fontSize:'1.2em'}}>26 Boutiques Amazon - 14 Pays</p>
      
      <section className="shop-list">
        <h2>🛍️ Boutiques Personnelles ({personalStores.length})</h2>
        <div className="shops-grid">
          {personalStores.map((shop, index) => (
            <div key={index} className="shop-item">
              <span className="shop-flag">{shop.flag}</span>
              <h4>{shop.name}</h4>
              <a href={shop.link} target="_blank" rel="nofollow sponsored noopener noreferrer" className="shop-link-btn">
                🛒 Visiter
              </a>
            </div>
          ))}
        </div>
      </section>

      <section className="shop-list">
        <h2>⭐ Boutiques Influenceur ({influencerStores.length})</h2>
        <div className="shops-grid">
          {influencerStores.map((shop, index) => (
            <div key={index} className="shop-item influencer">
              <span className="shop-flag">{shop.flag}</span>
              <h4>{shop.name}</h4>
              <a href={shop.link} target="_blank" rel="nofollow sponsored noopener noreferrer" className="shop-link-btn influencer-btn">
                ⭐ Visiter
              </a>
            </div>
          ))}
        </div>
      </section>
    </div>
  </>);
}
