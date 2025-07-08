"use client"

import { ChevronLeft, ChevronRight, Facebook, Instagram, Youtube } from 'lucide-react'
import Link from 'next/link'
import { useEffect, useState } from 'react';

const infos = [
    "For order assistance, contact us",
    "cod available | shipping worldwide"
]

const TNav = () => {
  const [currInfo, setCurrInfo] = useState(0);

  useEffect(() =>{
    const interval = setInterval(() => {
      if(currInfo === 0){
        setCurrInfo(1)
      }else{
        setCurrInfo(0)
      }
    },3000)

    return () => clearInterval(interval)

  },[currInfo])
  
  return (
    <div className='w-full bg-apricot flex md:px-12 py-4 text-white items-center justify-around'>
        {/* Social */}
        {/* <div className='flex items-center gap-6'>
            <Link href="#"><Instagram size={20} className='text-background' /></Link>
            <Link href="#"><Facebook size={20} className='text-background'  /></Link>
            <Link href="#"><Youtube size={20} className='text-background'  /></Link>
        </div> */}
        {/* message  */}
        <ChevronLeft className='border rounded-full p-1' size={32} onClick={() => setCurrInfo((prev) => (prev - 1)%infos.length)} />
      <span>{infos[currInfo]}</span>
        <ChevronRight className='border rounded-full p-1' size={32} onClick={() => setCurrInfo((prev) => prev + 1)} />
    </div>
  )
}

export default TNav