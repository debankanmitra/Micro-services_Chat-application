import React,{useState,useContext} from 'react'
import styled from 'styled-components'
import Conversation from '../Conversations/Conversations'
import Searchlist from './Searchlist'
import Messagescreen from './Messagescreen'
import Top from '../Top/Top.jsx'
import Usertop from '../Usertop/Usertop'
import Writemessage from '../Writemessage/Writemessage'
import Settings from '../Settings/Settings'
import { createGlobalStyle } from 'styled-components';
import { ThemeContext } from '../App'


const GlobalStyle = createGlobalStyle`
  :root {
    font-family: 'Inter';
    -webkit-user-select: none;
    -ms-user-select: none;
    user-select: none;
    text-rendering: geometricPrecision;
    -webkit-font-smoothing: subpixel-antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-text-size-adjust: 100%; 
    color:${props => props.val? '#FFFFFF':'#213547'};
    background-color: ${props => props.val? '#181A1C':'#FFFFFF'};
  }
  body {
    width: 100vw;
    height: 100vh;
    margin: 0;
    padding: 0;
  }
`;

const Div = styled.div`
    height: 100vh;
    display: grid;
    grid-template-columns: 0.9fr 2fr;
    grid-template-rows: repeat(2,1fr) 8fr;
`

function Layoutgrid() {
  const [disp, setDisplay] = useState(true);
  const {Darkmode} = useContext(ThemeContext);
  
  return (
    
    <Div>
      <GlobalStyle val={Darkmode}/>
      <Settings disp={!disp} setDisplay={()=>{setDisplay(!disp)}}/>
      <Top setDisplay={()=>{setDisplay(!disp)}} />
      <Usertop />
      <Searchlist />
      <Messagescreen />
      <Conversation />
      <Writemessage />

    </Div>
  )
}

export default Layoutgrid