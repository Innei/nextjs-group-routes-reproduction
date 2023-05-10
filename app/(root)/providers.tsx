'use client'

// import type { PropsWithChildren } from 'react'
// import { useMemo, useRef } from 'react'

export const AppRootProviders = (props: any) => {
  const { data, children } = props
  // const pageProviders = useMemo(
  //   () => [
  //     <SWRProvider key="SWRProvider" />,
  //     <InitialContextProvider value={data} key="InitialDataProvider" />,
  //     <ModalStackProvider key="modalProvider" />,
  //   ],
  //   [data],
  // )

  return <>{children}</>
}
