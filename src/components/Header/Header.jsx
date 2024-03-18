import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
        <div className="2xl:container bg-slate-300 h-[10vh]">
            <div className="w-[90%] mx-auto grid grid-cols-1 md:grid-cols-2 h-[100%]">
                <div className="flex justify-start items-center">
                    <Link to="/"><p>Logo</p></Link>
                </div>

                <ul className="flex justify-end items-center space-x-5 h-[100%]">

                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/product">Product</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    <li><Link to="/cart">View Cart</Link></li>
                    <li><Link to="/about">About</Link></li>

                </ul>

            </div>
        </div>
    </>
  );
};

export default Header;
