import React, {Component} from 'react'
import ElementBlock from './elementBlock'
import './index.css'

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
          this.state.users.forEach(function(user){
          console.log(user)
          })
       })
       

   }

   changeState = (index) => () => {
     let updatedList = this.state.users.map(function(item){
       if(item.index === index){
        item.interviewed = !item.interviewed
       } return (item)
     })  

    console.log(this.state)
   
       this.setState({
       item: updatedList})
       }


   render(){
     const {users} = this.state;
     const{changeState} = this; 

    return (

      <div>
        <h1>List of applicants</h1>
       <ul>
         {users.map(item => {
        return(
           <ElementBlock
             item={item}
             changeState={changeState}/>
             )
           })
          }
    
         </ul>
      </div>
        )
    
      }
   }

  export default Element;
