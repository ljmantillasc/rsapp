export default function Menu({ children }) {
  return (
    <div className=" bg-slate-400 ">
      <ul className="flex flex-row ">{children}</ul>
    </div>
  )
}
