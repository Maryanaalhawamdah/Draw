import React from "react";
import Heading from "../Products/Heading";
import Product from "../Products/Product";
import {
  bestSellerOne,
  bestSellerTwo,
  bestSellerThree,
  bestSellerFour,
} from "../../../assets/images/index";

const BestSellers = () => {
  return (
    <div className="w-full pb-20">
      <Heading heading="Our Bestsellers" />
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lgl:grid-cols-3 xl:grid-cols-4 gap-10">
        <Product
          _id="1011"
          img={bestSellerOne}
          productName="Marker Color"
          price="35.00"
          color="Blank and White"
          badge={true}
          des="A set of watercolors that contains all the colors you need. An integrated set that will no longer be confused in combining colors to reach what you want.."
        />
        <Product
          _id="1012"
          img={bestSellerTwo}
          productName="Holder Tools"
          price="180.00"
          color="Gray"
          badge={false}
          des="It consists of a tool holder and a complete set of drawing tools you need. Everything you need is at your disposal."
        />
        <Product
          _id="1013"
          img={bestSellerThree}
          productName="Canvase Panels"
          price="25.00"
          color="Mixed"
          badge={true}
          des="Paintings of multiple sizes and shapes. You will not need to modify your drawing to fit the size of the painting. We have brought you all sizes and measurements and the best materials."
        />
        <Product
          _id="1014"
          img={bestSellerFour}
          productName="ًWhite Brushes"
          price="100.00"
          color="ًWhite"
          badge={false}
          des="A group of various white brushes of all sizes and shapes that will break all boundaries in your drawing. What you need you will find at your fingertips."
        />
      </div>
    </div>
  );
};

export default BestSellers;
