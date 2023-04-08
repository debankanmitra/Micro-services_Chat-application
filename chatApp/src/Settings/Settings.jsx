import React,{useContext ,  useState} from 'react'
import { ThemeContext } from '../App'
import styled from 'styled-components'
import Close from './Close'
import Profilepic from './Profilepic'
import Profile from './Profile'
import Theme from './Theme'
import Notifications from './Notifications'
import Shareprofile,{Sharediv} from './Shareprofile'
import Logout from './Logout'
import Addpeople , {Adddiv} from './Addpeople'


const Div = styled.div`
  z-index: 9;
  width: 30vw;
  height: 100vh;
  position: absolute;
  border-right: 1px solid ${props =>props.val ? 'rgb(20 18 18)' :'#E9E9E9'};
  border-radius: 0px 30px 30px 0px;
  display: grid;
  place-items: center;
  background: ${props => props.val ? 'rgb(38 36 36)' : '#ECE2E3'};
  transform: translateX(-100%);
  transition: transform 0.3s ease;
  ${props => props.disp && `transform: translateX(0%);`}
  overflow-y:scroll;
  ::-webkit-scrollbar {
    display: none;
}
`

function Settings(props) {
  const [showshare, setshare] = useState(false);
  const { Darkmode } = useContext(ThemeContext);
  return (
    <Div disp={props.disp} val={Darkmode}>
      <Close setDisplay={props.setDisplay}/>
      <Profilepic/>
      <Profile/>
      <Theme/>
      <Notifications/>
      <Shareprofile share={()=>setshare(!showshare)}/>
      <Sharediv show={showshare}/>
      <Logout/>
      <Addpeople share={()=>setshare(!showshare)}/>
      <Adddiv show={showshare}/>
    </Div>
  )
}

export default Settings