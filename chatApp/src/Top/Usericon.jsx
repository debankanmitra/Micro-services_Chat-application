import React from 'react'
import styled from 'styled-components'

const Svg = styled.svg`
  margin: 0;
`

function Usericon({setDisplay}) {
  return (
    
        <Svg onClick={setDisplay} xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><path fill="#0079FF" 
        d="M16 8a5 5 0 1 0 5 5a5 5 0 0 0-5-5Z"/><path fill="#0079FF" d="M16 2a14 14 0 1 0 14 14A14.016 14.016 0 0 0 16 2Zm7.992 22.926A5.002 
        5.002 0 0 0 19 20h-6a5.002 5.002 0 0 0-4.992 4.926a12 12 0 1 1 15.985 0Z"/></Svg>
  
  )
}

export default Usericon