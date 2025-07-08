'use client';

import React from 'react';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';

const SearchBar = () => {
  return (
    <div className="relative w-full flex-1">
      <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground w-5 h-5 z-10" />
      <Input
        type="text"
        placeholder="Search for products, categories"
        className="pl-10 rounded-full py-6  transition"
      />
    </div>
  );
};

export default SearchBar;
