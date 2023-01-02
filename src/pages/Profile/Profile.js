import React, { useState, useEffect } from 'react'
import { overridePropsDeep, typeOfComponent } from 'react-nanny'
import { twMerge as classnames } from 'tailwind-merge'

import './Profile.css'
import GithubIcon from './icons8-github.svg'
import LinkedinIcon from './icons8-linkedin.svg'
import InstagramIcon from './icons8-instagram.svg'

const AnimatedText = ({ children, delay, style, className, ...props }) => {
  if (delay) {
    style = style || {}
    style['animationDelay'] = `${delay / 1000}s`
  }

  className = className ? className + ' text' : 'text'

  return <div className="text-wrapper"><div className={className} style={style} {...props}>{children}</div></div>
}

const Profile = () => {
  const [isTransitionActivated, setTransitionActivated] = useState(false)
  const [isProfileActivated, setProfileActivated] = useState(false)
  useEffect(() => {
    const transitionTimeout = setTimeout(() => {
      setTransitionActivated(true)
    }, 0)
    const profileTimeout = setTimeout(() => {
      setProfileActivated(true)
    }, 600)

    return () => {
      clearTimeout(transitionTimeout)
      clearTimeout(profileTimeout)
    }
  }, [])


  const profile = (
    <>
      <div className="overflow-hidden">
        <svg alt="y" className={classnames("y fill-white", isTransitionActivated && "activated")} xmlns="http://www.w3.org/2000/svg" width="1000px" height="1154px" viewBox="0 0 1000 1153" version="1.1">
          <g>
            <path d="M 608.550781 1151.699219 L 391.449219 1151.699219 L 391.449219 755.632812 L 0 1.300781 L 241.777344 1.300781 L 485.199219 494.328125 L 514.800781 494.328125 L 758.222656 1.300781 L 1000 1.300781 L 608.550781 755.632812 Z M 608.550781 1151.699219 " />
          </g>
        </svg>
      </div>

      <div className={classnames("fixed h-screen w-screen top-0 left-0 z-20 bg-white profile", isProfileActivated && "activated opacity-100")}>
        <div className="h-full overflow-y-auto">
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
    </>
  )

  let counter = 0;
  return overridePropsDeep(profile, (child) => typeOfComponent(child) === AnimatedText ? { delay: counter += 85 } : {})
}

export default Profile