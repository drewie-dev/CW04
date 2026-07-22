import React, { Component } from "react";
import "./App.css";

import HelloWorld from "./components/HelloWorld";
import Counter from "./components/Counter";
import FilteredList from "./components/FilteredList";

// Produce data used by the filtered list
const produce = [
  { name: "Apple", type: "Fruit" },
  { name: "Banana", type: "Fruit" },
  { name: "Carrot", type: "Vegetable" },
  { name: "Broccoli", type: "Vegetable" },
  { name: "Orange", type: "Fruit" },
  { name: "Spinach", type: "Vegetable" }
];

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* Main React components */}
        <HelloWorld />
        <Counter />
        <FilteredList items={produce} />
      </div>
    );
  }
}

export default App;