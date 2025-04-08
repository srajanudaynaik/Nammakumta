import { Routes, Route, BrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CategoryPage from "./pages/CategoryPage";
import CategoryDetailPage from "./pages/CategoryDetailPage"; // New page for dynamic routing
import "./App.css";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/category" element={<CategoryPage />} />
          <Route path="/category/:id" element={<CategoryDetailPage />} /> {/* Dynamic Route */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
