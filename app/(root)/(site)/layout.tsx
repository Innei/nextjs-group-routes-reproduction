import { PropsWithChildren } from 'react'

interface PropsWithSlot extends PropsWithChildren {
  head: React.ReactNode
  footer: React.ReactNode
}
export default async function RootLayout(props: PropsWithSlot) {
  const { children, head, footer } = props

  return (
    <>
      {head}
      {footer}
      {children}
    </>
  )
}
