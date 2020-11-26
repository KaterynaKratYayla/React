import React from 'react'
import './index.css'
// import Cell from './cell'

function Row (props) {
   const {head} = props;

    console.log(head)

    return (
             <tr className = {head === 'true' ? 'header' : null} >
                {props.children}
            </tr>
       );
    }

    Row.defaultProps = {
      head: 'false',
    }

export default Row