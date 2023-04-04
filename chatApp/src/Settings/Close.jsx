import React from 'react'
import styled from 'styled-components'


const Div = styled.div`
    width:94%;
    height:7%;
    border:2px solid red;
    display:flex;
    align-items: center;
    justify-content: flex-end;
`
const H = styled.h2`
    position: relative;
    font-size: 1.5em;
    font-weight:700;
`
const Svg = styled.svg`
    position: relative;
    margin-left: 130px ;
`


function Close() {
  return (
    <Div>
      <H>Settings</H>
      <Svg xmlns="http://www.w3.org/2000/svg" width="35" height="40" viewBox="0 0 24 24"><path fill="#0079FF"
        d="M18.3 5.71a.996.996 0 0 0-1.41 0L12 10.59L7.11 5.7A.996.996 0 1 0 5.7 7.11L10.59 12L5.7 16.89a.996.996 0 1 0 1.41 1.41L12 13.41l4.89 
        4.89a.996.996 0 1 0 1.41-1.41L13.41 12l4.89-4.89c.38-.38.38-1.02 0-1.4z"/></Svg>
    </Div>
  )
}

export default Close