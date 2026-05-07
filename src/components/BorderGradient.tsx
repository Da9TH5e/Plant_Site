import type React from 'react';
import '../styles/BorderGradient.css';

function BorderGradient({className, children}: {className?: string, children?: React.ReactNode}) {
  return (
    <div>
        <div className={`
            gradientBorder
            absolute
            rounded-3xl
            bg-linear-to-br
            from-white
            to-black
            -z-1 inset-0
            p-px
            backdrop-blur-xs
        `}>
        </div>
        <div className={`
            relative
            rounded-3xl
            ${className}    
        `}>
            {children}
        </div>
    </div>
  )
}

export default BorderGradient
