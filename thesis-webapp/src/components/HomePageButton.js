import angleright from "../assets/angle-right.svg";

export default function HomePageButton(props){
    return(
      <button className="text-2xl text-[#EBEBEB] font-bold bg-[#3A623F] hover:bg-[#2c4a30]  border-4 border-[#F19C1B] rounded-full text-white px-2 py-1 shadow-[0_0_69px_3px_rgba(0,255,255,0.25)]">
        <div className="flex flex-row align-middle justify-center space-x-2 text-red">
        {props.children}
        <img src={angleright} alt="right angle"></img>
        </div>
      </button>
    )
  }