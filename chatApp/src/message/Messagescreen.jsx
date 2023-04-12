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
function Messagescreen() {

  const[messageList,setMessageList]= useState([]);
  socket.on("recieve_message", (value) => {
    setMessageList([...messageList, value])
  });
  const { Darkmode } = useContext(ThemeContext);



  return (
    <Div val={Darkmode}>
      {messageList.map((message, index) => ( <h4 key={index}>{message}</h4> ))}
    </Div>
  )
}

export default Messagescreen