import React from 'react'
import styled from 'styled-components'
import Forminput from './Formfields';
import Googlelogin from './Googlelogin';

let Login = () => {
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
    const Form = styled.form`
       display: flex;
       align-items: center;
       justify-content: space-between;
`

    return (
        <Div className='registration-form'>

            <Cdiv>
                <H2>Sign Up</H2><br/>
                <P>Create account to start chatting</P><br/>
            </Cdiv><br/>

            <Form action="/">
                <Forminput for='fname' name='Name' type='text'/><br/>
                <Forminput for="email" name='Email' type='email'/><br/>
                <Forminput for="password" name='Password' type='password'/><br/>
                <Button type="submit" className='sgnup'>
                    SIGNUP
                </Button>
                <br/>
                <Googlelogin/>
            </Form>

        </Div>
    )
}

export default Login