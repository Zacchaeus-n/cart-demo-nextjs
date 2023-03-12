import React from 'react'

const Banner = () => {
  return (
    <div className='flex flex-col align-middle items-center text-center lg:text-left lg:flex-row lg:space-x-8 justify-between font-bold px-10 py-5 mb-10'>
      <div className="">
        <h1 className="text-4xl">Anna Cars' Blog</h1>
        <h2 className="mt-3 md:mt-0">
          Welcome to 
          <span className="underline decoration-4 decoration-[tomato]"> The hub of cars </span> for everyone!
        </h2>
      </div>
      <p className="mt-5 md:mt-0 text-gray-400 max-w-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, pariatur voluptatibus vel similique cum fugit rem voluptates nobis. Porro, suscipit?</p>
    </div>
  )
}

export default Banner