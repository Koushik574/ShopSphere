import React from "react";
import ReactDOM from "react-dom/client";
import "./style.css";
import Header from "./components/Header/Header";
import Body from "./components/Body/Body";
import Footer from "./components/Footer/Footer";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import Contact from "./components/Contact/Contact";
import Error from "./components/Error/Error";
import HeroSection from "./components/HeroSection/HeroSection";
import ProductCardContainer from "./components/ProductCardContainer/ProductCardContainer";
import ProductView from "./components/ProductView/ProductView";

const AppLayout = () => {
  return (
    <>
      <Header />
      {/* <Body /> */}
      <Outlet />
      <Footer />
    </>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    // NESTED ROUTES
    children: [
      {
        path:"/",
        element: <HeroSection />
      },
      {
        path:"/product",
        element: <ProductCardContainer />
      },
      {
        path: "/contact",
        element: <Contact />
      },
      {
        path: "/productview/:id",
        element: <ProductView />
      }
    ],
    errorElement: <Error />
  },
]);


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);

// const testEle = <h1 className="bg-red-500">Test</h1>
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(testEle);
