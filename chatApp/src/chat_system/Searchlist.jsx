import React from 'react'
import styled from 'styled-components'

const Div = styled.div`
    /* border: 2px solid red; */
    position: relative;
    display: flex;
    justify-content: center;
    grid-row: 2/3;
    display:  ${props => props.disp ? "" : 'none'};
`
const Input = styled.input`
    position: absolute;
    width: 84%;
    height: 40px;
    font-size: medium;
    padding-left: 20px;
    border: 1px solid #EFF3F6;
    border-radius: 17px;
    bottom: 0;
    background: #EFF3F6;
    ::placeholder {
        color: #BBBEC9;     
  }
    :focus{
    outline: none;
}
`

const Svg = styled.svg`    // not efficient way try with write message technique
    position: relative;
    top:22px;
    margin-left: 65%; 
`
function Searchlist(props) {
    return (

        <Div disp={props.disp}>
            <Input type="text" placeholder="Search" />
            <Svg xmlns="http://www.w3.org/2000/svg" width="30px" height="30px" viewBox="0 0 20 20"><path fill="#C1C7CE" fillRule="evenodd" d="M9 3.5a5.5 5.5 0 1 0 0 
11a5.5 5.5 0 0 0 0-11ZM2 9a7 7 0 1 1 12.452 4.391l3.328 3.329a.75.75 0 1 1-1.06 1.06l-3.329-3.328A7 7 0 0 1 2 9Z" clipRule="evenodd" /></Svg>
        </Div>

    )
}

export default Searchlist