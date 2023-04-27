import React from "react";
import styled from "styled-components";

const img = localStorage.getItem("profilePic");
console.log(img);
const Div = styled.div`
    width: 99%;
    display: grid;
    place-items: center;
`;

const Div1 = styled.div`
    width: 150px;
    height: 150px;
    border-radius: 75px;
    margin-top: 10px;
    background-image: url("${img}");
    background-size: cover;
    background-position: center; 
`;

const H = styled.h1`
    font-size: 1em;
    font-weight:700;
`;

function Profilepic() {
  return <Div>
    <Div1 img={img}/>
    <H>{localStorage.getItem("name")}</H>
  </Div>;
}

export default Profilepic;
