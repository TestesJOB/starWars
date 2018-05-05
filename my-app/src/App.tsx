import * as axios from "axios";
import * as React from 'react';
// import React, { Component } from 'react';

import {
   BrowserRouter as Router,
   Link,
   Route
} from 'react-router-dom'

// CSS
import "./css/App.css";

const baseSWP = "https://swapi.co/api/people/";
const personagem = '';

class App extends React.Component<any, any> {
    
  constructor(props:any){
    super(props);

    this.state = {
        personagem: []
    }
  }

  public componentDidMount(){
    const self = this;
    axios.default.get(baseSWP + "1")
    .then(response => {
        self.setState({
            personagem: response.data
        })
    })
    .catch(error => {
        // erro
    });
  }

  public render() {
    return (
        <React.Fragment>
            < Router >
                <div>TESTE 1</div>
            </ Router >
            < Router >
                <div>{this.state.personagem.name}</div>
            </ Router >
        </React.Fragment>
    );
  }
}

export default App;
