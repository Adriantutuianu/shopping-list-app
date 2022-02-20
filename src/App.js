import "./App.css";
import Form from "./components/Form";

function App() {
  return (
    <div className="App">
      <header className="App-header">Shopping list :</header>
      <Form />
      <footer>
        @{new Date().getFullYear()} - All rights reserved @Adrian Tut.
      </footer>
    </div>
  );
}

export default App;
