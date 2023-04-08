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
  background: #b1a7a7;
  display  : flex ;
  position: relative;
  justify-content: center; 
  align-items: center;
  transition: height 0.3s ease;
  ${props => props.dis && ` height: 50px;`}
  overflow:hidden;
`;
const Svg = styled.svg`
    margin-left: 13%;
`;
const H3 = styled.h3`
    margin: 0;
    font-size: 1em;
`;
function Adddiv(props) {
    let code = "JK56LMP0S"
    return( 
    <Div dis={props.show}>
        <H3>{code}</H3>
        <Svg onClick={()=>navigator.clipboard.writeText(code)} xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path fill="#c3bcbc"
            d="M5 22q-.825 0-1.413-.588T3 20V6h2v14h11v2H5Zm4-4q-.825 0-1.413-.588T7 16V4q0-.825.588-1.413T9 2h9q.825 0 1.413.588T20 4v12q0 .825-.588 
        1.413T18 18H9Zm0-2h9V4H9v12Zm0 0V4v12Z"/></Svg>
    </Div>
)}

export default Addpeople;
export {Adddiv};