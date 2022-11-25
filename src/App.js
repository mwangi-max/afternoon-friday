import React from 'react';
import {useState} from 'react'
import { images } from './images';

const App = () => {
 const[index,setIndex]= useState(0);
 const {id,job,image,name} = images[index];

 const checkNumber = (number)=>{
  if(number > images.length -1){
   return 0;
  }
  if(number < 0){
   return images.length -1;
  }
  return number;
 }

 const nextPerson = ()=>{
  setIndex((index)=>{
   let newIndex = index + 1;
   return checkNumber(newIndex);
  })
 }

 const prevPerson = ()=>{
  setIndex((index)=>{
   let newIndex = index - 1;
   return checkNumber(newIndex);
  })
 }

 const giveRandom = ()=>{
   let randomNumber = Math.floor(Math.random()*images.length);
   if(randomNumber === index){
    randomNumber =  randomNumber + 1;
   }
   setIndex(checkNumber(randomNumber))
 }

  return (
    <section>
     <div key={id}>
      <img src={image} alt={name} className='image'/>
      <h4>{name}</h4>
      <h4>{job}</h4>
      </div>
      <div className='btn-container'>
       <button type='button' onClick={nextPerson}>Next</button>
       <button type='button' onClick={prevPerson}>Prev</button>
      </div>
      <button type='button' onClick={giveRandom}>Random</button>
     
    </section>
  )
}

export default App
