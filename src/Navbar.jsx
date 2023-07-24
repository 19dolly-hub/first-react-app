import React from 'react';

function Navbar({ activeTab, onTabClick }) {
  return (
    <nav>
      <div className="right-nav">
        {/* SVG code */  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="25px"><path fill="royalblue" d="M12 3.09698L7.05025 8.04673C4.31658 10.7804 4.31658 15.2126 7.05025 17.9462C9.78392 20.6799 14.2161 20.6799 16.9497 17.9462C19.6834 15.2126 19.6834 10.7804 16.9497 8.04673L12 3.09698ZM12 0.268555L18.364 6.63252C21.8787 10.1472 21.8787 15.8457 18.364 19.3604C14.8492 22.8752 9.15076 22.8752 5.63604 19.3604C2.12132 15.8457 2.12132 10.1472 5.63604 6.63252L12 0.268555Z"></path>
                    </svg>  }
      </div>
      <div className="left-nav">
        <a
          href="#home"
          className={activeTab === 'home' ? 'tab-active' : ''}
          onClick={() => onTabClick('home')}
        >
          Home
        </a>
        <a
          href="#fact"
          className={activeTab === 'fact' ? 'tab-active' : ''}
          onClick={() => onTabClick('fact')}
        >
          Fact
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
