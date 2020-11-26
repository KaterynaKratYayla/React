import React, {Component} from 'react'
// import { checkPropTypes } from 'prop-types';
import './App.css';
import {Switcher, SwitcherItem } from './tasks/task1'
import App2 from './tasks/task2'

class App extends Component{

   state = {
   align: 'align',
   gender: 'gender',
   layout: 'center'
  }

  ////Пожалуйста, можно попросить расписать функцию ниже в обычном функциональном синтаксисе - я не совсем понимаю
  changeToggle = (value,gender,layout) => _ =>{

    this.setState({
      align: value,
      gender: gender,
      layout: layout
      })
      // console.log(this.state)
  }
  
//////ВОПРОС : ПОЧЕМУ У МЕНЯ ОТРИСОВКА СТЕЙТА В КОНСОЛИ ИДЁТ С ЗАДЕРЖКОЙ. НАПРИМЕР, ВСЁ ПЕРЕКЛЮЧАЕТСЯ ПРАВИЛЬНО, НО Я ЖМУ НА КНОПКУ LEFT, А МНЕ СНАЧАЛА В КОНСОЛИ ВЫВОДИТ ПРЕДЫДУЩУЮ КНОПКУ
  //  console.log(this.state)
    // }
  // }

  render = () => {

    const {align,gender,layout} = this.state;
    const {changeToggle} = this;

  return (
    <div className="App">
      {/* <h1>LESSON 3 : Task 1</h1>
      <Switcher name={'Align'} changeToggle={changeToggle} active={align}>
           <SwitcherItem value='Left' type={align}>Left</SwitcherItem>
           <SwitcherItem value='Center' type={align}>Center</SwitcherItem>
           <SwitcherItem value='Right'type={align} >Right</SwitcherItem>
      </Switcher>
      <Switcher name={'Gender'} changeToggle={changeToggle} active={gender}>
           <SwitcherItem gender='male' type={gender}>Male</SwitcherItem>
           <SwitcherItem gender='female' type={gender}>Female</SwitcherItem>
      </Switcher>
      <Switcher name={'Layout'} changeToggle={changeToggle} active={layout}>
           <SwitcherItem layout='left' type={layout}>Left</SwitcherItem>
           <SwitcherItem layout='center' type={layout}>Center</SwitcherItem>
           <SwitcherItem layout='right' type={layout}>Right</SwitcherItem>
           <SwitcherItem layout='baseline' type={layout}>Baseline</SwitcherItem>
      </Switcher> */}
    
    <App2 />
    </div>
   );
  }
}

export default App;
