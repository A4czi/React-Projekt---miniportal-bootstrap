import React, { useEffect, useState } from "react";

export default function ButtonMsg() {
  const [name, setName] = useState("");

  useEffect(() => {
    const savedName = localStorage.getItem("username");
    if (savedName) setName(savedName);
  }, []);

  const handleClick = () => {
    const userName = prompt("Jak masz na imię?");
    if (userName) {
      localStorage.setItem("username", userName);
      setName(userName);
    }
  };

  return (
    <div className="welcome-box">
      <button className="btn" onClick={handleClick}>Przedstaw się</button>

      {name && <p className="welcome-text">Witaj ponownie, {name}!</p>}
    </div>
  );
}
