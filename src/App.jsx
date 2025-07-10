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
      <Navbar bootcamps={bootcamps} onSelect={handleBootcampSelect} />
      <div
        style={{
          backgroundColor: "#111",
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: 16,
          paddingTop: 80,
        }}
      >
        <DialogBox selectedBootcamp={selectedBootcamp} />
      </div>
    </>
  );
}
