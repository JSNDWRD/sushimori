import "./App.css";
import About from "./components/About";
import Hero from "./components/Hero";
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
    </>
  );
}

export default App;
