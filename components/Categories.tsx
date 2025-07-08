'use client';

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const ctgData = [
  {
    id: 1,
    name: 'Jerrie',
    slug: 'jerrie',
    imgUrl: 'http://dummyimage.com/176x100.png/5fa2dd/ffffff',
  },
  {
    id: 2,
    name: 'Karel',
    slug: 'karel',
    imgUrl: 'http://dummyimage.com/122x100.png/5fa2dd/ffffff',
  },
  {
    id: 3,
    name: 'Sidney',
    slug: 'sidney',
    imgUrl: 'http://dummyimage.com/127x100.png/ff4444/ffffff',
  },
  {
    id: 4,
    name: 'Clari',
    slug: 'clari',
    imgUrl: 'http://dummyimage.com/110x100.png/dddddd/000000',
  },
  {
    id: 5,
    name: 'Sorcha',
    slug: 'sorcha',
    imgUrl: 'http://dummyimage.com/107x100.png/dddddd/000000',
  },
  {
    id: 6,
    name: 'Scott',
    slug: 'scott',
    imgUrl: 'http://dummyimage.com/158x100.png/5fa2dd/ffffff',
  },
  {
    id: 7,
    name: 'Donelle',
    slug: 'donelle',
    imgUrl: 'http://dummyimage.com/212x100.png/dddddd/000000',
  },
  {
    id: 8,
    name: 'Algernon',
    slug: 'algernon',
    imgUrl: 'http://dummyimage.com/150x100.png/5fa2dd/ffffff',
  },
];

const Categories = () => {
  return (
    <div className="mt-2">
      <span className="font-krona-one md:text-2xl text-textPrimary pl-4">
        Categories
      </span>
      <div className="flex gap-4 overflow-x-auto no-scrollbar mt-3 pb-2 mx-auto">
        {ctgData.map((ctg) => (
          <Link
            href={`/category/${ctg.slug}`}
            key={ctg.id}
            className="flex flex-col items-center group cursor-pointer shrink-0 px-4"
          >
            <Image
              src={ctg.imgUrl}
              alt={ctg.name}
              width={200}
              height={200}
              className="md:rounded-[61px] rounded-full w-[70px] h-[70px] md:w-[200px] md:h-[200px] object-cover border-2 border-transparent group-hover:border-apricot transition-all duration-400"
            />
            <span className="text-sm mt-1 text-center">{ctg.name}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Categories;
