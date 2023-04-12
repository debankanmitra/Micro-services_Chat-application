import React, { useContext, useState } from 'react'
import { ThemeContext } from '../App'
import styled from 'styled-components'
import { socket } from './Writemessage'

const Div = styled.div`
    border: 2px solid ${props => props.val ? '#121316' : '#EDF0F6'};
    grid-row: 2/7;
    margin: 5px 20px 10px 20px;
    padding: 2%;
    border-radius: 35px;
    background: ${props => props.val ? '#121316' : '#EDF0F6'};
`
const P = styled.p`
    max-width: 30%;   // see pedrotech to fix width
    background-color: #f2f2f2; 
    margin: 0px 0px 0px 20px;
    border: 1px solid #6382c0;
    background: #6382c0;
    border-radius: 5px;
    padding:5px;
    overflow-wrap: break-word; /* Use the break-word value to break the text if it exceeds the box width */

`

function Messagescreen() {
  const[messageList,setMessageList]= useState([]);
  socket.on("recieve_message", (value) => {  // using io.emit sending messages to both the participant we can view pedrotech to apply which side the sender's message will be shown but only after the authenticaiton
    setMessageList([...messageList, value])
  });
  const { Darkmode } = useContext(ThemeContext);

  return (
    <Div val={Darkmode}>
      {messageList.map((message, index) => ( <P key={index}>{message}</P> ))}
    </Div>
  )
}

export default Messagescreen