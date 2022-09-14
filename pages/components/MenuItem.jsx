import Link from 'next/link'

const LEFT = 1
const RIGHT = 2

export default function MenuItem({ rounded = 0, children }) {
  let round_label = ''
  if (rounded == LEFT) {
    round_label = 'rounded-tl '
  }
  if (rounded == RIGHT) {
    round_label = 'rounded-tr'
  }

  return (
    <li>
      <a
        className={
          round_label + ' p-2 bg-blue-500 text-center hover:bg-blue-700 '
        }
      >
        {children}
      </a>
    </li>
  )
}
