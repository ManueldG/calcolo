import React from "react"

class Formula extends React.Component {
    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event){
        
        this.props.handleChange(event.target.value);
    }

    render() {
        return <div className="formula">
            <label htmlFor="formula" >Inserisci formula</label>
            <input type="text" id="formula" onChange={this.handleChange}></input>
            
            </div>
    }
}

export default Formula;