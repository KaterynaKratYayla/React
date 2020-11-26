import React, {Component} from 'react'
import './App.css'

/*
  Задание 2.
  1. Получить в методе component componentDidMount данные с
  https://www.json-generator.com/
  2. Записать их в стейт по шаблону:
  {
    interviewed: false,
    user: { Элемент с jsonGenerator}
  }
  http://www.json-generator.com/api/json/get/cdZfJCjIia?indent=2

  3. Вывести их в виде списка, каждый элемент которого будет являтся
  Functional компонентом принимающим в себе обьект с прошлого пункта.

  Внури компонента должна быть вызвана функция, которая меняет значение
  interviewed с true на flase.
  Используя functional Component с задантя 1. (Button)

  Если оно true - выделить пункт зеленым,
  Если false - не выделять или выделить красным

*/

class Element extends Component {
   constructor (props){
     super (props)
     this.state={
       users: []
     }
   }


   componentDidMount = () =>{
     fetch('http://www.json-generator.com/api/json/get/cdZfJCjIia?indent=2')
       .then(response=>response.json())
       .then(json=>{
         console.log(json)
         this.setState({
          // interviewed: false,
          users: json});
       })

   }

   changeState = (index) => () => {
     let updatedList = this.state.users.map(function(item){
       if(item.index === index){
        item.interviewed = !item.interviewed
       } return (item)
     })
    // console.log(updatedList)
    // return this.state.users.forEach(function(item){
    //   console.log(item.interviewed , item)
    // })   

    console.log(this.state)
   
       this.setState({
       item: updatedList})
       }

    //  console.log('Hi Kate')
  // this.state.interviewed === true ? this.state. = 'red' : this.users.style.color = 'green'
   

   render(){
    
     const {users} = this.state;
     const{changeState} = this; 

     let className = 'Interviewed';
     users.forEach(function(pax){
         if(pax.interviewed === false){
             className = 'notInterviewed'
         } else className = 'Interviewed'
     })

    return (

      <div>
        <h1>Element</h1>
       <ul>
         {users.map(item => {
        return(
           // className={interviewed ? item.user.name.style.color = 'green' : item.user.name.style.color = 'red'}
          //  <Item 
          //  changeState={changeState}
          //  item={item}/>
          <li 
           key={item.index}
           className={className}
           style={{display: 'grid', gridTemplateColumns: '10vw 10vw 15vw', marginBottom: '3vw'}}>
            <div>{item.user.name}</div>
            <div>{item.user.company}</div>
             {/* <Sample 
              name={'Interviewed?'} 
              change={changeState} 
              item={item} /> */}
                <button 
                onClick={changeState(item.index)}
                style={{fontWeight: 'bold'}}>
                  {
                  item.interviewed === true ? 'Interviewed' : "Not Interviewed" 
                  }
                 </button>
              </li>
         )
      })
      }
    
       </ul>
        </div>
    )
  
  
       }

     }

//   export default Element;
