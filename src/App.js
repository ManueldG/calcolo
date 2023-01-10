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
      
      axios.get('https://newton.now.sh/api/v2/'+func+'/'+value)
    .then( (response) => {
      const result  = response.data.result;
      this.setState({result});
    })
    .catch(function (error) {
      // handle error
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
      <div>
        <h1>Calcolo</h1>

        <Formula handleChange={this.handleChange}/>
        <Selector handleResponse={this.handleResponse} />
        <Result result={this.state.result} />

      </div>
    )
    
  }

}

export default App;
