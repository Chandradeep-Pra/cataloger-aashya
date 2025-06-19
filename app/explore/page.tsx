import { BNav } from '@/components/BNav'
import React from 'react'

const page = () => {
  return (
    <div className='w-full h-screen bg-background flex flex-col justify-between'>
        <span>Page</span>
        <BNav />
    </div>
  )
}

export default page