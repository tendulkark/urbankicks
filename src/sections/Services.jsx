import React from "react";
import { services } from "../constants";

const Services = () => {
  return (
    <section>
      <div className="flex justify-center max-container flex-wrap gap-9">
        {services.map((service) => (
          <div
            key={service.label}
            className="flex-1 sm:w-[350px] sm:min-w-[350px] w-full rounded-[20px] shadow-3xl mb-8 py-16 px-10"
          >
            <div className="w-11 h-11 flex justify-center items-center bg-coral-red rounded-full">
              <img
                src={service.imgURL}
                alt={service.label}
                width={24}
                height={24}
              />
            </div>
            <h3 className="text-3xl mt-4 font-bold font-palanquin">
              {service.label}
            </h3>
            <p className=" text-slate-gray break-words leading-normal font-montserrat my-2 text-lg">
              {service.subtext}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
