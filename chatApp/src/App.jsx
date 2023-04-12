import React,{createContext, useState} from 'react';
import Layoutgrid from './chat_system/Layoutgrid.jsx'

export const ThemeContext = createContext(null);

function App() {
    const [Darkmode , setdarkmode]= useState(false);
    return (

        <ThemeContext.Provider value={{ Darkmode, setdarkmode }}>
        <Layoutgrid/>
        </ThemeContext.Provider>

       

    )
}

export default App
