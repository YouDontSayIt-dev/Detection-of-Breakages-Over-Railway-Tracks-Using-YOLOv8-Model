import Sidebar from "../components/Sidebar";
import React from "react";
import { useLocation } from "react-router-dom";
import dom_img from "../assets/aboutus_dom.png";
import finn_img from "../assets/aboutus_finn.png";
import james_img from "../assets/aboutus_james.png";
import mark_img from "../assets/aboutus_mark.png";
import seph_img from "../assets/aboutus_seph.png";
import facebook from "../assets/facebook.svg";
import instagram from "../assets/instagram.svg";
import github from "../assets/github.svg";
import linkin from "../assets/linkin.svg";

const AboutUs = () => {
  const location = useLocation();

  return (
    <div className="bg-customBackground w-full h-full overflow-hidden">
      {/* SIDEBAR COMPONENT  */}
      <Sidebar activePage={location.pathname} />
      <div className="w-full h-[120px] overflow-x-hidden">
        <div className="flex h-[10%] lg:h-[30%] ml-[80px] lg:ml-[125px] items-center pt-[56px] lg:p-[56px]">
          {/* CONTAINER FOR TOP ITEMS  */}
          {/* LEFT ITEMS */}
          <div className="flex">
            <h1 className="text-xl lg:text-4xl font-bold text-justify text-ebony">
              YOLOv8 Rail Detect
            </h1>
            <svg
              width="15"
              height="15"
              viewBox="0 0 36 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="ml-2 lg:ml-4 lg:h-[32px] lg:w-[36px]"
            >
              <path
                d="M32.4 3.55556H26.694L23.4 0H12.6L9.306 3.55556H3.6C2.64522 3.55556 1.72955 3.93016 1.05442 4.59695C0.379284 5.26375 0 6.16812 0 7.11111V28.4444C0 29.3874 0.379284 30.2918 1.05442 30.9586C1.72955 31.6254 2.64522 32 3.6 32H32.4C33.3548 32 34.2705 31.6254 34.9456 30.9586C35.6207 30.2918 36 29.3874 36 28.4444V7.11111C36 6.16812 35.6207 5.26375 34.9456 4.59695C34.2705 3.93016 33.3548 3.55556 32.4 3.55556ZM32.4 28.4444H3.6V7.11111H10.89L14.184 3.55556H21.816L25.11 7.11111H32.4V28.4444ZM18 8.88889C15.6131 8.88889 13.3239 9.82539 11.636 11.4924C9.94821 13.1594 9 15.4203 9 17.7778C9 20.1353 9.94821 22.3962 11.636 24.0632C13.3239 25.7302 15.6131 26.6667 18 26.6667C20.3869 26.6667 22.6761 25.7302 24.364 24.0632C26.0518 22.3962 27 20.1353 27 17.7778C27 15.4203 26.0518 13.1594 24.364 11.4924C22.6761 9.82539 20.3869 8.88889 18 8.88889ZM18 23.1111C16.5678 23.1111 15.1943 22.5492 14.1816 21.549C13.1689 20.5488 12.6 19.1923 12.6 17.7778C12.6 16.3633 13.1689 15.0067 14.1816 14.0065C15.1943 13.0063 16.5678 12.4444 18 12.4444C19.4322 12.4444 20.8057 13.0063 21.8184 14.0065C22.8311 15.0067 23.4 16.3633 23.4 17.7778C23.4 19.1923 22.8311 20.5488 21.8184 21.549C20.8057 22.5492 19.4322 23.1111 18 23.1111Z"
                fill="#228A88"
              />
            </svg>
          </div>
        </div>
      </div>

      <div className="w-full flex justify-center items-center  mt-[50px] lg:mt-[100px] px-4">
        {/* CONTAINER FOR THE RECTANGLE  */}
        <div className="grid grid-flow-col scroll-auto gap-[5rem] overscroll-x-contain snap-mandatory snap-x overflow-y-hidden">
          {/* CONTAINER FOR INDIVIDUAL RECTANGLE  */}
          <div className="w-[280px] md:w-[305px] h-[502px] flex flex-col bg-[#071017] rounded-[24px] border-4 border-solid border-[#228a88] shadow-[-10px_10px_50.4px_#228a88]">
            {/* CONTAINER FOR IMAGE  */}
            <div className="mt-[50px] flex justify-center">
              <img
                className="w-[200px] h-[200px] object-cover block"
                alt=""
                src={dom_img}
              />
            </div>

            {/* CONTAINER FOR TEXT NAME */}
            <div className="inline-flex flex-col items-center relative mt-[30px]">
              <div className="relative w-fit mt-[-1.00px] font-bold text-ebony text-[32px] tracking-[0] leading-[normal]">
                LIBARDO
              </div>
              <div className="relative w-fit  font-bold text-ebony text-[16px] tracking-[0] leading-[normal]">
                Dominique
              </div>
            </div>

            {/* CONTAINER FOR IMAGE FOOTER */}
            <div className="flex justify-center mt-[78px]">
              <div className="relative w-[202px] h-[32px]">
                <a
                  href="https://www.facebook.com/D.Libards"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    className="w-[32px] left-0 absolute h-[32px] top-0 hover:scale-105 transition-transform"
                    alt="Facebook"
                    title="Go to Facebook Profile"
                    src={facebook}
                  />
                </a>
                <a
                  href="https://www.instagram.com/_dom.dominos_/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    className="w-[32px] left-[58px] absolute h-[32px] top-0 hover:scale-105 transition-transform"
                    alt="Instagram"
                    title="Go to Instagram Profile"
                    src={instagram}
                  />
                </a>
                <a
                  href="https://github.com/d-libards"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    className="w-[32px] left-[115px] absolute h-[32px] top-0 hover:scale-105 transition-transform"
                    alt="GitHub"
                    title="Go to Github Profile"
                    src={github}
                  />
                </a>
                <a
                  href="https://www.linkedin.com/in/dominique-libardo/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    className="w-[29px] left-[173px] absolute h-[32px] top-0 hover:scale-105 transition-transform"
                    alt="LinkedIn"
                    title="Go to LinkedIn Profile"
                    src={linkin}
                  />
                </a>
              </div>
            </div>
          </div>

          {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/}
          {/* CONTAINER FOR INDIVIDUAL RECTANGLE  */}
          <div className="w-[280px] md:w-[305px] h-[502px] flex flex-col bg-[#071017] rounded-[24px] border-4 border-solid border-[#228a88] shadow-[-10px_10px_50.4px_#228a88]">
            {/* CONTAINER FOR IMAGE  */}
            <div className="mt-[50px] flex justify-center">
              <img
                className="w-[200px] h-[200px] object-cover block"
                alt=""
                src={finn_img}
              />
            </div>

            {/* CONTAINER FOR TEXT NAME */}
            <div className="inline-flex flex-col items-center relative mt-[30px]">
              <div className="relative w-fit mt-[-1.00px] font-bold text-ebony text-[32px] tracking-[0] leading-[normal]">
                MUYCO
              </div>
              <div className="relative w-fit  font-bold text-ebony text-[16px] tracking-[0] leading-[normal]">
                Mathew James
              </div>
            </div>

            {/* CONTAINER FOR IMAGE FOOTER */}
            <div className="flex justify-center mt-[78px]">
              <div className="relative w-[202px] h-[32px]">
                <a
                  href="https://www.facebook.com/JamesonSlime"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    className="w-[32px] left-0 absolute h-[32px] top-0 hover:scale-105 transition-transform"
                    alt="Facebook"
                    title="Go to Facebook Profile"
                    src={facebook}
                  />
                </a>
                <a
                  href="https://www.instagram.com/imperialdakku/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    className="w-[32px] left-[58px] absolute h-[32px] top-0 hover:scale-105 transition-transform"
                    alt="Instagram"
                    title="Go to Instagram Profile"
                    src={instagram}
                  />
                </a>
                <a
                  href="https://github.com/YouDontSayIt-dev"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    className="w-[32px] left-[115px] absolute h-[32px] top-0 hover:scale-105 transition-transform"
                    alt="GitHub"
                    title="Go to Github Profile"
                    src={github}
                  />
                </a>
                <a
                  href="https://ph.linkedin.com/in/mjpmuyco"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    className="w-[29px] left-[173px] absolute h-[32px] top-0 hover:scale-105 transition-transform"
                    alt="LinkedIn"
                    title="Go to LinkedIn Profile"
                    src={linkin}
                  />
                </a>
              </div>
            </div>
          </div>

          {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/}
          {/* CONTAINER FOR INDIVIDUAL RECTANGLE  */}
          <div className="w-[280px] md:w-[305px] h-[502px] flex flex-col bg-[#071017] rounded-[24px] border-4 border-solid border-[#228a88] shadow-[-10px_10px_50.4px_#228a88]">
            {/* CONTAINER FOR IMAGE  */}
            <div className="mt-[50px] flex justify-center">
              <img
                className="w-[200px] h-[200px] object-cover block"
                alt=""
                src={james_img}
              />
            </div>

            {/* CONTAINER FOR TEXT NAME */}
            <div className="inline-flex flex-col items-center relative mt-[30px]">
              <div className="relative w-fit mt-[-1.00px] font-bold text-ebony text-[32px] tracking-[0] leading-[normal]">
                BLANCO
              </div>
              <div className="relative w-fit  font-bold text-ebony text-[16px] tracking-[0] leading-[normal]">
                James Luis
              </div>
            </div>

            {/* CONTAINER FOR IMAGE FOOTER */}
            <div className="flex justify-center mt-[78px]">
              <div className="relative w-[202px] h-[32px]">
                <a
                  href="https://www.facebook.com/Jaems.27"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    className="w-[32px] left-0 absolute h-[32px] top-0 hover:scale-105 transition-transform"
                    alt="Facebook"
                    title="Go to Facebook Profile"
                    src={facebook}
                  />
                </a>
                <a
                  href="https://www.instagram.com/jms_blnc/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    className="w-[32px] left-[58px] absolute h-[32px] top-0 hover:scale-105 transition-transform"
                    alt="Instagram"
                    title="Go to Instagram Profile"
                    src={instagram}
                  />
                </a>
                <a
                  href="https://github.com/Android-James"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    className="w-[32px] left-[115px] absolute h-[32px] top-0 hover:scale-105 transition-transform"
                    alt="GitHub"
                    title="Go to Github Profile"
                    src={github}
                  />
                </a>
                <a
                  href="https://www.linkedin.com/in/james-luis-blanco-95b081277/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    className="w-[29px] left-[173px] absolute h-[32px] top-0 hover:scale-105 transition-transform"
                    alt="LinkedIn"
                    title="Go to LinkedIn Profile"
                    src={linkin}
                  />
                </a>
              </div>
            </div>
          </div>

          {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/}
          {/* CONTAINER FOR INDIVIDUAL RECTANGLE  */}
          <div className="w-[280px] md:w-[305px] h-[502px] flex flex-col bg-[#071017] rounded-[24px] border-4 border-solid border-[#228a88] shadow-[-10px_10px_50.4px_#228a88]">
            {/* CONTAINER FOR IMAGE  */}
            <div className="mt-[50px] flex justify-center">
              <img
                className="w-[200px] h-[200px] object-cover block"
                alt=""
                src={mark_img}
              />
            </div>

            {/* CONTAINER FOR TEXT NAME */}
            <div className="inline-flex flex-col items-center relative mt-[30px]">
              <div className="relative w-fit mt-[-1.00px] font-bold text-ebony text-[32px] tracking-[0] leading-[normal]">
                HABER
              </div>
              <div className="relative w-fit  font-bold text-ebony text-[16px] tracking-[0] leading-[normal]">
                Jhon Mark
              </div>
            </div>

            {/* CONTAINER FOR IMAGE FOOTER */}
            <div className="flex justify-center mt-[78px]">
              <div className="relative w-[202px] h-[32px]">
                <a
                  href="https://www.facebook.com/Haberrry/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    className="w-[32px] left-0 absolute h-[32px] top-0 hover:scale-105 transition-transform"
                    alt="Facebook"
                    title="Go to Facebook Profile"
                    src={facebook}
                  />
                </a>
                <a
                  href="https://www.instagram.com/dyanmarku/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    className="w-[32px] left-[58px] absolute h-[32px] top-0 hover:scale-105 transition-transform"
                    alt="Instagram"
                    title="Go to Instagram Profile"
                    src={instagram}
                  />
                </a>
                <a
                  href="https://github.com/DyanMarku"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    className="w-[32px] left-[115px] absolute h-[32px] top-0 hover:scale-105 transition-transform"
                    alt="GitHub"
                    title="Go to Github Profile"
                    src={github}
                  />
                </a>
                <a
                  href="https://www.linkedin.com/in/jhon-mark-haber-428870204/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    className="w-[29px] left-[173px] absolute h-[32px] top-0 hover:scale-105 transition-transform"
                    alt="LinkedIn"
                    title="Go to LinkedIn Profile"
                    src={linkin}
                  />
                </a>
              </div>
            </div>
          </div>

          {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/}
          {/* CONTAINER FOR INDIVIDUAL RECTANGLE  */}
          <div className="w-[280px] md:w-[305px] h-[502px] flex flex-col bg-[#071017] rounded-[24px] border-4 border-solid border-[#228a88] shadow-[-10px_10px_50.4px_#228a88]">
            {/* CONTAINER FOR IMAGE  */}
            <div className="mt-[50px] flex justify-center">
              <img
                className="w-[200px] h-[200px] object-cover block"
                alt=""
                src={seph_img}
              />
            </div>

            {/* CONTAINER FOR TEXT NAME */}
            <div className="inline-flex flex-col items-center relative mt-[30px]">
              <div className="relative w-fit mt-[-1.00px] font-bold text-ebony text-[32px] tracking-[0] leading-[normal]">
                PAJO
              </div>
              <div className="relative w-fit  font-bold text-ebony text-[16px] tracking-[0] leading-[normal]">
                Sephter
              </div>
            </div>

            {/* CONTAINER FOR IMAGE FOOTER */}
            <div className="flex justify-center mt-[78px]">
              <div className="relative w-[202px] h-[32px]">
                <a
                  href="https://www.facebook.com/profile.php?id=100091579403059"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    className="w-[32px] left-0 absolute h-[32px] top-0 hover:scale-105 transition-transform"
                    alt="Facebook"
                    title="Go to Facebook Profile"
                    src={facebook}
                  />
                </a>
                <a
                  href="https://www.instagram.com/seph.pajo/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    className="w-[32px] left-[58px] absolute h-[32px] top-0 hover:scale-105 transition-transform"
                    alt="Instagram"
                    title="Go to Instagram Profile"
                    src={instagram}
                  />
                </a>
                <a
                  href="https://github.com/sephterpajo"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    className="w-[32px] left-[115px] absolute h-[32px] top-0 hover:scale-105 transition-transform"
                    alt="GitHub"
                    title="Go to Github Profile"
                    src={github}
                  />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    className="w-[29px] left-[173px] absolute h-[32px] top-0 hover:scale-105 transition-transform"
                    alt="LinkedIn"
                    title="Go to LinkedIn Profile"
                    src={linkin}
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
