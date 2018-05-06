import * as React from 'react';
// import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'


class PesonagemResumido extends React.Component<any, any> {
    constructor(props: any){
        super(props);
    }

    public render(){
        return (
            <React.Fragment>
                <h2>NOME:</h2>
                <h2 className="" >{this.props.name}</h2>
                <p className="" >{this.props.heigth}</p>
                <p className="" >{this.props.mass}</p>
                <p className="" >{this.props.birth_year}</p>
            </React.Fragment>
        );
    }
}

export default PesonagemResumido;