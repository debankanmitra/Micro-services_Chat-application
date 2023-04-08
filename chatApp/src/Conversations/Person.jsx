import React from "react";
import styled from "styled-components";

const Div = styled.div`
    border: 1px solid red;
    width: 100%;
    display: flex;
`;

function Person({name , age}) {
  return <Div>
    <h1>{name}</h1>
    <p>{age}</p>
  </Div>;
}

export default Person;
