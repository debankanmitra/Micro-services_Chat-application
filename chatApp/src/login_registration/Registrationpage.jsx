import React from 'react'
import styled from 'styled-components'
import Login from './Form';

function Registrationpage() {
  const Div = styled.div`
        width: 100vw;
        height:100vh;
        border: 1px solid red;
        display:grid;
        grid-template-columns:1fr 1fr;
        background: #F5F4F4;
  
  `
  const Div1 = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
  `
  const Div2 = styled.div`
      /* width: 50vw;
      height: 100vh; */
      display: flex;
      justify-content: center;
      align-items: center;
      background: #FCE0D4;
    `;
  return (
    <Div>
      <Div1>
        <Login />
      </Div1>
      <Div2>
        <Image src='chat.svg' />
      </Div2>
    </Div>
  )
}

export default Registrationpage