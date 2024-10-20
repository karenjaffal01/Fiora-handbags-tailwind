import { bag3 } from "../assets/images";
import { Button } from "../components";
import { truckFast } from "../assets/icons";
const SuperQuality = () => {
  return (
    <section
      id="about-us"
      className="flex justify-start items-center max-lg:flex-col gap-5 w-full max-container"
    >
      <div className="flex flex-1 flex-col mb-5 mx-15">
        <h2 className="font-palanquin capitalize text-4xl lg:max-w-lg font-bold ml-14 max-md:m-0">
          We Provide You
          <span className="text-pink-400"> Super </span>
          <span className="text-pink-400">Quality </span> Bags
        </h2>
        <p className="mt-4 lg:max-w-lg info-text ml-14 max-md:ml-0">
          Ensuring premium comfort and style, our meticulously crafted and is
          designed to elevate your experience, providing you with unmatched
          quality, innovation, and a touch of elegance.
        </p>
        <p className="mt-6 lg:max-w-lg info-text ml-14 max-md:ml-0">
          Our dedication to detail and excellence ensures your satisfaction
        </p>
        <div className=" ml-14 mt-11 max-md:ml-0">
          <Button label="View details" />
        </div>
      </div>
      <div className="flex-1 flex justify-center items-center pb-10">
        <img
          src={bag3}
          alt="product detail"
          width={350}
          height={200}
          className="object-contain pt-5"
        />
      </div>
    </section>
  );
};

export default SuperQuality;
