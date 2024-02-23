import axios from 'axios';
import React from 'react'
import { Circles } from 'react-loader-spinner';
import { useQuery } from 'react-query';
import { Navigate, useParams } from 'react-router-dom'

export default function ProductDetails() {
  const {id}= useParams()
  console.log(id);


  function getProductDetails(){
    return axios.get(`https://ecommerce.routemisr.com/api/v1/products/${id}`)

  }

  const {isLoading , isError  , data} =  useQuery("productDetails", getProductDetails)



  // console.log("prdId" , data.data.data);
  
  // const productId = data.data.data
  // console.log (  productId );
  // const productid= data.data.data;
  // console.log("prDetails " , productid);
  
  if(isLoading){
    return <div className="d-flex vh-100 bg-primary bg-opacity-50 justify-content-center align-items-center">
  
  
  <Circles
    height="80"
    width="80"
    color="#4fa94d"
    ariaLabel="circles-loading"
    wrapperStyle={{}}
    wrapperClass=""
    visible={true}
    />
  
  
  </div>
  }
  
  if(isError){
    return <Navigate to='/Products' />
  }
  
  
  let productid = data.data.data
  return <>
  
<div className="container ">
  <div className="row align-items-center justify-content-center m-auto ">

    <div className="col-5 mt-5">
      <figure className='w-75'>
        <img className='w-100' src={productid.imageCover} alt={productid.name}/>
      </figure>
    </div>
    <div className="col-7">
      <article>
        <h1>{productid.title}</h1>
        <p>{productid.description}</p>
        <div className="d-flex justify-content-between mt-5">
        <p className='text-success fw-bold fs-5' > price: {productid.price} $</p>
        <p className=' text-danger fw-bold fs-5'> Remain Quantity: {productid.quantity} $</p>
        </div>
        <button className='btn btn-success w-100 mt-5 '>Add To Cart +</button>
      </article>
    </div>
  </div>
</div>

  </>
}
