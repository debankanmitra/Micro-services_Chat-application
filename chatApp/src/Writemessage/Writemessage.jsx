import React , {useState} from 'react'
import styled from 'styled-components'
import Emojiicon from './Emoji'
import { Emoji } from './Emoji'

const Div = styled.div`
    /* border: 2px solid green; */
    grid-row: 7/8;
    height: 10vh;
    display: flex;
    justify-content: center;
    align-items: center;
`

const Div2 = styled.div`
    position: relative;
    width: 60%;
    height: 40px;
    background: #EFF3F6;
    border-style:solid none solid none;
    border-color:#BBBEC9;
    border-width:1px;
    
`
const Input = styled.input`
    position: relative;
    width: 98.5%;
    height: 35px;
    background: #EFF3F6;
    border: 1px solid #EFF3F6;
    ::placeholder {
        color: #BBBEC9;    
        font-size: medium; 
  }
    :focus{
    outline: none;
}
`
const Div3 = styled.div`
    width: 6%;
    height: 40px;
    display: grid;
    place-items: center;
    background: #EFF3F6;
    border-style:solid none solid none;
    border-color:#BBBEC9;
    border-width:1px;
    
`
const Div4 = styled.div`
    width: 6%;
    height: 40px;
    display: grid;
    place-items: center;
    border-radius: 0 17px 17px 0;
    background: #EFF3F6;
    border-style:solid solid solid none;
    border-color:#BBBEC9;
    border-width:1px;
    
`
function Writemessage() {
    const [display, setDisplay] = useState('none');
    const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
    if (count%2==0) setDisplay('block');
    else setDisplay('none');
  };
    return (
        
        <Div>           
            <Emojiicon onClick={handleClick} />
            <Emoji display={display}/> 
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