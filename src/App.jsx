import { useState } from "react";
import { DialogBox } from "./components/DialogBox";
import { DevBall } from "./components/DevBall";
import { Navbar } from "./components/Navbar";

export function App() {
  const [dialog, setDialog] = useState({
    speaker: "AI Mentor",
    text: "Welcome, young trainer! Ready to find your next adventure?"
  });

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
    setDialog({
      speaker: "AI Mentor",
      text: `You selected the "${bootcamp}" bootcamp! Ready to ask a question?`
    });
  };

  return (
    <>
      <Navbar bootcamps={bootcamps} onSelect={handleBootcampSelect} />

      <div style={{
        backgroundColor: "#111",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: 16,
        paddingTop: 80, 
      }}>

        <DevBall updateDialog={setDialog} selectedBootcamp={selectedBootcamp} />
      </div>
    </>
  );
}
