import logo from './logo.svg';
import './App.css';
import now from './now';
import Now from './now';
import React from 'react';
import Rasklad from './Rasklad';
function App() {
  const[touch, setTouch] = React.useState(false)

  function handleButton () {
    setTouch(true)
  }


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {touch ? <Rasklad /> :<Now touch={handleButton}/>}
      </header>
    </div>
  );
}

export default App;
