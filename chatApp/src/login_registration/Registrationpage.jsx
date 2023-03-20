import React from 'react'
import styled from 'styled-components'
import Form from './Form';
import Circles from './Circles';

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
overflow: hidden;
position:relative;
display: flex;
justify-content: center;
align-items: center;
background: #FCE0D4;
border: 1px solid green;

`
const Img = styled.img `
/* position:relative; */
    width: 80%;
    height: 90%;

    /* display: flex;
    align-items: center;
    justify-content: center; */
`
;


function Registrationpage() {
    return (
        <Div>
            <Div1>
                {/* <Form /> */}
                guguigu
            </Div1>
            <Div2>
                <Circles width='13%' height='13%' color='#EEEEFD' top='' right='' bottom='5%' left='29%'/>
                <Circles width='25%' height='25%' color='#EEEEFD' top='' right='-4%' bottom='-4%' left=''/>
                <Img src='chat.svg' />
                <Circles width='16%' height='16%' color='#FDE9E2' top='2%' right='18%' bottom='' left=''/>
                <Circles width='25%' height='25%' color='#FDE9E2' top='-6%' right='' bottom='' left='0%'/>
                
            </Div2>
        </Div>
    )
}

export default Registrationpage