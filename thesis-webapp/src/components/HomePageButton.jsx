import anglerightbig from "../assets/angle-right-big.svg";
import anglerightsmall from "../assets/angle-right-small.svg";

export default function HomePageButton(props) {
  return (
    <button
      className="text-[12px] md:text-2xl text-[#EBEBEB] font-bold bg-[#071017] rounded-customBtn border-4 border-[#228A88] dark:border-[#F7F7F2] px-4 py-2 hover:shadow-[0_0_69px_3px_rgba(0,255,255,0.25)] 
    hover:bg-[#0710173d] transition-all duration-100 ease-in-out dark:bg-[#228A88]"
    >
      <div className="flex flex-row align-middle justify-center space-x-2">
        {props.children}
        <img
          src={anglerightbig}
          alt="right angle"
          className="hidden lg:block"
        ></img>
        <img
          src={anglerightsmall}
          alt="right angle"
          className="sm:block lg:hidden"
        ></img>
      </div>
    </button>
  );
}
