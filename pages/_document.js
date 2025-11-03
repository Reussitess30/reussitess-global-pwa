import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="fr">
      <Head>
        {/* LIEN VERS LE MANIFESTE PWA */}
        <link rel="manifest" href="/manifest.json" />

        {/* Optionnel : Balise meta pour la couleur de la barre de statut sur mobile */}
        <meta name="theme-color" content="#007bff" />

        {/* Optionnel : Balises Apple pour une meilleure expérience iOS */}
        <link rel="apple-touch-icon" href="/icon-192.png" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
