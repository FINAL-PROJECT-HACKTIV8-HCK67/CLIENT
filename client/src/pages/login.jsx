import { Link } from "react-router-dom";
import '../assets/global.css';

export default function Login() {
  return (
    <>
      <div className="w-full min-h-screen bg-yellow-50 flex sm:flex-row sm:justify-center items-center pt-6 sm:pt-0">
        <div class="hidden lg:block w-1/2 bg-teal-200">
          <div class="w-full h-full flex items-center justify-center relative">
            <div class="absolute w-full h-full bg-white shadow-md transform origin-left transition-transform duration-500 animate-book-open">
              <div class="h-full w-full flex items-center justify-center">
                <h1 class="text-4xl font-bold">Welcome</h1>
              </div>
              <div class="absolute inset-0 transform -skew-x-12 bg-teal-300 opacity-75"></div>
              <div class="absolute inset-0 border-2 border-white"></div>
            </div>
          </div>
        </div>
        <div className="w-full sm:max-w-md p-5 mx-auto">
          <h2 className="mb-12 text-center text-5xl font-extrabold">Pintar Lab</h2>
          <form>
            <div className="mb-4">
              <label className="block mb-1" htmlFor="email">
                Email
              </label>
              <input
                id="email"
                type="text"
                name="email"
                className="py-2 px-3 border border-gray-300 focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm disabled:bg-gray-100 mt-1 block w-full"
              />
            </div>
            <div className="mb-4">
              <label className="block mb-1" htmlFor="password">
                Password
              </label>
              <input
                id="password"
                type="password"
                name="password"
                className="py-2 px-3 border border-gray-300 focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm disabled:bg-gray-100 mt-1 block w-full"
              />
            </div>
            <div className="mt-6 flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember_me"
                  type="checkbox"
                  className="border border-gray-300 text-blue-600 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                />
                <label
                  htmlFor="remember_me"
                  className="ml-2 block text-sm leading-5 text-gray-900"
                >
                  {" "}
                  Remember me{" "}
                </label>
              </div>
            </div>
            <div className="mt-6">
              <button className="w-full inline-flex items-center justify-center px-4 py-2 bg-teal-300 border border-transparent rounded-md font-semibold capitalize text-white hover:bg-teal-400 active:bg-teal-700 focus:outline-none focus:border-teal-700 focus:ring focus:ring-teal-200 disabled:opacity-25 transition">
                Sign In
              </button>
            </div>
            <div className="mt-6 text-center">
              <Link to={"/register"} className="underline">
                Sign up for an account
              </Link>
            </div>
          </form>
        </div>
        <div class="hidden lg:block w-1/2 bg-teal-200">
          <div class="w-full h-full flex items-center justify-center relative">
            <div class="absolute w-full h-full bg-white shadow-md transform origin-right transition-transform duration-500 animate-book-openl">
              <div class="h-full w-full flex items-center justify-center">
                <h1 class="text-4xl font-bold">Welcome</h1>
              </div>
              <div class="absolute inset-0 transform -skew-x-12 bg-teal-300 opacity-75"></div>
              <div class="absolute inset-0 border-2 border-white"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
