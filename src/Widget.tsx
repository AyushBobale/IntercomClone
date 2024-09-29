import React from "react";

const Widget: React.FC = () => {
  const handleButtonClick = () => {
    alert("Intercom widget button clicked!");
  };

  return (
    <div
      style={{
        position: "fixed",
        bottom: "20px",
        right: "20px",
        width: "300px",
        height: "400px",
        backgroundColor: "#f1f1f1",
        borderRadius: "10px",
        boxShadow: "0px 0px 15px rgba(0,0,0,0.1)",
        padding: "20px",
      }}
    >
      <h3>Intercom Widget</h3>
      <p>This is your chat widget.</p>
      <button onClick={handleButtonClick}>Click Me</button>
    </div>
  );
};

export default Widget;
