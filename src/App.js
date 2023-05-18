import { Body, Contact, About } from "./components";
import Footer from "./components/Footer";
import Header from "./components/Header";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Body />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<div>page not found</div>} />
        </Routes>
      </BrowserRouter>
      <Footer />

    </div>
  );
}

export default App;
