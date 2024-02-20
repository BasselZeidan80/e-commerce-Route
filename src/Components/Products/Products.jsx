import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Circles } from "react-loader-spinner";
import './Products.css'
export default function Products() {

  const [products, setProducts] = useState(null)

function getProducts(){
  const res =   axios.get('https://ecommerce.routemisr.com/api/v1/products')
  .then((response)=> {
    console.log(response.data.data)
    setProducts(response.data.data)
  })
  .catch((err)=> {
    console.log("err " ,  err);
  })
}


useEffect(()=> {
getProducts()
},[] )


  return (
    <>


{products?  <div className="container">
      <div className="row p-3 gy-3">
        {products.map(  (product , idx) =>   <div key={idx} className=" col-sm-12 col-md-6 col-lg-2 mb-3 cstom  ">
          <div className="product" >
          <figure >
            <img className="w-100" src={product.imageCover} alt={product.title}/>
          </figure>
          <h6 className="text-success">{product.category.name}</h6>
          <p>{product.description.split(' ').slice(0,2).join(' ')}</p>
          <div className="priceArea p-1 d-flex align-items-center justify-content-between">

            {product.priceAfterDiscount? 
            <span className="fw-bold text-decoration-line-through">{product.price} - <span >{product.priceAfterDiscount} </span> </span>
            :<span className="fw-bold">{product.price}  EGP   </span>}
          
         
          <span><i className="fa-solid fa-star text-warning"></i>{product.ratingsAverage} </span>
          </div>
          <button className="btn btn-success w-100">Add +</button>
        </div>
        </div>
        )}
      
       
     
       
      </div>
     </div> :
<div className="d-flex vh-100 bg-opacity-50 justify-content-center align-items-center">


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


   

    </>
  );
}
