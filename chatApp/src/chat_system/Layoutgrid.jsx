import React from 'react'
import styled from 'styled-components'
import Conversation from './Conversations'
import Searchlist from './Searchlist'
import Messagescreen from './Messagescreen'
import Top from './Top'
import Usertop from './Usertop'

const Div = styled.body`
    display: grid;
    grid-template-columns: 1.1fr 2fr;
    grid-template-rows: repeat(2,1fr) 8fr;
`

const Writemessage = styled.div `
    border: 2px solid green;
    grid-row: 7/8;
    height: 10vh;
`
function Layoutgrid() {
  return (
    <Div>
        <Top/>
        <Usertop/>
        <Searchlist/> 
        <Messagescreen/>
        {/* <Conversations><Conversation/></Conversations> */}
        <Conversation/>
        <Writemessage>writemesssage</Writemessage>

    </Div>
  )
}

export default Layoutgrid