import React from 'react'
import styled from 'styled-components'
import Close from './Close'
import Profilepic from './Profilepic'



const Div = styled.div`
width:500px;
height:100vh;
  background: yellow;
  /* grid-row: 1/8;
  display:  ${props => props.disp ? "" : 'none'}; */
`

function Settings(props) {
  return (
    <Div disp={props.disp} onClick={props.setDisplay}>
      <Close />
      <Profilepic/>
    </Div>
  )
}

export default Settings