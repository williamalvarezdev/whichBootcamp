import { useState } from "react";
import "../styles/Navbar.css"; 

export function Navbar({ bootcamps, onSelect }) {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-title">The DevBall</div>

      <div className="navbar-menu">
        <button 
          className="navbar-button" 
          onClick={() => setOpen(!open)}
          aria-haspopup="true"
          aria-expanded={open}
        >
          Bootcamps
        </button>

        {open && (
          <ul className="navbar-dropdown" role="menu">
            {bootcamps.map((bc, i) => (
              <li 
                key={i} 
                onClick={() => {
                  onSelect(bc);
                  setOpen(false);
                }}
                tabIndex={0}
                role="menuitem"
                onKeyDown={(e) => e.key === "Enter" && onSelect(bc)}
              >
                {bc}
              </li>
            ))}
          </ul>
        )}
      </div>
    </nav>
  );
}
