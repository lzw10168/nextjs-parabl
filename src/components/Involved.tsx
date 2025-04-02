import React from 'react';
import Image from 'next/image';
import { motion } from "framer-motion";
const Involved = () => {
  return (
    <div style={{
      marginTop: '-200px',
    }} className="relative w-5/6 z-10 bg-gradient-to-br h-[400px] flex items-center justify-center from-[#133461] to-[#133461] rounded-r-[200px] p-8 md:p-12">

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 max-w-5xl ">
          <div className="w-32 font-bold md:w-40">
            <Image src="/img/involved.png" alt="Parabl" width={221} height={221} />
          </div>

          <div className="flex-1 text-white">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Get Involved</h2>
            <p className="text-lg md:text-xl opacity-90">
              Join our community to contribute, enhance, and utilize these resources.
              We believe that collaboration is key to solving environmental challenges and
              improving forecasting technologies for a sustainable future.
            </p>
          </div>
        </div>
      </motion.div>
    </div>

  );
};

export default Involved;
