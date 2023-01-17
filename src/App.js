import './App.css';

import React from 'react';

import axios from 'axios';

import Selector from './Component/Selector';
import Formula from './Component/Formula';
import Result from './Component/Result';

class App extends React.Component{
  constructor(props){

    super(props);
        
    this.state = {
      result:'',  
      value:'',
      func:'',
      field:0    
    }

  }
  
  api = (func, value) => {

    let val;
    
    if(func==='simplify'||func==='factor'||func==='derive'||func==='integrate'||func==='zeroes'||func==='tangent'||func==='area'|func==='log')
      val = encodeURIComponent(value);

    else 
      val = Number.parseFloat(value).toPrecision(10);

      axios.get('https://newton.now.sh/api/v2/' + func + '/' + val)
    .then( (response) => {

      let result  = response.data.result;

      if(Array.isArray(result)){

        let res = "[";

        for(let val in result)
            res = res + result[val] + ", ";

        res = res.substring(0,res.length-2);

        result = res + "]";

      }
        
        

      this.setState({result});
    })
    .catch((error)=>{

      let msg = error.response.message;

      this.setState({result: msg});

      console.log(error);

    });
  }

  handleChange = (value)=>{
    
    this.setState({value})

    this.api(this.state.func,value);

  }

  handleChange2 = (func)=>{
    
  if (func==='log'||func==='tangent')
      this.setState({field:1});

  else if (func==='area')
    this.setState({field:2});

  else
    this.setState({field:0});    

    this.setState({func});

  }  

  render(){

    return (

      <div className="form">
        
        <div className="content">

          <h1>Calcolo</h1>

          <Selector handleChange2={this.handleChange2} />

          <Formula field={this.state.field} handleChange={this.handleChange}/>
          
          <Result result={this.state.result} />

        </div>

      </div>

    )
    
  }

}

export default App;
