import Link from 'next/link'
import { useQuery } from '@tanstack/react-query'

const TestPage = () => {
  const getNames = async () => {
    const names = await fetch('/api/testPage').then((res) => res.json())
    return names
  }

  const { data = [], isFetching } = useQuery(['getUsers'], getNames, {
    staleTime: 5000,
    cacheTime: 1000,
  })

  return (
    <div>
      <Link href="/TestPage2">
        <a>Ir a página 2</a>
      </Link>
      {isFetching && <div> Cargando... </div>}
      {data.length > 0 &&
        data.map((item) => <div key={item.firstName}> {item.firstName} </div>)}
    </div>
  )
}

export default TestPage
