import React from "react";
import styled from "styled-components";

const Div = styled.div`
    width: 100%;
    border: 1px solid red;
    display: flex;
    align-items: center;
    position: relative;
`;
const Svg = styled.svg`
    margin-left: 13%;
`;
const H = styled.h2`
    font-size: 1em;
    font-weight:500;
    padding-left: 18%;
    position: relative;

`;

function Logout() {
  return <Div>
  <Svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path fill="#E70F0F" 
  d="M15.325 16.275q-.275-.325-.275-.737t.275-.688l1.85-1.85H10q-.425 0-.713-.288T9 
  12q0-.425.288-.713T10 11h7.175l-1.85-1.85q-.3-.3-.3-.713t.3-.712q.275-.3.688-.3t.687.275l3.6 3.6q.15.15.213.325t.062.375q0 
  .2-.062.375t-.213.325l-3.6 3.6q-.325.325-.713.288t-.662-.313ZM5 21q-.825 0-1.413-.588T3 19V5q0-.825.588-1.413T5 3h6q.425 0 .713.288T12 
  4q0 .425-.288.713T11 5H5v14h6q.425 0 .713.288T12 20q0 .425-.288.713T11 21H5Z"/></Svg>

  <H>Logout</H>
</Div>
}

export default Logout;
