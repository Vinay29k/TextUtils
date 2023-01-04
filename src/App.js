
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import React, { useState } from 'react';
import Alert from './components/Alert';
import {
  BrowserRouter,
  Routes,
  Route,

} from "react-router-dom";





function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);



  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })

    setTimeout(() => {
      setAlert(null);
    }, 2000);

  }

  const toggleMode = () => {
    if (mode === "light") {
      setMode('dark');
      document.body.style.backgroundColor = "#343a40";
      showAlert("Dark Mode is Enabled", "Success");
      document.title = "TextUtils-Dark Mode"
    }
    else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode is Enabled", "Success");
      document.title = "TextUtils"
    }
  }
  return (
    <>
    
      <Navbar title='TextUtils' mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />


      <div className='container'>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Textform showAlert={showAlert} heading="Try Textutils - Word Counter, Character Counter, Listen to Text" mode={mode} toggleMode={toggleMode} button1="Convert to UpperCase " button2="Convert to LowerCase" button3="Clear Text" button4="Copy to Clipboard" button5="Speak" />} />
           
          </Routes>
          {/* <Routes>
          <Route path="/about" element={<About mode={mode}/>}/>

          </Routes> */}
        </BrowserRouter>
        





      </div>







    </>

  );
}

export default App;

