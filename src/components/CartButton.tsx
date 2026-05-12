export default function CartButton({className}: {className?: string}) {
  return (
    <div className="flex">
      <p className={` 
        border-[rgba(255,255,255,0.75)] text-center
        hover:border-[rgba(255,255,255,0.7)]
        hover:scale-90
        transition-transform duration-300
        hover:cursor-pointer
        ${className}
        `}>
            <img src="/bag 1.svg" className="w-[1.444vw] h-[1.444vw]"/>
        </p>
</div>
  )
}
