import React from 'react'
import styled from 'styled-components'

const Div = styled.div `
    border: 2px solid red;
    position: relative;
    display: flex;
    justify-content: center;
    grid-row: 2/3;
`
const Input = styled.input `
    position: absolute;
    width: 80%;
    height: 40px;
    font-size: medium;
    padding-left: 20px;
    border: 1px solid #EFF3F6;
    border-radius: 26px;
    bottom: 0;
    background: #EFF3F6;
    ::placeholder {
        color: #BBBEC9;     
  }
`

const Img = styled.img`
    position: relative;
    top:10px;
    z-index: 1;
    width: 5%;
    margin-left: 60%;
   
`
function Searchlist() {
    return (

        <Div>
            <Input type="text" placeholder="Search"/>
            <Img src="./src/assets/Magnifier.svg" alt="" />
        </Div>

    )
}

export default Searchlist