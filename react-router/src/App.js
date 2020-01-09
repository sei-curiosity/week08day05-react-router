import React, { Component } from 'react'
import Nav from './components/Nav/Nav'
import Missings from "./components/missings/Missings";
import './App.css'
import getMissings from './data/missings'


class App extends Component {
  state = {
    missings: []
  }
  
  componentDidMount(){
     getMissings()
     .then(res => {
      this.setState(({ ...copyState }) => {
        copyState.missings = res;
        return copyState;
      });
    
    })
      
  }
  render(){
    return (
      <div className="App">
        App
      </div>
    );
  }
}

export default App
