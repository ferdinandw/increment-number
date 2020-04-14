import React from 'react';
import logo from './logo.svg';
import './App.css';
import styled from 'styled-components'
import Increment from './components/increment'

function App() {
  return (
    <div className="App">
        <img src={logo} className="App-logo" alt="logo" />
        <Increment/>
    </div>
  );
}

export default App;

const Button = styled.button`
background-color :red
`