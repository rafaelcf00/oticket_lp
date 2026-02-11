"use client";

import { useRouter } from 'next/navigation';
import React from 'react'
import { HiOutlineTicket, HiTicket } from 'react-icons/hi';
import { IoTicketOutline } from "react-icons/io5";
import { TiTicket } from 'react-icons/ti';

export default function Scrolling() {
  const text = "OTICKET VIVA ESSA EXPERIÊNCIA"
  const repeatedText = Array(15).fill(text).map((item, index) => (
    <React.Fragment key={index}>
      {item} <TiTicket size={24} className="text-[#023324] inline-block mx-2" /> 
    </React.Fragment>
  ))

  const router = useRouter()

  return (
    <div onClick={() => {
      window.open("https://www.instagram.com/oticket.com.br")
    }} className="w-full overflow-hidden bg-[#f2f2f2] text-[#023324] py-1 flex items-center cursor-pointer">
      <div className="animate-scroll whitespace-nowrap">
        <span className="text-lg font-bold text-[#023324]">{repeatedText}</span>
      </div>
    </div>
  )
}