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

class App extends React.Component<any, any> {
    
  constructor(props:any){
    super(props);
  }

  public render() {
    return (
        <React.Fragment>
            <Router>
                <Switch>
                    <Route exact={true} path="/" component={Home} />
                </Switch>
            </Router>
        </React.Fragment>
    );
  }
}

export default App;
