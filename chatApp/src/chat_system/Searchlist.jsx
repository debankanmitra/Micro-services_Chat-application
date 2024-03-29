import React, { useContext } from 'react'
import styled from 'styled-components'
import { ThemeContext } from '../App'

const Div = styled.div`
    /* border: 2px solid red; */
    position: relative;
    display: flex;
    justify-content: center;
    grid-row: 2/3;
`
const Input = styled.input`
    color: ${props => props.val && 'white'};
    position: absolute;
    width: 84%;
    height: 40px;
    font-size: medium;
    padding-left: 20px;
    border: 1px solid ${props => props.val ? '#27292D' : '#EFF3F6'};
    border-radius: 17px;
    bottom: 0;
    background: ${props => props.val ? '#27292D' : '#EFF3F6'};
    ::placeholder {
        color:  ${props => props.val ? '#45474B' : '#BBBEC9'};  
  }
    :focus{
    outline: none;
}
`

const Svg = styled.svg`    // TODO: not efficient way try with write message technique
    position: relative;
    top:18px;
    margin-left: 65%; 
`
function Searchlist() {
    const { Darkmode } = useContext(ThemeContext);
    return (

        <Div>
            <Input type="text" placeholder="Search" val={Darkmode} />
            <Svg xmlns="http://www.w3.org/2000/svg" width="30px" height="30px" viewBox="0 0 20 20"><path fill={Darkmode ? "#8A8C90" : "#C1C7CE"} fillRule="evenodd" d="M9 3.5a5.5 5.5 0 1 0 0 
11a5.5 5.5 0 0 0 0-11ZM2 9a7 7 0 1 1 12.452 4.391l3.328 3.329a.75.75 0 1 1-1.06 1.06l-3.329-3.328A7 7 0 0 1 2 9Z" clipRule="evenodd" /></Svg>
        </Div>

    )
}

export default Searchlist