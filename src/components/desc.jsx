import React from 'react'
import { useParams } from 'react-router-dom'
import {getResultById} from './prouctsServices'
import { useEffect,useState } from 'react'
import { useDispatch } from 'react-redux'
import { UPDATE_CART } from './store/cartSlice'

const desc = () => {

const dispatch=useDispatch();


  
    const {id}=useParams()
    const [p,pp]=useState([]);
    useEffect(()=>{
        getResultById(id)
        .then(k=>{
          // console.log(k.data)
        return (pp(k.data))}) 
    },[])
    console.log(p.images)



    function addLocal(data){
      var count =0;
      if(localStorage.getItem( 'isCartData')!=undefined){
        console.log(JSON.parse(localStorage.getItem( 'isCartData')))
        var da=JSON.parse(localStorage.getItem( 'isCartData'))
        var daa=da.map((val)=>{
            if(val.id==data.id){
              val.quantity+=1;
              count=1;

            }
            return val;
        })
        var t={...data,quantity:1};
        if(count===0){
          daa.push(t)
        }
        dispatch(UPDATE_CART(daa))
        console.log(daa)
        localStorage.setItem('isCartData',JSON.stringify(daa))


      }
      else{
        var ppp={...data,quantity:1};
        localStorage.setItem( 'isCartData',JSON.stringify([ppp]))
        console.log(ppp);
        alert("product added")
        dispatch(UPDATE_CART([ppp]))
      }
      alert("product added")
    }

  return (
    <div>
      describing
      
        <h1>Title:{p.title}</h1>
        <p>Desc:
           
            {p.description}
        </p>
        <br />
        AvailabilityStatus:{p.availabilityStatus}

     {  (p.images)&&(p.images).map((j,jj)=>{
        return(  <img src={j} key={jj}  width={200} height={200}/>  )
     })}
<br />
    <center> <button className='bg-slate-800 text-gray-200 rounded p-8' onClick={()=>{addLocal(p)}}>add to cart </button>  </center>
     <br/>
     <br />
     <br />
     <br />
  {/* <img src={p.images} alt="" /> */}
    </div>
  )
}

export default desc
