import { arrowRight } from "../assets/icons";
import { Button } from "../components";
import { offers } from "../assets/images";
const SpecialOffers = () => {
  return (
    <section className="flex justify-between items-center max-lg:flex-col-reverse gap-10 max-container">
      <div className="flex-1">
        <img
          src={offers}
          alt="Bag Promotion"
          width={600}
          height={487}
          className="object-contain w-full"
        />
      </div>
      <div className="flex flex-1 flex-col">
        <h2 className="text-4xl font-palanquin font-bold">
          <span className="text-yellow-300">Special </span>
          Offer
        </h2>
        <p className="mt-4 info-text">
          Embark on a shopping journey that redefines your experience with
          unbeatable deals. From premier selections to incredible savings, we
          offer unparalleled value that sets us apart.
        </p>
        <p className="mt-6 info-text">
          Navigate a realm of possibilities designed to fulfill your unique
          desires, surpassing the loftiest expectations. Your journey with us is
          nothing short of exceptional.
        </p>
        <div className="mt-11 flex flex-wrap gap-4">
          <Button
            label="Shop now"
            iconURL={arrowRight}
            backgroundColor="bg-yellow-200"
            borderColor="border-yellow-100"
            textColor="text-slate-gray"
          />
          <Button
            label="Learn more"
            backgroundColor="bg-white"
            borderColor="border-slate-gray"
            textColor="text-slate-gray"
          />
        </div>
      </div>
    </section>
  );
};

export default SpecialOffers;
