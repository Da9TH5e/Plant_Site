export function BackGround({ className }: {className?: string}) {
  return (
    <div className={`
        flex
        overflow-y-auto
        w-screen
        h-fill
        ${ className }
    `}>
      <img src="/background_img_1.png" />
    </div>
  )
}
