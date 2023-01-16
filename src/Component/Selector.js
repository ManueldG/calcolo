import React from 'react';
import './Selector.css'

class Selector extends React.Component {
    constructor(props){
        super(props);

        this.changeHandler = this.changeHandler.bind(this);
    }

    changeHandler(event){
        
        this.props.handleChange2(event.target.value);

    }

    render() {
        return(
            <div className="selector">
                <label htmlFor="selector">Scegli funzione</label>
                <select name="selector" id="selector"  onChange={(e)=>{this.changeHandler(e)}}>
                    <option >(scegli)</option>
                    <option value="simplify">Semplifica</option>
                    <option value="factor">Fattori</option>
                    <option value="derive">Derivata</option>
                    <option value="integrate">Integrale</option>
                    <option value="zeroes">ricerca dello zero</option>
                    <option value="tangent">Tangente alla curva</option>
                    <option value="area">Area nella curva</option>
                    <option value="cos">Coseno</option>
                    <option value="sin">Seno</option>
                    <option value="tan">Tangente</option>
                    <option value="arccos">Arcoseno</option>
                    <option value="arcsin">Arcseno</option>
                    <option value="arctan">Arctangente</option>
                    <option value="abs">Valore assoluto</option>
                    <option value="log">Logaritmo</option>                    
                </select>
            </div>
        );
    }
}

export default Selector;