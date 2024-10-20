import { useState } from "react";
import { arrowRight } from "../assets/icons";
import { Button, ShoeCard } from "../components";
import { statistics, bags } from "../constants/index";
import { bag1 } from "../assets/images";
const Hero = () => {
  const [bigBagImg, setBigBagImg] = useState(bag1);
  return (
    <section className="w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container">
      <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28 min-h-screen">
        <p className="text-xl font-montserrat text-pink-400">
          Our Summer Collection
        </p>
        <h1 className="mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold">
          <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10">
            The New Arrival
          </span>
          <br />
          <span className="text-pink-400 inline-block mt-3 mr-3">Fiora</span>
          Bags
        </h1>
        <p className="font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm">
          Explore our handcrafted handbags that blend elegance and
          functionality. Each unique design reflects your individuality, perfect
          for elevating any outfit. Discover your new favorite accessory today!
        </p>
        <Button label="Shop now" iconURL={arrowRight} />
        <div className="flex justify-start items-start flex-wrap w-full mt-20 gap-16">
          {statistics.map((stat, index) => (
            <div key={index}>
              <p className="text-4xl font-palanquin font-bold">{stat.value}</p>
              <p className="leading-7 font-montserrat text-slate-gray">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="relative flex-1 flex justify-center items-center xl:min-h-screen  bg-primary bg-hero bg-cover bg-center">
        <img
          src={bigBagImg}
          alt="bag colletion"
          width={410}
          height={132}
          className="object-contain relative z-10"
        />
        <div className="flex sm:gap-6 gap-4 absolute -bottom-[5%] max-sm:-bottom-[21%] max-md:-bottom-[23%] max-xl:-bottom-[25%] max-sm:px-6">
          {bags.map((image, index) => (
            <div key={index}>
              <ShoeCard
                index={index}
                imgURL={image}
                changeBigBagImage={(bag) => setBigBagImg(bag)}
                bigBagImg={bigBagImg}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
