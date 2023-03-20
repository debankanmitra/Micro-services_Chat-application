import React from 'react'
import styled from 'styled-components'

function Formfields(props) {

const Label = styled.label `
font-weight: 600;
font-size: 1.3em;
line-height: 10px;
color: #8F8FAC;
float: left;
`
  const Input = styled.input `
width: 95%;
height: 33px;
background: #FFFFFF;
border: 1px solid #150202;
border-radius: 10px;
margin-bottom: 20px;
`
const Head = styled.div `
margin-bottom: 60px;
display: ${props.hide};

`
const H2 = styled.h2 `
font-weight: 600;
font-size: 2.5em;
margin: 0;
`
const P = styled.p `
margin: 0;
color: #8888A8;
font-weight: 600;
font-size: 18px;

`

    return (
        <>
        <Head>
                <H2>Sign Up</H2>
                <P>Create account to start chatting</P>
        </Head>
        <div>
            <Label htmlFor={props.for}>{props.name}</Label>
            <br/>
            <Input type={props.type}/>
        </div>

        </>
    )
}

export default Formfields