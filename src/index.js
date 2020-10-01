import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { StateMachineProvider, createStore } from "little-state-machine";
import Step1 from "./Step1.js";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./Step4";
import Success from "./Success";
import Header from "./components/Header";
import Footer from "./components/Footer";

import '@fortawesome/fontawesome-free/js/fontawesome'
import '@fortawesome/fontawesome-free/js/solid'
import '@fortawesome/fontawesome-free/js/regular'
import '@fortawesome/fontawesome-free/js/brands'
import "./style.css";

createStore({
  data: {
    singleCover: "",
    coverAmount: "",
    title: "",
    firstName: "",
    lastName: "",
    phoneNumber: "",
    emailAddress: "",
  }
});

const Pages = () => {
  return (
    <div>
      <Route exact path="/" component={Step1} />
      <Route path="/step2" component={Step2} />
      <Route path="/step3" component={Step3} />
      <Route path="/step4" component={Step4} />
      <Route path="/success" component={Success} />
    </div>
  );
};

function App() {
  return (
    <StateMachineProvider>
      <main className="flex-1">
        <Header />
        <Router>
          <Pages />
        </Router>
      </main>
      <Footer />
    </StateMachineProvider>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
