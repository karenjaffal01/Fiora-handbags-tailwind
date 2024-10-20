import { star } from "../assets/icons";

const PopularProductsCard = ({ imgURL, name, price, rating }) => {
  return (
    <div className=" flex flex-1 flex-col justify-center w-full max-sm:w-full lg:ml-10">
      <div className="max-sm:flex max-sm:justify-center">
        <img src={imgURL} alt={name} className="w-[270px] h-[250px]" />
      </div>
      <div className="ml-2 mt-8 flex justify-start gap-2.5 max-sm:justify-center">
        <img src={star} alt="rating icon" width={24} height={24} />
        <p className="font-montserrat text-xl leading-normal text-slate-gray">
          {rating}
        </p>
      </div>
      <div className="flex flex-col justify-center align-center">
        <h3 className="mt-2 text-2xl leading-normal font-semibold font-palanquin">
          {name}
        </h3>
        <p className="ml-2 mt-2 font-semibold font-montserrat text-pink-400 text-2xl leading-normal">
          {price}
        </p>
      </div>
    </div>
  );
};

export default PopularProductsCard;
