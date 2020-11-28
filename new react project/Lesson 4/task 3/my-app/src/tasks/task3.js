import React, {useState} from 'react'
import './index.css'
import {SwitcherItem} from './Switcher'
// import {Switcher} from './Switcher'

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

    const [myInput1, setMyInput1] = useState('');
    const [myInput2, setMyInput2] = useState('');
    let [options, setMyOption] = useState('');  /////!!!!!!!!!!!!!!!!!!!!!!!SHOULD BE CONST
    let [align, setAlign] = useState('');   //////////!!!!!!!!!!!!!!!!!!!SHOULD BE CONST
    
    const [list , setList] = useState([]);

    function changeHandler(e){
        return setAlign(align = e.target.innerHTML) ///////PROBABLY WRONG
    }

    function myInputFunc1 (e) {     
        console.log(e.target.value) 
        return setMyInput1 (e.target.value)
        }

    function myInputFunc2 (e) {     
        console.log(e.target.value) 
        return setMyInput2 (e.target.value)
        }

    function changeOption(e){
      console.log(e.target.value)
      return setMyOption(options = e.target.value)  ///////PROBABLY WRONG
    }

    const addToList = () => {
        const newList = {
            done: false,
            item1: myInput1,
            item2: myInput2,
            item3: align,
            item4: options 
        }

    setList([...list, newList]);
    setMyInput1('');
    setMyInput2('');

    console.log(newList)

    }

    function setDone (item1){
        return function(){
             let changedList = list.map(function(listing){
            if (listing.item1 === item1){
                listing.done = !listing.done;
            }
             return listing
        })

        setList (changedList)
    }
}

    const onSubmit = (e) =>{
        e.preventDefault();
    }

    return(
        <form className='myForm' onSubmit={onSubmit}>
            {/* <Inputs type={'text'} name={'UserName'} myInput={myInput} myInputFunc={myInputFunc}/> */}
            <div>
            <label>{'UserName'}</label>
            <input 
        
              type={'text'}
              value={myInput1}
              onChange={myInputFunc1}
              placeholder={`Enter your UserName`}
              required/>
            </div>
            {/* <Inputs type={'email'} name={'E-mail address'}  myInput={myInput} myInputFunc={myInputFunc}/> */}
            <div>
            <label>{'Email Address'}</label>
            <input 
            
              type={'email'}
              value={myInput2}
              onChange={myInputFunc2}
              placeholder={`Enter your ${'Email Address'}`}
              required/>
            </div>
             <select onChange={changeOption}>
                <option value='Kyiv'>Kyiv</option>
                <option value='Lviv'>Lviv</option>
                <option value='Kharkiv'>Kharkiv</option>
                <option value='Odesa'>Odesa</option>
            </select>         
             {/* <Switcher name={'Align'} changeHandler={changeHandler} active={align}> */}
             <div>
                <SwitcherItem value='Student' changeHandler={changeHandler} active={align}>Student</SwitcherItem>
                <SwitcherItem value='Employeer' changeHandler={changeHandler} active={align}>Employeer</SwitcherItem>
                <SwitcherItem value='Job Applicant' changeHandler={changeHandler} active={align}>Job Applicant</SwitcherItem>
              {/* </Switcher> */}
              </div>
           <button type='submit' onClick={addToList}>Submit</button>
        
            <ul>
                {
                    list.map (function(listitem){
                        return <li 
                                   key={listitem.item1} 
                                   className={listitem.done ? 'list__green' : 'list__red'}
                                   onClick={setDone(listitem.item1)}>
                            {listitem.item1} / {listitem.item2} / {listitem.item3} / {listitem.item4}
                        </li>
                        
                    })
                }
                </ul>
        </form>
    )
}


export default ConForm;
