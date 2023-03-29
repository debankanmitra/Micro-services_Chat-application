import React from 'react'
import styled from 'styled-components'
import Usericon from './Usericon'
import Videocall from './Videocall'

const Div = styled.div`
    border: 2px solid black;
    grid-row: 1/2;
    display: flex;
    position: absolute;
    margin: 0;
`

function Top() {
  return (
    <Div>
        <Usericon/>
        <h4>Messages</h4>
        <Videocall/>
    </Div>
  )
}

export default Top