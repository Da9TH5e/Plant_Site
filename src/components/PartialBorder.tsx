import type React from "react";

function PartialBorder({children, className}: {className?: string, children?: React.ReactNode}) {
  return (
    <div className="flex -z-1">
        <img src="/Vector 5.svg" className="translate-y-1 translate-x-7.5 h-10.5 w-10"/>
            <div className={`flex flex-row ${className}`}>
                {children}
            </div>
        <img src="/Vector 6.svg" className="-translate-x-7.5 h-10.5 w-10"/>
    </div>
  )
}

export default PartialBorder
