import React from 'react'
import './index.css'

// -> Можно передать параметр сколько ячеек (cells) занимает этот элемент
//       -> Можно передать параметры с цветом текста и цветом фона
//       -> Можно передать параметр с типом ячейки в зависимости от которого:
//         a) type: DATE -> Данные выводятся курсивом
//         б) type: NUMBER -> Данные выводятся справа
//         в) type: MONEY -> Данные выводятся справа + появляется доп. параметр
//           currency=$ который выводится после суммы.
//           Если тип money и нету параметра с валютой выводить об этом
//           предупреждение в консоль
//         г) type: TEXT -> Данные выводятся слева.

function Cell (props) {

   const {background, type, currency} = props;

   

    return (
    
    <th style={{color: props.color, backgroundColor: background, border: props.border, padding: props.padding}}>{props.children}</th>
    )

  }

  Cell.defaultProps = {
    background: 'lightgreen',
    color: 'black',
    type: 'text',
    border: '2px solid black',
    padding: '1vw'
  }

export default Cell