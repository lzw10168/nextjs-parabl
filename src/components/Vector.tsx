import React from 'react';
import Image from "next/image";
import { motion } from 'framer-motion';

interface VectorProps {
  className?: string;
}

const Vector: React.FC<VectorProps> = ({ className }) => {
  return (

    <div
      className={`vector-container z-10 ${className || ''}`}
      style={{
        position: 'absolute',
        right: 0,
        top: '300px',
        width: '279.64px',
        height: '139.82px',
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <Image src="/img/vector.png" alt="Vector" width={279.64} height={139.82} />

      </motion.div>
    </div>
  );
};

export default Vector;
