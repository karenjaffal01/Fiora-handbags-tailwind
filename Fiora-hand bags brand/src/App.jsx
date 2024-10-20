import {
  Hero,
  PopularProducts,
  Services,
  SpecialOffers,
  SuperQuality,
  CustomerReviews,
  Subscribers,
  Footer,
} from "./sections";

import Nav from "./components/Nav";

//to render the componenets that we want to have so we used () instead of {} to quickly return
const App = () => (
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
    <section className="padding bg-pale-blue">
      <CustomerReviews />
    </section>
    <section className="padding-x sm:py-32 py-16 w-full">
      <Subscribers />
    </section>
    <section className="padding-x padding-t pb-8 bg-[#f5e1e2]">
      <Footer />
    </section>
  </main>
);

export default App;
