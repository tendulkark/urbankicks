import React from "react";
import { reviews } from "../constants";
import { star } from "../assets/icons";

const CustomerReviews = () => {
  return (
    <section>
      <div className="flex flex-col justify-center items-center text-center">
        <h1 className="text-4xl font-bold font-palanquin">
          What Our <span className="text-coral-red">Customers</span> Say?
        </h1>
        <p className=" text-slate-gray max-w-md text-[17px] leading-normal font-montserrat mt-4">
          Hear genuine stories from our satisfied customers about their
          exceptional experiences with us.
        </p>
      </div>
      <div>
        <div className="flex flex-col justify-center items-center mt-16 gap-32 max-lg:gap-16 lg:flex-row">
          {reviews.map((review) => (
            <div className="flex justify-center items-center flex-col text-center w-2/6 max-lg:w-2/3">
              <img
                src={review.imgURL}
                alt={review.customerName}
                width={120}
                height={120}
                className="rounded-full "
              />
              <p className=" text-slate-gray font-montserrat leading-normal text-lg mt-6">
                {review.feedback}
              </p>
              <div className="flex gap-4 mt-2">
                <img src={star} alt="" />
                <p className="text-slate-gray font-montserrat leading-normal text-xl">
                  ({review.rating})
                </p>
              </div>
              <h1 className="text-3xl font-palanquin font-bold">
                {review.customerName}
              </h1>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CustomerReviews;
