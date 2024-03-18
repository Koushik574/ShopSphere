import { Link } from "react-router-dom";

const ProductCard = (prop) => {

    const {title, brand, price, image_url, rating, id} = prop.data;
    // console.log(prop);
    // console.log(prop.data);
    // console.log(prop.data.title);
  
    return (
      <>
        <div className="flex flex-col justify-center items-center space-y-2">
          <img
            src= {image_url}
            alt="cardImg"
            className="w-44"
          />
          <p>{title}</p>
          <p>{brand}</p>
          <p>{price}</p>
          <p>{rating}</p>
          <Link to={"/productview/" + id}><button className="bg-green-400 p-4">Buy Now</button></Link>
          
        </div>
      </>
    );
  };

export default ProductCard;