import { useState } from 'react';
import './App.css';
import ComponentHandler from './components/ComponentHandler';
import { ThemeContext, ToggleContext } from './components/ContextApi/ContextApi';
import { BrowserRouter } from 'react-router-dom';

function App() {
  const [theme, setTheme] = useState('LightMode');
  const [isToggled, setIsToggled] = useState(false);

  // const [isAuthenticated, setIsAuthenticated] = useState(false);

  const toggleHandler = () => {
    setIsToggled((prevState) => !prevState);
    isToggled ? setTheme("LightMode") : setTheme("DarkMode");
  };

  // const handleLoginSuccess = () => {
  //   setIsAuthenticated(true);
  // };

  return (
    <BrowserRouter>
      <ToggleContext.Provider value={{ toggleHandler }}>
        <ThemeContext.Provider value={theme}>
          <div className="App">
            <ComponentHandler />
          </div>
        </ThemeContext.Provider>
      </ToggleContext.Provider>
    </BrowserRouter>
  );
}

export default App;
