import { Link } from "react-router-dom";
import Books from "../components/books";

export default function Register() {
  return (
    <>
      {/* component */}
      <div className="w-full min-h-screen bg-yellow-50 flex sm:flex-row sm:justify-center items-center pt-6 sm:pt-0">
        <Books />
        <div className="w-full sm:max-w-md p-5 mx-auto">
          <h2 className="mb-12 text-center text-5xl font-extrabold">
            Pintar Lab
          </h2>
          <form>
            <div className="mb-4">
              <label className="block mb-1" htmlFor="username">
                Username
              </label>
              <input
                id="username"
                type="text"
                name="username"
                className="py-2 px-3 border border-gray-300 focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm disabled:bg-gray-100 mt-1 block w-full"
              />
            </div>
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
            <div className="mt-6">
              <button className="w-full inline-flex items-center justify-center px-4 py-2 bg-teal-300 border border-transparent rounded-md font-semibold capitalize text-white hover:bg-teal-400 active:bg-teal-700 focus:outline-none focus:border-teal-700 focus:ring focus:ring-teal-200 disabled:opacity-25 transition">
                Sign up
              </button>
            </div>
            <div className="mt-6 text-center">
              <Link to={"/login"} className="underline">
                Sign in with an existing account
              </Link>
            </div>
          </form>
        </div>
        <Books />
      </div>
    </>
  );
}
