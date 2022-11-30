import type { NextPage } from "next";
import Layout from "src/components/Layout";
import { SubmitHandler, useForm } from "react-hook-form";
import { UserLoginType } from "src/types/user";
import Link from "next/link";

const Login = () => {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm<UserLoginType>();

  const onSubmit: SubmitHandler<UserLoginType> = async (data) => {
    try {
      await fetch(`/api/order`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
    } catch (error) {
      console.error(error);
    }
    reset();
  };

  return (
    <Layout>
      <div className="mb-5 flex flex-row text-3xl">
        <h1 className="ml-2">
          <Link href="/">Orders / </Link>Add
        </h1>
      </div>

      <div className="flex justify-center">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="max-w-3/4 flex w-72 flex-col justify-center rounded-lg bg-blue-50 p-5"
        >
          <div className="mb-4 flex flex-col">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              className="w-full rounded-md"
              {...register("email", { required: true })}
            />
            {errors.email && (
              <span className="text-red-400">This field is required</span>
            )}
          </div>

          <div className="mb-4 flex flex-col">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              className="w-full rounded-md"
              type="password"
              {...register("password", { required: true })}
            />
            {errors.password && (
              <span className="text-red-400">This field is required</span>
            )}
          </div>

          <button
            type="submit"
            className={"flex w-12 rounded bg-blue-500 px-2 py-1 text-white"}
          >
            Login
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default Login;
