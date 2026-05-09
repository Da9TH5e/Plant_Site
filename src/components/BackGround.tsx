export function BackGround({ className }: {className?: string}) {
  return (
    <div className={`
        bg-[url(/background_img_1.png)]
        bg-cover
        bg-center
        sm:w-325
        xl:w-full
        bg-no-repeat
        w-325
        h-full
        ${className}
    `}>
    </div>
  )
}