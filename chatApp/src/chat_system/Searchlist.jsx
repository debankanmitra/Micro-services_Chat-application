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
    border: 1px solid #125384;
    border-radius: 26px;
    bottom: 0;
    background: #EFF3F6;
    ::placeholder {
        color: #BBBEC9;
        
  }
`
function Searchlist() {
    return (

        <Div>
            <Input type="text" placeholder="Search"></Input>
        </Div>

    )
}

export default Searchlist