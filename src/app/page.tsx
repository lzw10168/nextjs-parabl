import { Container } from "@/components/Container";
import { Hero } from "@/components/Hero";
import Vector from '@/components/Vector';
import ForeShadow from '@/components/ForeShadow';
import Involved from '@/components/Involved';
import About from '@/components/About';
import Solutions from '@/components/Solutions';
import Impact from '@/components/Impact';
import { getHomePage } from "@/services/api";

// 使用Server Component进行数据获取
export default async function Home() {
  // 尝试从Strapi获取数据，如果失败则使用默认组件
  let pageData;
  try {
    const response = await getHomePage();
    pageData = response.data?.attributes;
  } catch (error) {
    console.error("Failed to fetch data from Strapi:", error);
    pageData = null;
  }

  return (
    <Container>
      <Hero data={pageData?.hero} />
      <Vector />
      <ForeShadow />
      <Involved />
      <About />
      <Solutions />
      <Impact />
    </Container>
  );
}
