import React, { ReactNode } from 'react';
import variables from "@/styles/variables.module.scss";
import Link from 'next/link';
import { RightOutlined, RiseOutlined } from '@ant-design/icons';
import Image from 'next/image';
// import { MultipleImages } from '../../../assets/icons';

interface card {
  image: ReactNode;
  title: string;
  total: string | number;
  cardLink?: string;
  percentage?: string | number;
  multipleImage?: boolean;
  hideIcon?: boolean;
}
const Cards = ({
  image,
  title,
  total,
  cardLink,
  hideIcon,
  multipleImage
}: card) => {
  return (
    <div className={variables.singleCards}>
        <div className={variables.topCard}>
          <div className={variables.topCardLeft}>
            {image}

            <div className="flex flex-col gap-0">
              <p className="text-sm text-[#858585]">{title}</p>
              <p className="font-semibold text-lg" style={{color: "#0E0B0A"}}>{total}</p>
            </div>
          </div>
          {/* {multipleImage && <div className={variables.topCardRight}>
            <Image src={MultipleImages} alt='multiple' />
          </div>} */}
        </div>

        {cardLink && <div className={variables.bottomCard}>
          <Link href="/courses" style={{color: "#858585"}} className="text-sm font-medium">{cardLink} </Link>
           {!hideIcon && <RightOutlined />}
          {/* <p className='yellowPercent'><RiseOutlined className="text-lg" /> {percentage}%</p> */}
        </div>}
    </div>
  )
}

export default Cards;