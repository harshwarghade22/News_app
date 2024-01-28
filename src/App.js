import './App.css';

import React, { Component } from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';
import LoadingBar from 'react-top-loading-bar'
import {
  BrowserRouter as Router,
  Route,
  Routes,
  path,
} from "react-router-dom";

export default class App extends Component {


  render() {
    return (
      
        <div>
          <Router>
        <Navbar/>
        
        <Routes>
          <Route path='/' element={<News key="general" pageSize={20} country="in" category="general"/>}></Route>
          <Route path='/science' element={<News key="science" pageSize={20} country="in" category="science"/>}></Route>
          <Route path='/sports' element={<News key="sports" pageSize={20} country="in" category="sports"/>}></Route>
          <Route path='/entertainment' element={<News key="entertainment" pageSize={20} country="in" category="entertainment"/>}></Route>
          <Route path='/bussiness' element={<News key="bussiness" pageSize={20} country="in" category="bussiness"/>}></Route>
          <Route path='/technology' element={<News key="technology" pageSize={20} country="in" category="technology"/>}></Route>
          <Route path='/health' element={<News key="health" pageSize={20} country="in" category="health"/>}></Route>
        </Routes>
          </Router>
        </div>
      
    )
  }
}



