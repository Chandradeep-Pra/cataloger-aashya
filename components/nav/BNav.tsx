"use client";

import { ChevronDown, ChevronUp, Facebook, Instagram, MessageCircle } from "lucide-react";
import React, { useState } from "react";
import { Button } from "../ui/button";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="w-full bg-transparent flex flex-col md:justify-between gap-4 md:gap-0 md:flex-row">
      <div className="w-full flex flex-col gap-1">
        <span className="font-semibold text-zinc-800">SHOP FOR</span>
        <span className="text-sm text-gray-700">
          Men | Women | Kids | Lehenga
        </span>
      </div>
      <div className="w-full flex flex-col gap-1">
        <span className="font-semibold text-zinc-800">SOCIAL LINKS</span>
        <div className="flex gap-4 text-gray-700">
      {[
        { link: "https://www.instagram.com", icon: <Instagram size={20}  /> },
        { link: "https://www.facebook.com", icon: <Facebook size={20}  /> },
        { link: "https://www.whatsapp.com", icon: <MessageCircle size={20}  /> },
      ].map((item, index) => (
        <Link key={index} href={item.link} target="_blank" className="text-apricot">
          {item.icon}
        </Link>
      ))}
    </div>
      </div>

      <div className="w-full flex flex-col gap-1 ">
        <span className="font-semibold text-zinc-800">Registered Office Address</span>
        <span className="text-sm text-gray-700 md:mr-36 ">
          Girja Creations, Bara Bazar, Howrah, West Bengal, 711101
        </span>
      </div>
    </div>
  );
};

export const BNav = () => {
  const [expanded, setExpanded] = useState(false);
  return (
    <div className="w-full border-t">
      <div className="w-full flex justify-between px-4 py-2 items-center">
        <span className="text-sm">
          Know more about{" "}
          <span className="text-md font-medium text-apricot font-krona-one">
            Aashya
          </span>
        </span>
        <Button
          variant="outline"
          onClick={() => setExpanded(!expanded)}
          className="flex items-center gap-2"
        >
          {expanded ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
        </Button>
      </div>
      {expanded && (
        <div className="w-full bg-gray-200 px-4 py-4">
          <Footer />
        </div>
      )}
    </div>
  );
};
