const data = [
  {
    name: 'image1.jpg',
    url: 'my url',
    format: 'jpg',
    category: 1,
    access: 'public',
  },
  {
    name: 'image2.jpg',
    url: 'my url',
    format: 'jpg',
    category: 1,
    access: 'public',
  },
  {
    name: 'image3.jpg',
    url: 'my url',
    format: 'jpg',
    category: 1,
    access: 'user3',
  },
  {
    name: 'image4.jpg',
    url: 'my url',
    format: 'jpg',
    category: 1,
    access: 'user2',
  },
]

export default function handler(req, res) {
  res.status(200).json(data)
}
