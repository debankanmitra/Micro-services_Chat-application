import React from 'react'
import styled from 'styled-components'

function Forminput(props) {
    const Label = styled.label `
  font-weight: 600;
  font-size: 20px;
  line-height: 10px;
  color: #8F8FAC;
  float: left;
  `
    const Input = styled.input `
  width: 340px;
  height: 33px;
  background: #FFFFFF;
  border: 1px solid #D9D9D9;
  border-radius: 10px;
  margin-bottom: 25px;
  `

    return (
        <div>
            <Label htmlFor={props.for}>{props.name}</Label>
            <br/>
            <Input type={props.type}/>
        </div>
    )
}

export default Forminput