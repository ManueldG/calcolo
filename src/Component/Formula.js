import React from "react"

class Formula extends React.Component {
    constructor(props){
        super(props);
        //this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event){
        
        this.props.handleChange(event);
    }

    handleSubmit(event){
        console.log("submit"+event.target[0].value,event.target[1].value);
        
        if(this.props.field)
            this.props.handleChange(event.target[0].value + "|" + event.target[1].value)
        else
            this.props.handleChange(event.target[0].value);
        event.preventDefault();
    }

    render() {
        return <div className="formula">

            <form onSubmit={this.handleSubmit}>
            
            {this.props.field===1 && <div>
                    <label htmlFor="formula2" >Secondo termine</label>
                    <input type="text" id="formula2"></input>
                </div>}
                
            <label htmlFor="formula" >{this.props.field ? "Inserisci formula" : "inserisci valore"}</label>
            <input type="text" id="formula"></input>
            

            <input type="submit" value="invio"/> 

            </form>

            </div>
    }
}

export default Formula;