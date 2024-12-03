import React from 'react'
import {getResult,categories} from './prouctsServices'
import { useState,useEffect } from 'react'
import Product from './ProductServices';
import { useSearchParams } from 'react-router-dom';
const products = () => {
  const [searchParams] = useSearchParams();
  //const [cat,ccat]=useState(searchParams.get('name'))
console.log(searchParams.get('name'))
const [value,changeValue]=useState([]);
// const [v,c]=useState([]);

var pp=searchParams.get('name')

useEffect(()=>{
 if(pp){
   categories(searchParams.get('name'))
  .then(rr=>changeValue(rr.data.products))
  .catch(error=>console.log(error))
 }
 else{
  getResult()
   .then((r)=>changeValue(r.data.products
    ))
    .catch(error=>console.log(error))
   
 }

},[pp])

console.log(`local storage ${localStorage   }`)
// }
// if(!pp){

 
//   useEffect(()=>{
//    getResult()
//   .then((r)=>changeValue(r.data.products
//   ))
//   .catch(error=>console.log(error))
//   },[])
  // console.log(value.length)

  return (
    <div>
      <div className="row">
      {
     


      value.map((k)=>{
        
          // console.log(k.id)
         return( <Product key={k.id}  > {k} </Product>
         
          
         )
         })
       
        
         
}
{/* <Product key={value[0]}/> */}
</div>
      products
    </div>
  )
}

export default products
