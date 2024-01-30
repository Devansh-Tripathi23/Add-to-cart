import React from "react";
import { Productdata as products } from "../lib/Productdata";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/cartSlice";

const Products = () => {
  const sliceDescription = (text) => {
    const trimmedText = text.slice(0, 120);
    return trimmedText + "...";
  };

  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  const serializedState = JSON.stringify(cart);
  localStorage.setItem("stateData", serializedState);

  const stateDatainLocal = localStorage.getItem("stateData");
  const finalData = JSON.parse(stateDatainLocal)

  return (
    <div className="container">
      <div className="products_section">
        <h1 style={{ textAlign: "center" }}> Products </h1>
        <div
          className="product_listing"
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "60px",
            padding: "20px",
            flexWrap: "wrap",
          }}
        >
          {products.map((product) => {
            return (
              <div
                className="product"
                key={product.id}
                style={{ width: "200px", overflow: "hidden" }}
              >
                <div className="product__head" style={{ width: "200px" }}>
                  <img
                    src={product.img}
                    width="200px"
                    style={{ objectFit: "contain" }}
                  />
                </div>
                <div className="product__body">
                  <h3>{product.name}</h3>
                  <span
                    className="product__price"
                    style={{ color: "#010101", fontWeight: "bold" }}
                  >
                    {product.price}
                  </span>
                  <p>{sliceDescription(product?.description)}</p>
                </div>
                <div className="product__footer">
                  <button
                    onClick={() => {
                      dispatch(addToCart(product));
                    }}
                  >
                    Add to cart
                  </button>
                </div>
              </div>
            );
          })}
          {finalData?.map((e) => {
            return(
                <div>
                    <img src={`${e.img}`}></img>
                    {e.name}
                </div>
            )
          })}
        </div>
      </div>
    </div>
  );
};

export default Products;
