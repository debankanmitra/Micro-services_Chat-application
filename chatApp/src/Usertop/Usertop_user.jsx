import React from 'react'
import styled from 'styled-components'

const Div = styled.div`
  font-size: 20px;
  display: flex;
  gap: 10px;
  /* flex-grow: 1;  NEW WAY TO ADD SPACE BETWEEN TWO DIFFERENT SPACE ITEMS*/
`
const Svg = styled.svg`
  margin: 0;
`
const H1 = styled.div`
  font-size: 20px;
  font-weight: 600;
`
const H = styled.div`
  display: flex;
  align-items: center;
  gap: 2px;
`

const H2 = styled.div`
  font-size: 11px;
  font-weight: 600;
`

function Usertop_user() {
  return (
    <Div>
      <Svg xmlns="http://www.w3.org/2000/Svg" width="40" height="40" viewBox="0 0 32 32"><path fill="#0079FF"
        d="M16 8a5 5 0 1 0 5 5a5 5 0 0 0-5-5Z" /><path fill="#0079FF" d="M16 2a14 14 0 1 0 14 14A14.016 14.016 0 0 0 16 2Zm7.992 22.926A5.002 
        5.002 0 0 0 19 20h-6a5.002 5.002 0 0 0-4.992 4.926a12 12 0 1 1 15.985 0Z"/></Svg>

      <div>
        <H1>Louis</H1>
        <H><Svg xmlns="http://www.w3.org/2000/Svg" width="10" height="10" viewBox="0 0 24 24">
          <path fill="#46D016" d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10s10-4.47 10-10S17.53 2 12 2z" /></Svg><H2>Active</H2></H>
      </div>
    </Div>
  )
}

export default Usertop_user