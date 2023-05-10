'use client'

import { useEffect } from 'react'

export default function ErrorPage({ error }: any) {
  useEffect(() => {
    console.error(error)
    console.dir(error)
  }, [error])

  return <>Error: {error.message}</>
}
