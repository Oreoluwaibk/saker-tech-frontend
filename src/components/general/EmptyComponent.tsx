import { Button } from 'antd';
import React, { ReactNode } from 'react';
import variables from "@/styles/variables.module.scss";


interface empty {
    title?: string | ReactNode;
    description?: string | ReactNode;
    image?: ReactNode;
    buttonTitle?:string;
    icon?:ReactNode;
    onClick?:() => void
}
const EmptyComponent = ({
    title,
    description,
    image,
    buttonTitle,
    icon,
    onClick
}: empty) => {
  return (
    <div className={variables.empty_component}>
        {image}
        {title && <p className={variables.emptytitle}>{title}</p>}
        <p className={variables.empty_desc}>{description}</p>
        {buttonTitle && (
            <Button 
                type="primary" 
                className="flex items-center justify-center gap-2"
                onClick={onClick}
            >
                {icon && icon}
                {buttonTitle}
            </Button>
        )}
    </div>
  )
}

export default EmptyComponent