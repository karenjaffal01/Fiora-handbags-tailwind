import { Button } from "../components";

const Subscribe = () => {
  return (
    <section
      id="contact-us"
      className="max-container flex-col justify-center items-center gap-10"
    >
      <h3 className="text-center text-4xl leading-[68px] font-palanquin font-bold">
        Sign Up for
        <span className="text-pink-400"> Updates </span>& Newsletter
      </h3>
      <div className="  mt-14 w-full flex justify-center items-center max-sm:flex-col gap-5 p-2.5 sm:border sm:border-slate-gray rounded-full lg:max-w-[1000px] mx-auto">
        <input
          type="text"
          placeholder="subscribe@fiora.com"
          className="input"
        />
        <div className="flex  items-center max-sm:w-full">
          <Button label="Sign Up" fullWidth />
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
