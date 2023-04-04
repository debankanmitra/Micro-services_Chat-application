import React from 'react'
import styled from 'styled-components'
import Close from './Close'
import Profilepic from './Profilepic'
import Profile from './Profile'
import Theme from './Theme'
import Notifications from './Notifications'
import Shareprofile from './Shareprofile'
import Logout from './Logout'



const Div = styled.div`
width:500px;
height:100vh;
  background: yellow;
  /* display: grid;
  place-items: center; */
  /* grid-row: 1/8;
  display:  ${props => props.disp ? "" : 'none'}; */
`

function Settings(props) {
  return (
    <Div disp={props.disp} onClick={props.setDisplay}>
      <Close />
      <Profilepic/>
      <Profile/>
      <Theme/>
      <Notifications/>
      <Shareprofile/>
      <Logout/>

    </Div>
  )
}

export default Settings