import React from 'react'
import styled from 'styled-components'
import { Emoji } from '../Writemessage/Emoji'

const Div = styled.div `
    /* border: 2px solid blue; */
    grid-row: 3/8;
    padding: 2rem;
`

function Conversation() {
  return (
    <Div>here are the Conversations
      <Emoji/>
    </Div>
  )
}

export default Conversation