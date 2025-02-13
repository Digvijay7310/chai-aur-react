import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./components/Card";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1 className="bg-green-300 text-black p-4 rounded-3xl mb-4">
        Tailwind test
      </h1>
      <Card username="Chaiaurcode" btnText="Click me" />
      <Card username="Digvijay" />{" "}
      {/*If in 2nd card btnText doesn't exist by default value that we send in btnText="Visit me"  will added*/}
    </>
  );
}

export default App;
