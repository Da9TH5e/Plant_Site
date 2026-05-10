import '../styles/BuyButton.css';

function BuyButton({ className}: {className?: string}) {
  return (
    <div className="flex">
      <p className={`buttonText border-solid 
        border-[#FFFFFF] text-center
        hover:border-[rgba(255,255,255,0.7)]
        hover:scale-90
        transition-transform duration-300
        hover:text-[rgba(255,255,255,0.6)]
        hover:cursor-pointer
        items-center
        ${className}
        `}>
            Buy Now
        </p>
</div>
  )
}

export default BuyButton
