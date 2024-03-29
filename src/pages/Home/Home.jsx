import Hero from '../../components/Hero';
import Container from '../../components/Container';

import styles from "./Home.module.css";

const Home = () => {
  return (
    <>
      <div className={styles['mesh-grad']}></div>
      <div className={styles['mesh-grad-sm']}></div>
      
      <Container className='pt-[22rem] lg:pt-[16rem] xl:pt-[12rem] relative'>
        <Hero
          title="Yunfan Yang,"
          subtitle="an Honours Computer Science student at the University of Calgary and a Software Development Intern at AGvisorPRO Inc."
        />

        <div className={styles.illustrations}>
          <div className={styles['illustration-02']}>
            <iframe className='h-full w-full' src="https://www.youtube.com/embed/mYghB5Aww4A?si=sZu73Wj5zbVLjMsM" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </div>
          <div className={styles['illustration-09']}></div>
        </div>
        
        <div className={styles.greeting}>
          <div className={styles.headline}>
            Hey! Welcome to my little space on the Internet. I live and I code.
          </div>

          <div className={styles.bio}>
            I focus on mainly web technologies, and self-teaching designs.
            As a computer science student, my disciplines drive me exploring all different areas in the fields of Computer Science, Data Science and Software Engineering. 
          </div>

          <div className={styles.bio}>
            I am always passionate about learning new technologies and building cool stuff.
            You will be able to find some of my works here. They are rarely in the same areas as my interests are always changing from time to time. I hope you will find something interesting.
          </div>
        </div>
      </Container>
    </>
  )
}

export default Home