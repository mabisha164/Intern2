import React from "react";
import { useForm } from "react-hook-form";

function Signin() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    data.preventDefault;
    console.log(data);
  };

  return (
    <div className="text-center flex justify-center align-middle">
      <div className="h-[600px] border border-white w-[500px] bg-gradient-to-t from-purple-400 via-dark-300 to-indigo-400 text-black">
        <h1 className="text-5xl text-center mt-10 "> NDLE Login Form</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mt-12">
            <label className="mr-4">Name:</label>
            <input
              type="text"
              placeholder="FullName"
              className="bg-blue-100 w-[250px] h-[40px] rounded-lg text-center"
              {...register("FullName", { required: true })}
            />
            <div className="text-red-700 font-bold text-xm">
              {errors.FullName?.type === "required" && "FullName is Required"}
            </div>
          </div>
          <br />
          <div>
            <label className="mr-4">E-mail:</label>{" "}
            <input
              type="text"
              placeholder="Enter your mail"
              className="bg-blue-100 w-[250px] h-[40px] rounded-lg text-center"
              {...register("email", { required: true })}
            />
            <div className="text-red-700 font-bold text-xm">
              {errors.email?.type === "required" && "Email is Required"}
            </div>
          </div>
          <br />
          <div>
            <label className="mr-2">Password:</label>{" "}
            <input
              type="password"
              placeholder="*********"
              className="bg-blue-100 w-[250px] h-[40px] rounded-lg text-center"
              {...register("password", { required: true })}
            />
            <div className="text-red-700 font-bold text-xm">
              {errors.password?.type === "required" && "Password is Required"}
            </div>
          </div>
          <br />
          <div className="flex ml-20">
            <input type="checkbox" {...register("rememberMe")} />
            <label className="ml-2">Remember me</label>
            <div className="ml-[40px]">
              <a className="ml-[60px]" href="#">
                Forget Password
              </a>
            </div>
          </div>
          <br />
          <button
            type="submit"
            className="text-black bg-blue-200 w-[200px] h-[50px] rounded-lg ml"
          >
            Submit
          </button>
          <div className="flex pb-20 text-xl justify-center">
            <p>
              Don't have an account? <button>Sign up</button>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signin;
