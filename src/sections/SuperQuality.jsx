import React from "react";
import Button from "../components/Button";
import { shoe8 } from "../assets/images";

const SuperQuality = () => {
  return (
    <section id="superquality">
      <div className="flex flex-col justify-center items-center lg:flex-row">
        <div>
          <h1 className="text-4xl font-bold font-palanquin md:w-3/4">
            We Provide You
            <span className="text-coral-red"> Super Quality </span> Shoes
          </h1>
          <p className="text-slate-gray mt-4 font-montserrat leading-8 text-xl md:w-3/4">
            Ensuring premium comfort and style, our meticulously crafted
            footwear is designed to elevate your experience, providing you with
            unmatched quality, innovation, and a touch of elegance.
          </p>
          <br />
          <p className="text-xl font-montserrat text-slate-gray md:w-3/4">
            Our dedication to detail and excellence ensures your satisfaction
          </p>
          <div className="mt-10 ">
            <Button label="View Details" />
          </div>
        </div>

        <div className="max-md:mt-12">
          <img src={shoe8} alt="shoe8" width={1300} />
        </div>
      </div>
    </section>
  );
};

export default SuperQuality;
