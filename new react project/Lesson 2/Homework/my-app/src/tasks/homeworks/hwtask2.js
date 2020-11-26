import React from 'react'
import Row from './row'
import Cell from './cell'

/*

  Задание 2.

  Table -> 

  Написать Function компоненты для таблицы.
  
  Row -> Который выводит все дочерние элементы которые переданы внутрь
      -> Дополнительно можно передать параметр head="true" который сделает
        эту строку таблички заголовком. По умолчанию false. Должно быть
        прописано в DefaultProps

  Cell-> Компонент который выводит дочерний контент переданный внутрь.
      -> Можно передать параметр сколько ячеек (cells) занимает этот элемент
      -> Можно передать параметры с цветом текста и цветом фона
      -> Можно передать параметр с типом ячейки в зависимости от которого:
        a) type: DATE -> Данные выводятся курсивом
        б) type: NUMBER -> Данные выводятся справа
        в) type: MONEY -> Данные выводятся справа + появляется доп. параметр
          currency=$ который выводится после суммы.
          Если тип money и нету параметра с валютой выводить об этом
          предупреждение в консоль
        г) type: TEXT -> Данные выводятся слева.

  DefaultProps => {
    type: 'text',
    cells: 1
    background: 'transparent',
    color: 'black'
  }


  <Table>
    <Row head="true">
      <Cell type="" background="red">#</Cell>
      <Cell type="date">2</Cell>
      <Cell type="number">3</Cell>
      <Cell type="money" currency="$">4</Cell>
    </Row>
    <Row>
      <Cell type="" background="red">1</Cell>
      <Cell type="date">2</Cell>
      <Cell type="number">3</Cell>
      <Cell type="money" currency="$">4</Cell>
    </Row>
  </Table>
  
*/


function Table (props){

  return(

    <div>
      <h2>TASK 2</h2>
   <table style={{width: '60vw', border: '2px solid black'}}>
    <Row head='true'> 
      <Cell background='' color='blue'>First</Cell>
      <Cell background='' color='blue'type="number">Second</Cell>
      <Cell background='' color='blue' type="number">Third</Cell>
      <Cell background='' color='blue' type='money' currency='$'>Fourth</Cell>
    </Row>
    <Row > 
      <Cell background='lightblue'>Second Cell</Cell>
      <Cell type="number">222222222222</Cell>
      <Cell type="number">33333333333</Cell>
      <Cell type='money' currency='$'>44444444</Cell>
    </Row>
    <Row > 
    <Cell >Third Cell</Cell>
      <Cell type="number">222222222222</Cell>
      <Cell background='lightpink' type="number">33333333333</Cell>
      <Cell type='money' currency='$'>44444444</Cell>
    </Row>
  </table>
    </div>
  )


}


export default Table