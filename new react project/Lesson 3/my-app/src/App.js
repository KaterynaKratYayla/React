import React, {Component} from 'react'
// import { checkPropTypes } from 'prop-types';
import './App.css';
import {Switcher, SwitcherItem } from './tasks/task1'
import App2 from './tasks/task2'

// const obj = {
//   one: 1,
//   two: 2,
//   three: 3
// };

// // let one = obj.one;
// // let two = obj.two;
// // let three = obj.three;
// const { one, two, three } = obj;

// console.log( one, two, three );


// ES5 Class
// class App extends Component{
//   constructor( props ){
//     super( props );

//     //...
//     this.state = {}

//     this.method = this.method.bind(this);
//   }

//   method(){

//   }

//   render(){

//   }
// }



class App extends Component{

  constructor( props ){
    super(props);

    this.state = {
      align: 'align',
      gender: 'gender',
      layout: 'left'
    }

    this.changeToggle = this.changeToggle.bind( this );
  }

  ////Пожалуйста, можно попросить расписать функцию ниже в обычном функциональном синтаксисе - я не совсем понимаю
  // changeToggle = ( name ) => _ =>{
  //   this.setState({
  //     [ name ] : value 
  //   });
  // }

  changeToggle( name, value ){
    return () => {
      this.setState({
        [ name ] : value
      });
    }
  }



//////ВОПРОС : ПОЧЕМУ У МЕНЯ ОТРИСОВКА СТЕЙТА В КОНСОЛИ ИДЁТ С ЗАДЕРЖКОЙ. НАПРИМЕР, ВСЁ ПЕРЕКЛЮЧАЕТСЯ ПРАВИЛЬНО, НО Я ЖМУ НА КНОПКУ LEFT, А МНЕ СНАЧАЛА В КОНСОЛИ ВЫВОДИТ ПРЕДЫДУЩУЮ КНОПКУ
  //  console.log(this.state)
    // }
  // }

  render = () => {

    const { align, gender, layout } = this.state;
    const { changeToggle } = this;

    return (
      <div className="App">
        <h1>LESSON 3 : Task 1</h1>
        <Switcher name="align" changeToggle={ changeToggle } active={align}>
            <SwitcherItem value='left'>Left</SwitcherItem>
            <SwitcherItem value='center'>Center</SwitcherItem>
            <SwitcherItem value='right'>Right</SwitcherItem>
        </Switcher>

        <Switcher name="gender" changeToggle={changeToggle} active={gender}>
            <SwitcherItem value='male'>Male</SwitcherItem>
            <SwitcherItem value='female'>Female</SwitcherItem>
        </Switcher>

        <Switcher name="layout" changeToggle={changeToggle} active={layout}>
          <SwitcherItem value='left'>Left</SwitcherItem>
          <SwitcherItem value='center'>Center</SwitcherItem>
          <SwitcherItem value='right'>Right</SwitcherItem>
          <SwitcherItem value='baseline'>Baseline</SwitcherItem>
        </Switcher>

        {
          `${layout}_test`
        }


      <App2 />
      </div>
    );
  }
}

export default App;
