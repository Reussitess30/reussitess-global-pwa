import ExitIntentPopup from "@/components/ExitIntentPopup";
import NewsletterPays from "@/components/NewsletterPays";
export default function HomePage() {
  return (
    <div>
      <div className="hero banner-excellence">
        <h1>Reussitess® Global Nexus - Excellence, Innovation & Succès</h1>
        <p>🌴 Guadeloupe Terre De Champions - 14 pays Amazon, +26 boutiques, 5 continents</p>
      </div>
      <section className="main-content p-4">
        <NewsletterPays />
      </section>
      <ExitIntentPopup />
    </div>
  );
}
