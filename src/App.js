import React from "react";
import "bootstrap/dist/css/bootstrap.css";
// Put any other imports below so that CSS from your
// components takes precedence over default styles.
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
