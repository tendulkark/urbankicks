import React from "react";
import { products } from "../constants";
import { star } from "../assets/icons";

const PopularProducts = () => {
  return (
    <section id="products">
      <div>
        <h1 className="font-palanquin text-4xl font-bold">
          Our <span className="text-coral-red">Popular</span> Products
        </h1>
        <p className="font-montserrat text-slate-gray mt-8 sm:max-w-xl">
          Experience top-notch quality and style with our sought-after
          selections. Discover a world of comfort, design, and value
        </p>

        <div className="mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-6 gap-14">
          {products.map((product) => (
            <div className="" key={product.name}>
              <img src={product.imgURL} alt="product shoe collections" />
              <div className="flex gap-6 mt-8">
                <img src={star} alt="star" />
                <p className="text-xl font-montserrat text-slate-gray">(4.5)</p>
              </div>
              <p className="font-semibold text-2xl font-palanquin leading-normal mt-2">
                {product.name}
              </p>
              <p className="font-semibold text-2xl text-coral-red font-montserrat leading-normal mt-2">
                {product.price}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularProducts;
