export function BackGround({ className }: {className?: string}) {
  return (
    <div className={`
        flex
        overflow-y-auto
        bg-[url(/background_img_1.png)]
        bg-cover
        h-full
        w-screen
        ${ className }
    `}>
    </div>
  )
}
