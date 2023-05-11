import Link from 'next/link'

export const generateMetadata = ({ params: { id } }) => {
  return {
    title: 'Post ' + id,
  }
}

export default async ({ params }) => {
  return (
    <>
      <p>Post {params.id}</p>

      <br />

      <Link href={'/posts/c/' + (+params.id - 1)}>
        To posts {+params.id - 1}
      </Link>
    </>
  )
}
