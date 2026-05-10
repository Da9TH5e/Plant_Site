import type React from "react";

function PartialBorder({children, className}: {className?: string, children?: React.ReactNode}) {
  return (
    <div className="flex -z-1">
        <img src="/Vector 5.svg" className="xs:translate-y-0.5 xl:translate-y-1 xs:translate-x-2 xl:translate-x-7.5 xs:h-3 xs:w-3 xl:h-10.5 xl:w-10"/>
            <div className={`flex flex-row ${className}`}>
                {children}
            </div>
        <img src="/Vector 6.svg" className="xs:-translate-x-2 xl:-translate-x-7.5 xs:h-3 xs:w-3 xl:h-10.5 xl:w-10"/>
    </div>
  )
}

export default PartialBorder
