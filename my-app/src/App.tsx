import * as axios from "axios";
import * as React from 'react';

// import React, { Component } from 'react';
// import { withRouter } from 'react-router'
import {
   BrowserRouter as Router,
   Link,
   Route,
   Switch
} from 'react-router-dom'

// CSS
import "./css/App.css";

// FILES
// import Home from "./components/pages/Home";

const baseSWP = "https://swapi.co/api/people/";

class App extends React.Component {
    
  constructor(props:any){
    super(props);

    this.state = {
        personagens: []
    }
  }

  public componentDidMount(){
    const self = this;
    axios.default.get(baseSWP)
    .then(response => {
        // console.log(response.data);
        self.setState({
            personagens: response.data
        })
    })
    .catch(error => {
        // console.log(error);
        // console.log(error.status);
    });
  }

  public render() {
    return (
      <div className="App">
          < Router >
              <div>TESTE 1</div>
          </ Router >
          < Router >
              <div>TESTE 2</div>
          </ Router >
          {/* <Route exact path="/" component={Home}/> */}
      </div>
    );
  }
}

export default App;
