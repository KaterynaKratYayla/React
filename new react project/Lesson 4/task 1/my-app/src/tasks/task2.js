import React, {Component} from 'react'
import './index.css'
import CustomInput from './task2_CustomInput'
import {SwitcherItem} from './task1'
import {ThemeContext} from './context.helper'



class App2 extends Component{

  state={
    type: 'text',
    placeholder: 'please enter your details',
    contentMaxLength: 200,
    contentLength: true,
    align: '',
    theme: ''
  }

   changeTheme = value1 => _ =>{
        this.setState({theme: value1})
  }
  
  // changeHandler = e =>{
  //   let name = e.target.name;
  //   let value = e.target.value;

  //   this.setState({
  //     [name] : value
  //   });

  onSubmit = e =>{
    e.preventDefault();
    console.log('state',this.state)
  }

  render = () =>{
    
    console.log(ThemeContext)
    const {align,type,theme,placeholder,contentMaxLength,contentLength} = this.state;
    const {changeToggle, onSubmit, changeHandler,changeTheme} = this;

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
  
    
         <ThemeContext.Provider value={
           {
             theme,
             changeTheme
             } 
           } >
           <SwitcherItem value1 = 'Left' themechange={changeTheme('red')}>Left</SwitcherItem>
           <SwitcherItem value1 = 'Center' themechange={changeTheme('yellow')}>Center</SwitcherItem>
           <SwitcherItem value1 = 'Right' themechange={changeTheme('blue')}>Right</SwitcherItem>

          </ThemeContext.Provider>

        <button>Send</button>
        
        </form>
     )
    }
  }   
 


export default App2
