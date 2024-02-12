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
            <img src="" alt="service" width={50} height={50} className="" />
            <h3 className=" text-3xl font-bold font-palanquin">
              {service.label}
            </h3>
            <p className=" text-slate-gray font-montserrat my-2 text-lg">
              {service.subtext}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
