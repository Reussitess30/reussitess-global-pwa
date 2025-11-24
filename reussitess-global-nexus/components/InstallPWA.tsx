import React, { useEffect, useState } from "react";

export default function InstallPWA() {
  const [showButton, setShowButton] = useState(true);

  useEffect(() => {
    function checkStandalone() {
      if (window.matchMedia("(display-mode: standalone)").matches) {
        setTimeout(() => {
          setShowButton(false);
        }, 0);
      }
    }
    checkStandalone();

    const handler = () => setShowButton(true);
    window.addEventListener("beforeinstallprompt", handler);
    return () => window.removeEventListener("beforeinstallprompt", handler);

  }, []);

  return showButton ? (
    <button
      onClick={() => window.location.reload()}
      className="btn-primary"
    >
      Installer l’application Reussitess®
    </button>
  ) : null;
}
