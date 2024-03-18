import { useEffect, useState } from "react";
import ProductCard from "../ProductCard/ProductCard";
import { MockProductDataSet } from "../common/MockData";
import { MockProductDataSet2 } from "../common/MockData";
import { v4 as uuidv4 } from "uuid";
import { ShimmerSimpleGallery } from "react-shimmer-effects";

const ProductCardContainer = () => {
  // let MockProductDataSet = [

  // {
  //   title: "Hat",
  //   brand: "MAJIK",
  //   price: 288,
  //   id: 1,
  //   image_url:
  //     "https://assets.ccbp.in/frontend/react-js/ecommerce/clothes-cap.png",
  //   rating: "3.6",
  // },
  // {
  //   title: "Plain Round Neck T-shirt",
  //   brand: "Huetrap",
  //   price: 395,
  //   id: 2,
  //   image_url:
  //     "https://assets.ccbp.in/frontend/react-js/ecommerce/clothes-fit-t-shirt.png",
  //   rating: "4.1",
  // },
  // {
  //   title: "Cotton Hoodie",
  //   brand: "Scott International",
  //   price: 498,
  //   id: 3,
  //   image_url:
  //     "https://assets.ccbp.in/frontend/react-js/ecommerce/clothes-hoodie.png",
  //   rating: "3.8",
  // },
  // {
  //   title: "Men's Waistcoat",
  //   brand: "LEVIS",
  //   price: 2500,
  //   id: 4,
  //   image_url:
  //     "https://assets.ccbp.in/frontend/react-js/ecommerce/clothes-jacket.png",
  //   rating: "4.3",
  // },]

  // react state variabe [MockProductDataSets]
  let [ProductDataSet, setProductDataSet] = useState(MockProductDataSet2);
  let [Content, setContent] = useState("Light");
  let [searchText, setSearchText] = useState("");

  console.log("component loaded");

  const fetchData = async () => {
    const option = {
      method: "GET",
      headers: {
        "Authorization":
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InJhaHVsIiwicm9sZSI6IlBSSU1FX1VTRVIiLCJpYXQiOjE2MjMwNjU1MzJ9.D13s5wN3Oh59aa_qtXMo3Ec4wojOx0EZh8Xr5C5sRkU",
      },
    };

    const response = await fetch("https://apis.ccbp.in/products/", option);
    const data = await response.json();
    console.log(response);
    console.log("data", data);
    setProductDataSet(data.products)
  };


  //useEffect(callback, [dependency array])
  useEffect(() => {
    console.log("useEffect called");
    fetchData();
  },[]);

  
  return ProductDataSet.length === 0 ? (<ShimmerSimpleGallery card imageHeight={300} caption />) : 
  (<>
    {console.log("component rendered")}
    <div className="2xl:container">
      <div className="w-[90%] mx-auto grid grid-cols-1">
        <div className="flex gap-4 py-4">
          <button
            className="bg-green-500 py-3 px-4"
            onClick={() => {
              const filteredTopProducts = ProductDataSet.filter((item) => {
                return item.rating > 4;
              });
              setProductDataSet(filteredTopProducts);
            }}
          >
            Top Products
          </button>
          <button
            className="bg-green-500 px-3 py-4"
            onClick={() => {
              const filteredCheapProducts = ProductDataSet.filter((item) => {
                return item.price < 500;
              });
              setProductDataSet(filteredCheapProducts);
            }}
          >
            Products less than 500
          </button>

          <button className="bg-red-500 px-8" onClick={
            () => {
              setContent(Content === "Light" ? "Dark" : "Light")
            }
          }>{Content}</button>

          {/* <div className="space-x-4">
            <input className="border border-red-500"/>
            <button className="bg-green-500 px-4 py-2">Search</button>
          </div> */}

        </div>
      </div>


    <div className="w-[90%] mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">
      {ProductDataSet.map((item) => (
        <ProductCard data={item} key={uuidv4()} />
      ))}
    </div>
  </div>
  </>
)


};

export default ProductCardContainer;
