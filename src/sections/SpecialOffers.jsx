import React from "react";
import offer from "../assets/images/offer.svg";
import Button from "../components/Button";
import { arrowRight } from "../assets/icons";
const SpecialOffers = () => {
  return (
    <section>
      <div className="flex justify-between items-center max-xl:flex-col-reverse gap-10 max-container">
        <div className="">
          <img src={offer} alt="offer" className=" object-contain" />
        </div>
        <div className="">
          <h1 className="text-4xl font-bold font-palanquin">
            <span className="text-coral-red ">Special</span> Offer
          </h1>
          <p className="text-slate-gray font-montserrat text-lg mt-4 leading-7">
            Embark on a shopping journey that redefines your experience with
            unbeatable deals. From premier selections to incredible savings, we
            offer unparalleled value that sets us apart.
          </p>{" "}
          <br />
          <p className="text-slate-gray font-montserrat text-lg leading-7">
            Navigate a realm of possibilities designed to fulfill your unique
            desires, surpassing the loftiest expectations. Your journey with us
            is nothing short of exceptional.
          </p>
          <div className="flex mt-12 gap-4">
            <Button label="Show Now" iconURL={arrowRight}></Button>
            <Button
              label="Learn More"
              backgroundColor="bg-white"
              textColor="text-slate-gray"
              borderColor="border-slate-gray"
            ></Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpecialOffers;
