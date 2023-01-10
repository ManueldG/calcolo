import React from "react"

class Formula extends React.Component {
    render() {
        return <div className="formula">
            <label htmlFor="formula" >Inserisci formula</label>
            <input type="text" id="formula"></input>
            </div>
    }
}

export default Formula;