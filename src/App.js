import './App.css';
import About from './components/About';
// import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, {useState} from 'react';
// import{
//   BrowserRouter as Router,
//   Routes,
//   Route
// } from 'react-router-dom';

function App() {
  const [mode, setMode] = useState("light");
  const [type, setType] = useState("Enable DarkMode");
  // const [alert, setAlert] = useState("");

  const toggle = () =>{
    if(mode === 'dark'){
      setMode('light');
      setType('Enable DarkMode');
      document.body.style.background = 'white';
      document.body.style.color = 'black';
      // setAlert("Success");
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
    {/* <Router> */}
      <Navbar title = "TextUtils" mode = {mode} toggle = {toggle} type = {type}/>
      <div className='container'>
        {/* <Routes>   */}
            {/* <Route path = '/about'> */}
              <About/>
            {/* </Route> */}
            {/* <Route path = '/'> */}
              <TextForm mode = {mode}/>
            {/* </Route> */}
        {/* </Routes> */}
      </div>
    {/* </Router> */}
    </>
  );
}

export default App;
