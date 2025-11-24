import ChampionDuMois from "../components/ChampionDuMois";
import MurOpportunites from "../components/MurOpportunites";
// Ajoute ici l'import de chaque module compagnon

export default function HomePage() {
  return (
    <div>
      <ChampionDuMois />
      <MurOpportunites />
      {/* Ajoute ici les autres modules ! */}
      <div>Bienvenue sur Reussitess® Global Nexus</div>
    </div>
  );
}
