import React from "react";
const badges = [
  {name:"Champion Or",desc:"Attribué aux Top Champions",nft:true},
  {name:"Influenceur Bleu",desc:"Marque la progression",nft:true},
];
export default function NFTBadges() {
  return (
    <div className="bg-indigo-50 p-4 rounded-xl shadow-md mb-8">
      <h2 className="text-xl font-bold mb-2 text-indigo-700">NFT Badges d’Excellence</h2>
      <ul>
        {badges.map((b,i)=>(
          <li key={i} className="mb-2 font-bold">{b.name} <span className="px-2 ml-2 bg-indigo-700 text-white rounded">{b.nft?"NFT":""}</span><br /><span className="text-xs text-indigo-600">{b.desc}</span></li>
        ))}
      </ul>
      <div className="mt-3 text-indigo-600 text-xs">Chaque badge peut être échangé, vendu, sponsorisé !</div>
    </div>
  );
}
