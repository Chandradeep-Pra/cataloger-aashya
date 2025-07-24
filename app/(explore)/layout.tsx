import { BNav } from '@/components/nav/BNav'
import TNav from '@/components/nav/TNav'
import SearchBar from '@/components/search-and-filter/SearchBar'
import React from 'react'

const ClientRootLayout = ({children}:{children:React.ReactNode}) => {
  return (
    <div className='w-full'>
      {/* <TNav /> */}
        {children}
        {/* <BNav /> */}
    </div>
  )
}

export default ClientRootLayout