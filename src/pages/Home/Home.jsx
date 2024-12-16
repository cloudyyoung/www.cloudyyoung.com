import { useState } from 'react';
import Spline from '@splinetool/react-spline';
import gsap from 'gsap';

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
      gsap.fromTo('.navbar', {y: -100, opacity: 0}, {y: 0, opacity: 1, duration: 0.8, ease: 'power2.out', delay: 1.2})
      gsap.fromTo('.footer', {y: 100, opacity: 0}, {y: 0, opacity: 1, duration: 1, ease: 'power2.out', delay: 1.2})
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
            <div className='-ml-32'>Engineering</div>
            <div className='-mr-64'>UI/UX Design</div>
            <div className='-ml-56'>Data Science</div>
            <div className='-mr-48'>Projects</div>
          </div>
        </div>

        <div className='py-40'>
          
        </div>
      </Container>
    </>
  )
}

// https://28utscprojects.wordpress.com/2011/01/11/082/

export default Home