import React from "react";
import ReactDOM from "react-dom/client"; 
const root=ReactDOM.createRoot(document.querySelector('#child1'));
const str=React.createElement("p",{},"React for Child1")

root.render(str)
const root1=ReactDOM.createRoot(document.querySelector('#child2'));
const str1=React.createElement("p",{},"React for Child2")

root1.render(str1)