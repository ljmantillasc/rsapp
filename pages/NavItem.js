import Link from "next/link";

export default function NavItem({ href, isActive, children }) {
    return (
      <li className="px-3 py-3 my-2  rounded-lg hover:bg-slate-100 hover:text-slate-900 ">
        <Link href={href}>
            <a className={'font-medium align-middle text-slate-700 '} >
            {children}
            </a>
        </Link>
      </li>
    )
}