import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { WelcomeScreen } from "./components/WelcomeScreen";
import { DialogBox } from "./components/DialogBox";
import { IA } from "./pages/IA";
import { Frontend } from "./pages/Frontend";
import "./styles/GlobalStyles.css";

export function App() {
  const [selectedRole, setSelectedRole] = useState(null);

  const bootcamps = [
    { name: "AI & Machine Learning", path: "ia" },
    { name: "Backend Development", path: "backend" },
    { name: "Cybersecurity", path: "cybersecurity" },
    { name: "Data Engineering", path: "data-engineering" },
    { name: "Data Science", path: "data-science" },
    { name: "Frontend Development", path: "frontend" },
    { name: "Fullstack Web Dev", path: "fullstack" },
    { name: "Mobile App Development", path: "mobile" },
    { name: "UI/UX Design", path: "uiux" },
  ];

  return (
    <Router>
      {!selectedRole ? (
        <WelcomeScreen onStart={(role) => setSelectedRole(role)} />
      ) : (
        <>
          <Navbar
            bootcamps={bootcamps}
            onHomeClick={() => setSelectedRole(null)}
          />
          <div className="main-content">
            <Routes>
              <Route path="/" element={<DialogBox />} />
              <Route path="/bootcamp/ia" element={<IA />} />
              <Route path="/bootcamp/frontend" element={<Frontend />} />
            </Routes>
          </div>
        </>
      )}
    </Router>
  );
}
