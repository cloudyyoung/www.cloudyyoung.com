import Spline from '@splinetool/react-spline';

import Container from '../../components/Container';
import Navbar from '../../components/Navbar';
import { useTime } from '../../utils/useTime';

const Home = () => {
  const now = useTime();

  return (
    <>
      <Container className='flex flex-col gap-12'>
        <Navbar title="home" />

        <div className='absolute top-0 left-0 right-0 bottom-0'>
          <Spline scene="https://prod.spline.design/gRfKGXVN9abIjknz/scene.splinecode?12100946" />
        </div>

        <div className='font-medium text-3xl w-full fixed left-0 bottom-0 p-6 flex justify-between pointer-events-none'>
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