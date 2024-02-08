//import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
//there is good method managment in class based react component 
import {
  BrowserRouter as Router,
  Routes,
  Route,
  
} from "react-router-dom";
export default class App extends Component {
  
  render() {
    return (
      <div>
         <Router>
        <Navbar/>

        
        <Routes>
          <Route exact path="/" element =
            {<News key="general" country="in" category="general"/>}>
          </Route>
          <Route exact path="/sports" element =
            {<News key="sports" country="in" category="sports"/>}>
          </Route>
          <Route exact path="/health" element =
            {<News key="health" country="in" category="health"/>}>
          </Route>
          <Route exact path="/technology" element={
            <News key="technology" country="in" category="technology"/>}>
          </Route>
         
        </Routes>
        </Router>
      </div>
    )
  }
}
