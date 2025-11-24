import React, { useState } from "react";
export default function MurOpportunites() {
  const [posts, setPosts] = useState([
    {u:"MarqueA",txt:"Cherche influenceur Guadeloupe",type:"Brand"},
    {u:"Marie",txt:"Equipe projet Amazon FBA",type:"Membre"},
  ]);
  const [input, setInput] = useState("");
  function addPost(e: React.FormEvent) {
    e.preventDefault();
    setPosts([...posts,{u:"Moi",txt:input,type:"Membre"}]);
    setInput("");
  }
  return (
    <div className="bg-blue-50 p-4 rounded-xl shadow-md mb-8">
      <h2 className="text-xl font-bold text-blue-700 mb-2">Mur des Opportunités</h2>
      <form onSubmit={addPost}>
        <input
          value={input} onChange={e => setInput(e.target.value)}
          className="p-2 rounded mr-2" placeholder="Propose ton projet, besoin, défi…"
        />
        <button className="px-4 py-2 bg-blue-700 text-white rounded">Poster</button>
      </form>
      <div className="mt-4">
        {posts.map((p,i)=>(
          <div key={i} className="p-3 mb-1 rounded shadow-sm bg-blue-100 flex justify-between">
            <span><b>{p.u}</b>: {p.txt}</span>
            <span className="text-xs text-blue-800">{p.type}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
