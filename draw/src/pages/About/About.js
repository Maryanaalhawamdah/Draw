import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Breadcrumbs from "../../components/pageProps/Breadcrumbs";

const About = () => {
  const location = useLocation();
  const [prevLocation, setPrevLocation] = useState("");

  useEffect(() => {
    setPrevLocation(location.state?.data);
  }, [location]);

  return (
    <div className="max-w-container mx-auto px-4">
      <Breadcrumbs title="About" prevLocation={prevLocation} />
      <div className="flex flex-wrap">
        <div className="w-1/2 pb-10">
          <h1 className="max-w-[600px] text-lightText mb-2" style={{ fontSize: "150%" }}>
            <span className="text-primeColor font-bold text-lg" style={{ fontSize: "150%" }}>
              Magic Art <br />
              <br />{" "}
            </span>
            Is a virtual oasis for art enthusiasts and creators alike. Our platform is dedicated to celebrating the beauty, diversity, and creativity of the art world , Beauty requires imagination , and with Magic Art, you will see imagination lead you to the beauty , We provide the appropriate tools that help you reach your dream and express your inner beings and feelings.


            <br />
            <Link to="/shop">
              <button className="w-60 h-10 bg-primeColor text-white hover:bg-black duration-300" style={{marginTop:'5%'}}>Continue Shopping</button>
            </Link>
          </h1>
        </div>
        <div className="w-1/2">
          <img src="/assets/images/logo.png" alt="logo" style={{ width: '55%',marginLeft:'20%' ,marginBottom:'10%'}} />
        </div>
      </div>
    </div>
  );
};

export default About;
