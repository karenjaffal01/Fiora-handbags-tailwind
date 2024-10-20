const ShoeCard = ({ imgURL, changeBigBagImage, bigBagImg }) => {
  const handleClick = () => {
    if (bigBagImg !== imgURL.bigBag) {
      changeBigBagImage(imgURL.bigBag);
    }
  };

  return (
    <div
      className={`border-2 rounded-xl ${
        bigBagImg === imgURL.bigBag ? "border-pink-400" : "border-transparent"
      } cursor-pointer max-sm:flex-1`}
      onClick={handleClick}
    >
      <div className="flex justify-center items-center bg-card bg-center bg-cover sm:w-40 sm:h-40 rounded-xl max-sm:p-4">
        <img
          src={imgURL.thumbnail}
          alt="bag collection"
          width={127}
          height={103.34}
          className="object-contain"
        />
      </div>
    </div>
  );
};

export default ShoeCard;
