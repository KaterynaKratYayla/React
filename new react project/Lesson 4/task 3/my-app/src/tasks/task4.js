import React, {useEffect, useState} from 'react'

/*
    
    1. Используя хук UseEffect - написать три компонента, каждый из которых будет получать
    данные из одного из следующих эндпоинтов и поместить их вывод на страницу в три отдельных столбика
    друг возле друга.
    
    https://jsonplaceholder.typicode.com/posts
    https://jsonplaceholder.typicode.com/comments
    https://jsonplaceholder.typicode.com/albums
    https://jsonplaceholder.typicode.com/todos
    https://jsonplaceholder.typicode.com/photos
    
    2. Вынести хуки в отдельные функции и реиспользовать во всех компонентах одну и ту же логику.

*/

const UserEffectDemo = () => {

    /*
    Все ХУКи могут быть использованы только на верхнем уровне, их нельзя положить во внутренний метод
    UserEffect - это аналог методов ComponentDidMount, ComponentDidUpdate, ComponentWillUnmount  
    UseEffect принимает в себя две функции : 
      1) первое - это функция, внутри которой я могу выполнить любой спец эффект
      2) [] - массив значений, на основании которого ф-я UseEffect понимает, нужно ли ей повторно себя вызывать
    */

    useEffect ( () => {
        fetch('https://api.randomuser.me')
           .then(res => res.json() )
           .then(user => {
               console.log(user)
           })
    }, []);

    const [counter, setCounter] = useState (0);
    function add(){
        return setCounter (counter + 1);
    } 

    return(
        <div>
            <h2>useEffect</h2>
            <button onClick={add}>{counter}</button>
        </div>
    )

}

export default UserEffectDemo
