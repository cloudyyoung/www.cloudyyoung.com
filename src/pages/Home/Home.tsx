import React, { useRef } from 'react';
import { useState } from 'react';
import Spline from '@splinetool/react-spline';
import gsap from 'gsap';
import clsx from 'clsx';

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
  }, { dependencies: [show, load] })

  return (
    <>
      <Container className='flex flex-col gap-12'>
        <Navbar title="home" />

        <div className='-m-6 -mt-[2rem] relative'>
          <Spline
            className='spline'
            scene="https://prod.spline.design/gRfKGXVN9abIjknz/scene.splinecode?12100205"
            onLoad={onLoad}
            onSplineFollow={onSplineFollow}
          />
          <div className='bg-white absolute right-0 bottom-0 w-40 h-14 pointer-events-none'></div>
        </div>

        {/* <div className='footer font-medium text-3xl w-full flex justify-between pointer-events-none -mt-[7rem]'>
          <div>
            <div className='uppercase'>Calgary Canada</div>
            <div className='uppercase'>{now}</div>
          </div>
          <div className='text-right'>
          </div>
        </div> */}

        <div className='py-40 space-y-40'>
          <div className='flex justify-center'>
            <div className='w-1/3 text-5xl font-serif leading-tight'>
              I design and build software and websites that combine <i>functionality</i> and <i>creativity</i> from idea to implementation.
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