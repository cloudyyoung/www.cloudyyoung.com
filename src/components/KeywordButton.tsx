import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import clsx from 'clsx';

export interface KeywordButtonProps {
    children: React.ReactNode;
    className?: string;
}

export const KeywordButton = ({ children, className }: KeywordButtonProps) => {
    const { contextSafe } = useGSAP({ scope: '.keyword-button' });
    const lineRef = useRef(null);

    const handleMouseEnter = contextSafe(() => {
        gsap.killTweensOf(lineRef.current);
        gsap.fromTo(
            lineRef.current,
            { width: "0%", left: "0%" },
            { width: "100%", duration: 0.5, ease: "power2.out" }
        );
    });

    const handleMouseLeave = contextSafe(() => {
        gsap.killTweensOf(lineRef.current);
        gsap.fromTo(
            lineRef.current,
            { width: '100%', left: "0%" },
            { left: "100%", width: "0%", duration: 0.5, ease: "power2.in" });
    });

    return (
        <div className='keyword-button'>
            <a
                className={clsx('text-8xl font-semibold uppercase group relative cursor-pointer', className)}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                {children}
                <span ref={lineRef} className="absolute left-0 top-[48%] h-2 w-0 bg-black pointer-events-none"></span>
            </a>
        </div>
    )
}
