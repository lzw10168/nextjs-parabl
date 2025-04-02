import React from "react";

export default function FeaturesPage() {
  return (
    <div className="container mx-auto px-8 py-20">
      <h1 className="text-4xl font-bold text-center mb-12 text-gray-800 dark:text-gray-100">
        Features
      </h1>
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="p-6 border border-gray-200 dark:border-gray-700 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">Intuitive Design</h2>
          <p className="text-gray-600 dark:text-gray-300">
            Our user-friendly interface makes navigation seamless and enjoyable.
          </p>
        </div>
        <div className="p-6 border border-gray-200 dark:border-gray-700 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">Advanced Analytics</h2>
          <p className="text-gray-600 dark:text-gray-300">
            Gain valuable insights with our comprehensive analytics tools.
          </p>
        </div>
        <div className="p-6 border border-gray-200 dark:border-gray-700 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">Seamless Integration</h2>
          <p className="text-gray-600 dark:text-gray-300">
            Easily integrate with your existing systems and workflows.
          </p>
        </div>
        <div className="p-6 border border-gray-200 dark:border-gray-700 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">24/7 Support</h2>
          <p className="text-gray-600 dark:text-gray-300">
            Our dedicated support team is always available to assist you.
          </p>
        </div>
      </div>
    </div>
  );
} 
