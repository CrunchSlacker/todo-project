"use client";
import { getProviders, signIn } from "next-auth/react";
import { useEffect } from "react";

export default function Login() {
  useEffect(() => {
    async function init() {
      const providers = await getProviders();
      console.log(providers);
    }
    init();
  }, []);

  return (
    <>
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-lg">
          <h1 className="text-center text-2xl font-bold text-indigo-600 sm:text-3xl">
            The name of the app
          </h1>

          <div className="mb-0 mt-6 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8">
            <p className="text-center text-lg font-medium">
              Sign In Using Your Email
            </p>

            <div>
              <label for="email" class="sr-only">
                Email
              </label>

              <div class="relative">
                <input
                  type="email"
                  class="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                  placeholder="Enter email"
                />
              </div>
            </div>

            <button
              class="block w-full rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white"
              onClick={() => {
                console.log("ayo")
                signIn("email", { email: "cyrusyong1@gmail.com", callbackUrl: "http://localhost:3000/app/upcoming"})
              }}
            >
              Send Code
            </button>

            <div className="w-full flex justify-center mt-8">
              <button
                className="rounded border border-indigo-600 px-12 py-3 text-sm font-medium text-indigo-600 hover:bg-indigo-600 hover:text-white focus:outline-none focus:ring active:bg-indigo-500"
                onClick={() =>
                  signIn("google", { callbackUrl: "http://localhost:3000/app/upcoming" })
                }
              >
                Sign In With Google
              </button>
            </div>

            <p className="text-center text-sm text-gray-500">
              No account?
              <a className="underline" href="">
                Sign up
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
