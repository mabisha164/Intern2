import React from "react";
import img1 from "../Images/img1.png";
import { FaApple } from "react-icons/fa";
import { BiLogoPlayStore } from "react-icons/bi";

const Landing = () => {
  return (
    <>
      <div className="bg-black h-screen w-full text-white ">
        {/* <div className="flex"> */}
        <div className=" justify-around flex-1 ">
          <div className="flex">
            <div className="mx-[120px]">
              <div className="text-white py-10">
                <h1 className="text-7xl font-poppins">
                  Download Our <br />
                  App Today
                </h1>
              </div>
              <br />

              <div className="">
                ड्राइभिङ परीक्षा तयारीको लागि अब सजिलो अध्ययन गर्नुहोस्। यसमा
                तपाईंलाई
                <br /> पूर्ण पाठ्यक्रम, महत्वपूर्ण सूचना, प्रश्नोत्तरहरू र
                अभ्यास सामग्री प्राप्त हुनेछ।
                <br /> आफ्नो ड्राइभिङ परीक्षा तयारीलाई अब सहज बनाएर सुरक्षित सडक
                यात्रामा पूर्ण
                <br /> विश्वास जोगाउनुहोस्।
                <br />
                <br />
              </div>
              <div className="flex  mt-10">
                <div>
                  {" "}
                  <button className="bg-white text-black px-4 py-3 h-[70px] w-[170px] rounded-[15px] flex items-center ">
                    <div className="p-2 ">
                      <FaApple className="text-2xl" />
                    </div>
                    <div>
                      <p className="text-xs">Download on the</p>App Store
                    </div>
                  </button>
                </div>
                <div>
                  <button className="bg-white text-black px-4 py-3 h-[70px] w-[170px] rounded-[15px] ml-[50px] flex items-center">
                    <div className="px-2 ">
                      <BiLogoPlayStore className="text-2xl" />
                    </div>
                    <div>
                      <p className="text-xs">Get IT ON </p> Google Play
                    </div>
                  </button>
                </div>
              </div>
            </div>
            <div className="flex-1 relative">
              <div className="bg-gradient-to-t from-indigo-600 via-purple-300 to-purple-200 ... w-[330px] h-[700px] rounded-xl ml-56 "></div>
              <div className=" mr-36 absolute top-0">
                <img src={img1} className="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Landing;
