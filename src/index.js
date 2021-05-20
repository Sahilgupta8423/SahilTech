// BABEL Converts modern JavaScript into JS which Browser understands.
// We can also use div tag for rendering multiple elements.
// We can't use starement inside {} only Expressions like name, variable
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Sdata from "./Sdata";
import App from './App'
import DigitalClock from './DigitalClock'
import ToDoList from './ToDoList'
import Ol from './Ol'
import CompA from './CompA'
import {BrowserRouter} from 'react-router-dom'



// import "./index.css";
// var React = require("react");
// var ReactDOM = require("react-dom");
// var date = new Date();
// var time = date.getHours();
// document.write(time)
// if(time>=0 && time<12){
//   var a = "Good Morning";
// }
// else if(time>=12 && time<19){
//   var a = "Good Afternoon";
// }
// else{
//   var a = "Good night";
// }
// ReactDOM.render(<>
// <h1 contentEditable="true">Hello Sir, {a}</h1>
// </>,
// document.getElementById('root'))


ReactDOM.render(<BrowserRouter><App></App></BrowserRouter>
  ,
  document.getElementById("root")
);
