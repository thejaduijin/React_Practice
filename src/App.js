import { useState } from 'react';
import './App.css';
import ComponentHandler from './components/ComponentHandler';
import { ThemeContext } from './components/ContextApi/ContextApi';

function App() {
  const [theme, setTheme] = useState('LightMode');
  const [toggle, setIsToggled] = useState(false);

  const handleToggle = () => {
    setIsToggled(!toggle);
    !toggle ? setTheme("LightMode") : setTheme("DarkMode");
  };

  return (
    <ThemeContext.Provider value={theme}>
      <div className="App">
        <ComponentHandler />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
