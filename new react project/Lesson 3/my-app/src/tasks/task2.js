import React, {Component} from 'react'
import './index.css'
import CustomInput from './task2_CustomInput'
import {Switcher, SwitcherItem} from './task1'

/*

Задание 2:

  Написать кастомный элемент инпута.
  У компонента нужно сделать возможность настраивать:
  - type
  - placeholder
  - value
  - onChangeHandler
  - name
  - contentLength ( свойтво которое показывает счетчик сколько символов набрано в инпут)
  - contentMaxLength ( Максимальное кол-во симовлов )
  Результатом будет компонент,
  <label>
    <div>{name}</div>

    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={handler}
    />
  </label>

  PropTypes:
    type: Одно из значений: text, password, number, required
    placeholder: строка
    value: строка или любой
    handler: function, required
    contentLength: bool ?????
    contentMaxLength: number
*/

class App2 extends Component{

  state={
    type: 'text',
    placeholder: 'please enter your details',
    contentMaxLength: 200,
    contentLength: true,
    align: '',
    
  }

  changeToggle = value =>_=>{
    this.setState({align: value});

  }
  
  // changeHandler = e =>{
  //   let name = e.target.name;
  //   let value = e.target.value;

  //   this.setState({
  //     [name] : value
  //   });

    // console.log('name :' , [name] , 'value :' , value)
  // }

  onSubmit = e =>{
    e.preventDefault();
    console.log('state',this.state)
  }

  render = () =>{
    const {align,type,placeholder,contentMaxLength,contentLength} = this.state;
    const {changeToggle, onSubmit} = this;

    return(
     <form className='form' onSubmit={onSubmit}>
      <h1>LESSON 3 : Task 2 </h1>
      <CustomInput  
      type={type}
      placeholder={placeholder}
      contentMaxLength={contentMaxLength}
      contentLength={contentLength}
      // change={changeHandler}
      naming='First Element'
      />

     <CustomInput  
      type={type}
      placeholder={placeholder}
      contentMaxLength={contentMaxLength}
      contentLength={contentLength}
      // change={changeHandler}
      naming='Second Element'
      />


      <Switcher name={'Align'} changeToggle={changeToggle} active={align}>
           <SwitcherItem value='Left' type={align}>Left</SwitcherItem>
           <SwitcherItem value='Center' type={align}>Center</SwitcherItem>
           <SwitcherItem value='Right'type={align} >Right</SwitcherItem>
      </Switcher>
      <button>Send</button>
  </form>
  )
 }
}
 


export default App2
