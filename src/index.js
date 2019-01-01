import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";

function Hi() {
  return (
    <div>
      {5 + 10} <br />
      <h0>Heading H0 which is not really a heading</h0>
      <br />
      Hello <strong>Ruslan!</strong>
      <h1>This is a heading H1</h1>
      <h2>This is a heading H2</h2>
      <ul className="error">
        <li className="greenlight">First unordered item</li>
        <li>Second unordered itim</li>
        <li>Third unordered item</li>
      </ul>
      <ol className="noerror">
        <li>First ordered item</li>
        <li>Second ordered itim</li>
        <li>Third ordered item</li>
      </ol>
    </div>
  );
}

ReactDOM.render(<Hi />, document.querySelector("#root"));
