import React, { useRef, useEffect } from 'react'
import TypeIt from "typeit-react"
import CircleType from "circletype"
import { useMouse, useHoverDirty } from 'react-use'
import { twMerge as classnames } from 'tailwind-merge'

import './Home.css'
import closeIcon from "./icons8-close.svg"
import animation from "./bg.mp4"
import animationGif from "./bg.gif"


const Home = () => {
  const containerRef = useRef(null);
  const { docX, docY } = useMouse(containerRef);

  const circleTypeRef = useRef(null);
  useEffect(() => {
    if (circleTypeRef.current) {
      new CircleType(circleTypeRef.current).radius(0.8);
    }
  }, [circleTypeRef]);

  const profileLinkRef = useRef(null);
  const isHovering = useHoverDirty(profileLinkRef);

  return (
    <div ref={containerRef}>
      <div className="fixed right-0 z-40">
        <button ref={profileLinkRef} className="py-9 px-7 md:p-12 menu-button rounded-full overflow-hidden">
          <img src={closeIcon} className="float-left w-7 h-7 md:w-9 md:h-9" alt="Expand profile button" />
        </button>
        <div
          ref={circleTypeRef}
          style={{ left: `${docX}px`, top: `${docY - circleTypeRef?.current?.clientHeight / 2}px` }}
          className={classnames("fixed menu-text text-2xl font-medium tracking-tighter text-white/84 opacity-0 rounded-full pointer-events-none", isHovering && "opacity-100")}
        >
          YANGYANGYANGYANG
        </div>
      </div>
      <div className="fixed h-screen w-screen overflow-hidden">
        <div className="grid h-screen place-items-center">
          <div>
            <div className="w-full md:w-96 hidden md:block rounded-full overflow-hidden">
              <video autoPlay muted loop>
                <source src={animation} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <img src={animationGif} className="w-full md:w-96 md:hidden rounded-full overflow-hidden video" alt="" />
            <div className="text-white/92 text-2xl md:text-3xl text-center font-light type mt-8 -mb-10 h-20">
              <TypeIt
                options={{
                  lifeLike: true,
                  speed: 100,
                  loop: true,
                  cursorChar: '_',
                }}
                getBeforeInit={(instance) => {
                  instance
                    .type("<span class='font-bold name'>Yunfan Yang</span>")
                    .pause(1000)

                    .type("<br>")
                    .type("<span class='cs'>Computer Science</span>")
                    .pause(2000)
                    .delete(".cs")

                    .type("<span class='seng'>Software Engineering</span>")
                    .pause(2000)
                    .delete(".seng")

                    .type("<span class='data'>Data Science</span>")
                    .pause(2000)
                    .delete(".data")

                    .type("<span class='pronoun'>He / Him</span>")
                    .pause(2000)
                    .delete(".pronoun")

                    // .type("<span class='calgary'>Calgary</span>")
                    // .pause(2000)
                    // .delete(".calgary")

                    .type("<span class='personality'>INTP / ISTP</span>")
                    .pause(2000)
                    .delete(".personality")

                    // .type("<span class='kolbe'>4-6-4-6</span>")
                    // .pause(2000)
                    // .delete(".kolbe")

                    .type("<span class='uiux'>UI / UX Design</span>")
                    .pause(2000)
                    .delete(".uiux")

                    .type("<span class='web-app'>Web Application</span>")
                    .pause(2000)
                    .delete(".web-app")

                    .type("<span class='ml'>Machine Learning</span>")
                    .pause(2000)
                    .delete(".ml")

                    .empty()
                    .pause(800)

                    .type("<span class='font-medium leading-10 name'>Cloudy Young</span>")
                    .pause(200)
                    .type("<br>")
                    .type("is also me ;)")
                    .pause(2000)

                    .empty()
                    .pause(1000)

                  // Remember to return it!
                  return instance;
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home