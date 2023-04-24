import React from 'react'
import styled from 'styled-components'



const Circle = styled.div`
    width: ${props => props.width};
    height: ${props => props.height};
    background: ${props => props.color};
    border-radius: 50%;
    position: absolute;
    top: ${props => props.top};
    bottom: ${props => props.bottom};;
    left: ${props => props.left};
    right: ${props => props.right};
    `
function Circles(props) {
  return (
    <Circle width={props.width} height={props.height} color={props.color} top={props.top} bottom={props.bottom} left={props.left} right={props.right}></Circle>
  )
}

export default Circles