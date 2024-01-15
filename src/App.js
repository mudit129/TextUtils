import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, {useState} from 'react';


function App() {
  const [mode, setMode] = useState("light");
  const [type, setType] = useState("Enable DarkMode");

  const toggle = () =>{
    if(mode === 'dark'){
      setMode('light');
      setType('Enable DarkMode');
      document.body.style.background = 'white';
      document.body.style.color = 'black';
    }
    else{
      setMode('dark');
      setType('Enable LightMode');
      document.body.style.background = 'black';
      document.body.style.color = 'white';
    }
  }

  return (
    <>
      <Navbar title = "StringUtils" mode = {mode} toggle = {toggle} type = {type}/>
      <div className='container'>
              <TextForm mode = {mode}/>
      </div>
    </>
  );
}

export default App;
