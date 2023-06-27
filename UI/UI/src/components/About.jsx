import React from "react";
import img2 from "../Images/img2.png";
import img4 from "../Images/img4.jpg";
import img5 from "../Images/img5.png";

const About = () => {
  return (
    <div className="bg-black w-full flex">
      <div className="flex-1">
        <div>
          <div className="text-4xl text-white mt-10 px-20 font-bold ">
            <h1>
              About NDLE:Nepal Driving
              <br /> License Examination
            </h1>
          </div>
          <div className="mt-4 px-20 text-xl">
            <h3>
              Welcome to NDLE,your trusted destination for National Driver's
              <br />
              License Examination information and resources.Our mission is{" "}
              <br />
              to ensure road safety and promote responsible driving
              <br />
              through comprehensive driver's license evaluations.
            </h3>
          </div>
          <div className="">
            <img
              className="w-[500px] h-[250px] mt-8 mx-[75px] border rounded-3xl"
              src={img2}
            />
          </div>
          <div className="text-2xl mt-4 mx-[75px]">
            <h1>Join us Today</h1>
          </div>
          <p className=" mt-2 mx-[75px]">
            Embark on your journey towards a driver's license with NDLE.
            <br /> Prepare with confidence, gain essential knowledge, and
            <br /> demonstrate your competence on the road. Together, let's
            <br /> build a safer driving community. Contact us to learn more
            <br /> about NDLE or explore our resources to kick-start <br /> your
            preparation today.
          </p>
        </div>
      </div>
      <div className="flex-1 ">
        <div>
          <img
            className="w-[470px] h-[250px] mt-8  border rounded-3xl"
            src={img4}
          />
          <div className="text-4xl  mt-2">
            <h1> Our Purpose</h1>
          </div>
          <p className=" mt-2">
            At NDLE, we understand the importance of
            <br /> competent drivers on the road. Our purpose is to
            <br /> assess and evaluate individuals seeking a driver's <br />
            license to ensure they possess the necessary <br />
            knowledge and skills to drive safely. We aim to
            <br /> reduce accidents, improve traffic management
            <br /> and enhance overall road safety standards.
          </p>
          <div>
            <img
              className="w-[470px] h-[200px] mt-8 border rounded-3xl"
              src={img5}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
