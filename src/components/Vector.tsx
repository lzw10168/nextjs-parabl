import React from 'react';
import Image from "next/image";

interface VectorProps {
  className?: string;
}

const Vector: React.FC<VectorProps> = ({ className }) => {
  return (
    <div
      className={`vector-container ${className || ''}`}
      style={{
        position: 'absolute',
        right: 0,
        top: '300px',
        width: '279.64px',
        height: '139.82px',
      }}
    >
      <Image src="/img/vector.png" alt="Vector" width={279.64} height={139.82} />

    </div>
  );
};

export default Vector;
