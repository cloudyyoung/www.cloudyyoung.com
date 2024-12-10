import React, { ReactNode, useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'

const classnames = (...classes: string[]) => classes.filter(Boolean).join(' ')

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: ReactNode
}

const Container = ({ children, className, ...args }: ContainerProps) => {
  const location = useLocation()
  const ref = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    gsap.fromTo(ref.current, { opacity: 0 }, { opacity: 1, duration: 1 })
  }, { dependencies: [location] })

  className = className || ''
  return (
    <div className={classnames('container max-w-full mx-auto my-6 px-6', className)} {...args} ref={ref}>
      {children}
    </div>
  )
}

export default Container