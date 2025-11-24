import React from "react";
const champions = [
  {name:"Alice",sponsor:"Nike"},
  {name:"Porinus",sponsor:"Adidas"},
  {name:"Marie",sponsor:"Reussitess"},
];
export default function WallOfFameSponsors() {
  return (
    <div className="bg-pink-50 p-4 rounded-xl shadow-md mb-8">
      <h2 className="text-xl font-bold mb-2 text-pink-700">Wall of Fame & Sponsors</h2>
      <ul>
        {champions.map((c,i)=>(
          <li key={i} className="mb-2 font-bold">
            {c.name} <span className="ml-2 bg-pink-700 text-white px-2 rounded">{c.sponsor}</span>
          </li>
        ))}
      </ul>
      <div className="mt-3 text-xs text-pink-600">Sponsors & marques peuvent soutenir des champions !</div>
    </div>
  );
}
