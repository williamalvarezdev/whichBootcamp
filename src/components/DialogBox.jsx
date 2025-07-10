export function DialogBox({ selectedBootcamp }) {
  return (
    <div style={{ textAlign: "center", maxWidth: "600px" }}>
      <h2>Welcome, {selectedBootcamp} adventurer!</h2>
      <p>Ask your mentor anything to begin your journey.</p>
    </div>
  );
}
