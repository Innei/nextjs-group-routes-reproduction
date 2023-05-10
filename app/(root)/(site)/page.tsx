import Link from 'next/link'

export default async (props) => {
  return (
    <>
      <br />
      <br />
      Click this: <Link href="/posts">Posts</Link>
      <br />
      {props.children}
    </>
  )
}
