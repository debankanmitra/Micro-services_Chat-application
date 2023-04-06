import React,{useContext} from 'react'
import { ThemeContext } from '../App'
import styled from 'styled-components'

const Div = styled.div `
    border: 2px solid ${props =>props.val ? '#121316' :'#EDF0F6'};
    grid-row: 2/7;
    margin: 5px 20px 10px 20px;
    padding: 2%;
    border-radius: 35px;
    background: ${props =>props.val ? '#121316' :'#EDF0F6'};
`
function Messagescreen() {
  const { Darkmode } = useContext(ThemeContext);
  return (
    <Div val={Darkmode}>
       messagescreen Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam saepe molestiae debitis. Iusto nesciunt, ipsa necessitatibus impedit suscipit labore facilis magni voluptatibus quidem consequatur eveniet minus amet maxime nihil natus vel excepturi libero aliquam cumque minima, vero fuga repellendus sint nam. Id reprehenderit itaque porro iste molestias doloremque saepe blanditiis praesentium adipisci perferendis voluptate nostrum repudiandae ex dolorem dignissimos tempore debitis quod, placeat nobis incidunt, eveniet sed? Odit quibusdam beatae fugiat consectetur! Delectus veritatis ea omnis quisquam quos. Autem, eaque quos explicabo veniam in voluptas error unde reprehenderit ea quas officia debitis ex harum animi rerum illo. Obcaecati aliquam facilis quae animi eligendi optio, fugit qui facere nostrum, eius voluptatum nobis ducimus rem modi, ex nemo? Quibusdam labore maxime molestias, consectetur iusto provident cupiditate nisi quas vero, reiciendis, iste possimus architecto perferendis quam doloremque ullam dignissimos nesciunt. Totam, rerum incidunt cumque natus eligendi sequi enim aspernatur modi optio, placeat qui.
    </Div>
  )
}

export default Messagescreen