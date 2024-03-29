import React from 'react'
import styled from 'styled-components' //TODO: need to make the texts responsive


const Label = styled.label `
font-weight: bold;
font-size: 1.3em;
margin-bottom: 1%;
color: #8F8FAC;
float: left;
`
  const Input = styled.input `
width: 95%;
height: 33px;
background: #FFFFFF;
border: 1px solid #F5F4F4;
border-radius: 10px;
margin-bottom: 6%;
`
const Head = styled.div `
margin-bottom: 15%;
display: ${props => props.hide};
`
const H2 = styled.h2 `
font-weight: bolder;
font-size: 2.5em;
margin: 0;
`
const P = styled.p `
margin: 0;
color: #8888A8;
font-weight: bold;
font-size: 18px;
`

function Formfields(props) {
    return (
        <>
        <Head hide={props.hide}>
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