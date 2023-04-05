import React from 'react'
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
  border-right: 1px solid #E9E9E9;
  border-radius: 0px 40px 40px 0px;
  display: grid;
  place-items: center;
  background: #ECE2E3;
  grid-row: 1/8;
  display:  ${props => props.disp ? "" : 'none'};
`

function Settings(props) {
  return (
    <Div disp={props.disp}>
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