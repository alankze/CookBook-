import Navigation from "./components/Navigation";
// import Footer from "./components/Footer"
import RecipePage from "./components/RecipePage";
import Hero from "./components/Hero";
import Card from "./components/Card";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="all">
      <Navigation></Navigation>
      <Hero></Hero>
      <Card></Card>
      <Footer />

      {/* <Navigation></Navigation>
	<Hero></Hero>
	<Card></Card>  */}

      {/* <Routes> */}
      {/* <Route path="/" element={}  />  */}
      {/* 	<Route path="/recipes/:recipesID" element={<RecipePage />}  />  */}
      {/* <Routes path="/recipes/" element={<RecipePage />}  /> */}

      {/* </Routes>
       */}
    </div>
  );
}

export default App;
