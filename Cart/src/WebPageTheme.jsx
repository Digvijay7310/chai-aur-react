import { useState, useEffect } from "react";

function WebPageTheme() {
  const [theme, setTheme] = useState(false);

  let toggleTheme = () => {
    setTheme((prevtheme) => !prevtheme);
  };

  useEffect(() => {
    if (theme) {
      document.body.style.backgroundColor = "#000";
      document.body.style.color = "#fff";
    } else {
      document.body.style.backgroundColor = "#fff";
      document.body.style.color = "#000";
    }
  }, [theme]);
  return (
    <div style={{ padding: "20px" }}>
      <p>Theme will change the color of entire webpage</p>
      <h4>Select theme: {theme ? "Dark Mode" : "Light Mode"}</h4>
      <button onClick={toggleTheme}>Toggle {theme ? "Light" : "Dark"}</button>
    </div>
  );
}

export default WebPageTheme;
