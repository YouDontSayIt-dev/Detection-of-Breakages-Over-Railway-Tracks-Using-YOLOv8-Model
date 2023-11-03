import NavBar from "../components/NavBar";
import camera from "../assets/camera.png";
import UploadButton from "../components/UploadButton";
import RadioInput from "../components/RadioInput";
import InferenceButton from "../components/InferenceButton";

function Detect() {
  return (
    <div className="bg-custom-green h-screen font-custom">
      {/* NAV BAR  */}
      <NavBar />
      <div className="flex flex-row items-center justify-center">
        {/* LEFT SIDE  */}
        <div className="w-[55%] flex flex-col justify-center items-center">
          <div className="flex justify-center items-center mt-16 mr-28">
            <h1 className="text-custom-text-orange text-7xl font-bold">
              RAIL DETECT
            </h1>
            <img src={camera} alt="camera" className="w-9 h-9 mb-16 ml-7" />
          </div>
          {/* BOX 1 BEHIND */}
          <div className="w-[558px] h-[544px] rounded-3xl border-8 border-solid border-custom-border shadow-custom-box-shadow mt-10 mr-12 z-1"></div>
          {/* BOX 2 FRONT */}
          <div className="bg-custom-box-1 w-[558px] h-[544px] rounded-3xl border-8 border-solid border-custom-border-box-2 shadow-custom-box-shadow-2 mr-1 z-50 absolute top-72"></div>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex flex-col w-[45%] h-96 space-y-10 mt-24">
          {/* RADIO BTNS */}
          <RadioInput />

          {/* UPLOAD BUTTON */}
          <UploadButton />

          {/* INFERENCE BUTTON */}
          <div className="w-[308px] h-[56px] absolute bottom-56">
            <InferenceButton />
          </div>
        </div>

        <div className="flex w-max h-max absolute bottom-20 right-40 items-end justify-center">
          <p className="text-custom-white text-2xl">Model's Accuracy:</p>
          <div className="rounded-full w-[88px] h-[88px] bg-custom-bg-radio ml-4 border-[1px] border-solid border-custom-border">
            <p className="text-custom-text-orange font-bold text-3xl text-center my-6 mx-1">
              92%
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Detect;
