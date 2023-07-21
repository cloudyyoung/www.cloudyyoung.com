import React from 'react'

interface HeroProps {
    title: string | JSX.Element
    subtitle: string | JSX.Element
}

const Hero = ({
    title: name,
    subtitle: intro
}: HeroProps) => {
    return (
        <div className='flex flex-col mt-6 mb-24 w-full sm:w-[32rem] lg:w-[46rem]'>
            <div className='font-heading text-[2.8rem] sm:text-[3.4rem] lg:text-[3.8rem] tracking-tight leading-[1.4] font-[600]'>
                {name}
            </div>
            <div className='text-[1.4rem] sm:text-[1.9rem] lg:text-[2.3rem] tracking-tight leading-[1.2] text-[#ededed]'>
                {intro}
            </div>
        </div>
    )
}

export default Hero