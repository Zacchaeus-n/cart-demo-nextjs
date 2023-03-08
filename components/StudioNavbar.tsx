import React from 'react'
import {ArrowUturnLeftIcon} from "@heroicons/react/24/solid"
import Link from 'next/link'

const StudioNavbar = (props: any) => {
  return (
    <div><>
    <div className="flex items-center justify-between p-5">
        <Link href={`/`} className="flex items-center text-[tomato]">
            <ArrowUturnLeftIcon className='h-5 w-5 mr-2' />
            Go To Blog</Link>
    </div>
    {props.renderDefault(props)}
    </></div>
  )
}

export default StudioNavbar