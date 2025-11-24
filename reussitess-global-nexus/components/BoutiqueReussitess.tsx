import React from "react";
export default function BoutiqueReussitess() {
  return (
    <div className="bg-orange-50 p-4 rounded-xl shadow-md mb-8">
      <h2 className="text-xl font-bold mb-2 text-orange-700">Boutique Reussitess®</h2>
      <ul>
        <li className="mb-2">Livre “Champion Guadeloupe” <span className="ml-2 text-orange-800">14,99 €</span> <button className="bg-orange-700 text-white px-3 py-1 rounded">Acheter</button></li>
        <li className="mb-2">Coaching Amazon <span className="ml-2 text-orange-800">49,90 €</span> <button className="bg-orange-700 text-white px-3 py-1 rounded">Réserver</button></li>
      </ul>
      <div className="mt-2 text-xs text-orange-600">Connecteur Amazon FBA/Shopify/Gumroad à compléter !</div>
    </div>
  );
}
