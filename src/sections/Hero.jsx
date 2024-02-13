import React from "react";
import Button from "../components/Button";
import { arrowRight } from "../assets/icons";
import { shoes, statistics } from "../constants";
import ShoeCard from "../components/ShoeCard";
import { bigShoe1 } from "../assets/images";
import { useState } from "react";

const Hero = () => {
  const [bigShoeImg, setBigShoeImg] = useState(bigShoe1);
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col xl:flex-row justify-center w-full gap-10 max-container"
    >
      <div className="relative xl:w-2/5 flex flex-col max-xl:padding-x pt-28 justify-center items-start">
        <p className=" text-coral-red font-montserrat text-xl">
          Our Summer Collections
        </p>
        <h1 className="mt-10 font-palanquin text-8xl max-sm:text-[48px]  max-sm:leading-none font-bold">
          <span className=" xl:bg-white xl:whitespace-nowrap relative z-[1] pr-10">
            The New Arrival
          </span>
          <br />
          <span className="text-coral-red inline-block mt-3">UrbanKicks</span>
          Shoes
        </h1>
        <p className="text-slate-gray text-lg font-montserrat leading-8 mt-6 mb-14 sm:max-w-sm">
          Discover stylish Nike arrivals, quality comfort, and innovation for
          your active life.
        </p>
        <Button label="Shop Now" iconURL={arrowRight} className="pl-4" />

        <div className="flex space-x-10 justify-start items-start flex-wrap w-full mt-20 ">
          {statistics.map((stat) => (
            <div key={stat.label}>
              <p className="font-bold font-palanquin text-4xl">{stat.value}</p>
              <p className="text-slate-gray font-montserrat">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="relative flex-1 flex justify-center items-center max-xl:py-40 bg-primary bg-hero bg-center bg-cover">
        <img
          src={bigShoeImg}
          alt="bigshoe1"
          className="object-contain relative"
          width={690}
          height={500}
        />

        <div className="flex absolute -bottom-[5%] gap-4 sm:gap-6 sm:left-[10%] max-sm:px-6">
          {shoes.map((shoe) => (
            <ShoeCard
              key={shoe.bigShoe}
              imgURL={shoe}
              bigShoeImg={bigShoeImg}
              changeBigShoeImage={(shoe) => setBigShoeImg(shoe)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
