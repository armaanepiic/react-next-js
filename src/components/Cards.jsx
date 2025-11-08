export default function Cards({listOfCards}) {
  return (
    <div className="flex-1 px-0 sm:px-2 md:px-0 flex flex-col md:flex-row justify-center items-stretch gap-0">
      {listOfCards.map((card) => (
        <div
          key={card.id}
          className="w-full md:flex-1 self-stretch px-6 py-5 overflow-hidden flex flex-col justify-start items-start gap-2 cursor-pointer relative border-b md:border-b-0 border-l-0 border-r-0 md:border border-[#E0DEDB]/80"
        >
          <div className="self-stretch flex justify-center flex-col text-[#49423D] text-sm md:text-sm font-semibold leading-6 md:leading-6">
            {card.heading}
          </div>
          <div className="self-stretch text-[#605A57] text-[13px] md:text-[13px] font-normal leading-[22px] md:leading-[22px]">
            {card.subHeading}
          </div>
          <img
            src={card.image}
            alt={card.heading}
            className="w-full h-40 object-cover rounded-md mt-3"
          />
        </div>
      ))}
    </div>
  )
}
