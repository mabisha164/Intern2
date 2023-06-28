// import React from "react";
// import { useForm } from "react-hook-form";

// function Signin() {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm();

//   const onSubmit = (data) => {
//     data.preventDefault;
//     console.log(data);
//   };

//   return (
//     <div className="text-center flex justify-center align-middle">
//       <div className="h-[600px] border border-white w-[500px] bg-gradient-to-t from-purple-400 via-dark-300 to-indigo-400 text-black">
//         <h1 className="text-5xl text-center mt-10 "> NDLE Login Form</h1>
//         <form onSubmit={handleSubmit(onSubmit)}>
//           <div className="mt-12">
//             <label className="mr-4">Name:</label>
//             <input
//               type="text"
//               placeholder="FullName"
//               className="bg-blue-100 w-[250px] h-[40px] rounded-lg text-center"
//               {...register("FullName", { required: true })}
//             />
//             <div className="text-red-700 font-bold text-xm">
//               {errors.FullName?.type === "required" && "FullName is Required"}
//             </div>
//           </div>
//           <br />
//           <div>
//             <label className="mr-4">E-mail:</label>{" "}
//             <input
//               type="text"
//               placeholder="Enter your mail"
//               className="bg-blue-100 w-[250px] h-[40px] rounded-lg text-center"
//               {...register("email", { required: true })}
//             />
//             <div className="text-red-700 font-bold text-xm">
//               {errors.email?.type === "required" && "Email is Required"}
//             </div>
//           </div>
//           <br />
//           <div>
//             <label className="mr-2">Password:</label>{" "}
//             <input
//               type="password"
//               placeholder="*********"
//               className="bg-blue-100 w-[250px] h-[40px] rounded-lg text-center"
//               {...register("password", { required: true })}
//             />
//             <div className="text-red-700 font-bold text-xm">
//               {errors.password?.type === "required" && "Password is Required"}
//             </div>
//           </div>
//           <br />
//           <div className="flex ml-20">
//             <input type="checkbox" {...register("rememberMe")} />
//             <label className="ml-2">Remember me</label>
//             <div className="ml-[40px]">
//               <a className="ml-[60px]" href="#">
//                 Forget Password
//               </a>
//             </div>
//           </div>
//           <br />
//           <button
//             type="submit"
//             className="text-black bg-blue-200 w-[200px] h-[50px] rounded-lg ml"
//           >
//             Submit
//           </button>
//           <div className="flex pb-20 text-xl justify-center">
//             <p>
//               Don't have an account? <button>Sign up</button>
//             </p>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default Signin;
// import React from "react";
// import { useForm } from "react-hook-form";
// import { z } from "zod";

// const schema = z.object({
//   name: z.string().nonempty("Name is required"),
//   email: z.string().nonempty("Email is required").email("Invalid email format"),
//   password: z.string().nonempty("Password is required"),
// });

// function Signin() {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm({ resolver: zodResolver(schema) });

//   const onSubmit = (data) => {
//     console.log(data);
//   };

//   return (
//     <div className="text-center flex justify-center align-middle">
//       <div className="h-[500px] border border-white w-[500px] bg-gradient-to-t from-purple-400 via-dark-300 to-indigo-400 text-black">
//         <h1 className="text-5xl text-center mt-10 ">Login Form</h1>
//         <form onSubmit={handleSubmit(onSubmit)}>
//           <div className="mt-12">
//             <label className="mr-4">Name:</label>
//             <input
//               type="text"
//               placeholder="FullName"
//               className="bg-blue-100 w-[250px] h-[40px] rounded-lg text-center"
//               {...register("name")}
//             />
//             {errors.name && <p>{errors.name.message}</p>}
//           </div>
//           <br />
//           <div>
//             <label className="mr-4">E-mail:</label>{" "}
//             <input
//               type="text"
//               placeholder="Enter your mail"
//               className="bg-blue-100 w-[250px] h-[40px] rounded-lg text-center"
//               {...register("email")}
//             />
//             {errors.email && <p>{errors.email.message}</p>}
//           </div>
//           <br />
//           <div>
//             <label className="mr-2">Password:</label>{" "}
//             <input
//               type="password"
//               placeholder="*********"
//               className="bg-blue-100 w-[250px] h-[40px] rounded-lg text-center"
//               {...register("password")}
//             />
//             {errors.password && <p>{errors.password.message}</p>}
//           </div>
//           <br />
//           <div className="flex ml-20">
//             <input type="checkbox" {...register("rememberMe")} />
//             <label className="ml-2">Remember me</label>
//             <div className="ml-[40px]">
//               <a className="ml-[60px]" href="#">
//                 Forget Password
//               </a>
//             </div>
//           </div>
//           <br />
//           <button
//             type="submit"
//             className="text-black bg-blue-200 w-[200px] h-[50px] rounded-lg ml"
//           >
//             Submit
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default Signin;
import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object().shape({
  name: yup.string().required("Name is required"),
  email: yup
    .string()
    .required("Email is required")
    .email("Invalid email format"),
  password: yup.string().required("Password is required"),
});

function Signin() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = (data) => {
    console.log(data);
    alert("Login Successful!!!");
  };

  return (
    <div className="text-center flex justify-center align-middle mt-20">
      <div className="h-[550px] border border-white w-[600px] bg-gradient-to-t from-purple-400 via-dark-300 to-indigo-400 text-black">
        <h1 className="text-5xl text-center mt-10 ">Login Form</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mt-12">
            <label className="mr-4 ">Name:</label>
            <input
              type="text"
              placeholder="FullName"
              className="bg-blue-100 w-[250px] h-[40px] rounded-lg text-center"
              {...register("name")}
            />
            {errors.name && (
              <p className="text-red-500">{errors.name.message}</p>
            )}
          </div>
          <br />
          <div>
            <label className="mr-4">E-mail:</label>{" "}
            <input
              type="text"
              placeholder="Enter your mail"
              className="bg-blue-100 w-[250px] h-[40px] rounded-lg text-center"
              {...register("email")}
            />
            {errors.email && (
              <p className="text-red-500">{errors.email.message}</p>
            )}
          </div>
          <br />
          <div>
            <label className="mr-2">Password:</label>{" "}
            <input
              type="password"
              placeholder="*********"
              className="bg-blue-100 w-[250px] h-[40px] rounded-lg text-center"
              {...register("password")}
            />
            {errors.password && (
              <p className="text-red-500">{errors.password.message}</p>
            )}
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
            className="text-black bg-blue-200 w-[230px] h-[60px] rounded-lg ml"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Signin;
