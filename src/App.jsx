import { useState } from "react";
import DialogBox from "./components/DialogBox";

export default function App() {
  const [dialog, setDialog] = useState({
    speaker: "AI Mentor",
    text: "Welcome, young trainer! Ready to find your next adventure?"
  });

  return (
    <div style={{
      backgroundColor: "#111",
      height: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      padding: 16
    }}>
      <DialogBox speaker={dialog.speaker} text={dialog.text} />
    </div>
  );
}
