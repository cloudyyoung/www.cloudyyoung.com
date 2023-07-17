import React from 'react'

import Container from '../../components/Container'
import Hero from '../../components/Hero'

import styles from "./Lifeline.module.css";

const Subtitle = () => {
  return (
    <>
      An open source project to&nbsp;
      <span className='italic'>help students never miss a deadline</span>.
    </>
  );
};

const Lifeline = () => {
  return (
    <>
      <Container>
        <div className={styles.bread}>Projects</div>

        <Hero
          title="Lifeline"
          subtitle={<Subtitle />}
        />


      </Container>
    </>
  )
}

export default Lifeline