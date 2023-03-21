import React from 'react'
import styled from 'styled-components'
import Conversation from './Conversations'
import Searchlist from './Searchlist'

const Div = styled.body`
    display: grid;
    grid-template-columns: 1.1fr 2fr;
    grid-template-rows: repeat(2,1fr) 8fr;
`
const Top = styled.div`
    border: 2px solid black;
    grid-row: 1/2;
`
// const Searchlist = styled.div`
//     border: 2px solid red;
//     grid-row: 2/3;
// `
// const Conversations = styled.div`
//     border: 2px solid blue;
//     grid-row: 3/8;
// `
const Writemessage = styled.div `
    border: 2px solid green;
    grid-row: 7/8;
    height: 10vh;
`
const Messagescreen = styled.div `
    border: 2px solid brown;
    grid-row: 2/7;
    margin: 10px;
`
const Usertop = styled.div `
    border: 2px solid violet;
    grid-row: 1/2;
`
function Layoutgrid() {
  return (
    <Div>
        <Top>top</Top>
        <Usertop>usertop</Usertop>
        <Searchlist/>
        <Messagescreen>messagescreen</Messagescreen>
        {/* <Conversations><Conversation/></Conversations> */}
        <Conversation/>
        <Writemessage>writemesssage</Writemessage>

    </Div>
  )
}

export default Layoutgrid