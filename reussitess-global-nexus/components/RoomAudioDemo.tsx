import React, {useState} from "react";
export default function RoomAudioDemo() {
  const [users, setUsers] = useState(["Porinus", "Marie", "Rony"]);
  return (
    <div className="bg-purple-50 p-4 rounded-xl shadow-md mb-8">
      <h2 className="text-xl font-bold mb-2 text-purple-700">Salle Audio Reussitess</h2>
      <div>Participants : {users.map(x => <span key={x} className="mx-1">{x}</span>)}</div>
      <button className="bg-purple-700 text-white px-4 py-2 rounded mt-3">
        Rejoindre en audio (demo)
      </button>
      <div className="mt-2 text-purple-700 text-xs">⚡ Bientôt : vrai module audio live & chat vocal</div>
    </div>
  );
}
