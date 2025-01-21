import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./pages/Layout";
import DynamicTitle from "./components/title/DynamicTitle";
import ScrollToTop from "./components/layout/ScrollToTop";

function App() {
  return (
    <Layout>
      <DynamicTitle />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Layout>
  );
}

export default App;
