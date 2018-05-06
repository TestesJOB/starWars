import * as React from 'react';
import * as axios from "axios";
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

// FILES
import PersonagemResumido from "./components/PersonagemResumido";

// VARIAVES
const baseSWP = "https://swapi.co/api/people/";
const personagens = '';

class Home extends React.Component<any, any> {
    constructor(props: any){
        super(props);
    
        this.state = {
            personagens: []
        }
    }

    public componentDidMount(){
        const self = this;
        axios.default.get(baseSWP + "1")
        .then(response => {
            self.setState({
                personagens: response.data
            })
        })
        .catch(error => {
            // erro
        });
      }

    public listarPersonagens = () =>{
        return this.state.personagens.map( (personagem:any, index:any) =>{
            // map passa o indice da array
            return(
                <React.Fragment>
                    <PersonagemResumido 
                        key={index}
                        name={personagem.name}
                        height= {personagem.height}
                        mass= {personagem.mass}
                        birth_year= {personagem.birth_year}
                    />
                </React.Fragment>
            );
        })
    }

    public render(){
        return (
            <React.Fragment>
                <h1>Selecione um personagem:</h1>
                { this.state.carregando ? null : this.listarPersonagens() }
            </React.Fragment>
        );
    }
}

export default Home;