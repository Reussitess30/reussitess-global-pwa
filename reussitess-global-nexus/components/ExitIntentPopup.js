import { useEffect, useState } from "react";
export default function ExitIntentPopup() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const mouseHandler = e => {
      if (e.clientY <= 0) setShow(true);
    };
    window.addEventListener("mouseleave", mouseHandler);
    return () => window.removeEventListener("mouseleave", mouseHandler);
  }, []);
  if (!show) return null;
  return (
    <div className="fixed inset-0 bg-blue-900/80 flex items-center justify-center z-50">
      <div className="bg-gradient-to-br from-blue-500 to-blue-700 text-white p-6 rounded-2xl max-w-md shadow-lg border-4 border-blue-300">
        <h2 className="text-2xl mb-2 font-bold">🏆 Reussitess®</h2>
        <h3 className="mb-2">Excellence, Innovation, Succès</h3>
        <div className="mb-2">🌴 Guadeloupe Terre De Champions</div>
        <p className="mb-4">Recevez nos conseils et actualités des 14 pays, téléchargez notre application, profitez de nos avantages.</p>
        <button
          className="bg-blue-200 text-blue-700 px-5 py-2 rounded font-bold shadow-md hover:bg-blue-300 transition"
          onClick={() => setShow(false)}>
          Fermer
        </button>
      </div>
    </div>
  );
}
