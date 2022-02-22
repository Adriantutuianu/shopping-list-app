import { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import ShoppingList from "./components/ShoppingList";

function App() {
  //state
  const [inputText, setInputText] = useState("");
  const [shopping, setShopping] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredShopping, setFilteredShopping] = useState([]);

  //functions and events
  const filterHandler = () => {
    switch (status) {
      case "completed":
        setFilteredShopping(shopping.filter((shop) => shop.completed === true));
        break;
      case "uncompleted":
        setFilteredShopping(
          shopping.filter((shop) => shop.completed === false)
        );

        break;
      default:
        setFilteredShopping(shopping);
    }
  };

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
        <ShoppingList />
      </main>
      <footer>
        @{new Date().getFullYear()} - All rights reserved @Adrian Tut.
      </footer>
    </div>
  );
}

export default App;
