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

        <div className='-m-6 -mt-[2rem]'>
          <Spline
            className='spline'
            scene="https://prod.spline.design/gRfKGXVN9abIjknz/scene.splinecode?12100205"
            onLoad={onLoad}
            onSplineFollow={onSplineFollow}
          />
        </div>

        <div className='footer font-medium text-3xl w-full flex justify-between pointer-events-none -mt-[7rem]'>
          <div>
            <div className='uppercase'>Calgary Canada</div>
            <div className='uppercase'>{now}</div>
          </div>
          <div className='text-right'>
          </div>
        </div>
      </Container>
    </>
  )
}

// https://28utscprojects.wordpress.com/2011/01/11/082/

export default Home