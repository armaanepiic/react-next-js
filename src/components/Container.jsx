import MainContent from "./MainContent";

export default function Container() {
  return (
    // Container
    <div className="w-full min-h-screen relative bg-[#F7F5F3] overflow-x-hidden flex flex-col justify-start items-center">
      <div className="relative flex flex-col justify-start items-center w-full">
        <MainContent />
      </div>
    </div>
  );
}
