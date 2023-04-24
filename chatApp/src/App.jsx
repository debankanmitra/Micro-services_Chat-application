import React,{StrictMode, createContext, useState} from 'react';
import Layoutgrid from './chat_system/Layoutgrid.jsx'
import Registrationpage from './login_registration/Registrationpage.jsx';

export const ThemeContext = createContext(null);

function App() {
    const [Darkmode , setdarkmode]= useState(false);
    return (

        // <ThemeContext.Provider value={{ Darkmode, setdarkmode }}>
        // <Layoutgrid/>
        // </ThemeContext.Provider>
<StrictMode>
<Registrationpage/>
</StrictMode>
       

    )
}

export default App
