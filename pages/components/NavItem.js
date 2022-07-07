import Link from "next/link";
import { useRouter } from 'next/router'

const LEFT = 1;
const RIGHT = 2;

export default function NavItem({ href, rounded = "", children }) {
    let round_label=""
    if(rounded == LEFT ){
      round_label = "rounded-l"
    }
    if(rounded == RIGHT ){
      round_label = "rounded-r"
    }

    return (
      <li className="flex w-20 ">
        <Link href={href}>
            <a className={round_label+" p-2 w-full bg-blue-500 text-center hover:bg-blue-700 "} >
            {children}
            </a>
        </Link>
      </li>
    )
}