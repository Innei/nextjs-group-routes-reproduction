import { PropsWithChildren } from 'react'

interface PropsWithSlot extends PropsWithChildren {
  head: React.ReactNode
  footer: React.ReactNode
}

export const generateMetadata = async ({ params }) => {
  return {
    title: 'Site Layout',
  }
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
