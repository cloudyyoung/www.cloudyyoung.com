import React from 'react'

import Container from '../../components/Container'
import Hero from '../../components/Hero'

import styles from "./Lifeline.module.css";
import illustration from "./01.svg";

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

        <div className={styles.illustration_container}>
          <img className={styles.illustration} src={illustration} />
        </div>
      </Container>
    </>
  )
}

export default Lifeline