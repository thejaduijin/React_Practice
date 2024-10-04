import { useState } from 'react';
import './App.css';
import ComponentHandler from './components/ComponentHandler';
import { ThemeContext, ToggleContext } from './components/ContextApi/ContextApi';

function App() {
  const [theme, setTheme] = useState('LightMode');
  const [isToggled, setIsToggled] = useState(false);

  const toggleHandler = () => {
    setIsToggled((prevState) => !prevState);
    isToggled ? setTheme("LightMode") : setTheme("DarkMode");
  };

  return (
    <ToggleContext.Provider value={{ isToggled, toggleHandler }}>
      <ThemeContext.Provider value={theme}>
        <div className="App">
          <ComponentHandler />
        </div>
      </ThemeContext.Provider>
    </ToggleContext.Provider>
  );
}

export default App;
