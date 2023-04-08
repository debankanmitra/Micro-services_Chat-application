import React from "react";
import './settings.css'
import styled from "styled-components";




function Addpeople({share}) {
  return <div className="wrapper" onClick={share}>
  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 20 20"><path fill="#0079FF" 
  d="M8 9a3 3 0 1 0 0-6a3 3 0 0 0 0 6Zm0 2a6 6 0 0 1 6 6H2a6 6 0 0 1 6-6Zm8-4a1 1 0 1 0-2 0v1h-1a1 1 0 1 0 0 2h1v1a1 1 0 1 0 2 0v-1h1a1 1 0 1 0 0-2h-1V7Z"/></svg>

  <h2>Add People</h2>
</div>
}

const Div = styled.div`
  width: 80%;
  height: 0px;
  position: relative;
  display  : flex ;
  justify-content: center; 
  align-items: center;
  gap: 20px;
  transition: height 0.3s ease;
  ${props => props.dis && ` height: 50px;`}
  overflow:hidden;
`;

const Input = styled.input`
    width: 50%;
    font-size: small;
    padding: 4px 13px 4px 13px;
    border: 1px solid #0079FF;
    border-radius: 17px;
    background: #EFF3F6;
    ::placeholder {
        color: #BBBEC9;
        font-size  : 10px;
  }
    :focus{
    outline: none;
}`;

const Button = styled.button`
    padding: 4px 13px 4px 13px;
    background-color: #0079FF;
    border: 1px solid #0079FF;
    border-radius: 17px;
    color: white;
`;

function Adddiv(props) {
    let code = "JK56LMP0S"
    return( 
    <Div dis={props.show}>
         <Input type="text" placeholder="Paste your code" />
         <Button type="submit">Add</Button>
    </Div>
)}

export default Addpeople;
export {Adddiv};