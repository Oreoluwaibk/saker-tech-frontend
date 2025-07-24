import React, { ReactNode } from 'react';
import variables from "@/styles/variables.module.scss";
import { UploadIcon } from '../../../assets/icons';
import Image from 'next/image';

type uploadProps = {
    description?: string | ReactNode;
    value: any;
    max?:string | ReactNode;
    initialTitle?:string | ReactNode;
    image?: ReactNode;
}

const UploadContent = ({
    description,
    value,
    max="Mp4 (max size 150MB)",
    initialTitle="Upload sample video",
    image
}: uploadProps) => {
    
  return (
    <div className={variables.upload}>
        <p>{description}</p>
        <div className={variables.container}>
            <Image 
                src={image ? image : UploadIcon}
                alt='uplaod icon'
            />
            <p className="text-lg font-medium text-pBlue text-center overflow-hidden w-full">{value ? value : initialTitle}</p>
            <p className="text-center text-sm font-normal">{max}</p>
        </div>
    </div>
  )
}

export default UploadContent