import React from "react";
import "./App.css";
import { HomePage } from "./Components/HomePage";
import { Sidebar } from "./Components/Sidebar";

function App() {
  return (
    <>
      <Sidebar />
      <HomePage />
    </>
  );
}

export default App;
