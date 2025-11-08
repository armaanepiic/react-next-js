import gridContents from "./gridObjects";

const contents = gridContents.map((content) => (
  <div className={content.wrapperClass}>
      <div className="flex flex-col gap-2">
        <h3 className="text-[#37322F] text-lg sm:text-xl font-semibold leading-tight">
          {content.heading}
        </h3>
        <p className="text-[#605A57] text-sm md:text-base font-normal leading-relaxed">
          {content.subHeading}
        </p>
      </div>
      <div className="w-full h-[200px] sm:h-[250px] md:h-[300px] rounded-lg flex items-center justify-center overflow-hidden">
        <img src={content.image} alt={content.imageAlt} className={content.imageClassName} />
      </div>
    </div>
))

export default function GridContent() {
  return (
    <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-0 border-l border-r border-[rgba(55,50,47,0.12)]">
      {contents}
    </div>
  );
}
