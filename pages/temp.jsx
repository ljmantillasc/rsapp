import React, { useState, useEffect } from 'react'
import { prisma } from '@/lib/prisma'

export async function getServerSideProps(context) {
  const users = await prisma.user.findMany()
  return {
    props: {
      users,
    }, // will be passed to the page component as props
  }
}

function Example({ users }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    document.title = `You clicked ${count} times`
    fetch('https://api.artic.edu/api/v1/artworks/search?q=cats')
      .then((res) => res.json(res))
      .then((res) => {
        console.log(res)
      })
  })
  console.log(users)
  return (
    <div>
      <p>You {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  )
}

export default Example
