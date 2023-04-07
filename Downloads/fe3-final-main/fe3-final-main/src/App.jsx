import React from 'react';
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import { Route, Routes } from 'react-router-dom';
import Contact from "./routes/Contact";
import Favs from "./routes/Favs";
import Home from "./routes/Home";

function App() {
  const {themeState} = usePokeStates()

  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path={routes.home} element={<Home/>}/>
        <Route path={routes.contact} element={<Contact/>}/>
        <Route path={routes.favs} element={<Favs/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;