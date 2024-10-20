const ServicesCard = ({ imgURL, label, subtext }) => {
  return (
    <section className="flex flex-col flex-1  justify-center items-center gap-3 shadow-3xl px-8 py-16">
      <div className="flex flex-col lg:w-[200px] md:w-[135px] max-sm:w-[185px] ">
        <div className="w-11 h-11 flex justify-center items-center bg-pink-400 rounded-full">
          <img src={imgURL} alt={label} width={24} height={24} />
        </div>
        <h3 className="mt-5 font-palanquin text-2xl leading-normal font-bold ">
          {label}
        </h3>
        <p className="mt-3 break-words font-montserrat text-lg leading-normal text-slate-gray">
          {subtext}
        </p>
      </div>
    </section>
  );
};

export default ServicesCard;
