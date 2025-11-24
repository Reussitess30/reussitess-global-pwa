import React, { useState } from "react";
const countries = [
  "France", "Guyane", "Martinique", "Guadeloupe",
  "Belgium", "Netherlands", "Sweden", "Germany",
  "Italy", "Spain", "Canada", "Australia", "Brazil", "India"
];

export default function NewsletterPays() {
  const [country, setCountry] = useState<string>(countries[0]);
  const [email, setEmail] = useState<string>('');
  const [status, setStatus] = useState<string>('');

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus('Envoi...');
    try {
      const res = await fetch('/api/newsletter', {
        method: 'POST',
        body: JSON.stringify({ email, country }),
        headers: { 'Content-Type': 'application/json' }
      });
      if (res.ok) setStatus("Inscription réussie !");
      else setStatus("Erreur ou email déjà enregistré.");
    } catch {
      setStatus("Erreur de connexion.");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="bg-blue-50 p-6 rounded-xl shadow w-full max-w-md mx-auto">
      <h3 className="text-xl font-bold mb-4 text-blue-700">Recevez la newsletter Reussitess®</h3>
      <label className="block mb-2 font-bold text-blue-600">Pays</label>
      <select value={country} onChange={e => setCountry(e.target.value)} className="mb-4 p-2 rounded w-full">
        {countries.map(c => <option key={c} value={c}>{c}</option>)}
      </select>
      <label className="block mb-2 font-bold text-blue-600">Email</label>
      <input
        type="email"
        placeholder="Votre email"
        value={email}
        onChange={e => setEmail(e.target.value)}
        required
        className="mb-4 p-2 rounded w-full"
      />
      <button className="bg-blue-700 text-white px-6 py-2 rounded font-bold hover:bg-blue-800 transition">S’inscrire</button>
      {status && <div className="mt-4 text-blue-900 font-bold">{status}</div>}
    </form>
  );
}
