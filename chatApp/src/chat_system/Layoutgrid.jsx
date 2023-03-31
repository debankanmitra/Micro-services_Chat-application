import React from 'react'
import styled from 'styled-components'
import Conversation from './Conversations'
import Searchlist from './Searchlist'
import Messagescreen from './Messagescreen'
import Top from '../Top/Top.jsx'
import Usertop from '../Usertop/Usertop'
import Writemessage from './Writemessage'

const Div = styled.body`
    display: grid;
    grid-template-columns: 1.1fr 2fr;
    grid-template-rows: repeat(2,1fr) 8fr;
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
        <Writemessage/>

    </Div>
  )
}

export default Layoutgrid