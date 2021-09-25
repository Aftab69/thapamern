import React from 'react';
import { Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './components/Home';
import Contact from './components/Contact';
import About from './components/About';
import Signin from './components/Signin';
import Signup from './components/Signup';
import "../src/App.css";

const App = () => {
  return (
    <>
      <Navbar />
      <Route exact path="/"><Home /></Route>
      <Route exact path="/contact"><Contact /></Route>
      <Route exact path="/about"><About /></Route>
      <Route exact path="/signin"><Signin /></Route>
      <Route exact path="/signup"><Signup /></Route>
    </>
  )
}

export default App;
