'use client'
import { PropsWithChildren, useEffect } from 'react'

export const Layout = (props: PropsWithChildren) => {
  useEffect(() => {
    return () => {
      console.log('layout.tsx unmount')
    }
  }, [])
  return <>{props.children}</>
}
