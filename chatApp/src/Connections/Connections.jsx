import React,{useEffect,useState} from 'react'
import styled from 'styled-components'
import Person from './Person'

let people = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 32 },
  { name: "Charlie", age: 18 },
  { name: "David", age: 47 },
  { name: "Eve", age: 21 },
  { name: "Karen", age: 31 },
  { name: "Luke", age: 29 },
  { name: "Mary", age: 26 },
  { name: "Nathan", age: 35 },
  { name: "Oliver", age: 23 },
  { name: "Peter", age: 48 },
  { name: "Quentin", age: 27 },
  { name: "Rachel", age: 33 },
  { name: "Samuel", age: 30 },
  { name: "Tina", age: 20 },
  { name: "Uma", age: 22 },
  { name: "Victor", age: 41 },
  { name: "Wendy", age: 38 },
  { name: "Xander", age: 36 },
  { name: "Yara", age: 39 },
  { name: "Zoe", age: 40 }
];

let API = 'http://localhost:4000/api/connections/vcp6Gs2xCtX27uEGiP4fCiTGH3M2'

const[showData,setData]= useState('');

const fetchApiData = async (url) =>  {
  try {
    const res = await fetch(url);
    const data = await res.json();
    setData(data);
  } catch (error) {
    console.log(error)
  }
}



const Div = styled.div `
    grid-row: 3/8;
    padding: 2rem;
    overflow-y: scroll;
    ::-webkit-scrollbar{
      display: none;
    }
`

function Conversation() {
  useEffect(() => {
    fetchApiData(API);
  },[])
  let items = people.map((prop, index) => <Person key={index} name={prop.name} age={prop.age}/>);
  return (
    <Div>
      {items}
    </Div>
  )
}

export default Conversation