import React from 'react'
import { Link } from 'react-router-dom'

export interface NavbarProps {
  title: string
}

const Navbar = ({ title }: NavbarProps) => {
  return (
    <div className='w-full flex justify-between text-sm uppercase'>
      <div>YY</div>
      <div>{title}</div>
      <div><Link to='/info'>INFO</Link></div>
    </div>
  )
}

export default Navbar