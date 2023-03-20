import React from 'react'
import styled from 'styled-components'
import Formfields from './Formfields';
import Googlelogin from './Googlelogin';

const Div = styled.div `
width:50%;
position: relative;
left:10%;
border: 1px solid black;
`
const Button = styled.button `
width: 243px;
height: 38px;
font-weight: 600;
font-size: 15px;
color:#FFFFFF;
background: #553CFB;
border-radius: 37px;
margin-bottom: 30px;
`;


let Login = () => {
   
    return (
        <Div className='registration-form'>

            <form action="/">
                <Formfields for='fname' name='Name' type='text' hide=''/><br/>
                <Formfields for="email" name='Email' type='email' hide='none'/><br/>
                <Formfields for="password" name='Password' type='password' hide='none'/><br/>
                <Button type="submit" className='sgnup'>
                    SIGNUP
                </Button>
                <br/>
                <Googlelogin/>
            </form>

        </Div>
    )
}

export default Login