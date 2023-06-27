import React from "react";
import { FiChevronRight } from "react-icons/fi";
import { FaWpforms } from "react-icons/fa";
import BoxComponent from "./BoxComponent";
import { CgFileDocument } from "react-icons/cg";
import { RiTodoLine } from "react-icons/ri";
import { BiCycling } from "react-icons/bi";
import { AiOutlineCreditCard } from "react-icons/ai";
import { Link } from "react-router-dom";

const Home = () => {
  // const [formExpanded, setFormExpanded] = useState(false);

  // const handleFormClick = () => {
  //   setFormExpanded(!formExpanded);
  // };

  return (
    <>
      <div className="bg-black h-screen w-full text-white ml-[200px]">
        <h1 className="text-4xl justify-center items-center">
          Driving License Process
        </h1>
        <br />
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
          <div className="flex-1 mr-[190px] pl-8 bg-gradient-to-t from-purple-400 via-dark-300 to-indigo-400 rounded-[15px]">
            <div className="text-[50px] font-Bold">Online Form</div>
            <br />

            <div className="w-[400px]">
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
      </div>
    </>
  );
};

export default Home;
