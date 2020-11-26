import React, {Component} from 'react'

/*
  Задание 1.

  Создать компонент для картинки с прелоадером.
  Как пропсу передаете url картинки, которую нужно загрузить.

  Пока картинка не загруженна - показываете лоадер. Когда
  загрузилась, показываете картинку.

  Компонент HE Stateless! Нужно будет работать с жизнеными циклами.

  <LoaderImg src="https://media.springernature.com/lw630/nature-cms/uploads/cms/pages/2913/top_item_image/cuttlefish-e8a66fd9700cda20a859da17e7ec5748.png" />

  + Бонус: Добавить обработку ошибки, что если картинка не загружена, показать плейсхолдер.
  + Бонус: Сделать что бы это красиво работало - со стилями и анимацией :)

*/


class Picture extends Component {
   constructor(props){
     super(props)
     this.state={
       imageloaded: ''
     }

   }

   componentDidMount = () =>{
     const {src} = this.props
     const img = new Image();
     img.src = src;

     console.log(img.src)

       img.onload = () => {
       this.setState({imageloaded: true});
       console.log('successfully loaded')
     }

     img.onerror = () =>{
       this.setState({imageloaded: false})
       console.log('loading error')
     }

     console.log(this.state)

   }

   render (){
     const{src} = this.props;
     const{imageloaded} = this.state;

     if(!imageloaded){
       return <h2>Loading image...</h2>
     } else {
       return (
        <div>
            <h2> TASK 1</h2>
            <img src={src} alt='fish'></img>
       </div>
       )
     }
    }
   }


// }

export default Picture