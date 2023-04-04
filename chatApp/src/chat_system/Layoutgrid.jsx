import React from 'react'
import styled from 'styled-components'
import Conversation from './Conversations'
import Searchlist from './Searchlist'
import Messagescreen from './Messagescreen'
import Top from '../Top/Top.jsx'
import Usertop from '../Usertop/Usertop'
import Writemessage from '../Writemessage/Writemessage'
import Settings from '../Settings/Settings'

const Div = styled.div`
    /* width: 100%; */
    height: 100vh;
    display: grid;
    grid-template-columns: 0.9fr 2fr;
    grid-template-rows: repeat(2,1fr) 8fr;
`

function Layoutgrid() {
  return (
    <Div>
      {/* <Settings/> */}
      <Top />
      <Usertop />
      <Searchlist />
      <Messagescreen />
      <Conversation />
      <Writemessage />

    </Div>
  )
}

export default Layoutgrid