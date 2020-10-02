import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { StateMachineProvider, createStore } from "little-state-machine";
import Header from "./components/Header";
import Footer from "./components/Footer";

const Step1 = React.lazy(() => import("./Step1.js"));
const Step2 = React.lazy(() => import("./Step2.js"));
const Step3 = React.lazy(() => import("./Step3.js"));
const Step4 = React.lazy(() => import("./Step4.js"));
const Success = React.lazy(() => import("./Success.js"));

import '@fortawesome/fontawesome-free/js/fontawesome'
import '@fortawesome/fontawesome-free/js/solid'
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

const Loader = () => {
  return (
    <div className="loader">
      <span className="loader__ball loader__ball--1" />
      <span className="loader__ball loader__ball--2" />
      <span className="loader__ball loader__ball--3" />
    </div>
  );
};

function App() {
  return (
    <StateMachineProvider>
      <main className="flex-1">
        <Header />
        <Router>
          <Suspense fallback={<Loader />}>
            <Pages />
          </Suspense>
        </Router>
      </main>
      <Footer />
    </StateMachineProvider>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
