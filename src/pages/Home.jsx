import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ThemeBtn from "../components/ThemeBtn";

const Home = () => {
  const [isReady, setIsReady] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const timeout = setTimeout(() => setIsReady(true), 200);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-bl from-indigo-50 via-white to-blue-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-all duration-700">
      <ThemeBtn isVisible={isReady} />

      <div className="flex items-center justify-center py-10 px-6 min-h-screen">
        <div className="w-full max-w-md text-center space-y-8">
          {/* Icon Section */}
          <div
            className={`transition-all duration-1000 ${
              isReady ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
            }`}
          >
            <div className="relative mx-auto w-20 h-20 bg-indigo-500 dark:bg-indigo-600 rounded-2xl shadow-lg transform hover:rotate-6 hover:scale-105 transition duration-500">
              <div className="absolute inset-3 bg-white dark:bg-gray-900 rounded-xl flex items-center justify-center">
                <div className="w-6 h-6 bg-indigo-500 dark:bg-indigo-400 rotate-45 rounded-sm"></div>
              </div>
            </div>
          </div>

          {/* Welcome Message */}
          <div
            className={`transition-all duration-1000 ${
              isReady ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
            style={{ transitionDelay: "150ms" }}
          >
            <h1 className="text-3xl font-extrabold text-gray-800 dark:text-white">
              Welcome to{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-500 dark:from-indigo-300 dark:to-blue-400">
                PopX
              </span>
            </h1>
            <p className="text-gray-600 dark:text-gray-300 mt-2 text-base">
              Your simple space to <span className="italic">start fresh</span> 🚀
            </p>
          </div>

          {/* Buttons */}
          <div className="space-y-4">
            <button
              onClick={() => navigate("/register")}
              className={`w-full py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-indigo-600 to-blue-500 hover:from-indigo-700 hover:to-blue-600 transition-all transform hover:scale-105 duration-300 shadow-md ${
                isReady ? "opacity-100" : "opacity-0"
              }`}
              style={{ transitionDelay: "300ms" }}
            >
              Create Account
            </button>

            <button
              onClick={() => navigate("/login")}
              className={`w-full py-3 rounded-xl font-semibold text-indigo-700 dark:text-indigo-300 bg-indigo-100 dark:bg-gray-700 hover:bg-indigo-200 dark:hover:bg-gray-600 transition-all transform hover:scale-105 duration-300 shadow ${
                isReady ? "opacity-100" : "opacity-0"
              }`}
              style={{ transitionDelay: "400ms" }}
            >
              Already Registered? Login
            </button>
          </div>

          {/* Decorative Dots */}
          <div
            className={`flex justify-center space-x-2 mt-10 ${
              isReady ? "opacity-100" : "opacity-0"
            } transition-all duration-700`}
          >
            <div className="w-2 h-2 bg-indigo-400 rounded-full animate-ping"></div>
            <div className="w-2 h-2 bg-blue-400 rounded-full animate-ping"></div>
            <div className="w-2 h-2 bg-indigo-300 rounded-full animate-ping"></div>
          </div>
        </div>
      </div>

      {/* Background Blur Decorations */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-[-1]">
        <div className="absolute top-24 left-10 w-28 h-28 bg-indigo-300 dark:bg-indigo-800 rounded-full filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-36 h-36 bg-blue-200 dark:bg-blue-700 rounded-full filter blur-3xl opacity-25 animate-pulse"></div>
      </div>
    </div>
  );
};

export default Home;
