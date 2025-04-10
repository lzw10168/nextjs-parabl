'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from "framer-motion";
const Solutions: React.FC = () => {
  return (
    <div className="bg-[#04d8ee] h-[600px] w-full flex pl-12 pt-24  px-6 box-border relative">
      <div className='absolute bottom-0 left-0'>
        <Image src="/img/solutions.png" alt="Hyphen" width={230} height={270} />
      </div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <div className="flex flex-col max-w-4xl  items-start text-left">
          <div className="flex items-center mb-5">
            <h1 className="text-5xl m-0 ml-10 font-bold text-black">Core Solutions</h1>
          </div>

          <p className="text-lg m-0 pl-12 text-black  leading-relaxed max-w-2xl">
            <li className='list-disc my-4'>
              Hyphen: IoT-powered networks for real-time environmental monitoring without the complexity of traditional setups.
            </li>

            <li className='list-disc'>
              Parabl: Data analytics platform delivering clear visualizations, automatic alerts, and practical management actions—all without needing specialized analytics training
            </li>
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default Solutions;
