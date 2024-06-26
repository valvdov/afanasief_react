import '../App.css';
import Main from "./Main";
import Header from "./Header";
import Footer from "./Footer";
import {Route, Routes} from "react-router-dom";
import Chaconne from "./Chaconne";
import React from "react";
import Biography from "./Biography";
import Exhibitions from "./Exhibitions";
import Gallery from "./Gallery";
import Video from "./Video";
import Demo from "./Demo";

function App() {
  return (
      <div>
          <Header/>
          <Routes>
              <Route path="/" element={<Main />} />
              <Route path="/chaconne" element={<Chaconne />} />
              <Route path="/biography" element={<Biography />} />
              <Route path="/exhibitions" element={<Exhibitions />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/video" element={<Video />} />
              <Route path="/demo" element={<Demo />} />
          </Routes>
          <Footer/>
      </div>
  );
}

export default App;
