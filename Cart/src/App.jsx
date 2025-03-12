import { useState } from "react";
import "./App.css";
import ThemeSelector from "./ThemeSelector";
import WebPageTheme from "./WebPageTheme";

export default function App() {
  return (
    <>
      <ThemeSelector />
      <WebPageTheme />
    </>
  );
}
