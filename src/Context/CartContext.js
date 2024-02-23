import axios from 'axios'
import { data } from 'jquery';
import React, { createContext } from 'react'


 export const CartContext = createContext()
export default function CartContextProvider({children}) {


async function addProductToCart(id){
  await  axios.post("https://ecommerce.routemisr.com/api/v1/cart" , {
       "productId": id} ,
       
       {headers: {token : localStorage.getItem('token')}}) .then( (res)=>{

            console.log("in case of success " ,res);
            return data
       } ).catch( (err)=>{
        console.log("in case of error " ,err);
       } )
}



  return <CartContext.Provider value={{addProductToCart}}>
  {children}
  
  </CartContext.Provider>
}
