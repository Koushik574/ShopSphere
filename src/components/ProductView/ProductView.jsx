import React, { useEffect, useState } from "react";
import {v4 as uuidv4} from "uuid";
import { useParams } from "react-router-dom";
import ProductCard from "../ProductCard/ProductCard";

const ProductView = () => {
  const [productData, setProductData] = useState([]);
  const params = useParams();

  const fetchData = async () => {
    const options = {
      method: "GET",
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InJhaHVsIiwicm9sZSI6IlBSSU1FX1VTRVIiLCJpYXQiOjE2MjMwNjU1MzJ9.D13s5wN3Oh59aa_qtXMo3Ec4wojOx0EZh8Xr5C5sRkU",
      },
    };

    const response = await fetch(
      `https://apis.ccbp.in/products/${params.id}`,
      options
    );
    const data = await response.json();
    console.log("data", data);
    setProductData(data);
  };

  useEffect(() => {

    <div styleName={styles.ProductCard}>
    </div>
    fetchData();
  }, []);


  return (
    <>
      <img src={productData.image_url} className="h-20" />
      <p>{productData.title}</p>
      <p>{productData.style}</p>
      <p>{productData.price}</p>
      <p>{productData.rating}</p>

      {productData.similar_products?.map((e) => (
        
        <ProductCard data={e} key={uuidv4()} />
        
      ))}
    </>
  );
};

export default ProductView;
