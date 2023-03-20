import React from 'react'
import styled from 'styled-components'
import Form from './Form';

const Div = styled.div `
  width: 100vw;
  height: 100vh;
  display: grid;
  grid-template-columns: 1fr 1fr;
  background: #F5F4F4;
  /* box-sizing: border-box; */
`
const Div1 = styled.div `
/* display: flex;
justify-content: center;
align-items: center; */
border: 1px solid blue;
`
const Div2 = styled.div `
/* width: 50vw;
height: 100vh; */
/* display: flex;
justify-content: center;
align-items: center; */
background: #FCE0D4;
border: 1px solid green;
`;

function Registrationpage() {
    return (
        <Div>
            <Div1>
                {/* <Form /> */}
                guguigu
            </Div1>
            <Div2>
                {/* <Image src='chat.svg' /> */}
                igydh
            </Div2>
        </Div>
    )
}

export default Registrationpage