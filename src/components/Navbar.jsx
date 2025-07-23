import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Navbar.css";

export function Navbar({ bootcamps, onSelect, onHomeClick }) {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const handleTitleClick = () => {
    if (onSelect) onSelect(bootcamps[0].name);  
    onHomeClick(); 
    navigate("/"); 
  };

  const handleBootcampClick = (bootcamp) => {
    if (onSelect) onSelect(bootcamp.name);
    navigate(`/bootcamp/${bootcamp.path}`);
    setOpen(false);
  };

  return (
    <nav className="navbar">
      <div 
        className="navbar-title" 
        onClick={handleTitleClick} 
        style={{ cursor: "pointer" }}
      >
        The DevBall
      </div>

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
                onClick={() => handleBootcampClick(bc)}
                tabIndex={0}
                role="menuitem"
                onKeyDown={(e) => e.key === "Enter" && handleBootcampClick(bc)}
              >
                {bc.name}
              </li>
            ))}
          </ul>
        )}
      </div>
    </nav>
  );
}
