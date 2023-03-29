import React from 'react'
import styled from 'styled-components'
import Usericon from './Usericon'
import Videocall from './Videocall'

const Div = styled.div`
    border: 2px solid black;
    grid-row: 1/2;
    display: flex;
    margin: 0;
`
const H = styled.div`
    /* position: absolute; */
`
function Top() {
  return (
    <Div>
        <Usericon/>
        <H>Messages</H>
        <Videocall/>
    </Div>
  )
}

export default Top