import anglerightbig from "../assets/angle-right-big.svg";
import anglerightsmall from "../assets/angle-right-small.svg";


export default function HomePageButton(props){
    return(
      <button className="text-[12px] lg:text-2xl text-[#EBEBEB] font-bold bg-[#071017] rounded-customBtn border-4 border-[#228A88] px-2 py-1 shadow-[0_0_69px_3px_rgba(0,255,255,0.25)]">
        <div className="flex flex-row align-middle justify-center space-x-2">
        {props.children}
        <img src={anglerightbig} alt="right angle" className="hidden lg:block"></img>
        <img src={anglerightsmall} alt="right angle" className="sm:block lg:hidden"></img>
        </div>
      </button>
    )
  }
  