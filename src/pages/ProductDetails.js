import React from 'react'
import {useSelector } from 'react-redux'


const ProductDetails = () => {
  const state = useSelector((state) => state.cart)

  const cart = useSelector((state) => state.cart);

  const serializedState = JSON.stringify(cart);
  localStorage.setItem("stateData", serializedState);

  const stateDatainLocal = localStorage.getItem("stateData");
  const finalData = JSON.parse(stateDatainLocal)
  console.log(typeof(finalData))
  return (
    <div>
      {state.map((e) => {
        return (
          <div className='selected_products'>
            {
              finalData?.map((e)=>{
                return(
                  <>
                  <img src={e.img} style={{width:'200px'}}></img>
                  <h1>{e.name}</h1>
                  <h2>{e.price}</h2>
                  <p>{e.description}</p>
                  
                  </>
                )
              })
            }
          </div>
        )
      })}
    </div>
  )
}

export default ProductDetails