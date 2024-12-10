import React from 'react'
import { Link } from 'react-router-dom'

export interface NavbarProps {
  title: string
}

const Navbar = ({ title }: NavbarProps) => {
  return (
    <div className='w-full flex justify-between uppercase z-10 sticky top-0'>
      <div><Link to='/'>YY</Link></div>
      <div>{title}</div>
      <div><Link to='/info'>INFO</Link></div>
    </div>
  )
}

export default Navbar