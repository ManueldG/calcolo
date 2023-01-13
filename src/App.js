import './App.css';

import React from 'react';

import axios from 'axios';

import Selector from './Component/Selector';
import Formula from './Component/Formula';
import Result from './Component/Result';

class App extends React.Component{
  constructor(props){

    super(props);
    this.handleResponse = this.handleResponse.bind(this);
    this.api = this.api.bind(this);
    this.state = {
      result:'',  
      value:''    
    }

  }

  
  api = (func, value) => {
    let val;
    if(value==="tangent"||value==="simplify"||value==="derive"||value==="integrate"||value==="zeroes"||value==="area")
      val = encodeURIComponent(value);
    else val = Number.parseFloat( value).toPrecision(10);

      axios.get('https://newton.now.sh/api/v2/' + func + '/' + val)
    .then( (response) => {
      let result  = response.data.result;

      if(Array.isArray(result))
        if(result[0]!==null)
          result = "[" + result[0] + "," + result[1] + "]";
        else
          result = " --- ";
      

      this.setState({result});
    })
    .catch((error)=>{
      let msg = error.response.data.error;
      this.setState({result: msg});
      console.log(error);
    });
  }

  handleResponse = (response)=>{
    console.log(response);
    this.api(response,this.state.value);
  }

  handleChange = (response)=>{
    console.log(response);
    this.setState({value: response})
  }

  

  render(){
    return (
      <div className="form">
        
        <div className="content">

          <h1>Calcolo</h1>
          <Formula handleChange={this.handleChange}/>
          <Selector handleResponse={this.handleResponse} />
          <Result result={this.state.result} />

        </div>

      </div>
    )
    
  }

}

export default App;
