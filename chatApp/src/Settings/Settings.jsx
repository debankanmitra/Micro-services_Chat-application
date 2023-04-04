import React from 'react'
import styled from 'styled-components'

const Div = styled.div`
  background: yellow;
  grid-row: 1/8;
  display:  ${props => props.disp ? "" : 'none'};
`

function Settings(props) {
  return (
    <Div disp={props.disp} onClick={props.setDisplay}>Settings</Div>
  )
}

export default Settings