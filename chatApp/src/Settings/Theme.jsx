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

function Theme() {
    return <Div>
        <Svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 256 256"><path fill="#0079FF" 
        d="M233.54 142.23a8 8 0 0 0-8-2a88.08 88.08 0 0 1-109.8-109.8a8 8 0 0 0-10-10a104.84 104.84 0 0 0-52.91 37A104 104 0 0 0 
        136 224a103.09 103.09 0 0 0 62.52-20.88a104.84 104.84 0 0 0 37-52.91a8 8 0 0 0-1.98-7.98Zm-44.64 48.11A88 88 0 0 1 65.66 67.11a89 89 0 0 1 
        31.4-26A106 106 0 0 0 96 56a104.11 104.11 0 0 0 104 104a106 106 0 0 0 14.92-1.06a89 89 0 0 1-26.02 31.4Z"/></Svg>

        <H>Appearance</H >
    </Div>
}

export default Theme;