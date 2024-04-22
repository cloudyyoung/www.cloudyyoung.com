import React from 'react'

const classnames = (...classes: string[]) => classes.filter(Boolean).join(' ')

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode
}

const Container = ({ children, className, ...args }: ContainerProps) => {
    className = className || ''
    return (
        <div className={classnames('max-w-full xl:max-w-8xl mx-auto mt-24 px-4', className)} {...args}>
            {children}
        </div>
    )
}

export default Container