// Entry point for the build script in your package.json
import "@hotwired/turbo-rails";
import "./controllers";


import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import Greetings from "./Greetings";
import { Provider } from "react-redux";
import { store } from "./store";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/greetings" element={<Greetings />} />
        </Routes>
      </Router>
    </Provider>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
