"use client"

import React, { useEffect, useState } from "react"
import { Star } from "lucide-react"
import { Marquee } from "../magicui/marquee"
import Image from "next/image"

export const customerReviews = [
  {
    id: 1,
    name: "Riya Sharma",
    location: "Mumbai, India",
    rating: 5,
    review:
      "The lehenga I bought was beyond beautiful! Loved the fabric, fit, and the intricate zari work. Compliments just kept coming.",
    mediaType: "image",
    mediaColor: "bg-rose-100",
  },
  {
    id: 2,
    name: "Aarav Mehta",
    location: "Ahmedabad, India",
    rating: 4,
    review:
      "Really impressed by the quality and the packaging. The kurta set looked exactly like the pictures. Will shop again!",
    mediaType: "video",
    mediaColor: "bg-amber-100",
  },
  {
    id: 3,
    name: "Priya Desai",
    location: "Delhi, India",
    rating: 5,
    review:
      "Absolutely loved the saree! It made my Diwali extra special. The colors popped and I felt so confident wearing it.",
    mediaType: "image",
    mediaColor: "bg-emerald-100",
  },
  {
    id: 4,
    name: "Kunal Joshi",
    location: "Pune, India",
    rating: 4,
    review:
      "Great fit and amazing customer service. I had a minor size issue, but the exchange process was smooth.",
    mediaType: "video",
    mediaColor: "bg-indigo-100",
  },
  {
    id: 5,
    name: "Sneha Nair",
    location: "Bangalore, India",
    rating: 5,
    review:
      "Wore the Anarkali to my cousin’s wedding and everyone asked where I got it from. Loved the fabric!",
    mediaType: "image",
    mediaColor: "bg-pink-100",
  },
]

const CustomerReview = () => {
  return (
    <div className="w-full bg-gradient-to-r from-pink-200 via-yellow-300 via-orange-500 via-yellow-300 to-pink-200 md:py-6 relative">
        <Image src="/customer-review-Photoroom.png" fill alt="Customer Review" className="absolute opacity-10 object-cover"/>
      <h2 className="text-2xl  font-krona-one mb-6 mt-4  ">
        Customer Reviews
      </h2>

      <div className="relative w-full overflow-hidden">
        <Marquee pauseOnHover pauseOnTouch className="gap-6">
          {customerReviews.map((review) => (
            <div
              key={review.id}
              className="w-80 sm:w-96 shrink-0 rounded-2xl bg-white border border-zinc-200 shadow-sm p-5 transition duration-300 active:shadow-[0_0_0_3px_rgba(255,180,162,0.5)]"
            >
              <div
                className={`w-full h-48 sm:h-52 mb-4 rounded-xl flex items-center justify-center text-zinc-600 text-sm font-medium ${review.mediaColor}`}
              >
                {review.mediaType === "video" ? "Customer Video" : "Customer Photo"}
              </div>

              <blockquote className="text-gray-700 text-sm sm:text-base italic mb-4">
                “{review.review}”
              </blockquote>

              <div className="flex items-center justify-between">
                <div>
                  <p className="text-zinc-900 font-semibold">{review.name}</p>
                  <p className="text-xs text-zinc-500">{review.location}</p>
                </div>
                <div className="flex gap-1">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} size={14} fill="#FBBF24" stroke="#FBBF24" />
                  ))}
                  {[...Array(5 - review.rating)].map((_, i) => (
                    <Star key={i + review.rating} size={14} stroke="#FBBF24" />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  )
}

export default CustomerReview
