/* eslint-disable react/no-unescaped-entities */
import React, { useEffect, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { patch, get } from "@/utils/api";
import { getUserId } from "@/utils/config";
import Navbar from "./Navbar";

type FormValues = {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
};

type User = {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
};

const EditProfile = () => {
  const [user, setUser] = useState<User>({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const userId = getUserId();

  useEffect(() => {
    get(`/users/${userId}`)
      .then((response) => {
        {
          setUser(response);
        }
      })
      .catch((err) => {
        {
          console.log(err);
        }
      });
  }, [userId]);

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    console.log(data);

    await patch(`/users/${userId}`, data)
      .then((response) => {
        {
          console.log(response);
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

      <section className="bg-gray-900 dark:bg-gray-900">
        <div className="flex justify-center min-h-screen">
          <div className="flex items-center w-full max-w-3xl p-8 mx-auto lg:px-12 lg:w-3/5">
            <div className="w-full">
              <h1 className="text-3xl font-bold tracking-wider text-white mb-4 capitalize text-white-300">
                Edit Profile
              </h1>

              <form
                onSubmit={handleSubmit(onSubmit)}
                className="grid grid-cols-1 gap-6 mt-8 md:grid-cols-2"
              >
                <div>
                  <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                    First Name
                  </label>
                  <input
                    id="firstName"
                    type="text"
                    defaultValue={user.firstName}
                    {...register("firstName")}
                    className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                </div>

                <div>
                  <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                    Last Name
                  </label>
                  <input
                    id="lastName"
                    type="text"
                    defaultValue={user.lastName}
                    {...register("lastName")}
                    className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                </div>

                <div>
                  <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                    Phone number
                  </label>
                  <input
                    id="phoneNumber"
                    type="text"
                    {...register("phoneNumber")}
                    defaultValue={user.phoneNumber}
                    className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                </div>

                <div>
                  <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                    Email address
                  </label>
                  <input
                    defaultValue={user.email}
                    id="email"
                    type="email"
                    {...register("email")}
                    className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                </div>

                <div className="mb-6">
                  <button
                    type="submit"
                    className="w-full px-3 py-4 text-white bg-indigo-500 rounded-md focus:bg-indigo-600 focus:outline-none"
                  >
                    Update
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default EditProfile;
