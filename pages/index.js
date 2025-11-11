import Head from 'next/head';
import { useState, useEffect } from 'react';

const SHOP_DATA = {
    totalShops: 26,
    totalCountries: 14,
    stores: [
        { name: "Brasil", link: "https://amzlink.to/az0ymmoCLHvyA", flag: "🇧🇷" },
        { name: "France", link: "https://amzlink.to/az0ymmoCLHvyB", flag: "🇫🇷" },
        { name: "Canada", link: "https://amzlink.to/az0ymmoCLHvyC", flag: "🇨🇦" },
        { name: "Deutschland", link: "https://amzlink.to/az0ymmoCLHvyD", flag: "🇩🇪" },
        { name: "España", link: "https://amzlink.to/az0ymmoCLHvyE", flag: "🇪🇸" },
        { name: "Italia", link: "https://amzlink.to/az0ymmoCLHvyF", flag: "🇮🇹" },
        { name: "Japan", link: "https://amzlink.to/az0ymmoCLHvyG", flag: "🇯🇵" },
        { name: "Mexico", link: "https://amzlink.to/az0ymmoCLHvyH", flag: "🇲🇽" },
        { name: "Nederland", link: "https://amzlink.to/az0ymmoCLHvyI", flag: "🇳🇱" },
        { name: "United Kingdom", link: "https://amzlink.to/az0ymmoCLHvyJ", flag: "🇬🇧" },
        { name: "United States", link: "https://amzlink.to/az0ymmoCLHvyK", flag: "🇺🇸" },
        { name: "Belgique (FR)", link: "https://www.amazon.com.be/shop/influencer-fb942837", flag: "🇧🇪" },
        { name: "België (NL)", link: "https://www.amazon.com.be/shop/influencer-fb942837", flag: "🇧🇪" },
        { name: "India", link: "https://amzlink.to/az0ymmoCLHvyL", flag: "🇮🇳" },
        { name: "Singapore", link: "https://amzlink.to/az0ymmoCLHvyM", flag: "🇸🇬" },
        { name: "Turkey", link: "https://amzlink.to/az0ymmoCLHvyN", flag: "🇹🇷" },
        { name: "Saudi Arabia", link: "https://amzlink.to/az0ymmoCLHvyO", flag: "🇸🇦" },
        { name: "UAE", link: "https://amzlink.to/az0ymmoCLHvyP", flag: "🇦🇪" },
        { name: "Egypt", link: "https://amzlink.to/az0ymmoCLHvyQ", flag: "🇪🇬" },
        { name: "Poland", link: "https://amzlink.to/az0ymmoCLHvyR", flag: "🇵🇱" },
        { name: "Australia", link: "https://amzlink.to/az0ymmoCLHvyS", flag: "🇦🇺" },
        { name: "Sweden", link: "https://amzlink.to/az0ymmoCLHvyT", flag: "🇸🇪" },
        { name: "Netherlands (2)", link: "https://amzlink.to/az0ymmoCLHvyU", flag: "🇳🇱" },
        { name: "Germany (2)", link: "https://amzlink.to/az0ymmoCLHvyV", flag: "🇩🇪" },
        { name: "Spain (2)", link: "https://amzlink.to/az0ymmoCLHvyW", flag: "🇪🇸" },
        { name: "Italy (2)", link: "https://amzlink.to/az0ymmoCLHvyX", flag: "🇮🇹" },
    ]
};

const Home = () => {
    const [stats, setStats] = useState(SHOP_DATA);
    const [isOnline, setIsOnline] = useState(true);

    useEffect(() => {
        const updateOnlineStatus = () => {
            setIsOnline(navigator.onLine);
        };
        window.addEventListener('online', updateOnlineStatus);
        window.addEventListener('offline', updateOnlineStatus);
        return () => {
            window.removeEventListener('online', updateOnlineStatus);
            window.removeEventListener('offline', updateOnlineStatus);
        };
    }, []);

    return (
        <div className="container">
            <Head>
                <title>Reussitess® Global PWA - Home</title>
                <meta name="description" content="Central Hub for Reussitess Amazon Global Shops and PWA." />
            </Head>

            <header className="header">
                <h1>Reussitess® Global Nexus</h1>
                <p className="status-indicator">
                    Statut : {isOnline ? '🟢 En ligne' : '🔴 Hors ligne (PWA)'}
                </p>
            </header>

            <section className="stats-dashboard">
                <h2>Statistiques Globales</h2>
                <div className="stats-grid">
                    <div className="stat-card">
                        <h3>{stats.totalShops}</h3>
                        <p>Boutiques Amazon</p>
                    </div>
                    <div className="stat-card">
                        <h3>{stats.totalCountries}</h3>
                        <p>Pays couverts</p>
                    </div>
                </div>
            </section>

            <section className="shop-list">
                <h2>Liste des Boutiques</h2>
                <div className="shops-grid">
                    {stats.stores.map((store, index) => (
                        <div key={index} className="shop-item">
                            <span className="shop-flag">{store.flag}</span>
                            <h4>{store.name}</h4>
                            <a 
                                href={store.link} 
                                target="_blank" 
                                rel="nofollow sponsored noopener" 
                                className="shop-link-btn"
                            >
                                Visiter
                            </a>
                        </div>
                    ))}
                </div>
            </section>

            <footer className="footer">
                <p>&copy; {new Date().getFullYear()} Reussitess® Global. Tous droits réservés.</p>
                <p>Développé avec Next.js et Workbox (PWA)</p>
            </footer>

            <style jsx global>{`
                body {
                    font-family: Arial, sans-serif;
                    background-color: #f0f2f5;
                    color: #333;
                    margin: 0;
                    padding: 0;
                }
                .container {
                    max-width: 1200px;
                    margin: 0 auto;
                    padding: 20px;
                }
                .header {
                    background: linear-gradient(135deg, #6a11cb 0%, #2575fc 100%);
                    color: white;
                    padding: 30px;
                    border-radius: 12px;
                    margin-bottom: 30px;
                    text-align: center;
                }
                .header h1 {
                    margin: 0 0 10px 0;
                    font-size: 2.5em;
                }
                .status-indicator {
                    font-size: 0.9em;
                    opacity: 0.9;
                }
                .stats-dashboard {
                    margin-bottom: 40px;
                }
                .stats-dashboard h2 {
                    text-align: center;
                    color: #4a4a4a;
                    margin-bottom: 20px;
                }
                .stats-grid {
                    display: flex;
                    justify-content: center;
                    gap: 30px;
                }
                .stat-card {
                    background-color: white;
                    padding: 20px 40px;
                    border-radius: 12px;
                    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
                    text-align: center;
                    min-width: 150px;
                }
                .stat-card h3 {
                    margin: 0;
                    font-size: 2.5em;
                    color: #2575fc;
                }
                .stat-card p {
                    margin: 5px 0 0 0;
                    font-size: 0.9em;
                    color: #666;
                }
                .shop-list h2 {
                    color: #4a4a4a;
                    margin-bottom: 20px;
                    border-bottom: 2px solid #ddd;
                    padding-bottom: 10px;
                }
                .shops-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
                    gap: 20px;
                }
                .shop-item {
                    background-color: white;
                    padding: 20px;
                    border-radius: 12px;
                    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05);
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                }
                .shop-flag {
                    font-size: 2em;
                    margin-right: 15px;
                }
                .shop-item h4 {
                    margin: 0;
                    flex-grow: 1;
                    font-size: 1.1em;
                }
                .shop-link-btn {
                    background-color: #ff9900;
                    color: white;
                    padding: 8px 15px;
                    border-radius: 8px;
                    text-decoration: none;
                    font-weight: bold;
                    transition: background-color 0.3s;
                }
                .shop-link-btn:hover {
                    background-color: #e68a00;
                }
                .footer {
                    text-align: center;
                    margin-top: 40px;
                    padding-top: 20px;
                    border-top: 1px solid #ddd;
                    font-size: 0.8em;
                    color: #777;
                }
            `}</style>
        </div>
    );
};

export default Home;
