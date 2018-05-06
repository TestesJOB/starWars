import * as axios from "axios";
import * as React from 'react';

import {
   BrowserRouter as Router,
   Link,
   Route,
   Switch
} from 'react-router-dom'

// CSS
import "./css/App.css";

// PAGES
import Home from "./pages/Home";

// VARS
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
    axios.default.get(baseSWP + "2")
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
            <Router>
                <Switch>
                    <Route exact={true} path="/" component={Home} />
                    <Route exact={true} path="/sds" component={Home} />
                </Switch>
            </Router>
            <Home/>
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
