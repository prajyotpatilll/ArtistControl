import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import acbw from '../assets/acbw.png'

const Logo = () => {
  return (
    <div className="flex items-center">
      <Link href="/" className="block">
        <div className="relative w-28 h-10 sm:w-32 sm:h-12 md:w-40 md:h-14 lg:w-44 lg:h-16">
          <Image
            src={acbw}
            alt="logo"
            fill
            sizes="(max-width: 640px) 112px, (max-width: 768px) 128px, (max-width: 1024px) 160px, 176px"
            priority
            className="object-contain"
          />
        </div>
      </Link>
    </div>
  )
}

export default Logo
