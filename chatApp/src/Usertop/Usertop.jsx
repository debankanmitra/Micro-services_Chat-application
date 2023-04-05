import React from 'react'
import styled from 'styled-components'
import Usertop_user from './Usertop_user'

const Div = styled.div`
    /* border: 2px solid violet; */
    grid-row: 1/2;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 65%;
    
`
const Div2 = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;

`
const Svg = styled.svg`
  margin: 0;
`
function Usertop() {
    return (
        <Div>

            <Usertop_user />

            <Div2>
                <Svg xmlns="http://www.w3.org/2000/Svg" width="32" height="32" viewBox="0 0 32 32"><path fill="#0079FF"
                    d="M26 29h-.17C6.18 27.87 3.39 11.29 3 6.23A3 3 0 0 1 5.76 3h5.51a2 2 0 0 1 1.86 1.26L14.65 8a2 2 0 0 1-.44 2.16l-2.13 2.15a9.37 
        9.37 0 0 0 7.58 7.6l2.17-2.15a2 2 0 0 1 2.17-.41l3.77 1.51A2 2 0 0 1 29 20.72V26a3 3 0 0 1-3 3ZM6 5a1 1 0 0 0-1 1v.08C5.46 12 8.41 26 25.94 27a1 
        1 0 0 0 1.06-.94v-5.34l-3.77-1.51l-2.87 2.85l-.48-.06c-8.7-1.09-9.88-9.79-9.88-9.88l-.06-.48l2.84-2.87L11.28 5Z"/></Svg>

                <Svg xmlns="http://www.w3.org/2000/Svg" width="32" height="32" viewBox="0 0 48 48"><path fill="#0079FF"
                    d="M8 12h22c2.2 0 4 1.8 4 4v16c0 2.2-1.8 4-4 4H8c-2.2 0-4-1.8-4-4V16c0-2.2 1.8-4 4-4z" /><path fill="#0079FF" d="m44 35l-10-6V19l10-6z" /></Svg>

                <Svg xmlns="http://www.w3.org/2000/Svg" width="32" height="32" viewBox="0 0 24 24"><g fill="none" stroke="#0079FF"><path strokeLinecap="round"
                    strokeLinejoin="round" strokeWidth="2" d="M8 12h.009m3.995 0h.01m3.977 0H16" /><circle cx="12" cy="12" r="10" strokeWidth="1.5" /></g></Svg>
            </Div2>
        </Div>
    )
}

export default Usertop