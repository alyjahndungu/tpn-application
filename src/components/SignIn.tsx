import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { openPost } from "@/utils/api";
import { login } from "@/utils/config";
import { accessToken } from "../utils/config";

type FormValues = {
  email: string;
  password: string;
};

const SignIn = () => {
  const {
    register,
    handleSubmit,
    watch,
    unregister,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    await openPost("/login", data)
      .then(async (response) => {
        {
          const token = response.accessToken;
          await login({ token });
        }
      })
      .catch((err) => {
        {
          console.log(err);
        }
      });
  };
  return (
    <div className="flex items-center min-h-screen bg-gray-900 dark:bg-gray-900">
      <div className="container mx-auto">
        <div className="max-w-md mx-auto my-10">
          <div className="text-center">
            <h1 className="text-3xl font-bold tracking-wider text-white-800 mb-4 capitalize text-white-300">
              Welcome Back
            </h1>
            <p className="text-gray-500 dark:text-gray-400">
              Sign in to access your account
            </p>
          </div>
          <div className="mb-7">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-4">
                <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                  Email address
                </label>
                <input
                  id="email"
                  type="email"
                  {...register("email", {
                    required: true,
                  })}
                  placeholder="johnsnow@example.com"
                  className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                />
                {errors.email && errors.email.type === "required" && (
                  <span className="text-sm text-red-700">
                    Email address is required
                  </span>
                )}
              </div>
              <div className="mb-4">
                <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                  Password
                </label>
                <input
                  id="password"
                  type="password"
                  {...register("password", {
                    required: true,
                    minLength: {
                      value: 4,
                      message: "Password must have at least 4 characters",
                    },
                  })}
                  placeholder="Enter your password"
                  className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                />
                {errors.password && errors.password.type === "required" && (
                  <span className="text-sm text-red-700">
                    Password is required
                  </span>
                )}
              </div>
              <div className="flex justify-between mb-2">
                <a
                  href="#!"
                  className="text-sm text-gray-400  mb-4 focus:outline-none focus:text-indigo-500 hover:text-indigo-500 dark:hover:text-indigo-300"
                >
                  Forgot password?
                </a>
              </div>
              <div className="mb-6">
                <button
                  type="submit"
                  className="w-full px-3 py-4 text-white bg-indigo-500 rounded-md focus:bg-indigo-600 focus:outline-none"
                >
                  Sign in
                </button>
              </div>
              <p className="text-sm text-center text-gray-400">
                Don&#x27;t have an account yet?{" "}
                <a
                  href="/auth/sign-up"
                  className="text-indigo-400 focus:outline-none focus:underline focus:text-indigo-500 dark:focus:border-indigo-800"
                >
                  Sign up
                </a>
                .
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
