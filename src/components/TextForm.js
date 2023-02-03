import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");

  function handleOnchange(event) {
    setText(event.target.value);
  }

  function handleLoCase() {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lowercase", "success");
  }

  function handleUpCase() {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to uppercase", "success");
  }

  function handleCopy() {
    const text = document.getElementById("mybox");
    text.select();
    text.setSelectionRange(0, 9999);
    navigator.clipboard.writeText(text.value);
    props.showAlert("Text copied", "success");
  }

  function handleClear() {
    let newText = "";
    setText(newText);
    props.showAlert("Text Cleared", "success");
  }

  function handleExtraSpaces() {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra spaces removed", "success");
  }

  return (
    <>
      <div>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnchange}
            id="mybox"
            rows="8"
            style={{
              backgroundColour: props.mode === "dark" ? "Grey" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }}
          ></textarea>
        </div>
        <button className="btn btn-primary" onClick={handleUpCase}>
          Convert To Uppercase
        </button>
        <button className="btn btn-primary mx-3" onClick={handleLoCase}>
          Convert To lowercase
        </button>
        <button className="btn btn-primary mx-3" onClick={handleClear}>
          Clear Text
        </button>
        <button className="btn btn-primary mx-3" onClick={handleCopy}>
          Copy Text
        </button>
        <button className="btn btn-primary mx-3" onClick={handleExtraSpaces}>
          Remove Extra Spaces
        </button>
      </div>
      <div className="container my-3">
        <h2>Your text summary</h2>
        <p>{text.trim().length} characters</p>
        <p>
          {
            text
              .replace(/\n/g, " ")
              .split(" ")
              .filter((value) => value !== "").length
          }{" "}
          words
        </p>
        <h2>Preview</h2>
        <p>{text} </p>
        <p>
          Time required to read :{" "}
          {text
            .replace(/\n/g, " ")
            .split(" ")
            .filter((value) => value !== "").length * 0.008}
        </p>
      </div>
    </>
  );
}
