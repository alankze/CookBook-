import { Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import RecipePage from "./components/RecipePage";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navigation></Navigation>
      <div className="block">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/recipes/:recipesId" element={<RecipePage />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
