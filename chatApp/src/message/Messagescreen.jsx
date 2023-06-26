import React, {useEffect, useContext, useState } from 'react'
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
    max-width: 30%;   //TODO: see pedrotech to fix width
    background-color: #f2f2f2; 
    margin: 0px 0px 0px 20px;
    border: 1px solid #6382c0;
    background: #6382c0;
    border-radius: 5px;
    padding:5px;
    overflow-wrap: break-word; /* Use the break-word value to break the text if it exceeds the box width */

`

function Messagescreen() {

  const [messageList, setMessageList] = useState([]);
  const[showData,setData]= useState([]);
  const { Darkmode } = useContext(ThemeContext);
  
  socket.on("recieve_message", (value) => {  // using io.emit sending messages to both the participant we can view pedrotech to apply which side the sender's message will be shown but only after the authenticaiton
    //setData([...showData,value.value])
    setData([...showData,{_id: '', value: value.value, sender: ''}])
    console.log("receive message", value)
    console.log("show data", showData)
    //setMessageList([...messageList,value])

  });

  let id = localStorage.getItem("key");
  let API = `http://localhost:8080/api/messages/${id}`;


    const fetchApiData = async (url) => {
      try{
        const res = await fetch(url);
        const data = await res.json();
        console.log(data)
        setData(data);
        //console.log("mesage list is ",showData)
      }catch (error) {
        console.log(error)
        //setData([]);
      }
    }

    


  
 useEffect(() => {
  fetchApiData(API);
}, [API]);
  
  return (
    <>
    
    <Div val={Darkmode}>
      {/* {messageList && messageList.map((message, index) => (<P key={index}>{message}</P>))} */}
      {showData && showData.map((message, index) => (<P key={index}>{message.value}</P>))}
    </Div>
    </>
  )
}

export default Messagescreen
//export  {fetc,Messagescreen};