import React,{useContext} from 'react'
import { ThemeContext } from '../App'
import styled from 'styled-components'
import Close from './Close'
import Profilepic from './Profilepic'
import Profile from './Profile'
import Theme from './Theme'
import Notifications from './Notifications'
import Shareprofile from './Shareprofile'
import Logout from './Logout'
import Addpeople from './Addpeople'


const Div = styled.div`
  z-index: 9;
  width: 30vw;
  height: 100vh;
  position: absolute;
  border-right: 1px solid ${props =>props.val ? 'rgb(20 18 18)' :'#E9E9E9'};
  border-radius: 0px 40px 40px 0px;
  display: grid;
  place-items: center;
  background: ${props => props.val ? 'rgb(20 18 18)' : '#ECE2E3'};
  /* grid-row: 1/8; */
  /* display:  ${props => props.disp ? "" : 'none'}; */
  transform: translateX(-100%);
  transition: transform 0.3s ease;
  ${props => props.disp && `transform: translateX(0%);`}
  
`

function Settings(props) {
  const { Darkmode } = useContext(ThemeContext);
  return (
    <Div disp={props.disp} val={Darkmode}>
      <Close setDisplay={props.setDisplay}/>
      <Profilepic/>
      <Profile/>
      <Theme/>
      <Notifications/>
      <Shareprofile/>
      <Logout/>
      <Addpeople/>
    </Div>
  )
}

export default Settings