import React,{useState} from 'react'
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
  const [disp, setDisplay] = useState(true);
  
  return (
    <Div>
      <Settings disp={!disp} setDisplay={()=>{setDisplay(!disp)}}/>
      <Top setDisplay={()=>{setDisplay(!disp)}} disp={disp}/>
      <Usertop />
      <Searchlist disp={disp} />
      <Messagescreen />
      <Conversation disp={disp} />
      <Writemessage />

    </Div>
  )
}

export default Layoutgrid