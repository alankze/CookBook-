import Navigation from "./components/Navigation";
// import Footer from "./components/Footer"
// import RecipePage from "./components/RecipePage
import Hero from "./components/Hero";
import Card from "./components/Card";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="all">
      <Navigation></Navigation>
      <Hero></Hero>
      <Card></Card>
      <Footer />
    </div>
  );
}

export default App;
