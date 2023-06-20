import { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import ChatPage from "./pages/ChatPage";
import HomePage from "./pages/HomePage";
import Header from "./components/Header";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <div>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/chat" element={<ChatPage />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
