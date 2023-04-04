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

function Notifications() {
  return <Div>
  <Svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path fill="#0079FF" 
  d="M21 19v1H3v-1l2-2v-6c0-3.1 2.03-5.83 5-6.71V4a2 2 0 0 1 2-2a2 2 0 0 1 2 2v.29c2.97.88 5 3.61 5 6.71v6l2 2m-7 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2"/></Svg>

  <H>Notifications</H>
</Div>
}

export default Notifications;
