import type React from "react";
import '../styles/Partialborder.css';

function PartialBorder({children, className}: {className?: string, children?: React.ReactNode}) {
  return (
    <div className="flex">
        <img src="/Vector 5.svg" className="translate-y-[0.278vw]
        translate-x-[2.083vw] h-[2.917vw] w-[2.778vw]"/>
            <div className={` textter flex flex-row ${className}`}>
                {children}
            </div>
        <img src="/Vector 6.svg" className="translate-x-[-2.083vw]
        h-[2.917vw] w-[2.778vw]"/>
    </div>
  )
}

export default PartialBorder
