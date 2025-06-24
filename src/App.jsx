import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ItemsDetail from "./pages/ItemsDetail";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products/:id" element={<ItemsDetail />} />
    </Routes>
  );
}
export default App;
