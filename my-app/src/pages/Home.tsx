
import * as React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

class Home extends React.Component {
    constructor(props: any){
        super(props);
    
        this.state = {
        }
    }

    public render(){
        return (
            <React.Fragment>
                <div>HELLO WORLD!</div>
            </React.Fragment>
        );
    }
}

export default Home;