import {Link} from 'react-router-dom';

const HeroSection = () => {
    return (
      <>
        <div className="2xl:container">
          <div className="w-[90%] mx-auto grid grid-cols-1 md: grid-cols-2">
            <div className="flex flex-col justify-center items-start space-y-4 ">
              <h1 className="text-2xl">Clothes that you like very much</h1> 
              <p className="text-xl">
                Fashion is a dynamic form of self-expression, where garments weave
                a narrative of personal style. Clothing transcends mere fabric,
                becoming a powerful language that communicates identity without
                words.
              </p>
              <Link to="/product">
                <button className="bg-blue-400 p-4 rounded-xl">Shop Now</button>
              </Link>
            </div>
            <div className="flex flex-col justify-center items-start space-y-4">
              <img
                src="https://ik.imagekit.io/4z8covdo9/Full%20stack/home-img.png?updatedAt=1704636647536"
                alt="HeroImage"
              />
            </div>
          </div>
        </div>
      </>
    );
  };

export default HeroSection;