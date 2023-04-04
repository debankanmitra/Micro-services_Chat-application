import React from "react";
import styled from "styled-components";

const Div = styled.div`
    width: 99%;
    border:1px solid red;
    display: grid;
    place-items: center;
`;

const Div1 = styled.div`
    width: 150px;
    height: 150px;
    border:1px solid red;
    border-radius: 75px;
    margin-top: 10px;
    background-image: url("orange.jpg");
    background-size: cover;
    background-position: center; 
`;

const H = styled.h1`
    font-size: 1em;
    font-weight:700;
`;

function Profilepic() {
  return <Div>
    <Div1/>
    <H>Maciej Kowalski</H>
  </Div>;
}

export default Profilepic;
