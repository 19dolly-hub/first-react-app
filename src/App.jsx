// import './App.css'

// export default function App() {
//   return (
//     <main>
//       React ⚛️ + Vite ⚡ + Replit 🌀
//     </main>
//   )
// }
import React, { useState } from 'react';
import Navbar from './Navbar.jsx';
import HomeContent from './HomeContent.jsx';
import FactContent from './FactContent.jsx';

function App() {
  const [activeTab, setActiveTab] = useState('home');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="container">
      <div class="left-main" id="home">
        <Navbar activeTab={activeTab} onTabClick={handleTabClick} />
        {activeTab === 'home' && <HomeContent />}
        {activeTab === 'fact' && <FactContent />}
      </div>
       <div class="right-main">
            <div class="top-right">
                <div class="tr-left-img"></div>
                <div class="tr-right-img"></div>
            </div>
            <div class="bottom-right">
                <div class="br-left-img"></div>
                <div class="br-right-img"></div>
              </div>
        </div>
    </div>
  );
}

export default App;
