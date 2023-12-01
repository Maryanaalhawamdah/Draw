import React from "react";
import Heading from "../Products/Heading";
import Product from "../Products/Product";
import {
  spfOne,
  spfTwo,
  spfThree,
  spfFour,
} from "../../../assets/images/index";

const SpecialOffers = () => {
  return (
    <div className="w-full pb-20" style={{color:'black'}}>
      <Heading heading="Special Offers" />
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lgl:grid-cols-3 xl:grid-cols-4 gap-10">
        <Product
          _id="1101"
          img={spfOne}
          productName="Chalky colours"
          price="35.00"
          color="Blank and White"
          badge={true}
          des="Making art with pastels produces gorgeous colours, and can be immersed in them without the need for a paintbrush, solvent or palette. All a painter needs to get started is some pastels and a sheet of paper."
        />
        <Product
          _id="1102"
          img={spfTwo}
          productName="Eraser"
          price="80.00"
          color="Gray"
          badge={true}
          des="all kind of erasers you will find for all uses ."
        />
        <Product
          _id="1103"
          img={spfThree}
          productName="Brushes"
          price="25.00"
          color="Mixed"
          badge={true}
          des="High quality you can use it more than one time ."
        />
        <Product
          _id="1104"
          img={spfFour}
          productName="Acrylic Color"
          price="220.00"
          color="Black"
          badge={true}
          des="Acrylic paint is a fast-drying paint made of pigment suspended in acrylic polymer emulsion and plasticizers, silicone oils, defoamers, stabilizers, or metal."
        />
      </div>
    </div>
  );
};

export default SpecialOffers;
