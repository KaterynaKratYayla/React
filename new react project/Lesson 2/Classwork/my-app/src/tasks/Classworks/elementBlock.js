import React from 'react'
import './index.css'
import MyButton from './task1'

function ElementBlock (props){
    const {item, changeState} = props

        return (
        <li 
           key={item.index}
           className={ item.interviewed === true ? 'Interviewed' : 'notInterviewed'}
           style={
             {display: 'grid', gridTemplateColumns: 'repeat(4, 10vw) 13vw 15vw', marginBottom: '3vw', textAlign: 'center'}}>
            <div>{item.user.name}</div> 
            <div>{item.user.company}</div>
            <div>{item.user.gender}</div>
            <div> Age : {item.user.age}</div>
            <div>{item.user.address}</div>
             <MyButton 
                item={item} 
                changeState={changeState}/>
         </li>
        )

}

export default ElementBlock