import React from "react";
import Slider from "react-slick";
import Heading from "../Products/Heading";
import Product from "../Products/Product";
import {
  newArrOne,
  newArrTwo,
  newArrThree,
  newArrFour,
} from "../../../assets/images/index";
import SampleNextArrow from "./SampleNextArrow";
import SamplePrevArrow from "./SamplePrevArrow";

const NewArrivals = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  };
  return (
    <div className="w-full pb-16" style={{color:'black'}}>
      <Heading heading="New Arrivals" />
      <Slider {...settings}>
        <div className="px-2">
          <Product
            _id="100001"
            img={newArrOne}
            productName="
            Tiny Brushes"
            price="44.00"
            color="Black"
            badge={true}
            des="Tiny black brushes made from organic hair to let your color be more reality."
          />
        </div>
        <div className="px-2">
          <Product
            _id="100002"
            img={newArrTwo}
            productName="Pencil coal"
            price="250.00"
            color="Black"
            badge={true}
            des="A collection of pencils made of coal in more one size you can buy it for more than one drawing ."
          />
        </div>
        <div className="px-2">
          <Product
            _id="100003"
            img={newArrThree}
            productName="Header pen"
            price="80.00"
            color="Mixed"
            badge={true}
            des="This collection will help you to make your pen draw in more font in diferent way ."
          />
        </div>
        <div className="px-2">
          <Product
            _id="100004"
            img={newArrFour}
            productName="Kids Color"
            price="60.00"
            color="Mixed"
            badge={false}
            des="your Kids will be happy to draw in these color and you will be more Relaxed mind ."
          />
        </div>
        <div className="px-2">
          <Product
            _id="100005"
            img={newArrTwo}
            productName="Pencil coal"
            price="60.00"
            color="Mixed"
            badge={false}
            des="A collection of pencils made of coal in more one size you can buy it for more than one drawing."
          />
        </div>
      </Slider>
    </div>
  );
};

export default NewArrivals;
