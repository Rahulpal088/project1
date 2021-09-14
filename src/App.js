import "./App.css";
import Header from "./Component/Header";
import Form from "./Component/Form";
// import About from "./Component/About";
import React, { useState } from "react";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#12171d";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "#FFF";
    }
  };
  
  return (
    <>
      {/* <Router> */}
        <Header logoText="Convert Text" mode={mode} toggleMode={toggleMode} />
        {/* <Switch>
          <Route path="/about">
            <About title="About" mode={mode} />
          </Route>
          <Route path="/"> */}
            <Form heading="Convert Text!" mode={mode} />
          {/* </Route>
        </Switch>
      </Router> */}
    </>
  );
}

export default App;
