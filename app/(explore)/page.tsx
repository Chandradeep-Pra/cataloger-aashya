'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
// import { Search, Filter, Grid3x3 } from 'lucide-react';
import BannerCarousel from '@/components/banner/banner-crsl';
import Categories from '@/components/Categories';
import NewItems from '@/components/NewItems';
import GlassContainer from '@/components/GlassContainer';
import SearchBar from '@/components/search-and-filter/SearchBar';
import Filter from '@/components/search-and-filter/Filter';
import FeaturedProducts from '@/components/FeaturedProducts';
import CustomerReview from '@/components/customer-review/CustomerReview';

const ExplorePage = () => {
  const [activeBlock, setActiveBlock] = useState<'search' | 'categories' | 'filter'>('categories');

  return (
    <div className="w-full bg-background flex flex-col justify-between">
      {/* Sticky Header */}
      <div className="sticky top-2 z-50 w-full mt-2 px-4">
        <div className="flex items-center gap-3 w-full ">
          
          {/* Search */}
          <GlassContainer
            blurLevel="sm"
            bgOpacity={0.12}
            borderOpacity={0.02}
            className="rounded-2xl transition-all duration-300 w-full"
          >
            <SearchBar />
            {/* <motion.div
              layout
              transition={{ type: 'spring', stiffness: 400, damping: 30 }}
              onClick={() => setActiveBlock('search')}
              className={`cursor-pointer flex items-center overflow-hidden transition-all duration-300
                ${activeBlock === 'search' ? 'px-4 py-2 rounded-xl' : 'w-10 h-10 justify-center'}`}
            >
              {activeBlock === 'search' ? (
                // <>
                //   <Search className="w-4 h-4 text-muted-foreground mr-2" />
                //   <input
                //     type="text"
                //     placeholder="Search items"
                //     className="w-full text-sm outline-none bg-transparent placeholder:text-muted-foreground"
                //   />
                // </>
                <SearchBar />
              ) : (
                <Search className="w-4 h-4 text-muted-foreground" />
              )}
            </motion.div> */}
          </GlassContainer>

          {/* Categories */}
          {/* <GlassContainer
            blurLevel="sm"
            bgOpacity={0.12}
            borderOpacity={0.02}
            className="rounded-2xl transition-all duration-300"
          >
            <motion.div
              layout
              transition={{ type: 'spring', stiffness: 400, damping: 30 }}
              onClick={() => setActiveBlock('categories')}
              className={`cursor-pointer flex items-center overflow-hidden transition-all duration-300
                ${activeBlock === 'categories' ? ' px-4 py-2 rounded-xl' : 'w-10 h-10 justify-center'}`}
            >
              {activeBlock === 'categories' ? (
                <>
                  <Grid3x3 className="w-4 h-4 text-muted-foreground mr-2" />
                  <span className="text-sm font-medium text-muted-foreground">Quick Categories</span>
                </>
              ) : (
                <Grid3x3 className="w-4 h-4 text-muted-foreground" />
              )}
            </motion.div>
          </GlassContainer> */}

          {/* Filter */}
          <GlassContainer
            blurLevel="sm"
            bgOpacity={0.12}
            borderOpacity={0.02}
            className="rounded-2xl transition-all duration-300"
          >
            {/* <motion.div
              layout
              transition={{ type: 'spring', stiffness: 400, damping: 30 }}
              onClick={() => setActiveBlock('filter')}
              className={`cursor-pointer flex items-center overflow-hidden transition-all duration-300
                ${activeBlock === 'filter' ? 'flex-1 px-4 py-2 rounded-xl' : 'w-10 h-10 justify-center'}`}
            > */}
            <Filter />
            {/* </motion.div> */}
          </GlassContainer>

        </div>
      </div>

      {/* Page Content */}
      <BannerCarousel />
      <Categories />
      <FeaturedProducts />
      <CustomerReview />
      <NewItems />
    </div>
  );
};

export default ExplorePage;
