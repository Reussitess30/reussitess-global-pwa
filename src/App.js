// src/App.js

import React from 'react';
// 1. Importez le composant d'authentification que nous venons de créer :
import Auth from './components/Auth'; 

function App() {
  return (
    // 2. Affichez le composant Auth.js
    <div className="App">
      <Auth />
    </div>
  );
}

export default App;
