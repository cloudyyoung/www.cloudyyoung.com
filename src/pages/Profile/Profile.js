import React from 'react'
import { overridePropsDeep, typeOfComponent } from 'react-nanny'

import './Profile.css'
import GithubIcon from './icons8-github.svg'
import LinkedinIcon from './icons8-linkedin.svg'
import InstagramIcon from './icons8-instagram.svg'

const AnimatedText = ({ children, delay, style, ...props }) => {
  if (delay) {
    style = style || {}
    style['animationDelay'] = `${delay / 1000}s`
  }

  return <div className="text"><p style={style} {...props}>{children}</p></div>
}

const Profile = () => {
  const content = (
    <div className="bg-white menu-bg activated">
      <div className="overflow-y-auto">
        <div className="w-4xl max-w-4xl m-auto py-32 px-10 md:p-24 text-gray-900 text-md md:text-xl">
          <div className="avatar rounded-full h-24 w-24 md:h-24 md:w-24 -ml-0.5"></div>
          <div className="mt-8 md:mt-12">
            <AnimatedText className="text-3xl md:text-4xl font-bold name">YUNFAN, YANG</AnimatedText>
            <div className="space-y-2 mt-5 font-regular">
              <AnimatedText>Software Development Intern at AGvisorPRO Inc.</AnimatedText>
              <AnimatedText>BSc Computer Science at the University of Calgary '24</AnimatedText>
              <div className="space-y-0 text-gray-700">
                <AnimatedText><span className="font-bold text-blue-300">+</span> Honours Stream</AnimatedText>
                <AnimatedText><span className="font-bold text-blue-300">+</span> Software Engineering Concentration</AnimatedText>
                <AnimatedText><span className="font-bold text-blue-300">+</span> Data Science Minor</AnimatedText>
              </div>
            </div>
          </div>

          <AnimatedText className="font-regular mt-10 mb-2">What I have also done:</AnimatedText>
          <div className="space-y-0">
            <AnimatedText><span className="font-bold text-pink-300">+</span> Web Development ✨</AnimatedText>
            <AnimatedText><span className="font-bold text-pink-300">+</span> UI / UX Design</AnimatedText>
            <AnimatedText><span className="font-bold text-violet-300">+</span> Natural Language Processing</AnimatedText>
          </div>

          <AnimatedText className="mt-10 font-medium text">
            If you like me, we should hang out, or collaborate on exciting projects!
          </AnimatedText>

          <AnimatedText className="mt-10">Also find me on:</AnimatedText>
          <AnimatedText className="-ml-0.5">
            <p className="flex flex-row space-x-1">
              <a href="https://github.com/cloudyyoung" target="_blank" rel="noreferrer">
                <img src={GithubIcon} alt="github icon" className="h-10 w-10 p-0 m-0" />
              </a>
              <a href="https://www.linkedin.com/in/yunfan-yang-cy/" target="_blank" rel="noreferrer">
                <img src={LinkedinIcon} alt="linkedin icon" className="h-10 w-10 p-0 m-0" />
              </a>
              <a href="https://www.instagram.com/cloudyyoung74/" target="_blank" rel="noreferrer">
                <img src={InstagramIcon} alt="instagram icon" className="h-10 w-10 p-0 m-0" />
              </a>
            </p>
          </AnimatedText>
        </div>
      </div>
    </div>
  )

  let counter = 0;
  return overridePropsDeep(content, (child) => typeOfComponent(child) === AnimatedText ? { delay: counter += 75 } : {})
}

export default Profile