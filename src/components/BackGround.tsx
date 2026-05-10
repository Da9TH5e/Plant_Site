export function BackGround({ className }: {className?: string}) {
  return (
    <div className={`
        bg-[url(/background_img_1.png)]
        xs:bg-top
        bg-size-[100%]
        bg-no-repeat
        ${className}
    `}>
    </div>
  )
}