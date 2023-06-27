import React from "react";
import { FiChevronRight } from "react-icons/fi";
import { FaWpforms } from "react-icons/fa";
import BoxComponent from "./BoxComponent";
import { CgFileDocument } from "react-icons/cg";
import { RiTodoLine } from "react-icons/ri";
import { BiCycling } from "react-icons/bi";
import { AiOutlineCreditCard } from "react-icons/ai";
import { Link } from "react-router-dom";
import Services from "./services";
import { FiSearch } from "react-icons/fi";
import { LiaIdCardSolid } from "react-icons/lia";
import { AiOutlineEye } from "react-icons/ai";

import { BsFillCarFrontFill } from "react-icons/bs";
import { PiExamBold } from "react-icons/pi";

const Home = () => {
  // const [formExpanded, setFormExpanded] = useState(false);

  // const handleFormClick = () => {
  //   setFormExpanded(!formExpanded);
  // };

  return (
    <>
      <div className="bg-black h-screen w-full text-white ml-[140px]">
        <h1 className="text-4xl justify-between items-center mt-[30px]">
          Driving License Process
        </h1>

        <div className="flex gap-10 mt-10 w-[50%]">
          <div className="box-above text-center flex gap-2 flex-col">
            <BoxComponent
              icons={<FaWpforms />}
              title="Online Form"
              icon={<FiChevronRight />}
              // onClick={handleFormClick}
            />

            <br />
            <BoxComponent
              icons={<CgFileDocument />}
              title="Document Submisson"
              icon={<FiChevronRight />}
            />
            <br />
            <BoxComponent
              icons={<RiTodoLine />}
              title="Exam(Likhit)"
              icon={<FiChevronRight />}
            />
            <br />
            <BoxComponent
              icons={<BiCycling />}
              title="Trial"
              icon={<FiChevronRight />}
            />
            <br />
            <BoxComponent
              icons={<AiOutlineCreditCard />}
              title="Payment and License"
              icon={<FiChevronRight />}
            />
          </div>
          {/* {formExpanded && ( */}
          <div className="flex-1 mr-[190px] ml-[60px] pl-8 bg-gradient-to-t from-purple-400 via-dark-300 to-indigo-400 rounded-[15px]">
            <div className="text-[50px] mt-20 font-Bold">Online Form</div>
            <br />

            <div className="w-[600px] ">
              <p className="text-[18px]">
                Apply for a new driving license, renewal, or new category
                online. Limited quotas available, and agent assistance is an
                option for those facing form difficulties.
              </p>
            </div>

            <div>
              <div className="text-[24px] font-bold">Related Links</div>

              <ul className="list-disc ml-[18px]">
                <Link>
                  <li>Online Resistration Form </li>
                </Link>
                <Link>
                  <li>Resistration Process </li>
                </Link>
              </ul>
            </div>
          </div>
          {/* )} */}
        </div>
        <div className="bg-black w-full">
          <div className=" mt-20 ">
            <h1 className="text-white font-bold text-5xl ">Our Services</h1>
            {/* </div> */}
            <div className="  mt-10 bg-gradient-to-t from-purple-400 via-dark-300 to-indigo-400 gap-20 rounded-3xl  w-[1200px] h-[450px] ">
              <div className="flex justify-between mr-20">
                <Services title="Liscense Data" icon={<FiSearch />} />
                <Services title="Licene status " icon={<LiaIdCardSolid />} />
                <Services title="Online Exam" icon={<RiTodoLine />} />
                <Services title="Color Vision" icon={<AiOutlineEye />} />
              </div>
              <div className="flex justify-center gap-20 ">
                <div>
                  <Services
                    title="Driving Liscense"
                    icon={<BsFillCarFrontFill />}
                  />
                </div>
                <div className="pr-20">
                  <Services title="Exam Result" icon={<PiExamBold />} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
