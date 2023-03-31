import React from 'react'
import styled from 'styled-components'

const Div1 = styled.div`
    width: 6%;
    height: 40px;
    display: grid;
    place-items: center;
    border-radius: 17px 0 0 17px;
    background: #EFF3F6;
    border-style:solid none solid solid;
    border-color:#BBBEC9;
    border-width:1px;
`

function Emoji() {
    return (
        <Div1>
            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24"><path fill="#0079FF"
                d="M20 12a8 8 0 0 0-8-8a8 8 0 0 0-8 8a8 8 0 0 0 8 8a8 8 0 0 0 8-8m2 0a10 10 0 0 1-10 10A10 10 0 0 1 2 12A10 10 0 0 1 12 2a10 10 0 0 1 10 
            10M10 9.5c0 .8-.7 1.5-1.5 1.5S7 10.3 7 9.5S7.7 8 8.5 8s1.5.7 1.5 1.5m7 0c0 .8-.7 1.5-1.5 1.5S14 10.3 14 9.5S14.7 8 15.5 8s1.5.7 1.5 1.5m-5 
            7.73c-1.75 0-3.29-.73-4.19-1.81L9.23 14c.45.72 1.52 1.23 2.77 1.23s2.32-.51 2.77-1.23l1.42 1.42c-.9 1.08-2.44 1.81-4.19 1.81Z"/></svg>
        </Div1>
    )
}

export default Emoji