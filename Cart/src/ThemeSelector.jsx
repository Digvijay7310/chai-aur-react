import { useState } from "react";

export default function ThemeSelector() {
  const [theme, setTheme] = useState(false);
  let toggleTheme = () => {
    setTheme((prevtheme) => !prevtheme);
  };
  let backgroundColor, color, modeText;

  if (theme) {
    backgroundColor = "#000";
    color = "#fff";
    modeText = "Dark mode";
  } else {
    backgroundColor = "#f3f4f4";
    color = "#000";
    modeText = "Light Mode";
  }

  return (
    <div
      style={{
        backgroundColor: backgroundColor,
        color: color,
        padding: "20px",
        border: "1px solid #000",
      }}
    >
      <h6>Theme will change inside the border.</h6>
      <p>Select Theme: {modeText}</p>
      <button onClick={toggleTheme}>Choose theme: {theme}</button>
    </div>
  );
}
