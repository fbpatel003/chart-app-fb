import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import LoginPage from './Components/LoginPage';
import AUD from './Components/Tabs/AUD';

function App() {

  const [LogIn, setLogin] = useState(false);

  function handleLogin (confirmed){
    if(confirmed) setLogin(true);
  }
  
  return (
    <>
      <LoginPage handleLoginToApp={handleLogin}/>
      <Routes>
        {
          LogIn ?
          <Route path='/Home' element={<Home/>} />
          : null
        }

      </Routes>
    </>
  );
}

export default App;
