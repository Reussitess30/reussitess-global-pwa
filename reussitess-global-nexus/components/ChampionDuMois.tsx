import React, { useState } from "react";
const candidates = ["Alice", "Bob", "Carla", "Dominique"];
export default function ChampionDuMois() {
  const [vote, setVote] = useState("");
  const [success, setSuccess] = useState("");
  async function handleVote(e: React.FormEvent) {
    e.preventDefault();
    setSuccess("Vote enregistré pour " + vote + " !");
  }
  return (
    <div className="bg-yellow-50 p-4 rounded-xl shadow-md mb-8">
      <h2 className="text-2xl font-bold text-yellow-700 mb-2">Champion·ne du Mois</h2>
      <form onSubmit={handleVote}>
        <select value={vote} onChange={e => setVote(e.target.value)} className="rounded p-2 mb-2">
          <option value="">Choisir...</option>
          {candidates.map(x => <option key={x} value={x}>{x}</option>)}
        </select>
        <button className="px-4 py-2 bg-yellow-600 text-white rounded">Voter</button>
      </form>
      {success && <div className="mt-2 text-yellow-900 font-medium">{success}</div>}
      <div className="mt-4">
        <h3 className="text-lg font-bold">Profil Champion·ne :</h3>
        <div className="bg-yellow-200 p-2 rounded">Nom, bio, badge, accès spécial…<br/>À personnaliser selon le gagnant du mois !</div>
      </div>
    </div>
  );
}
