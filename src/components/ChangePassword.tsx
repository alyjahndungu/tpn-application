import React, { useRef } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { post } from "@/utils/api";
import Navbar from "./Navbar";

type FormValues = {
  oldPassword: string;
  password: string;
};

const ChangePassword = () => {
  const {
    register,
    watch,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>();

  const oldPassword = useRef({});
  oldPassword.current = watch("oldPassword", "");

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    await post("/login", data)
      .then(async (response) => {
        {
          console.log(response);
          reset();
        }
      })
      .catch((err) => {
        {
          console.log(err);
        }
      });
  };
  return (
    <main className="min-h-screen w-full bg-white border-l">
      <Navbar />
      <div className="flex items-center min-h-screen bg-gray-900 dark:bg-gray-900">
        <div className="container mx-auto">
          <div className="max-w-md mx-auto my-10">
            <div className="text-center">
              <h1 className="text-3xl font-bold tracking-wider text-white-800 mb-4 capitalize text-white-300">
                Change Password
              </h1>
            </div>
            <div className="mb-7">
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-4">
                  <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                    Old Password
                  </label>
                  <input
                    id="oldPassword"
                    type="password"
                    {...register("oldPassword", {
                      required: true,
                      minLength: {
                        value: 4,
                        message: "Password must have at least 4 characters",
                      },
                    })}
                    placeholder="Enter your password"
                    className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                  {errors.oldPassword &&
                    errors.oldPassword.type === "required" && (
                      <span className="text-sm text-red-700">
                        Password is required
                      </span>
                    )}
                </div>
                <div className="mb-4">
                  <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                    New password
                  </label>
                  <input
                    id="password"
                    type="password"
                    {...register("password", {
                      required: true,
                      validate: (value) =>
                        value === oldPassword.current ||
                        "Sorry! You cannot use old password again.",
                    })}
                    placeholder="Enter your new password"
                    className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                  {errors.password && errors.password.type === "required" && (
                    <span className="text-sm text-red-700">
                      New password is required
                    </span>
                  )}
                  {errors.password && (
                    <span className="text-sm text-red-700">
                      {errors.password.message}
                    </span>
                  )}
                </div>
                <div className="mb-6">
                  <button
                    type="submit"
                    className="w-full px-3 py-4 text-white bg-indigo-500 rounded-md focus:bg-indigo-600 focus:outline-none"
                  >
                    Change Password
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ChangePassword;
