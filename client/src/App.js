import React from "react";
import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";
import Portfolio from "./components/Portfolio/Portfolio";
import Contact from "./components/Contact/Contact";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import { ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <div>
      <div className="container-fluid">
      <ToastContainer />
        <Router basename={process.env.PUBLIC_URL}>
         <Navbar /> 
        <Switch>
          <Route path="/portfolio" component={Portfolio}></Route>
          <Route path="/contact" component={Contact}></Route>
          <Route path="/about" component={About}></Route>
          <Route path="/" component={About}></Route>
        </Switch>
        </Router>
      </div>
      <Footer />
    </div>
  );
};

export default App;
