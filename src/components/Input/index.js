import React from 'react';
import SFunction from "../../StockossTest";
import Position from 'src/components/Position'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav, NavDropdown, Button, Navbar, Form, FormControl} from 'react-bootstrap';

class Input extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      search : '',
      id: '',
      position: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // Au submit, je bloque l'envoi du formulaire.
  // J'appelle l'api Stockoss : importée ligne 2.
  // Je modifie mon state : 
  // position = réponse de l'api
  // id = la recherche saisie en input et envoyée.
  // S'il y a des erreurs, je les console.log
  handleSubmit = (e) => {
    e.preventDefault();
    // appel API Stockoss
    const response = SFunction(this.state.search);

    this.setState({
      position: response.position,
      id: this.state.search
    })
  
    if ("error_message" in response) 
      console.log(response.error_message);
  }

  // Je modifie le state avec la valeur saisie dans l'input
  handleChange = (e) => {
    this.setState({
      search : e.target.value
    })
  }


  render() {
    let input;
    // si position est different de 'vide' et est de type string
    // l'input est...
    if (this.state.position != '' && typeof this.state.position === 'string') {
      input = <p className="result">Vous trouverez l'objet en : {this.state.position}.</p>
    } else {
      input = ''
    }

    // si l'id est différent de 'vide' et si sa taille est supérieure à 5 caractères...
    if ((this.state.id) != '' && (this.state.id).length > 5) {
      input = <p className="result error">Aie aie, votre id est trop long ! Il doit contenir 5 caractères.</p>
    }

    // si l'id est différent de 'vide' et si sa taille est inférieure à 5 caractères...
    if ((this.state.id) != '' && (this.state.id).length < 5) {
      input = <p className="result error">Encore un petit effort: l'id contient 5 caractères.</p>
    }

    
    return <div className="stockoss">
      <div className="search-nav">
          <Form 
            inline
            onSubmit={this.handleSubmit}
          >
            <FormControl
              type="text" 
              placeholder="Saisir ID - Taper entrée" 
              className="mr-sm-2" 
              onChange={this.handleChange}
              />
          </Form>
      </div>

      {input}
      <Position position={this.state.position}/>
      
      </div>;
  }  
}

export default Input;
