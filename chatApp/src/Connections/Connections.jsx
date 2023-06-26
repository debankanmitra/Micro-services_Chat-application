import React,{useEffect,useState} from 'react'
import styled from 'styled-components'
import Person from './Person'






const Div = styled.div `
    grid-row: 3/8;
    padding: 2rem;
    overflow-y: scroll;
    ::-webkit-scrollbar{
      display: none;
    }
`

function Conversation() {
const[showData,setData]= useState([]);
let id = localStorage.getItem("Uuid");
let API = `http://localhost:4000/api/connections/${id}`
const fetchApiData = async (url) =>  {
  try {
    const res = await fetch(url);
    const data = await res.json();
    //console.log(data);
    setData(data);
  } catch (error) {
    console.log(error)
  }
}
  useEffect(() => {
    fetchApiData(API);
  },[])
  //let items = showData.map((user,id) => (<Person key={id} name={user.Name} age={user.Friendid}/>));
  //console.log(showData)
  return (
    <Div>
      {/* {showData.map((user,id) => (<div key={id}>{user.Name}</div>))} */}
      {showData && showData.map((user,id) => (<Person key={id} name={user.Name} img={user.Pic} chat_id={user.Chatid}/>))}
    </Div>
  )
}

export default Conversation