import React from 'react'
import styled from 'styled-components'



function Circles(props) {
    const Circle = styled.div`
    width: ${props.width};
    height: ${props.height};
    background: ${props.color};
    border-radius: 50%;
    position: absolute;
    top: ${props.top};
    bottom: ${props.bottom};;
    left: ${props.left};
    right: ${props.right};

`
  return (
    <Circle></Circle>
  )
}

export default Circles