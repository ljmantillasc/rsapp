export default function Nav({ children }) {
    return (
      <nav >
        <ul className="flex hover:flex-row justify-center mx-2">
          {children}
        </ul>
      </nav>
    )
}