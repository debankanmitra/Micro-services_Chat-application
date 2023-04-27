import React, { StrictMode, createContext, useState } from 'react';
import Layoutgrid from './chat_system/Layoutgrid.jsx'
import Registrationpage from './login_registration/Registrationpage.jsx';

export const ThemeContext = createContext(null);

function App() {
    const [Darkmode , setdarkmode]= useState(false);

    const isLoggedIn = localStorage.getItem("emailVerified")
    
    return (

        <>
            {
                isLoggedIn ? 
                <ThemeContext.Provider value={{ Darkmode, setdarkmode }}>
                    <Layoutgrid />
                </ThemeContext.Provider>
                    :
                    <Registrationpage />
            }
        </>
    )
}

export default App
