import React from "react";
import ReactDOM from "react-dom/client";
const parent = React.createElement(
  "div",
  { id: "parent" },
  [React.createElement(
    "div",
    { id: "child" }, [
    React.createElement("h1", {}, "hello "), 
    React.createElement("h1", {}, "hello i cbvnmm fdghjkl")]),
    React.createElement("div",{ id: "child1" },
    React.createElement("h1", {}, "hello i am h1cgvbhnjkm n shivangim, hb  mm,")
  )]
);

// import React from 'react';
// import ReactDOM from 'react-dom';

// const parent = React.createElement(
//   'div',
//   { id: 'parent' },
//   [
//     React.createElement('h1', { key: 'title' }, 'Hello, React!'),
//     React.createElement('p', { key: 'content' }, 'This is a React component.'),
//   ]
// );

console.log(parent);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
