import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Home from "./pages/Home";
import AIAssistant from "./pages/AIAssistant";
import Marketplace from "./pages/Marketplace";
import StoreDirectory from "./pages/StoreDirectory";

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/ai-assistant" element={<AIAssistant />} />
            <Route path="/marketplace" element={<Marketplace />} />
            <Route path="/stores" element={<StoreDirectory />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
