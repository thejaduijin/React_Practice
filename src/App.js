import { useState } from 'react';
import './App.css';
import ComponentHandler from './components/ComponentHandler';
import { ThemeContext, ToggleContext } from './components/ContextApi/ContextApi';
import Login from "./components/Login/Login"
// import SignUp from './components/SignUp/SignUp';

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
    <ToggleContext.Provider value={{ toggleHandler }}>
      <ThemeContext.Provider value={theme}>
        <div className="App">
          {isAuthenticated ? (<ComponentHandler />) : <Login onLoginSuccess={handleLoginSuccess} />}
          {/* {isAuthenticated ? (<ComponentHandler />) : <SignUp onLoginSuccess={handleLoginSuccess} />} */}


        </div>
      </ThemeContext.Provider>
    </ToggleContext.Provider>
  );
}

export default App;
