import React from 'react'

/*

  Задание 1.
  Написать functional компонент, который будет выводить нам кнопку
  c определенными стилями, которая будет вполнять действие которое в
  неё передали.

*/

function MyButton (props) {

  const {item, changeState} = props;

  return(

    <button 
        onClick={changeState(item.index)}
        style={{fontWeight: 'bold'}}>
      {
        item.interviewed === true ? 'Interviewed' : "Not Interviewed" 
      }
    </button>
  )
}


export default MyButton