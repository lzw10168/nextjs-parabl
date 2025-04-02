import Image from "next/image";
import { Container } from "@/components/Container";
import heroImg from "../../public/img/hero.png";

export const Hero = () => {
  return (
    <div 
      className="relative w-full h-[500px]   bg-center flex items-center justify-center"
      style={{ backgroundImage: `url(${heroImg.src})` }}
    >
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <h1 className="text-9xl font-bold text-white mb-8">Welcome Parabl</h1>
        <a
          href="#contact"
          className="px-10 py-3 text-3xl font-medium text-center text-white bg-cyan-500 rounded-full hover:bg-cyan-600 transition-colors"
        >
          contact us
        </a>
      </div>
    </div>
  );
};

