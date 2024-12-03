import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import  {UPDATE_CART} from './store/cartSlice'
const display = () => {
  var kp=useDispatch();
var p=useSelector(s=>s.mycart.cartData)
console.log("inside display",p)


function DEL(id){
  var k=p.filter(pp=>pp.id!==id)

  localStorage.setItem('isCartData',JSON.stringify(k))
kp(UPDATE_CART(k))

}
function DEC(id){
  var k=JSON.parse(localStorage.getItem('isCartData'))
  var kk=k.map(pp=>{
    if(pp.id===id){
      pp.quantity-=1
    }
  return pp})

 k=kk.filter(p=>p.quantity!==0)

  localStorage.setItem('isCartData',JSON.stringify(k))
kp(UPDATE_CART(k))

}
function INC(id){
  var k=JSON.parse(localStorage.getItem('isCartData'))
  var kk=k.map(pp=>{
    if(pp.id===id){
      pp.quantity+=1
    }
  return pp})

  localStorage.setItem('isCartData',JSON.stringify(kk))
kp(UPDATE_CART(kk))

}
  return (
    <div>
        <h1>shopping cart</h1>
      <table className="table-fixed">
      <tr>
        <td>sl.no</td>
        <td>title</td>
        <td>price</td>
        <td>quantity</td>
        <td>total price</td>
        <td>picture</td>
        <td>delete</td>
        </tr>
        {
          p.map((k,kk)=>
            <tr key={kk}>
              <td>{kk}</td>
          <td key={kk}>{k.title}</td>
          <td key={kk}>{k.price}</td>
          <td key={kk}><button  key={kk} className="p-3  bg-gray-700 text-slate-50 rounded-md  " onClick={()=>{INC(k.id)}}>+</button>
          {k.quantity}
          <button  key={kk} className="p-3  bg-gray-700 text-slate-50 rounded-md  " onClick={()=>{DEC(k.id)}}>-</button></td>
          <td key={kk}>{(k.price) * (k.quantity)}</td>
          <td><img key={kk} src={`${k.images[0]}`}alt="" height={60}px width={60}px /></td>
          <td><button  key={kk} className="p-3  bg-gray-700 text-slate-50 rounded-md  " onClick={()=>{DEL(k.id)}}>delete</button></td>
          
          </tr>
           )
         
        }

      </table>
    </div>
  )
}

export default display
