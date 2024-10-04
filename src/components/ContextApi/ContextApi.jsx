import { createContext } from "react";

export const ThemeContext = createContext('LightMode');
export const ToggleContext = createContext({
    // isToggled: false,
    toggleHandler: () => { },
});