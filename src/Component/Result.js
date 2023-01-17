import React from "react"

class Result extends React.Component {

    render() {
        return <div>
            <div>Risultato</div>
            <div>{this.props.result}</div>
        </div>
    }
}

export default Result;