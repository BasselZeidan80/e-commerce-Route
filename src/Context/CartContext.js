import axios from 'axios'
import { data } from 'jquery';
import React, { createContext, useContext, useEffect, useState } from 'react'
import { AuthContextProvider } from './AuthContext';


 export const CartContext = createContext()


export default function CartContextProvider({children}) {

const {token} = useContext(AuthContextProvider)
  const [numOfCart, setNumOfCart] = useState(0);
  const [totalCartPrice, setTotalCartPrice] = useState(0);
  const [allProducts, setAllProducts] = useState(null)

async function addProductToCart(id){
  await  axios.post("https://ecommerce.routemisr.com/api/v1/cart" , {
       "productId": id} ,
       
       {headers: {token : localStorage.getItem('token')}}) 
       .then( (res)=>{

            console.log("in case of success " ,res);
            getUserCart()
            return res
       } ).catch( (err)=>{
        console.log("in case of error " ,err);
       } )
}

function getUserCart(){
  axios.get("https://ecommerce.routemisr.com/api/v1/cart" , {
    headers: {token : localStorage.getItem("token")}
  }).then(  (res)=> {

    console.log("res" , res.data);
    setAllProducts(res.data.data.products)
    console.log(res.data.data.products);
    setNumOfCart(res.data.numOfCartItems)
    setTotalCartPrice(res.data.data.totalCartPrice)

  } ).catch(  (err)=> {
console.log(err);
  } )
}

useEffect( ()=>{
  console.log("getting...");
  getUserCart()
} , [token] )


async function updateProduct(id , newCount){
const flag = await  axios.put(`https://ecommerce.routemisr.com/api/v1/cart/${id}` ,{
    "count": newCount
},{
  headers:{
    token: localStorage.getItem("token")
  }
}).then(   (res)=>{

  
setNumOfCart(res.data.numOfCartItems)
setTotalCartPrice(res.data.data.totalCartPrice)
setAllProducts(res.data.data.products)
return true
} )
.catch( (err)=>{
console.log( "err" , err  );
  return false

} )
 return flag
}


async function deleteProduct(id){
  const flag= await axios.delete(`https://ecommerce.routemisr.com/api/v1/cart/${id}` ,{headers:{token: localStorage.getItem("token")}})
  .then(  
    (res)=>{

      setNumOfCart(res.data.numOfCartItems)
      setTotalCartPrice(res.data.data.totalCartPrice)
      setAllProducts(res.data.data.products)
      return true;
    }
  ).catch(  
    (err)=>{
console.log("err " ,err);
return false
    }
  )
return flag
}

 
  async function clearAllProducts(){
  const flag= await axios.delete(`https://ecommerce.routemisr.com/api/v1/cart` ,{headers:{token: localStorage.getItem("token")}})
  .then(  
    (res)=>{

      console.log("resData " , res);
      setNumOfCart(0)
      setTotalCartPrice(0)
      setAllProducts([])
      return true;
    }
  ).catch(  
    (err)=>{
console.log("err " ,err);
return false
    }
  )
return flag
}



  return <CartContext.Provider value={{addProductToCart,numOfCart,totalCartPrice,allProducts ,updateProduct,deleteProduct,clearAllProducts}}>
  {children}
  
  </CartContext.Provider>
}
