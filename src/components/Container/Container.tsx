import React from 'react'

const classnames = (...classes: string[]) => classes.filter(Boolean).join(' ')

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode
}

const Container = ({ children, className, ...args }: ContainerProps) => {
    className = className || ''
    return (
        <div className={classnames('max-w-10xl mx-auto px-6', className)} {...args}>
            {children}
        </div>
    )
}

export default Container