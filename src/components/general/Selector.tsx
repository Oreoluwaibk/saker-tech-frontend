import React from 'react'

interface props {
    title: string;
    selected: boolean;
    onclick: () => void;
}
const Selector: React.FC<props> = ({
    title,
    selected,
    onclick
}) => {
  return (
    <div    
        onClick={onclick} 
        className='rounded-[5px]! py-3 px-4 cursor-pointer font-medium min-w-[108px]' 
        style={{ 
            backgroundColor: selected ? "rgba(254, 213, 0, 0.08)" : "#EDEDED",
            borderColor: selected ? "#FFE041" : undefined,
            borderWidth: selected ? 1 : undefined,
            color: selected ? "#FED500" : "#9B9B9B"
        }}
    >
        <p className='text-center'>{title}</p>
    </div>
  )
}

export default Selector