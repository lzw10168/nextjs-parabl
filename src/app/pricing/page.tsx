import React from "react";

export default function PricingPage() {
  return (
    <div className="container mx-auto px-8 py-20">
      <h1 className="text-4xl font-bold text-center mb-12 text-gray-800 dark:text-gray-100">
        Pricing Plans
      </h1>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Basic Plan */}
        <div className="flex flex-col p-6 border border-gray-200 dark:border-gray-700 rounded-lg">
          <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-100">Basic</h2>
          <div className="text-4xl font-bold mb-6 text-indigo-600">$19<span className="text-xl text-gray-500">/mo</span></div>
          <ul className="mb-8 space-y-3">
            <li className="flex items-center text-gray-600 dark:text-gray-300">
              <svg className="w-5 h-5 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
              </svg>
              Core Features
            </li>
            <li className="flex items-center text-gray-600 dark:text-gray-300">
              <svg className="w-5 h-5 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
              </svg>
              5 Projects
            </li>
            <li className="flex items-center text-gray-600 dark:text-gray-300">
              <svg className="w-5 h-5 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
              </svg>
              Basic Support
            </li>
          </ul>
          <button className="mt-auto w-full py-2 px-4 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-md">
            Get Started
          </button>
        </div>
        
        {/* Pro Plan */}
        <div className="flex flex-col p-6 border-2 border-indigo-600 rounded-lg relative">
          <span className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-indigo-600 text-white px-4 py-1 rounded-full text-sm font-bold">
            Popular
          </span>
          <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-100">Pro</h2>
          <div className="text-4xl font-bold mb-6 text-indigo-600">$49<span className="text-xl text-gray-500">/mo</span></div>
          <ul className="mb-8 space-y-3">
            <li className="flex items-center text-gray-600 dark:text-gray-300">
              <svg className="w-5 h-5 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
              </svg>
              All Basic Features
            </li>
            <li className="flex items-center text-gray-600 dark:text-gray-300">
              <svg className="w-5 h-5 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
              </svg>
              20 Projects
            </li>
            <li className="flex items-center text-gray-600 dark:text-gray-300">
              <svg className="w-5 h-5 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
              </svg>
              Priority Support
            </li>
            <li className="flex items-center text-gray-600 dark:text-gray-300">
              <svg className="w-5 h-5 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
              </svg>
              Advanced Analytics
            </li>
          </ul>
          <button className="mt-auto w-full py-2 px-4 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-md">
            Get Started
          </button>
        </div>
        
        {/* Enterprise Plan */}
        <div className="flex flex-col p-6 border border-gray-200 dark:border-gray-700 rounded-lg">
          <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-100">Enterprise</h2>
          <div className="text-4xl font-bold mb-6 text-indigo-600">$99<span className="text-xl text-gray-500">/mo</span></div>
          <ul className="mb-8 space-y-3">
            <li className="flex items-center text-gray-600 dark:text-gray-300">
              <svg className="w-5 h-5 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
              </svg>
              All Pro Features
            </li>
            <li className="flex items-center text-gray-600 dark:text-gray-300">
              <svg className="w-5 h-5 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
              </svg>
              Unlimited Projects
            </li>
            <li className="flex items-center text-gray-600 dark:text-gray-300">
              <svg className="w-5 h-5 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
              </svg>
              24/7 Dedicated Support
            </li>
            <li className="flex items-center text-gray-600 dark:text-gray-300">
              <svg className="w-5 h-5 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
              </svg>
              Custom Integrations
            </li>
          </ul>
          <button className="mt-auto w-full py-2 px-4 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-md">
            Contact Sales
          </button>
        </div>
      </div>
    </div>
  );
} 
