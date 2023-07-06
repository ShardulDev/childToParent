import logo from './logo.svg';
import './App.css';
import RegisterUser from './components/RegisterUser';
import { useState } from 'react';

function App() {

  const [userInfo, setUserInfo] = useState({});

  function userDeatils(user) {
    console.log(user, "parent");
    setUserInfo(user);
  }

  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>*/}

      <RegisterUser userInfo={userDeatils}></RegisterUser>

      <h3>CustomerDetails:</h3>
      ID:{userInfo.id}<br></br>

      Name:{userInfo.name}<br></br>

      Email:{userInfo.email}<br></br>

      Address:{userInfo.address}<br></br>

    </div>
  );
}

export default App;
