import React, {useState} from "react";
export default function VideoTestimonialsWall() {
  const [videos] = useState([
    {user:"Alice",url:"https://www.youtube.com/embed/zpOULjyy-n8?rel=0"},
    {user:"Porinus",url:"https://www.youtube.com/embed/zpOULjyy-n8?rel=0"},
  ]);
  return (
    <div className="bg-red-50 p-4 rounded-xl shadow-md mb-8">
      <h2 className="text-xl font-bold mb-2 text-red-700">Mur Vidéo Témoignages</h2>
      <div className="grid grid-cols-1 gap-5">
        {videos.map((v,i)=>(
          <div key={i} className="mb-2 rounded shadow p-2 bg-red-100">
            <span className="font-bold text-red-800">{v.user}</span>
            <iframe className="mt-2 w-full h-48" src={v.url} allow="autoplay; encrypted-media" frameBorder="0" allowFullScreen></iframe>
          </div>
        ))}
      </div>
      <div className="mt-3 text-xs text-red-600">Dépose ta vidéo, IA fera le montage dès la version premium !</div>
    </div>
  );
}
