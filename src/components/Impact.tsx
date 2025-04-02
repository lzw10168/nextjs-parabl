import React from 'react';
import Image from 'next/image';
import { motion } from "framer-motion";
const Impact: React.FC = () => {
  return (
    <div className="bg-[#04d8ee] h-[1000px] w-full flex pl-12 pt-24  px-6 box-border relative">
      <div className='absolute z-10 bg-white h-[700px] w-4/5 top-0 right-0 p-24 rounded-l-[200px]'>
        <div className='absolute bottom-0 right-0'>
          <Image src="/img/impact.png" alt="Impact" width={230} height={270} />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="flex flex-col max-w-4xl  items-start text-left">
            <div className="flex items-center mb-5">
              <h1 className="text-5xl m-0 ml-10 font-bold text-black">Our Impact</h1>
            </div>

            <p className="text-lg m-0 pl-12 text-black  leading-relaxed max-w-2xl">
              <li >
                Protecting over 305,000 people through proactive climate and environmental monitoring.         </li>

              <li >
                Operating 51 monitoring stations, forecasting floods, and enabling swift governmental response.         </li>
              <li>

                Leading digital transformations and pioneering multi-hazard early warning systems.
              </li>
            </p>

            <div className='font-bold text-lg m-0 pl-12 mt-12 text-black  leading-relaxed max-w-2xl'>
              At Similie, we are not just innovators—we are problem-solvers committed to open collaboration and contributing back to the global community. Join us in building a resilient world, equipped with data-driven insights to face tomorrow’s challenges today.
            </div>
          </div>
        </motion.div>
      </div>
      {/* 画一个半圆, 圆弧在上 */}
      <div className='absolute bottom-0 left-0 w-full'>
        <div className='w-full h-[800px] bg-[#133461] ' style={{ borderRadius: '100vw 100vw 0 0' }}></div>
      </div>

      <div className='absolute bottom-20 left-0 w-full flex justify-center'>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <a
            href="/"
            className="px-10 py-3 text-3xl font-medium text-center text-white bg-cyan-500 rounded-full hover:bg-cyan-600 transition-colors"
          >
            Learn More
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default Impact;
