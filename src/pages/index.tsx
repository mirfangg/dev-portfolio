import Head from 'next/head';

import { About, Contact, Hero, Projects, Skills } from '@/components';

export default function Home() {
  return (
    <>
      <Head>
        <title>Muhammad Irfan's Portfolio</title>
        <meta name="description" content="Muhammad Irfan's Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </div>
    </>
  );
}
