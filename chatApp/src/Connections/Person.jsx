import React from "react";
import styled from "styled-components";


//const img = localStorage.getItem("ProfilePic");
const Div = styled.div`
    border: 1px solid red;
    border-radius: 20px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
`
const Div1 = styled.div`
    width: 50px;
    height: 50px;
    border-radius: 75px;
    margin-top: 10px;
    background-image: url("${props => props.img}");
    background-size: cover;
    background-position: center; 
`
;

function Person({name , img}) {

  const getchat = () => {
    console.log("name :" ,name);
  }

  return <Div onClick={getchat}>
    <Div1 img={img}/>
    <p>{name}</p>
  </Div>;
}

export default Person;
