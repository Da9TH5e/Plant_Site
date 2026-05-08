import type React from 'react';
import '../styles/Button.css';

function Button({ className, children }: {className?: string, children?: React.ReactNode}) {
  return (
    <div className="flex">
      <p className={`butText border-solid 
        border-[#FFFFFF] text-center
        hover:border-[rgba(255,255,255,0.7)]
        hover:scale-90
        transition-transform duration-300
        hover:text-[rgba(255,255,255,0.6)]
        hover:cursor-pointer
        ${className}
        `}>
            {children}
        </p>
</div>
  )
}

export default Button
