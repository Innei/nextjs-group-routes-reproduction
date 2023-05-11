import Link from 'next/link'

export default async (props) => {
  return (
    <>
      <br />
      <br />
      Click this: <Link href="/posts">Posts</Link>
      <br />
      {props.children}
      <ul style={{ marginTop: 100 }}>
        {Array(100)
          .fill(null)
          .map((_, i) => {
            return (
              <li>
                <Link href={`/posts/x/${i}`}>Post {i}</Link>
              </li>
            )
          })}
      </ul>
    </>
  )
}
