import "./App.css";
import About from "./components/About";
import Deals from "./components/Deals";
import Hero from "./components/Hero";
import Reservation from "./components/Reservation";
import Menu from "./components/Menu";
import MobileNavigation from "./components/MobileNavigation";
import Navigation from "./components/Navigation";

function App() {
  return (
    <>
      <Navigation />
      <MobileNavigation />
      <Hero />
      <About />
      <Menu />
      <Deals />
      <Reservation />
    </>
  );
}

export default App;
