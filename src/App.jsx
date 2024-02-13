import { topView } from "./assets/images";
import Nav from "./components/Nav";

import {
  Hero,
  PopularProducts,
  CustomerReviews,
  Footer,
  Subscribe,
  SpecialOffers,
  Services,
  SuperQuality,
} from "./sections";

const App = () => {
  const toTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <main className="relative">
      <Nav />
      <section className="xl:padding-l wide:padding-r padding-b">
        <Hero />
      </section>
      <section className="padding">
        <PopularProducts />
      </section>
      <section className="padding">
        <SuperQuality />
      </section>
      <section className="padding-x py-10">
        <Services />
      </section>
      <section className="padding">
        <SpecialOffers />
      </section>
      <section className="bg-pale-blue padding">
        <CustomerReviews />
      </section>
      <section className="padding-x sm:py-32 py-16 w-full">
        <Subscribe />
      </section>
      <section className=" bg-black padding-x padding-t pb-8 text-white">
        <Footer />
      </section>

      <img
        src={topView}
        alt="top-view"
        width={100}
        height={100}
        className="fixed bottom-0 right-0 cursor-pointer"
        onClick={() => toTop()}
      />
    </main>
  );
};

export default App;
