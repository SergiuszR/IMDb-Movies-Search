import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Layout from "./components/Layout";
import { AnimatePresence } from "framer-motion";

function App() {
  return (
    <Layout>
      <AnimatePresence>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/movies">
            <Movies />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/about">
            <About />
          </Route>
        </Switch>
      </AnimatePresence>
    </Layout>
  );
}

export default App;
