import React from 'react'
import styled from 'styled-components'
//import Googlelogo from '/google.svg'
function Googlelogin() {
    const Button = styled.button `
      width: 243px;
      height: 38px;
      font-weight: 600;
      font-size: 15px;
      color:#000000;
      background: #FFFFFF;
      border-radius: 37px;
      border: 1px solid #E6D4D4;
      display: inline-block;
    `;

    const Image = styled.img `
      position:absolute;
      width: 25px;
      height: 25px;
      display: flex;
      margin-top: -3px;
    `
    return (
        <Button type="submit" className='sgnup'>
            <Image src='google.svg'/>
            Login with Google
        </Button>
    )
}

export default Googlelogin