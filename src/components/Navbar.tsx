import React from 'react'

export interface NavbarProps {
  title: string
}

const Navbar = ({ title }: NavbarProps) => {
  return (
    <div className='w-full flex justify-between text-sm uppercase'>
      <div>YY</div>
      <div>{title}</div>
      <div>INFO</div>
    </div>
  )
}

export default Navbar