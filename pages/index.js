// import styles from "../styles/Home.module.css";

import { createRef } from 'react';
import Cheesiness from '../components/Cheesiness/Cheesiness';
import ComingYain from '../components/ComingYain/ComingYain';
import Dreamin from '../components/Dreamin/Dreamin';
import Faq from '../components/Faq/Faq';
import Footer from '../components/Footer/Footer';
import HeroArea from '../components/HeroArea/HeroArea';
import MouseCollection from '../components/MouseCollection/MouseCollection';
import Head from 'next/head';
import Image from 'next/image';

export default function Home() {
  const faqDiv = createRef();
  const crewDiv = createRef();
  const roadMapDiv = createRef();
  const aboutDiv = createRef();
  const faqSection = () => {
    faqDiv?.current?.scrollIntoView({ behavior: 'smooth' });
  };
  const crewSection = () => {
    crewDiv?.current?.scrollIntoView({ behavior: 'smooth' });
  };
//  const roadMapSection = () => {
//    roadMapDiv?.current?.scrollIntoView({ behavior: 'smooth' });
//  };
  const aboutSection = () => {
    aboutDiv?.current?.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <>
      <Head>
        <title>Hood Rats NFT</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <header>
        <HeroArea
          faqSection={faqSection}
          crewSection={crewSection}
          roadMapSection={roadMapSection}
          aboutSection={aboutSection}
        />
      </header>
      <main>
        <section >
          <ComingYain />
        </section>
        <section>
          <div className="image_section">
            <div className="top_bar" />
            <Image
              src="/assets/image_section.png"
              alt="logo"
              layout="responsive"
              width={1720}
              height={515}
            />
            <div className="bottom_bar" />
          </div>
          <div className="image_section-mobile">
            <Image
              src="/assets/mobile-mouses.png"
              alt="logo"
              layout="responsive"
              width={1025}
              height={689}
            />
          </div>
        </section>
        <section ref={aboutDiv}>
          <MouseCollection />
        </section>
        <section ref={roadMapDiv}>
          <Dreamin />
        </section>
        <section ref={crewDiv}>
          <Cheesiness />
        </section>
        <section ref={faqDiv}>
          <Faq />
        </section>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
