import React from 'react'      //TODO: Need more efficient code
import styled from 'styled-components'
import { signInWithGoogle } from './auth';


const Button = styled.button`
position: relative;
left: 16%;
width: 65%;
height: 38px;
font-weight: 600;
font-size: 15px;
color:#000000;
background: #FFFFFF;
border-radius: 37px;
border: 1px solid #E5D4D4;
display: inline-block;
`;

const Image = styled.img`   //TODO: Need to make this part responsive
position:absolute;
width: 25px;
height: 25px;
display: flex;
margin-top: -3px;
`
function Googlelogin() {
    const handleClick = (e) => {
        e.preventDefault() // prevent form-submission , redirection and reload , this event prevent the default behavior of an event from occurring
        signInWithGoogle() // initiate Firebase authentication
    }
    return (
        <Button type="submit" className='sgnup' onClick={handleClick}>
            <Image src='google.svg' />
            Login with Google
        </Button>
    )
}

export default Googlelogin