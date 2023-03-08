import Image from 'next/image'
import React from 'react'
import logo from "/public/logo.png"

const Logo = (props: any) => {
    const {renderDefault, title}=props
  return (
    <div><div className="flex items-center justify-between p-5">
    <Image src={logo} alt="logo" width={80} height={24} className="object-cover" />
</div>
{renderDefault(props)}</div>
  )
}

export default Logo