import { Switch, Route, useLocation } from "wouter";
import SCApp from "./App.styled";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import NotFound from "./components/NotFound/NotFound";
import { useEffect } from "react";

function App() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location[0]]);

  return (
    <SCApp>
      <Navbar />
      <Switch>
        <Route path="/fem_my_team/">
          <Home />
        </Route>
        <Route path="/fem_my_team/about">
          <About />
        </Route>
        <Route path="/fem_my_team/contact">
          <Contact />
        </Route>
        <Route>
          <NotFound />
        </Route>
      </Switch>
      <Footer />
    </SCApp>
  );
}

export default App;
