import React, {useState, useInput} from 'react'
import './index.css'
// import {Switcher, SwitcherItem} from './Switcher'

/*

    Используя хуки написать компонент, который будет работать с Controlled формой следующего формата:
    
    1. UserName = text
    2) Email = email
    3) City = select (Kyiv, Lviv, Harkiv, Odesa )
    4) Type = Компонент Toogle с предыдущих занятий
    
    После нажатия на Enter или кнопки "Отправить", скрипт должен создать под формой в списке элемент в
    котором будут указаны все вышеуказанные поля.
    Сами же поля в компоненте должны быть очищены после добавления нового элемента.
    Все поля обязательные.
    
*/


const ConForm = () => {

    const [myInput, setMyInput] = useState('');
    const [list , setList] = useState([]);

    function myInputFunc (e) {     
        console.log(e.target.value) 
        return setMyInput (e.target.value)
        }

    const addToList = () => {
        const newList = {
            done: false,
            item: myInput
        }

    setList([...list, newList]);
    setMyInput('');
    }

    const onSubmit = (e) =>{
        e.preventDefault();
    }

    return(
        <form className='myForm' onSubmit={onSubmit}>
            <Inputs type={'text'} name={'UserName'} myInput={myInput} myInputFunc={myInputFunc}/>
            <Inputs type={'email'} name={'E-mail address'}  myInput={myInput} myInputFunc={myInputFunc}/>
             <select>
                <option>Kyiv</option>
                <option>Lviv</option>
                <option>Kharkiv</option>
                <option>Odesa</option>
            </select>         
           {/* <Switcher name={'Align'} changeToggle={changeToggle} active={align}>
              <SwitcherItem value='Left' type={align}>Left</SwitcherItem>
              <SwitcherItem value='Center' type={align}>Center</SwitcherItem>
              <SwitcherItem value='Right'type={align} >Right</SwitcherItem>
           </Switcher> */}
           <button type='submit' onClick={addToList}>Submit</button>
        
            <ul>
                {
                    list.map (function(listitem){
                        return <li key={listitem.item} className={listitem.done ? 'list__green' : 'list__red'}>
                            {listitem.item}
                        </li>
                        
                    })
                }
                </ul>
        </form>
    )
}

const Inputs = (props) => {

    const {type,name,myInput,myInputFunc} = props;

    return (
    <div>
    <label>{name}</label>
    <input 
      type={type}
      value={myInput}
      onChange={myInputFunc}
      placeholder={`Enter your ${name}`}/>
      </div>

  )
}


export default ConForm;



import React, {useState, useContext} from 'react'
import './index.css'
// import {Switcher, SwitcherItem} from './Switcher'

/*

    Используя хуки написать компонент, который будет работать с Controlled формой следующего формата:
    
    1. UserName = text
    2) Email = email
    3) City = select (Kyiv, Lviv, Harkiv, Odesa )
    4) Type = Компонент Toogle с предыдущих занятий
    
    После нажатия на Enter или кнопки "Отправить", скрипт должен создать под формой в списке элемент в
    котором будут указаны все вышеуказанные поля.
    Сами же поля в компоненте должны быть очищены после добавления нового элемента.
    Все поля обязательные.
    
*/
export const ThemeTitle = React.createContext();



const ConForm = (props) => {

    // const [myInput, setMyInput] = useState('');
    // const [list , setList] = useState([]);

    // function myInputFunc (e) {     
    //     console.log(e.target.value) 
    //     return setMyInput (e.target.value)
    //     }

    // const addToList = () => {
    //     const newList = {
    //         done: false,
    //         item: myInput
    //     }

    // setList([...list, newList]);
    // setMyInput('');
    // }

    const onSubmit = (e) =>{
        e.preventDefault();
    }
    const {addToList} = props;
    return(
       
        <form className='myForm' onSubmit={onSubmit}>
            <Inputs type={'text'} name={'UserName'}/>
            <Inputs type={'email'} name={'E-mail address'}/>
             <select>
                <option>Kyiv</option>
                <option>Lviv</option>
                <option>Kharkiv</option>
                <option>Odesa</option>
            </select>         
           {/* <Switcher name={'Align'} changeToggle={changeToggle} active={align}>
              <SwitcherItem value='Left' type={align}>Left</SwitcherItem>
              <SwitcherItem value='Center' type={align}>Center</SwitcherItem>
              <SwitcherItem value='Right'type={align} >Right</SwitcherItem>
           </Switcher> */}
           {/* <Button /> */}
           
           <ThemeTitle.Consumer>
               
               {
                 (value) => {
                     <>
                  <button type='submit' onClick={addToList}>Submit</button>
                    <ul>
                     {
                      value.map (function(listitem){
                        return <li key={listitem.item} className={listitem.done ? 'list__green' : 'list__red'}>
                            {listitem.item}</li> 
                    })
                  }
                </ul>   
                </>
              }
           }
           
        </ThemeTitle.Consumer>
        
        
        </form>
    )
}

const Inputs = (props) => {
    
    const {type,name} = props;
    const [myInput, setMyInput] = useState('');
     const [list , setList] = useState([]);
    // const TitleContext = React.createContext(myInput)

    function myInputFunc (e) {     
        console.log(e.target.value) 
        return setMyInput (e.target.value)
        }

        const addToList = () => {
            const newList = {
                done: false,
                item: myInput
            }
        
        setList([...list, newList]);
        setMyInput('');
        }

    return (   
    
      <div>
          <ThemeTitle.Provider value={
             myInput,
             addToList
          }
          >
      <label>{name}</label>
        <input 
        type={type}
        value={myInput}
        onChange={myInputFunc}
        placeholder={`Enter your ${name}`}/>

        </ThemeTitle.Provider>
        {/* <button type='submit' onClick={addToList}>Submit</button>
          <ul>
            {
            list.map (function(listitem){
             return <li key={listitem.item} className={listitem.done ? 'list__green' : 'list__red'}>
                 {listitem.item}
             </li>
             
            })
           }
         </ul>  */}
    </div>
   )
}

export default ConForm;