import { useState } from "react";
import { Navbar } from "./components/Navbar";
import { DialogBox } from "./components/DialogBox";
import { WelcomeScreen } from "./components/WelcomeScreen";
import "./styles/GlobalStyles.css";

export function App() {
  const [selectedRole, setSelectedRole] = useState(null);

  const bootcamps = [
    "Fullstack Web Dev",
    "Data Science",
    "AI & Machine Learning",
    "Frontend Development",
    "Backend Development",
  ];

  const [selectedBootcamp, setSelectedBootcamp] = useState(bootcamps[0]);

  const handleBootcampSelect = (bootcamp) => {
    setSelectedBootcamp(bootcamp);
  };

  if (!selectedRole) {
    return <WelcomeScreen onStart={(role) => setSelectedRole(role)} />;
  }

  return (
    <>
      <Navbar 
        bootcamps={bootcamps} 
        onSelect={handleBootcampSelect}
        onHomeClick={() => setSelectedRole(null)} 
      />
      <div className="main-content">
        <DialogBox selectedBootcamp={selectedBootcamp} />
      </div>
    </>
  );  
  
}
