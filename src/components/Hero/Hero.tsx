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
        <div className='flex flex-col mt-6 mb-24'>
            <div className='font-heading text-[3.8rem] tracking-tight leading-[1.4] w-[46rem] font-[600]'>
                {name}
            </div>
            <div className='text-[2.3rem] tracking-tight leading-[1.2] w-[46rem] text-[#ededed]'>
                {intro}
            </div>
        </div>
    )
}

export default Hero