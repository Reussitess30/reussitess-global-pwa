import React, {useState} from "react";
export default function BotCoachIA() {
  const [msg,setMsg] = useState("");
  const [answer,setAnswer] = useState("");
  function askAI(e) {
    e.preventDefault();
    setAnswer("Ta prochaine étape : " + msg + ". Conseils IA : Sois régulier et vise l’excellence !");
  }
  return (
    <div className="bg-gray-50 p-4 rounded-xl shadow-md mb-8">
      <h2 className="text-xl font-bold mb-2 text-gray-700">Coach IA Reussitess®</h2>
      <form onSubmit={askAI}>
        <input
          value={msg} onChange={e=>setMsg(e.target.value)}
          className="p-2 rounded mr-2" placeholder="Décris ton objectif…"
        />
        <button className="px-4 py-2 bg-gray-700 text-white rounded">Demander au Coach IA</button>
      </form>
      {answer && <div className="mt-2 font-bold text-gray-900">{answer}</div>}
      <div className="mt-2 text-xs text-gray-600">Version avancée : IA avec chat complet et analyse succès.</div>
    </div>
  );
}
