import React from 'react'      // Need more efficient code
import styled from 'styled-components'


const Button = styled.button `
position: relative;
left: 16%;
width: 65%;
height: 38px;
font-weight: 600;
font-size: 15px;
color:#000000;
background: #FFFFFF;
border-radius: 37px;
border: 1px solid #060000;
display: inline-block;
`;

const Image = styled.img `
position:absolute;
width: 25px;
height: 25px;
display: flex;
margin-top: -3px;
`
function Googlelogin() {
   
    return (
        <Button type="submit" className='sgnup'>
            <Image src='google.svg'/>
            Login with Google
        </Button>
    )
}

export default Googlelogin