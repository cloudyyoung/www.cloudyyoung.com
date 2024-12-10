import Container from '../../components/Container';
import Navbar from '../../components/Navbar';

const Home = () => {
  return (
    <>
      <Container className='flex flex-col gap-12'>
        <Navbar title="home" />
      </Container>

      <div className='font-bold text-8xl w-full fixed left-0 bottom-0 p-6'>
        <div className='uppercase'>Yunfan Yang</div>
      </div>
    </>
  )
}

// https://28utscprojects.wordpress.com/2011/01/11/082/

export default Home