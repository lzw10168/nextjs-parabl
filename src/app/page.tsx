
import { Container } from "@/components/Container";
import { Hero } from "@/components/Hero";
import Vector from '@/components/Vector';
import ForeShadow from '@/components/ForeShadow';
import Involved from '@/components/Involved';
import About from '@/components/About';
import Solutions from '@/components/Solutions';
import Impact from '@/components/Impact';
import { getHomePage } from "@/services/api";

export default async function Home() {
  let pageData;
  try {
    const response = await getHomePage();
    console.log('response: ', response);
    pageData = response.data?.attributes;
  } catch (error) {
    console.error("Failed to fetch data from Strapi:", error);
    pageData = null;
  }

  console.log(pageData);

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
