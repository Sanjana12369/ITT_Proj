import './App.css';
import React, {Component} from 'react';
import Header from './components/header';
import Home from './components/home';
import Signup from './components/signup';
import Signin from './components/signin';

import {BrowserRouter} from 'react-router-dom'; 
import {Switch,Route,Redirect} from 'react-router-dom';
import './App.css';

class App extends Component{
  render(){
    return(
      <BrowserRouter>
      <div>
        <Switch>
          <Route path='/home' render={
            props=>(
              <>
              <Header/>
              <Home/>
              </>
          )}/>
          <Route path='/signup' render={
            props=>(
              <>
              <Header/>
              <Signup/>
              </>
         )}/>
         <Route path='/signin' render={
           props=>(
             <>
             <Header/>
             <Signin/>
             </>
           )
         }/>
        </Switch>
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
