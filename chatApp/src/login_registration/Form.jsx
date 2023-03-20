import React from 'react'
import styled from 'styled-components'
import Formfields from './Formfields';
import Googlelogin from './Googlelogin';
const Div = styled.div `
position: relative;
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

const H2 = styled.h2 `
position: absolute;
float: left;
font-weight: 600;
font-size: 40px;
`
const P = styled.p `
position: absolute;
float: left;
color: #8888A8;
font-weight: 600;
font-size: 18px;
margin-top: 62px;

`
const Cdiv = styled.div `
margin-bottom: 85px;
`

let Login = () => {
   
    return (
        <Div className='registration-form'>

            <Cdiv>
                <H2>Sign Up</H2><br/>
                <P>Create account to start chatting</P><br/>
            </Cdiv><br/>

            <form action="/">
                <Formfields for='fname' name='Name' type='text'/><br/>
                <Formfields for="email" name='Email' type='email'/><br/>
                <Formfields for="password" name='Password' type='password'/><br/>
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