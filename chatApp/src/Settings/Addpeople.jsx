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

function Addpeople() {
  return <Div>
  <Svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 20 20"><path fill="#0079FF" 
  d="M8 9a3 3 0 1 0 0-6a3 3 0 0 0 0 6Zm0 2a6 6 0 0 1 6 6H2a6 6 0 0 1 6-6Zm8-4a1 1 0 1 0-2 0v1h-1a1 1 0 1 0 0 2h1v1a1 1 0 1 0 2 0v-1h1a1 1 0 1 0 0-2h-1V7Z"/></Svg>

  <H>Add People</H >
</Div>
}

export default Addpeople;
