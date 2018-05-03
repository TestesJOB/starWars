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

class App extends React.Component {
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
