import Image from "next/image";
import { Container } from "@/components/Container";
import { motion } from 'framer-motion';
import { getStrapiMedia } from "@/services/api";

interface HeroProps {
  data?: {
    title: string;
    buttonText: string;
    backgroundImage: {
      data: {
        attributes: {
          url: string;
          alternativeText?: string;
        }
      }
    }
  }
}

export const Hero = ({ data }: HeroProps) => {
  // 如果数据不存在，使用默认值
  const title = data?.title || "Welcome Parabl";
  const buttonText = data?.buttonText || "contact us";
  const backgroundUrl = data?.backgroundImage?.data?.attributes?.url ? 
    getStrapiMedia(data.backgroundImage.data.attributes.url) : 
    "/img/hero.png";
  const altText = data?.backgroundImage?.data?.attributes?.alternativeText || "";

  return (
    <div
      className="relative w-full h-[500px] bg-center flex items-center justify-center"
      style={{ backgroundImage: `url(${backgroundUrl})` }}
    >
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h1 className="text-9xl font-bold text-white mb-8">{title}</h1>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <a
            href="#contact"
            className="px-10 py-3 text-3xl font-medium text-center text-white bg-cyan-500 rounded-full hover:bg-cyan-600 transition-colors"
          >
            {buttonText}
          </a>
        </motion.div>
      </div>
    </div>
  );
};

