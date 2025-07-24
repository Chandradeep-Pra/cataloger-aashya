'use client';

import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from '@/components/ui/popover';
import { Slider } from '@/components/ui/slider';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Select, SelectTrigger, SelectContent, SelectItem, SelectValue } from '@/components/ui/select';

import Image from 'next/image';
import { useState } from 'react';

const Filter = () => {
  const [priceRange, setPriceRange] = useState<[number, number]>([1000, 4000]);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [sortBy, setSortBy] = useState<string>('relevance');

  const handleSave = () => {
    console.log('🔍 Applied Filters:', {
      priceRange,
      selectedCategory,
      sortBy,
    });
  };

  return (
    <Popover>
      <PopoverTrigger asChild>
        <div className="flex items-center gap-2  rounded-full py-2 px-4  hover:border-primary/50 transition cursor-pointer">
          <Image src="/filter.svg" height={18} width={18} alt="filter" className='hidden md:block' />
          <span className="text-sm  text-muted-foreground">Filter</span>
        </div>
      </PopoverTrigger>

      <PopoverContent className="w-72 md:w-96 space-y-5">
        {/* Price Range */}
        <div>
          <h3 className="text-sm font-medium mb-2 text-muted-foreground">Price Range</h3>
          <Slider
            value={priceRange}
            onValueChange={(val) => setPriceRange(val as [number, number])}
            min={0}
            max={5000}
            step={100}
            className="w-full 
              [&_[role=slider]]:bg-apricot 
              [&_[role=range-track]]:bg-apricot/40"
          />
          <div className="flex justify-between text-sm text-muted-foreground mt-1">
            <span>₹{priceRange[0]}</span>
            <span>₹{priceRange[1]}</span>
          </div>
        </div>

        {/* Category */}
        <div>
          <Label className="mb-1 block text-sm text-muted-foreground">Category</Label>
          <Select value={selectedCategory} onValueChange={setSelectedCategory}>
            <SelectTrigger className="w-full rounded-full">
              <SelectValue placeholder="Select category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All</SelectItem>
              <SelectItem value="sarees">Sarees</SelectItem>
              <SelectItem value="lehengas">Lehengas</SelectItem>
              <SelectItem value="kurtas">Kurtas</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Sort By */}
        <div>
          <Label className="mb-1 block text-sm text-muted-foreground">Sort by</Label>
          <RadioGroup value={sortBy} onValueChange={setSortBy} className="flex flex-col space-y-2">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="relevance" id="r1" />
              <Label htmlFor="r1">Relevance</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="price_low_high" id="r2" />
              <Label htmlFor="r2">Price: Low to High</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="price_high_low" id="r3" />
              <Label htmlFor="r3">Price: High to Low</Label>
            </div>
          </RadioGroup>
        </div>

        {/* Save Button */}
        <div className="flex justify-end">
          <Button
            onClick={handleSave}
            className="rounded-full bg-apricot hover:bg-orange-400 text-white px-6"
          >
            Save
          </Button>
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default Filter;
