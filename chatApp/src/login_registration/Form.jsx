import React from 'react'
import styled from 'styled-components'
import Formfields from './Formfields';
import Googlelogin from './Googlelogin';

const FRorm = styled.form`
width:30%;
position: absolute; // removing the positioin causing problem but it should not
/* left:10%;
top:10%; 
border: 1px solid black; */
`
const Button = styled.button`
position: relative;
left: 16%;
width: 65%;
height: 38px;
font-weight: 600;
font-size: 15px;
color:#FFFFFF;
background: #553CFB;
border-radius: 37px;
border: 1px solid #553CFB;
margin-bottom: 5%;
`

    // const Fullform = styled.form`
    //     display: flex;
    //     flex-direction:column;
    //     gap:1.8rem;
    // `
    ;
let Form = () => {

    return (
        // <Div className='registration-form'>
        <>
            <FRorm action="/">
                <Formfields for='fname' name='Name' type='text' hide='' />
                <Formfields for="email" name='Email' type='email' hide='none' />
                <Formfields for="password" name='Password' type='password' hide='none' />
                <Button type="submit" className='sgnup'> SIGNUP </Button>
                <Googlelogin /> 
            </FRorm>

        </>
        // </Div>
    )
}

export default Form