import { PropsWithChildren } from 'react'
import { Layout } from './_layout'

export default async (props: PropsWithChildren) => {
  console.log('render layout')
  return <Layout>{props.children}</Layout>
}
