import Banner from '@/components/banner/Banner'
import BannerCarousel from '@/components/banner/banner-crsl'
import Categories from '@/components/Categories'
// import { BNav } from '@/components/nav/BNav'
// import TNav from '@/components/nav/TNav'
import NewItems from '@/components/NewItems'
import Filter from '@/components/search-and-filter/Filter'
import SearchBar from '@/components/search-and-filter/SearchBar'
import React from 'react'

const ExplorePage = () => {
  return (
    <div className='w-full  bg-background flex flex-col justify-between'>
      <div className='flex gap-2 w-full px-2 py-4'>

      <SearchBar />
      <Filter />
      </div>
      
      {/* <Banner /> */}
      <BannerCarousel />
        <Categories />
        <NewItems />
       
    </div>
  )
}

export default ExplorePage