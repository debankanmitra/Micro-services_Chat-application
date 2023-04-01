import React from 'react'
import styled from 'styled-components'

const Div1 = styled.div `
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

function Emojiicon() {
    return (
        <Div1>
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

const Emo = styled.div `
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
function Emoji() {
    return (
        <Emo className='emoji'>
            <span>&#128512;</span>
            <span>&#128513;</span>
            <span>&#128514;</span>
            <span>&#128515;</span>
            <span>&#128516;</span>
            <span>&#128517;</span>
            <span>&#128518;</span>
            <span>&#128519;</span>
            <span>&#128520;</span>
            <span>&#128521;</span>
            <span>&#128522;</span>
            <span>&#128523;</span>
            <span>&#128524;</span>
            <span>&#128525;</span>
            <span>&#128526;</span>
            <span>&#128527;</span>
            <span>&#128528;</span>
            <span>&#128529;</span>
            <span>&#128530;</span>
            <span>&#128531;</span>
            <span>&#128532;</span>
            <span>&#128533;</span>
            <span>&#128534;</span>
            <span>&#128535;</span>
            <span>&#128536;</span>
            <span>&#128537;</span>
            <span>&#128538;</span>
            <span>&#128539;</span>
            <span>&#128540;</span>
            <span>&#128541;</span>
            <span>&#128542;</span>
            <span>&#128543;</span>
            <span>&#128544;</span>
            <span>&#128545;</span>
            <span>&#128546;</span>
            <span>&#128547;</span>
            <span>&#128548;</span>
            <span>&#128549;</span>
            <span>&#128550;</span>
            <span>&#128551;</span>
            <span>&#128552;</span>
            <span>&#128553;</span>
            <span>&#128554;</span>
            <span>&#128555;</span>
            <span>&#128556;</span>
            <span>&#128557;</span>
            <span>&#128558;</span>
            <span>&#128559;</span>
            <span>&#128560;</span>
            <span>&#128561;</span>
            <span>&#128562;</span>
            <span>&#128563;</span>
            <span>&#128564;</span>
            <span>&#128565;</span>
            <span>&#128566;</span>
            <span>&#128567;</span>
            <span>&#128568;</span>
            <span>&#128569;</span>
            <span>&#128570;</span>
            <span>&#128571;</span>
            <span>&#128572;</span>
            <span>&#128573;</span>
            <span>&#128574;</span>
            <span>&#128575;</span>
            <span>&#128576;</span>
            <span>&#128577;</span>
            <span>&#128578;</span>
            <span>&#128579;</span>
            <span>&#128580;</span>
            <span>&#128581;</span>
            <span>&#128582;</span>
            <span>&#128583;</span>
            <span>&#128584;</span>
            <span>&#128585;</span>
            <span>&#128586;</span>
            <span>&#128587;</span>
            <span>&#128588;</span>
            <span>&#128589;</span>
            <span>&#128590;</span>
            <span>&#128591;</span>

        </Emo>
    )
}

export default Emojiicon
export {Emoji}
