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

function Emojiicon(props) {
    return (
        <Div1 onClick={props.onClick}>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="26"
                height="26"
                viewBox="0 0 24 24"><path
                    fill="#0079FF"
                    d="M20 12a8 8 0 0 0-8-8a8 8 0 0 0-8 8a8 8 0 0 0 8 8a8 8 0 0 0 8-8m2 0a10 10 0 0 1-10 10A10 10 0 0 1 2 12A10 10 0 0 1 12 2a10 10 0 0 1 10
            10M10 9.5c0 .8-.7 1.5-1.5 1.5S7 10.3 7 9.5S7.7 8 8.5 8s1.5.7 1.5 1.5m7 0c0 .8-.7 1.5-1.5 1.5S14 10.3 14 9.5S14.7 8 15.5 8s1.5.7 1.5 1.5m-5
            7.73c-1.75 0-3.29-.73-4.19-1.81L9.23 14c.45.72 1.52 1.23 2.77 1.23s2.32-.51 2.77-1.23l1.42 1.42c-.9 1.08-2.44 1.81-4.19 1.81Z"/></svg>
        </Div1>
    )
}

const Emo = styled.div`
    display:  ${props => props.display};
    position: fixed;
    bottom: 10%;
    left: 33%;
    padding: 2px 0px 2px 0px;
    border-radius: 10px;
    background: rgb(8 5 2 / 15%);
    width: 197px;
    height: 140px;
    overflow-y: scroll;
    ::-webkit-scrollbar {
    display: none;
}
    &>span{                           // the & selector represents the current selector
        margin:4px;
    }
    &>span:hover{
        background: #75b3e3;
        cursor: pointer;
    }
    
`
function Emoji(props) {

    return (
        <Emo display={props.display} className='emoji'>
            <span onClick={props.onClick}>&#128512;</span>
            <span onClick={props.onClick}>&#128513;</span>
            <span onClick={props.onClick}>&#128514;</span>
            <span onClick={props.onClick}>&#128515;</span>
            <span onClick={props.onClick}>&#128516;</span>
            <span onClick={props.onClick}>&#128517;</span>
            <span onClick={props.onClick}>&#128518;</span>
            <span onClick={props.onClick}>&#128519;</span>
            <span onClick={props.onClick}>&#128520;</span>
            <span onClick={props.onClick}>&#128521;</span>
            <span onClick={props.onClick}>&#128522;</span>
            <span onClick={props.onClick}>&#128523;</span>
            <span onClick={props.onClick}>&#128524;</span>
            <span onClick={props.onClick}>&#128525;</span>
            <span onClick={props.onClick}>&#128526;</span>
            <span onClick={props.onClick}>&#128527;</span>
            <span onClick={props.onClick}>&#128528;</span>
            <span onClick={props.onClick}>&#128529;</span>
            <span onClick={props.onClick}>&#128530;</span>
            <span onClick={props.onClick}>&#128531;</span>
            <span onClick={props.onClick}>&#128532;</span>
            <span onClick={props.onClick}>&#128533;</span>
            <span onClick={props.onClick}>&#128534;</span>
            <span onClick={props.onClick}>&#128535;</span>
            <span onClick={props.onClick}>&#128536;</span>
            <span onClick={props.onClick}>&#128537;</span>
            <span onClick={props.onClick}>&#128538;</span>
            <span onClick={props.onClick}>&#128539;</span>
            <span onClick={props.onClick}>&#128540;</span>
            <span onClick={props.onClick}>&#128541;</span>
            <span onClick={props.onClick}>&#128542;</span>
            <span onClick={props.onClick}>&#128543;</span>
            <span onClick={props.onClick}>&#128544;</span>
            <span onClick={props.onClick}>&#128545;</span>
            <span onClick={props.onClick}>&#128546;</span>
            <span onClick={props.onClick}>&#128547;</span>
            <span onClick={props.onClick}>&#128548;</span>
            <span onClick={props.onClick}>&#128549;</span>
            <span onClick={props.onClick}>&#128550;</span>
            <span onClick={props.onClick}>&#128551;</span>
            <span onClick={props.onClick}>&#128552;</span>
            <span onClick={props.onClick}>&#128553;</span>
            <span onClick={props.onClick}>&#128554;</span>
            <span onClick={props.onClick}>&#128555;</span>
            <span onClick={props.onClick}>&#128556;</span>
            <span onClick={props.onClick}>&#128557;</span>
            <span onClick={props.onClick}>&#128558;</span>
            <span onClick={props.onClick}>&#128559;</span>
            <span onClick={props.onClick}>&#128560;</span>
            <span onClick={props.onClick}>&#128561;</span>
            <span onClick={props.onClick}>&#128562;</span>
            <span onClick={props.onClick}>&#128563;</span>
            <span onClick={props.onClick}>&#128564;</span>
            <span onClick={props.onClick}>&#128565;</span>
            <span onClick={props.onClick}>&#128566;</span>
            <span onClick={props.onClick}>&#128567;</span>
            <span onClick={props.onClick}>&#128568;</span>
            <span onClick={props.onClick}>&#128569;</span>
            <span onClick={props.onClick}>&#128570;</span>
            <span onClick={props.onClick}>&#128571;</span>
            <span onClick={props.onClick}>&#128572;</span>
            <span onClick={props.onClick}>&#128573;</span>
            <span onClick={props.onClick}>&#128574;</span>
            <span onClick={props.onClick}>&#128575;</span>
            <span onClick={props.onClick}>&#128576;</span>
            <span onClick={props.onClick}>&#128577;</span>
            <span onClick={props.onClick}>&#128578;</span>
            <span onClick={props.onClick}>&#128579;</span>
            <span onClick={props.onClick}>&#128580;</span>
            <span onClick={props.onClick}>&#128581;</span>
            <span onClick={props.onClick}>&#128582;</span>
            <span onClick={props.onClick}>&#128583;</span>
            <span onClick={props.onClick}>&#128584;</span>
            <span onClick={props.onClick}>&#128585;</span>
            <span onClick={props.onClick}>&#128586;</span>
            <span onClick={props.onClick}>&#128587;</span>
            <span onClick={props.onClick}>&#128588;</span>
            <span onClick={props.onClick}>&#128589;</span>
            <span onClick={props.onClick}>&#128590;</span>
            <span onClick={props.onClick}>&#128591;</span>

            {/* function EmojiPicker(props) {
            const emojis = ['😀', '😁', '😂', '🤣', '😃', '😄', '😅', '😆'];

            return (
            <div>
                {emojis.map((emoji) => (
                    <span key={emoji} onClick={() => props.onClick(emoji)}> {emoji} </span>
                ))}
            </div>
            );
} */}

        </Emo>
    )
}

export default Emojiicon
export { Emoji }
