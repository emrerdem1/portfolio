import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./App.scss";
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
