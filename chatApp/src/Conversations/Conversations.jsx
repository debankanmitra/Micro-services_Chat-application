import React from 'react'
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


const Div = styled.div `
    grid-row: 3/8;
    padding: 2rem;
    overflow-y: scroll;
    ::-webkit-scrollbar{
      display: none;
    }
`

function Conversation() {
  let items = people.map(p => <Person name={p.name} age={p.age}/>);
  return (
    <Div>
      {items}
    </Div>
  )
}

export default Conversation