import React from "react";
import styled from "styled-components";
//import { getData } from "../api";

const img = localStorage.getItem("ProfilePic");
const id = localStorage.getItem("Uuid");
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
  const data = localStorage.getItem("Name");
  //localStorage.setItem("profilePic", data?.ProfilePic);
  return <Div>
    <Div1 img={img}/>
    <H>{data}</H>
  </Div>;
}

export default Profilepic;
