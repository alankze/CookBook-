import { Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import RecipePage from "./components/RecipePage";

function App() {
  return (
    <>
      <div className="block">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/recipes/:recipesId" element={<RecipePage />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
