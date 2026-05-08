import type React from 'react';
import '../styles/BorderGradient.css';

function BorderGradient3Stops({className, children, className1}: {className?: string, className1?: string, children?: React.ReactNode}) {
  return (
    <div className="relative w-fit">
        <div className={`
            gradientBorder
            absolute
            bg-linear-to-br
            ${className} 
            z-1 inset-0
        `}>
        </div>
        <div className={`
            relative
            backdrop-blur-md   
            ${className1}
        `}>
            {children}
        </div>
    </div>
  )
}

export default BorderGradient3Stops
