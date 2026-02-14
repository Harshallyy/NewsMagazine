import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import India from "./pages/India";
import World from "./pages/World";

function App() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Header onSearch={setSearchQuery} />

      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home searchQuery={searchQuery} />} />
          <Route path="/india" element={<India />} />
          <Route path="/world" element={<World />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;
