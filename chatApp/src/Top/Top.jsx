import React from 'react'
import styled from 'styled-components'
import Usericon from './Usericon'
import Videocall from './Videocall'

const Div = styled.div`
    /* border: 2px solid black; */
    grid-row: 1/2;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 22%;
`
const H = styled.div`
    font-size: 1.5em;
    font-weight:700;

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