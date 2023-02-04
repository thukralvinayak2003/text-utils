import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, { useState } from "react";
import Alert from "./components/Alert";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  function showAlert(message, type) {
    setAlert({
      message: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 4000);
  }

  function toggleMode() {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "black";
      document.body.style.color = "white";
      document.title = "textUtils - Dark Mode";
      showAlert("Light Mode has been disabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      document.title = "textUtils - Light Mode";
      showAlert("Dark Mode has been disabled", "success");
    }
  }

  return (
    <>
      <Router>
        <Navbar
          title="textUtils"
          mode={mode}
          aboutText="About"
          toggleMode={toggleMode}
        ></Navbar>
        <Alert alert={alert} />

        <div className="container my-3">
          <Routes>
            <Route
              exact
              path="/"
              element={
                <TextForm
                  heading="Enter the text to analyse: "
                  mode={mode}
                ></TextForm>
              }
            />
            <Route exact path="/about" element={<About />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
