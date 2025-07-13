"use client"

import Image from "next/image"

export function Avatar() {
  return (
    <div className="mt-6 mb-6 lg:px-15">
      <Image
        src="/assets/avatar.png"
        alt="Avatar"
        width={60}
        height={60}
        className="rounded-full border-4 border-white shadow-lg object-cover"
        priority
      />
    </div>
  )
} 