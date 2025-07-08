import Image from 'next/image';
import React from 'react';

const Filter = () => {
  return (
    <div className="flex items-center gap-2 border border-[#b3b3b3] rounded-full py-2 px-4 hover:border-[#FBBA9D] focus-within:border-[#FBBA9D] transition cursor-pointer">
      <Image src="/filter.svg" height={18} width={18} alt="filter" />
      <span className="text-sm hidden md:block text-muted-foreground">Filter</span>
    </div>
  );
};

export default Filter;
