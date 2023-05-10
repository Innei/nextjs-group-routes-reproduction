import { PropsWithChildren } from 'react'
import PKG from '../../package.json'
import { AppRootProviders } from './providers'

interface PropsWithSlot extends PropsWithChildren {
  headxx: React.ReactNode
}
export default async function RootLayout(props: PropsWithSlot) {
  const { children, headxx } = props

  return (
    <AppRootProviders>
      <head>
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <link rel="alternate" href="/feed" type="application/atom+xml" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <link rel="sitemap" href="/sitemap.xml" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black" />
      </head>
      <body className="loading" id="app">
        {headxx}
        {children}
      </body>
    </AppRootProviders>
  )
}
