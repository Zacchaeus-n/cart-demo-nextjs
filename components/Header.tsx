import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import logo from "/public/logo.png"

const Header = () => {
  return (
    <header className='flex items-center justify-between space-x-2 font-bold px-10 py-5'>
        <div className="flex items-center space-x-2">
            <Link href={`/`}>
            <Image src={logo} alt="logo" width={80} height={24} className="object-cover" />
            </Link>
        </div>
        <div className="px-5 py-2 text-sm md:text-base bg-gray-900 rounded-full text-center text-[tomato]">Cars Blog</div>
    </header>
  )
}

export default Header