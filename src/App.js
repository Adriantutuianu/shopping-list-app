import { useState } from "react";

import "./App.css";
import Form from "./components/Form";

function App() {
  //state
  const [inputText, setInputText] = useState("");
  const [shopping, setShopping] = useState([]);
  const [status, setStatus] = useState("all");

  return (
    <div className="App">
      <header className="app-header">Shopping list :</header>
      <main className="content">
        <Form
          inputText={inputText}
          shopping={shopping}
          setShopping={setShopping}
          setInputText={setInputText}
          setStatus={setStatus}
        />
      </main>
      <footer>
        @{new Date().getFullYear()} - All rights reserved @Adrian Tut.
      </footer>
    </div>
  );
}

export default App;
