import React, { useState } from "react";

export default function Form(props) {
  const [text, setText] = useState("this is the word");

  const toUpCase = () => {
    const textUpCase = text.toUpperCase();
    setText(textUpCase);
  };
  const tolwrCase = () => {
    const textlwrCase = text.toLowerCase();
    setText(textlwrCase);
  };
  const toSentenceCase = () => {
    const textSentenceCase =
      text[0].toUpperCase() + text.slice(1).toLowerCase();
    setText(textSentenceCase);
  };
  const toCapitalCase = () => {
    let textCapitalCase = text
      .split(" ")
      .map(function (word, index) {
        return word[0].toUpperCase() + word.slice(1).toLowerCase();
      })
      .join(" ");
    setText(textCapitalCase);
  };
  const changeHolder = (event) => {
    setText(event.target.value);
  };
  return (
    <>
      <div className={`container my-3 text-${props.mode === 'light'?'dark':'light'}`}>
        <div className="my-3">
          <h2 className="pb-1">{props.heading}</h2>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="5"
            placeholder="Type here..."
            value={text}
            onChange={changeHolder}
          ></textarea>
        </div>
        <button className={`btn btn-${props.mode==='dark'?'light':'secondary'} mx-1`} onClick={toUpCase}>
          Convert to uppercase
        </button>
        <button className={`btn btn-${props.mode==='dark'?'light':'secondary'} mx-1`} onClick={tolwrCase}>
          Convert to lowercase
        </button>
        <button className={`btn btn-${props.mode==='dark'?'light':'secondary'} mx-1`} onClick={toSentenceCase}>
          Convert to sentence case
        </button>
        <button className={`btn btn-${props.mode==='dark'?'light':'secondary'} mx-1`} onClick={toCapitalCase}>
          Convert to capitalize
        </button>
        <div className="my-3">
          <h3>Your Text Summary</h3>
          <p>
            Your words {text.split(" ").length} and characters {text.length}
          </p>
          <h3>Preview</h3>
          <p>{text}</p>
        </div>
      </div>
    </>
  );
}
