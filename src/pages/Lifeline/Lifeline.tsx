import React from 'react'

import "./Lifeline.module.css"
import Container from '../../components/Container'
import Hero from '../../components/Hero'

const Subtitle = () => {
  return (
    <>
      A open source project to&nbsp;
      <span className='italic'>help students never miss a deadline</span>.
    </>
  );
};

const Lifeline = () => {
  return (
    <>
      <Container>
        <div className='bread'>Projects</div>
        <Hero
          title="Lifeline"
          subtitle={<Subtitle />}
        />
      </Container>
    </>
  )
}

export default Lifeline