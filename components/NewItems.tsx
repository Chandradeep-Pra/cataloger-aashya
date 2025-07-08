'use client';
import Image from 'next/image';
import React from 'react';

const newItemsData = [
  {
    id: 1,
    itemName: 'Claudette',
    imgUrl: 'http://dummyimage.com/171x100.png/ff4444/ffffff',
    price: 93,
  },
  {
    id: 2,
    itemName: 'Stanfield',
    imgUrl: 'http://dummyimage.com/178x100.png/dddddd/000000',
    price: 50,
  },
  {
    id: 3,
    itemName: 'Christian',
    imgUrl: 'http://dummyimage.com/186x100.png/cc0000/ffffff',
    price: 59,
  },
  {
    id: 4,
    itemName: 'Merline',
    imgUrl: 'http://dummyimage.com/174x100.png/dddddd/000000',
    price: 50,
  },
  {
    id: 5,
    itemName: 'Tuckie',
    imgUrl: 'http://dummyimage.com/138x100.png/dddddd/000000',
    price: 87,
  },
  {
    id: 6,
    itemName: 'Tonnie',
    imgUrl: 'http://dummyimage.com/198x100.png/cc0000/ffffff',
    price: 7,
  },
  {
    id: 7,
    itemName: 'Corey',
    imgUrl: 'http://dummyimage.com/241x100.png/5fa2dd/ffffff',
    price: 48,
  },
  {
    id: 8,
    itemName: 'Ulrich',
    imgUrl: 'http://dummyimage.com/126x100.png/cc0000/ffffff',
    price: 21,
  },
];

const NewItems = () => {
  return (
  <div className="mt-4">
    <span className="font-krona-one md:text-2xl text-textPrimary pl-4">
      New Items
    </span>
    <div className="flex overflow-x-auto md:overflow-x-visible flex-nowrap md:flex-wrap no-scrollbar mt-3 pb-2 mx-auto">
      {newItemsData.map((it) => (
        <div
          key={it.id}
          className="flex flex-col items-center group cursor-pointer md:mt-8 shrink-0 px-4 mx-auto relative"
        >
          {/* Heart Icon */}
          <div className="absolute md:top-4 md:right-4 top-1/2 left-1/2 md:left-auto transform md:transform-none -translate-x-1/2 translate-y-12 md:-translate-x-4 md:translate-y-0 z-10">
            <div className="bg-white shadow-md rounded-full p-2 hover:scale-110 transition-transform duration-300">
              <Image
                src="/icons/heart.svg"
                alt="Favorite"
                width={20}
                height={20}
                className="w-5 h-5 md:w-6 md:h-6"
              />
            </div>
          </div>

          {/* Product Image */}
          <Image
            src={it.imgUrl}
            alt={it.itemName}
            width={200}
            height={200}
            className="rounded-[32px] w-[160px] h-[200px] md:w-[300px] md:h-[420px] object-cover border-2 border-transparent group-hover:border-apricot transition-all duration-400"
          />

          {/* Product Info */}
          <div className="text-center flex flex-col mt-1">
            <span className="text-lg font-normal">{it.itemName}</span>
            <span className="text-lg font-semibold -mt-2">
              <span className="text-sm text-neutral-600">approx</span> ${it.price}
            </span>
          </div>
        </div>
      ))}
    </div>
  </div>
);

};

export default NewItems;
