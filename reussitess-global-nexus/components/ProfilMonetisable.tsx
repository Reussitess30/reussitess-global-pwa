import React, {useState} from "react";
export default function ProfilMonetisable() {
  const [tips, setTips] = useState(0);
  function sendTip() {setTips(v => v+1);}
  return (
    <div className="bg-green-50 p-4 rounded-xl shadow-md">
      <h2 className="text-xl font-bold mb-2 text-green-700">Mon profil influenceur monétisable</h2>
      <div className="mb-2">Publications, audience, booking, offres directes marques…</div>
      <button className="bg-green-700 text-white px-4 py-2 rounded" onClick={sendTip}>
        Envoyer un tip (gagner +1 €)
      </button>
      <div className="mt-2 font-bold text-green-900">Tips reçus : {tips} €</div>
      <div className="mt-2 text-xs text-green-600">Module booking/partenariat à développer (marques, pubs...)</div>
    </div>
  );
}
