import React, { useState, createContext } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.scss';
import { HomePage } from './Components/HomePage';
import { Sidebar } from './Components/Sidebar';

export const SidebarContext = createContext(null);

const App = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <>
      <SidebarContext.Provider value={{ isSidebarOpen, setIsSidebarOpen }}>
        <Sidebar />
        <HomePage />
      </SidebarContext.Provider>
    </>
  );
};

export default App;
