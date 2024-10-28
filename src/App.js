import { useState } from 'react';
import './App.css';
import ComponentHandler from './components/ComponentHandler';
import { ThemeContext, ToggleContext } from './components/ContextApi/ContextApi';
import Login from "./components/Login/Login"
// import SignUp from './components/SignUp/SignUp';
import AuthPage from './components/AuthPage/AuthPage';
import AuthToggle from './components/AuthToggle/AuthToggle';
import { BrowserRouter } from 'react-router-dom';

function App() {
  const [theme, setTheme] = useState('LightMode');
  const [isToggled, setIsToggled] = useState(false);

  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const toggleHandler = () => {
    setIsToggled((prevState) => !prevState);
    isToggled ? setTheme("LightMode") : setTheme("DarkMode");
  };

  const handleLoginSuccess = () => {
    setIsAuthenticated(true);
  };

  return (
    <BrowserRouter>
      <ToggleContext.Provider value={{ toggleHandler }}>
        <ThemeContext.Provider value={theme}>
          <div className="App">
            {/* <AuthToggle onLoginSuccess={true}></AuthToggle> */}

            {/* {isAuthenticated ? (<ComponentHandler />) : <AuthToggle onLoginSuccess={handleLoginSuccess} />} */}

            {/* {isAuthenticated ? (<ComponentHandler />) : <Login onLoginSuccess={handleLoginSuccess} />} */}
            {/* {isAuthenticated ? (<ComponentHandler />) : <SignUp onLoginSuccess={handleLoginSuccess} />} */}
            {/* <AuthPage onLoginSuccess={handleLoginSuccess} ></AuthPage> */}
            <ComponentHandler />
            {/* <AuthPage></AuthPage> */}


          </div>
        </ThemeContext.Provider>
      </ToggleContext.Provider>
    </BrowserRouter>
  );
}

export default App;
