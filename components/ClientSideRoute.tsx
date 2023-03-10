"use client"

import Link from 'next/link'
import React from 'react'

// wrapper component

const ClientSideRoute = ({children, route}: {children: React.ReactNode, route: string}) => {
  return (
    <Link href={route} as={route}>{children}</Link>
  )
}

export default ClientSideRoute