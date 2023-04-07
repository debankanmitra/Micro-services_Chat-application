import React from "react";
import './settings.css'
import styled from "styled-components";



function Shareprofile({share}) {
    return <div className="wrapper" onClick={share}>
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path fill="#0079FF"
            d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81c1.66 0 3-1.34 3-3s-1.34-3-3-3s-3 
        1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65c0 1.61 
        1.31 2.92 2.92 2.92c1.61 0 2.92-1.31 2.92-2.92s-1.31-2.92-2.92-2.92z"/></svg>

        <h2>Share Profile</h2>
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
function Sharediv(props) {
    let code = "JK56LMP0S"
    return( 
    <Div dis={props.show}>
        <H3>{code}</H3>
        <Svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path fill="#c3bcbc"
            d="M5 22q-.825 0-1.413-.588T3 20V6h2v14h11v2H5Zm4-4q-.825 0-1.413-.588T7 16V4q0-.825.588-1.413T9 2h9q.825 0 1.413.588T20 4v12q0 .825-.588 
        1.413T18 18H9Zm0-2h9V4H9v12Zm0 0V4v12Z"/></Svg>
    </Div>
)}

export default Shareprofile;
export { Sharediv };
