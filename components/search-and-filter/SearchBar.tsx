'use client';

import React from 'react';
import { BorderlessInput, Input } from '@/components/ui/input';
import { Search } from 'lucide-react';

const SearchBar = () => {
  return (
 <div className='w-full h-10 relative overflow-hidden'>
  <Search className="w-4 h-4 text-muted-foreground absolute top-3 left-2" />
  <BorderlessInput 
            placeholder="Search by item name, category, or tag"
            className="pl-8 text-lg"
          />
  </div>

  );
};

export default SearchBar;
