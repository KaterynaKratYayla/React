import React from 'react'
import PropTypes from 'prop-types'
import './index.css'


// import './App.css'
/*

  Задание 1:

    Написать кастомный компонент переключалки, который можно будет ре-использовать в форме.
    По примеру того, что мы разобрали в аудитории.

    Результатом должен стать компонент, который принимает в себя:
    - параметры переключалки отдельными дочерними компонентами
    - активное состояние
    - name
    - action который изменяет стейт роителя
      + бонус, action должен быть универсальным для нескольких переключалок.

    У компонента должна быть проверка PropTypes
    - name: обязательное поле, строка
    - action: обязательное поле, функция
    - activeState: не обязательное поле, строка
    - children, не обязательное поле, реакт-компонент


    Тест: Добавить 2 элемента Toggler которые будут менять стейт родителя.
      Пусть это будут поля:
      gender > male,female
      layout > left, center, right, baseline

*/


export const Switcher = (props) =>{
  const {children,name,active, changeToggle} = props;
 
  // console.log(type)
  
  // if(props !== undefined){
    // if(type === children.value){
  return (
  <h2 className='switcher'> {name } : {
      React.Children.count(children) > 0 && (
        <>
        {
          React.Children.map(children, (child) =>{
            // console.log(child.props.type, active)
            if (React.isValidElement(child)) {

              return React.cloneElement(
                child,
                  {
                  active:  child.props.value? child.props.value === active : child.props.gender ? child.props.gender === active : child.props.layout === active,
                  changeToggle: changeToggle(child.props.value,child.props.gender,child.props.layout),
                  // type: child.props.children
                  name: name

                  }
                 )
               }
              
        
          })
         }
        </>
       )
      } </h2>
     )
    }
  

export const SwitcherItem = (props) =>{
const {children,active,changeToggle} = props;
console.log(props);

  return (
    <button className={
      active ? 'switcher__item active' : "switcher__item"
    } onClick={changeToggle}
       type='button'>
      {children}
      </button>
  )

}

Switcher.propTypes={
  name: PropTypes.string.isRequired,
  changeToggle: PropTypes.func.isRequired,
  children: PropTypes.array,
  active: PropTypes.string
}

SwitcherItem.propTypes={
  changeToggle: PropTypes.func,
  children: PropTypes.array,
  active: PropTypes.string
}