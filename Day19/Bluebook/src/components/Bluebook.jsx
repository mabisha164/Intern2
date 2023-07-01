import React from "react";
import { CgNotes } from "react-icons/cg";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import dayjs from "dayjs";
import "dayjs/locale/en";

import { useNavigate } from "react-router-dom";

dayjs.locale("en");
const Bluebook = () => {
  const formattedDate = dayjs().format("YYYY-MM-DD");
  const navigate = useNavigate();

  const validationSchema = yup.object().shape({
    vehicleType: yup.string().required("Vehicle Type is required"),
    manufactureYear: yup.string().required("Year of Manufacture is required"),
    dateForm: yup.date().required("Last Renewal Form (BS) is required"),
    dateTo: yup.date().required("Last Renewal To (BS) is required"),
    cubicCapacity: yup.string().required("Cubic Capacity is required"),
    thirdPartyInsurance: yup.boolean(),
  });
  const cubicCapacities = {
    120: 1000,
    150: 1500,
    200: 2000,
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = (data) => {
    const {
      cubicCapacity,
      lastRenewalForm,
      lastRenewalTo,
      thirdPartyInsurance,
    } = data;
    let charge = cubicCapacities[parseInt(cubicCapacity)];
    const duration = new Date(lastRenewalTo) - new Date(lastRenewalForm);
    const years = duration / (365 * 24 * 60 * 60 * 1000);

    if (years >= 1) {
      charge += charge * 0.2 * Math.floor(years);
    }

    if (thirdPartyInsurance) {
      charge += 500;
    }

    console.log("Charge:", charge);
    navigate("/calculate", { state: { charge } });
    window.alert(`Charge: ${charge}`);
  };
  return (
    <div className="">
      <div className="bg-gray-300 h-[950px] w-[550px] ml-[500px] pt-12">
        <div className="bg-white h-[1000px] w-[550px] pt-8 ">
          <h1 className="text-2xl text-purple-800 ml-6 font-bold">
            Bluebook Service with Pick & Drop
          </h1>
          <div className="h-[140px] w-[480px] bg-amber-100 border-2 border-orange-200 rounded-lg ml-6 mt-8">
            <h1 className="mt-4 ml-4 text-l">
              Customer Support : 01-5970053
              <br />
              WhatsApp/Viber(Chat only):9801890083
            </h1>
            <p className="mt-4 ml-4">
              This Service is only for Kathmandu Valley
            </p>
          </div>
          <div className="flex gap-4 ml-6 mt-4">
            <div className="h-[30px] w-[30px] rounded-full bg-purple-800 flex justify-center align-middle ">
              <CgNotes className="bg-white mt-2 " />
            </div>
            <div>
              <h1 className="text-purple-800 font-bold text-xl">
                TERMS AND CONDITIONS
              </h1>
            </div>
          </div>

          {/* <div className="h-[70px] w-[620px] bg-white border-2 border-gray-400"> */}
          {/* <input placeholder="Vehicle Type"></input> */}
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="ml-6 mt-4">
              <input
                type="text"
                placeholder="      Vehicle Type"
                className="h-[60px] w-[480px] border-2 border-gray-300 rounded-lg"
                {...register("vehicleType")}
                list="vehicleTypes"
              />
              <datalist id="vehicleTypes">
                <option value="Two wheeler" />
                <option value="Four wheeler" />
              </datalist>
              {errors.vehicleType && (
                <p className="text-red-500">{errors.vehicleType.message}</p>
              )}
            </div>
            <div className="ml-6 mt-4">
              <input
                type="text"
                className="h-[60px] w-[480px] border-2 border-gray-300 rounded-lg"
                placeholder="    Year of Manufacture (YYYY) AD"
                {...register("manufactureYear")}
              />
              {errors.manufactureYear && (
                <p className="text-red-500">{errors.manufactureYear.message}</p>
              )}
            </div>
            <div className="ml-6 mt-4">
              <input
                type="text"
                className="h-[60px] w-[480px] border-2 border-gray-300 rounded-lg"
                placeholder="    Vehicle Cubic Capacity (CC)"
                {...register("cubicCapacity")}
              />
              {errors.cubicCapacity && (
                <p className="text-red-500">{errors.cubicCapacity.message}</p>
              )}
            </div>
            <h1 className="ml-6 mt-4 text-gray-500"> Last Renewal Form (BS)</h1>
            <div className="ml-6 mt-4 flex gap-4">
              <input
                type="date"
                className=" h-[60px] w-[480px] border-2 border-gray-300 rounded-lg text-gray-500"
                value={formattedDate}
                {...register("dateForm")}
              />

              <h1 className="mt-4 ">BS</h1>
            </div>
            {errors.dateForm && (
              <p className="text-red-500 ml-6">{errors.dateForm.message}</p>
            )}
            <h1 className="ml-6 mt-4 text-gray-500"> Last Renewal To (BS)</h1>
            <div className="ml-6 mt-4 flex gap-4">
              <input
                type="date"
                className=" h-[60px] w-[480px] border-2 border-gray-300 rounded-lg text-gray-500 "
                {...register("dateTo", { required: true })}
              />

              <p> </p>
              <h1 className="mt-4 ">BS</h1>
            </div>
            {errors.dateTo && (
              <p className="text-red-500 ml-6">{errors.dateTo.message}</p>
            )}
            <div className="flex ml-6 mt-4  gap-2">
              <input
                type="checkbox"
                className="h-5 w-5 border-2 border-black   "
              />{" "}
              <p className="ml-2"> Get Third Party Insurance</p>
            </div>
            <div>
              <button
                type="submit"
                className="h-[60px] w-[480px] bg-purple-800 text-white rounded-lg ml-6 mt-4 font-bold"
              >
                CALCULATE
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>

    // </div>
  );
};

export default Bluebook;
