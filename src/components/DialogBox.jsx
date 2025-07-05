export function DialogBox({ speaker, text }) {
    return (
      <div style={{ width: "90%", maxWidth: 400, margin: "20px auto" }}>
        <div style={{
          fontSize: "0.7em",
          marginBottom: 4,
          textShadow:
            "2px 2px 0 #000, -2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000"
        }}>
          {speaker}
        </div>
        <div style={{
          backgroundColor: "#003300",
          border: "4px solid #0f0",
          borderRadius: 8,
          padding: 12,
          boxShadow: "inset 2px 2px 0 #006600",
          minHeight: 80,
          maxWidth: 400,
          margin: "0 auto",
          textShadow:
            "1px 1px 0 #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000"
        }}>
          <p>{text}</p>
        </div>
      </div>
    );
  }
  