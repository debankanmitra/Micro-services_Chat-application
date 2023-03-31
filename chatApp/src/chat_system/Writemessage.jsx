import React from 'react'
import styled from 'styled-components'

const Div = styled.div`
    border: 2px solid green;
    grid-row: 7/8;
    height: 10vh;
    display: flex;
    justify-content: center;
    align-items: center;
`
const Div1 = styled.div`
    width: 6%;
    height: 40px;
    border: 1px solid #dd0baf;
`
const Div2 = styled.div`
    position: relative;
    width: 60%;
    height: 40px;
    border: 1px solid #dd0baf;
    
`
const Input = styled.input`
    position: relative;
    width: 98.5%;
    height: 35px;
`
const Div3 = styled.div`
    width: 6%;
    height: 40px;
    border: 1px solid #dd0baf;
    
`
const Div4 = styled.div`
    width: 6%;
    height: 40px;
    border: 1px solid #dd0baf;
    
`
function Writemessage() {
    return (
        <Div>
            <Div1>
                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24"><path fill="#0079FF"
                    d="M20 12a8 8 0 0 0-8-8a8 8 0 0 0-8 8a8 8 0 0 0 8 8a8 8 0 0 0 8-8m2 0a10 10 0 0 1-10 10A10 10 0 0 1 2 12A10 10 0 0 1 12 2a10 10 0 0 1 10 
            10M10 9.5c0 .8-.7 1.5-1.5 1.5S7 10.3 7 9.5S7.7 8 8.5 8s1.5.7 1.5 1.5m7 0c0 .8-.7 1.5-1.5 1.5S14 10.3 14 9.5S14.7 8 15.5 8s1.5.7 1.5 1.5m-5 
            7.73c-1.75 0-3.29-.73-4.19-1.81L9.23 14c.45.72 1.52 1.23 2.77 1.23s2.32-.51 2.77-1.23l1.42 1.42c-.9 1.08-2.44 1.81-4.19 1.81Z"/></svg>
            </Div1>
            <Div2>
            <Input type="text" placeholder="Write Messages" />
            </Div2>
            <Div3>
                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 16 16"><path fill="#0079FF"
                    d="m3.258 8.707l4.596-4.596a2.5 2.5 0 0 1 3.536 3.536L6.086 12.95a1 1 0 0 1-1.414-1.414l5.303-5.304a.5.5 0 0 0-.707-.707L3.965 10.83a2 2 0 1 0 
            2.828 2.828l5.304-5.303a3.5 3.5 0 0 0-4.95-4.95L2.55 8a.5.5 0 1 0 .707.707Z"/></svg>
            </Div3>
            <Div4>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 16 16"><path fill="#0079FF"
                    d="M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855H.766l-.452.18a.5.5 0 0 0-.082.887l.41.26l.001.002l4.995 3.178l3.178 4.995l.002.002l.26.41a.5.5 0 0 0 .886-.083l6-15Zm-1.833 
            1.89L6.637 10.07l-.215-.338a.5.5 0 0 0-.154-.154l-.338-.215l7.494-7.494l1.178-.471l-.47 1.178Z"/></svg>
            </Div4>
        </Div>
    )
}

export default Writemessage