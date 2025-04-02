import React from "react";

export default function CompanyPage() {
  return (
    <div className="container mx-auto px-8 py-20">
      <h1 className="text-4xl font-bold text-center mb-12 text-gray-800 dark:text-gray-100">
        About Our Company
      </h1>
      
      <div className="max-w-4xl mx-auto">
        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-6 text-gray-800 dark:text-gray-100">Our Story</h2>
          <p className="text-lg mb-6 text-gray-600 dark:text-gray-300">
            Founded in 2020, Nextly has been at the forefront of innovation in the digital space. 
            Our journey began with a simple mission: to create intuitive, powerful solutions that help businesses thrive in the digital age.
          </p>
          <p className="text-lg mb-6 text-gray-600 dark:text-gray-300">
            Today, we serve thousands of clients worldwide, from startups to Fortune 500 companies, 
            providing them with the tools they need to succeed in an increasingly competitive landscape.
          </p>
        </section>
        
        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-6 text-gray-800 dark:text-gray-100">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 border border-gray-200 dark:border-gray-700 rounded-lg">
              <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-gray-100">Innovation</h3>
              <p className="text-gray-600 dark:text-gray-300">
                We constantly push the boundaries of what&apos;s possible to deliver cutting-edge solutions.
              </p>
            </div>
            <div className="p-6 border border-gray-200 dark:border-gray-700 rounded-lg">
              <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-gray-100">Excellence</h3>
              <p className="text-gray-600 dark:text-gray-300">
                We strive for excellence in everything we do, from product development to customer service.
              </p>
            </div>
            <div className="p-6 border border-gray-200 dark:border-gray-700 rounded-lg">
              <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-gray-100">Integrity</h3>
              <p className="text-gray-600 dark:text-gray-300">
                We conduct our business with honesty, transparency, and respect for our clients and partners.
              </p>
            </div>
            <div className="p-6 border border-gray-200 dark:border-gray-700 rounded-lg">
              <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-gray-100">Customer Focus</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Our clients are at the heart of everything we do. Their success is our success.
              </p>
            </div>
          </div>
        </section>
        
        <section>
          <h2 className="text-3xl font-semibold mb-6 text-gray-800 dark:text-gray-100">Our Team</h2>
          <p className="text-lg mb-6 text-gray-600 dark:text-gray-300">
            Our diverse team of experts brings together decades of experience in technology, design, and business strategy. 
            United by a shared passion for excellence, we work tirelessly to deliver solutions that exceed our clients&apos; expectations.
          </p>
          <div className="text-center mt-8">
            <button className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-md">
              Join Our Team
            </button>
          </div>
        </section>
      </div>
    </div>
  );
} 
