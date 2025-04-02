'use client';
import { Container } from "@/components/Container";
import { Hero } from "@/components/Hero";

import Vector from '@/components/Vector';
import ForeShadow from '@/components/ForeShadow';
import Involved from '@/components/Involved';
import About from '@/components/About';
import Solutions from '@/components/Solutions';
import Impact from '@/components/Impact';

export default function Home() {
  return (
    <Container>
      <Hero />
      <Vector />
      <ForeShadow />
      <Involved />
      <About />
      <Solutions />
      <Impact />
    </Container>
  );
}
