import React, { useState } from "react";
const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="portfolio-header">
      <div className="container">
        <h1 className="logo">Mukesh Portfolio</h1>
        <nav className={`nav-links ${menuOpen ? "show" : ""}`}>
          <a href="home" onClick={(e) => {
            e.preventDefault();          
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
            setMenuOpen(false);
        }}>
            Home</a>
        </nav>
        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>
    </header>
  );
};

export default Header;
