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


function Profile() {
    return (
        <Div>
            <Svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 256 256"><path fill="#0079FF"
                d="M230.92 212c-15.23-26.33-38.7-45.21-66.09-54.16a72 72 0 1 0-73.66 0c-27.39 8.94-50.86 27.82-66.09 54.16a8 8 0 1 0 
            13.85 8c18.84-32.56 52.14-52 89.07-52s70.23 19.44 89.07 52a8 8 0 1 0 13.85-8ZM72 96a56 56 0 1 1 56 56a56.06 56.06 0 0 1-56-56Z" /></Svg>

            <H>Profile</H >
        </Div>
    )
}



export default Profile;
