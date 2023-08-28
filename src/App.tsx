import { Switch, Route } from "wouter";
import SCApp from "./App.styled";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <SCApp>
      <Navbar />
      <Switch>
        <Route>
          <Home />
        </Route>
        <Route>
          <About />
        </Route>
        <Route>
          <Contact />
        </Route>
      </Switch>
      <Footer />
    </SCApp>
  );
}

export default App;
