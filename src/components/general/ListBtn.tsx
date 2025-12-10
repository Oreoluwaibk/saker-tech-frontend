"use client"
import React from 'react'

interface ListBtnProps {
    title: string;
    height?: number;
    bgColor?: string;
    textColor?: string;
    onClick?: () => void;
    icon?: React.ReactNode;
}
const ListBtn: React.FC<ListBtnProps> = ({
    title,
    height = 33,
    bgColor,
    textColor,
    onClick,
    icon
}) => {
  return (
    <span className='hover:text-[#3E3E3E]! text-[#3E3E3E]! px-3 py-2 my-2' style={{ height, borderRadius: 12, borderWidth: 1, borderColor: "#E5E5E5", backgroundColor: bgColor, color: textColor }} onClick={onClick}>{icon} {title}</span>
  )
}

export default ListBtn