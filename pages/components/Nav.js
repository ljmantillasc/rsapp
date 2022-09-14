export default function Nav({ children }) {
  return (
    <nav className=" w-full ">
      <ul className="flex justify-end pr-3 ">{children}</ul>
    </nav>
  )
}
