import React, { useState, useContext } from 'react'
import { ThemeContext } from '../App'
import styled from 'styled-components'
import Emojiicon from './Emoji'
import { Emoji } from './Emoji'
import io from 'socket.io-client'

  const url = "http://localhost:8080"
  export const socket = io.connect(url)



// ----- Style - -- 
const Div = styled.div`
    grid-row: 7/8;
    height: 10vh;
    display: flex;
    justify-content: center;
    align-items: center;
`
const Messagearea = styled.div`
    position: relative;
    width: 60%;
    height: 40px;
    background: ${props => props.val ? '#27292D' : '#EFF3F6'};
    border-style:solid none solid none;
    border-color:${props => props.val ? '#27292D' : '#BBBEC9'};
    border-width:1px;
`
const Input = styled.input`
    position: relative;
    width: 98.5%;
    height: 35px;
    color: ${props => props.val && 'white'};
    background: ${props => props.val ? '#27292D' : '#EFF3F6'};
    border: 1px solid ${props => props.val ? '#27292D' : '#EFF3F6'};
    ::placeholder {
        color: ${props => props.val ? '#45474B' : '#BBBEC9'};
        font-size: medium; 
  }
    :focus{
    outline: none;
}
`
const Attachicon = styled.div`
    width: 6%;
    height: 40px;
    display: grid;
    place-items: center;
    background: ${props => props.val ? '#27292D' : '#EFF3F6'};
    border-style:solid none solid none;
    border-color:${props => props.val ? '#27292D' : '#BBBEC9'};
    border-width:1px;
`
const Sendicon = styled.div`
    width: 6%;
    height: 40px;
    display: grid;
    place-items: center;
    border-radius: 0 17px 17px 0;
    background: ${props => props.val ? '#27292D' : '#EFF3F6'};
    border-style:solid solid solid none;
    border-color:${props => props.val ? '#27292D' : '#BBBEC9'};
    border-width:1px;
`
// ----- style ---- 
function Writemessage() {
    const { Darkmode } = useContext(ThemeContext);
    const [display, setDisplay] = useState('none'); // TODO: instead of too many use state we can use Usereducer
    const [count, setCount] = useState(0);
    const [value, setvalue] = useState('');
    const [view, setview] = useState("0 0 24 24");
    const [path, setpath] = useState("M12 2a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3m7 9c0 3.53-2.61 6.44-6 6.93V21h-2v-3.07c-3.39-.49-6-3.4-6-6.93h2a5 5 0 0 0 5 5a5 5 0 0 0 5-5h2Z");

    const handleClick = () => {
        setCount(count + 1);  // in this function we can invoke the setccount function (like in pedro tech video 1:02:22 all hooks)using props in Emoji.jsx but not if else statement because the count variable is available only in this component 
        if (count % 2 == 0) setDisplay('block');
        else setDisplay('none');
    };

    const addemojitotext = (e) => {
        setvalue(value + e.target.textContent);
        setview("0 0 16 16")
        setpath("M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855H.766l-.452.18a.5.5 0 0 0-.082.887l.41.26l.001.002l4.995 3.178l3.178 4.995l.002.002l.26.41a.5.5 0 0 0 .886-.083l6-15Zm-1.833 1.89L6.637 10.07l-.215-.338a.5.5 0 0 0-.154-.154l-.338-.215l7.494-7.494l1.178-.471l-.47 1.178Z")
    }

    const inputchange = (e) => {
        setvalue(e.target.value)
        setview("0 0 16 16")
        setpath("M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855H.766l-.452.18a.5.5 0 0 0-.082.887l.41.26l.001.002l4.995 3.178l3.178 4.995l.002.002l.26.41a.5.5 0 0 0 .886-.083l6-15Zm-1.833 1.89L6.637 10.07l-.215-.338a.5.5 0 0 0-.154-.154l-.338-.215l7.494-7.494l1.178-.471l-.47 1.178Z")

    }

    const sendmsg = () => {
        if (value != "") {
            socket.emit("send_message", value);  // emitting to socket server
            setvalue("")
        }
    }

    return (
        <Div>
            {/* we can also directly: () => setDisplay('block')  -- https://fireship.io/courses/react/basics-conditional-rendering/*/}
            <Emojiicon onClick={handleClick} />
            <Emoji display={display} onClick={addemojitotext} />
            <Messagearea val={Darkmode}>
                <Input type="text" placeholder="Write Messages" value={value} onChange={inputchange} val={Darkmode} onKeyDown={event => event.key == 'Enter' && sendmsg()} />
            </Messagearea>

            <Attachicon val={Darkmode}>
                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 16 16"><path fill="#0079FF"
                    d="m3.258 8.707l4.596-4.596a2.5 2.5 0 0 1 3.536 3.536L6.086 12.95a1 1 0 0 1-1.414-1.414l5.303-5.304a.5.5 0 0 0-.707-.707L3.965 10.83a2 2 0 1 0 
            2.828 2.828l5.304-5.303a3.5 3.5 0 0 0-4.95-4.95L2.55 8a.5.5 0 1 0 .707.707Z"/></svg>
            </Attachicon>
            <Sendicon val={Darkmode}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox={view}><path fill="#0079FF"
                    d={path} onClick={sendmsg} /></svg>
            </Sendicon>
        </Div>
    )
}

export default Writemessage