import './App.css';
import React from 'react';
import Selector from './Component/Selector';
import Formula from './Component/Formula';
import Result from './Component/Result';

class App extends React.Component{

  render(){
    return (
      <div>
        <h1>Calcolo</h1>
        
        <Selector />
        <Formula />
        <Result />

      </div>
    )
    
  }

}

export default App;
