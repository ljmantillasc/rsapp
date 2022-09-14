export default async function handler(req, res) {
  const list = [
    { firstName: 'Luis', lastName: 'Mantilla' },
    { firstName: 'Juan', lastName: 'Perez' },
    { firstName: 'Diana', lastName: 'Lopez' },
  ]

  const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('foo')
    }, 3000)
  })

  await myPromise.then(() => {
    res.status(200).json(list)
  })
}
