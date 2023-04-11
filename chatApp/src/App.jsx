import React,{createContext, useState} from 'react';
import Layoutgrid from './chat_system/Layoutgrid.jsx'
import io from 'socket.io-client'

const socket = io.connect("http://localhost:8080")


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
