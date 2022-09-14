import { prisma } from '@/lib/prisma'
import { data } from 'autoprefixer'

export default async function handler(req, res) {
  //console.log(JSON.parse(req.body))
  if (req.method === 'POST') {
    try {
      await prisma.user.create({
        data: { name: 'Lulu', email: 'lulu@gmail.com', code: '4568' },
      })
      res.status(200).json({ message: 'con éxito' })
    } catch (error) {
      res.status(400).json({ error: error.message })
    }
  } else if (req.method === 'DELETE') {
    console.log('deleted')
    console.log(JSON.parse(req.body))
    res.status(200).json({ message: 'row deleted' })
  } else {
    res.status(405).json({ message: 'not supported method' })
  }
}
