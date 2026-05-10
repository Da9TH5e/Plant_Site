import type React from 'react';
import '../styles/BorderGradient.css';

function BorderGradient({className, children}: {className?: string, children?: React.ReactNode}) {
  return (
    <div className="relative w-fit">
        <div className={`
            gradientBorder
            absolute
            rounded-[1.667vw]
            bg-linear-to-br
            from-[rgba(255,255,255,1)]
            to-[rgba(102,102,102,1)]
            z-1 inset-0
            p-px
        `}>
        </div>
        <div className={`
            relative
            backdrop-blur-md
            ${className}    
        `}>
            {children}
        </div>
    </div>
  )
}

export default BorderGradient
