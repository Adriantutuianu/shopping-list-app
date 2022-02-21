import { useState } from "react";

import "./App.css";
import Form from "./components/Form";

function App() {
  //state
  const [inputText, setInputText] = useState("");
  const [shopping, setShopping] = useState([]);

  return (
    <div className="App">
      <header className="app-header">Shopping list :</header>
      <div className="content">
        <Form
          inputText={inputText}
          shopping={shopping}
          setShopping={setShopping}
          setInputText={setInputText}
        />
      </div>
      <footer>
        @{new Date().getFullYear()} - All rights reserved @Adrian Tut.
      </footer>
    </div>
  );
}

export default App;
