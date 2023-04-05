import React from 'react'
import styled from 'styled-components'
import { Emoji } from '../Writemessage/Emoji'

const Div = styled.div `
    /* border: 2px solid blue; */
    grid-row: 3/8;
    padding: 2rem;
    display:  ${props => props.disp ? "" : 'none'};
`

function Conversation(props) {
  return (
    <Div disp={props.disp}>here are the Conversations
      
    </Div>
  )
}

export default Conversation