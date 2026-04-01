import { Route, Switch } from "wouter";
import Home from "./pages/Home";
import Shipyard from "./pages/Shipyard";
import Design from "./pages/Design";
import Specifications from "./pages/Specifications";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import "./index.css";

export default function App() {
  return (
    <>
      <Navigation />
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/shipyard" component={Shipyard} />
        <Route path="/design" component={Design} />
        <Route path="/specifications" component={Specifications} />
        <Route path="/gallery" component={Gallery} />
        <Route path="/contact" component={Contact} />
      </Switch>
      <Footer />
    </>
  );
}
