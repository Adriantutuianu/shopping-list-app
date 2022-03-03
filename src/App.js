import { useState, useEffect } from "react";
import "./App.css";
import Form from "./components/Form";
import ShoppingList from "./components/ShoppingList";
import Clock from "./components/Clock";

function App() {
  //state
  const [inputText, setInputText] = useState("");
  const [shopping, setShopping] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredShopping, setFilteredShopping] = useState([]);

  //run once when the app start
  useEffect(() => {
    getLocalShopping();
  }, []);

  //useEffect
  useEffect(() => {
    //functions and events
    const filterHandler = () => {
      switch (status) {
        case "completed":
          setFilteredShopping(
            shopping.filter((shop) => shop.completed === true)
          );
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
    filterHandler();
    const saveLocalShopping = () => {
      localStorage.setItem("shopping", JSON.stringify(shopping));
    };
    saveLocalShopping();
  }, [shopping, status]);

  //save to local storage

  const getLocalShopping = () => {
    if (localStorage.getItem("shopping") === null) {
      localStorage.setItem("shopping", JSON.stringify([]));
    } else {
      let shopLocal = JSON.parse(localStorage.getItem("shopping"));

      setShopping(shopLocal);
    }
  };

  return (
    <div className="App">
      <header>
        {" "}
        <h1>Shopping List :</h1>
      </header>{" "}
      <main className="content">
        <Form
          inputText={inputText}
          shopping={shopping}
          setShopping={setShopping}
          setInputText={setInputText}
          setStatus={setStatus}
        />
        <ShoppingList
          filteredShopping={filteredShopping}
          setShopping={setShopping}
          shopping={shopping}
        />
        <Clock />
      </main>
      <footer>
        @{new Date().getFullYear()} - All rights reserved @Adrian Tut.
      </footer>
    </div>
  );
}

export default App;
