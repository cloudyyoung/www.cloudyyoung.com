import React, { useRef } from 'react';
import { useState } from 'react';
import Spline from '@splinetool/react-spline';
import gsap from 'gsap';
import clsx from 'clsx';
import SplitText from "gsap/SplitText";

import Container from '../../components/Container';
import Navbar from '../../components/Navbar';
import { useTime } from '../../utils/useTime';
import { useGSAP } from '@gsap/react';

const Home = () => {
  const now = useTime();
  const [load, setLoad] = useState(false);
  const [show, setShow] = useState(false);

  const onLoad = () => {
    setLoad(true);
  }

  const onSplineFollow = () => {
    setShow(true);
  }

  useGSAP(() => {
    gsap.to('.navbar', { y: -100, opacity: 0, duration: 0 })
    gsap.to('.footer', { y: 100, opacity: 0, duration: 0 })
    if (show) {
      gsap.fromTo('.navbar', { y: -100, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, ease: 'power2.out', delay: 1.2 })
      gsap.fromTo('.footer', { y: 100, opacity: 0 }, { y: 0, opacity: 1, duration: 1, ease: 'power2.out', delay: 1.2 })
    }

    SplitText.create(".description", {
      type: "lines, words, chars",
      autoSplit: true,
      onSplit(self) {
        return gsap.from(self.words, {
          duration: 1,
          filter: 'blur(10px)',
          autoAlpha: 0,
          stagger: 0.1,
          scrollTrigger: {
            trigger: '.description',
            scrub: true,
            start: "clamp(top center)",
            end: "clamp(bottom center)"
          }
        });
      }
    });

  }, { dependencies: [show, load] })

  return (
    <>
      <Container>
        <Navbar title="home" />

        <div className='-m-6 -mt-[5rem] h-screen w-screen relative block'>
          <Spline
            scene="https://prod.spline.design/gRfKGXVN9abIjknz/scene.splinecode?12100211"
            onLoad={onLoad}
            onSplineFollow={onSplineFollow}
          />
          <div className='bg-white absolute right-0 bottom-0 w-40 h-14 pointer-events-none'></div>
        </div>

        <div className='footer font-medium text-3xl w-full flex justify-between pointer-events-none -mt-[7rem] hidden'>
          <div>
            <div className='uppercase'>Calgary Canada</div>
            <div className='uppercase'>{now}</div>
          </div>
          <div className='text-right'>
          </div>
        </div>

        <div className='py-40 space-y-40'>
          <div className='flex justify-center'>
            <div className='description max-w-3xl text-5xl font-serif leading-tight'>
              <p>I design and build software and websites that combine <i>functionality</i> and <i>creativity</i> from idea to implementation.</p>
              <p>My work is driven by a passion for solving real-world problems with <i>elegant, maintainable solutions</i>, and I enjoy collaborating closely with others to bring ambitious ideas to life through code.</p>
            </div>
          </div>
          <div className='text-8xl font-semibold uppercase text-center leading-normal'>
            <KeywordButton className='-ml-10'>Engineering</KeywordButton>
            <KeywordButton className='-mr-64'>UI/UX Design</KeywordButton>
            <KeywordButton className='-ml-64'>Research</KeywordButton>
            <KeywordButton className='-mr-48'>Projects</KeywordButton>
          </div>
        </div>

        <div className='py-40'>

        </div>
      </Container>
    </>
  )
}

const KeywordButton = ({ children, className }) => {
  const { contextSafe } = useGSAP({ scope: '.keyword-button' });
  const lineRef = useRef(null);

  const handleMouseEnter = contextSafe(() => {
    gsap.killTweensOf(lineRef.current);
    gsap.fromTo(
      lineRef.current,
      { width: "0%", left: "0%" },
      { width: "100%", duration: 0.5, ease: "power2.out" }
    );
  });

  const handleMouseLeave = contextSafe(() => {
    gsap.killTweensOf(lineRef.current);
    gsap.fromTo(
      lineRef.current,
      { width: '100%', left: "0%" },
      { left: "100%", width: "0%", duration: 0.5, ease: "power2.in" });
  });

  return (
    <div className='keyword-button'>
      <a
        className={clsx('text-8xl font-semibold uppercase group relative cursor-pointer', className)}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {children}
        <span ref={lineRef} className="absolute left-0 top-[48%] h-2 w-0 bg-black pointer-events-none"></span>
      </a>
    </div>
  )
}

// https://28utscprojects.wordpress.com/2011/01/11/082/

export default Home