import React from 'react'

interface HeroProps {
    title: string
    subtitle: string
}

const Hero = ({
    title: name,
    subtitle: intro
}: HeroProps) => {
    return (
        <div className='flex flex-col'>
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