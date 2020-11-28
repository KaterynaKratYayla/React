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

export const Posts = () => {

    /*
    Все ХУКи могут быть использованы только на верхнем уровне, их нельзя положить во внутренний метод
    UserEffect - это аналог методов ComponentDidMount, ComponentDidUpdate, ComponentWillUnmount  
    UseEffect принимает в себя две функции : 
      1) первое - это функция, внутри которой я могу выполнить любой спец эффект
      2) [] - массив значений, на основании которого ф-я UseEffect понимает, нужно ли ей повторно себя вызывать
    */

    // const [counter, setCounter] = useState (1);
    const [post , setPost] = useState (null);

    useEffect ( () => {
        fetch('https://jsonplaceholder.typicode.com/posts/')
           .then(res => res.json() )
           .then(post => {
               console.log(post)
               setPost (post)
           })
    }, []);

    return(
        <div>
            <h2>Posts List</h2>
            <ul>
            {
                post && (post.map(function(p){
                    return (<li key={p.id}>{p.title}</li>)
                })
                )
            }
            </ul>
        </div>
    )

}

export const Comments = () => {

    const [comments , setComments] = useState (null);

    useEffect ( () => {
        fetch('https://jsonplaceholder.typicode.com/comments')
           .then(res => res.json() )
           .then(comments => {
               console.log(comments)
               setComments (comments)
           })
    }, []);

    return(
        <div>
            <h2>Comments List</h2>
            <ul>
            {
                comments && (comments.map(function(comment){
                    return (<li key={comment.id}>{comment.name}</li>)
                })
                )
            }
            </ul>
        </div>
    )

}

export const Albums = () => {

    const [albums , setAlbums] = useState (null);

    useEffect ( () => {
        fetch('https://jsonplaceholder.typicode.com/albums')
           .then(res => res.json() )
           .then(albums => {
               console.log(albums)
               setAlbums (albums)
           })
    }, []);

    return(
        <div>
            <h2>Albums List</h2>
            <ul>
            {
                albums && (albums.map(function(album){
                    return (<li key={album.id}>{album.title}</li>)
                })
                )
            }
            </ul>
        </div>
    )

}