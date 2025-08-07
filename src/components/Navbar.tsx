import { Link } from "react-router-dom"
import { NavbarData } from "./NavbarData"

const Navbar = () => {
  return (
    <div className="twflex bg-black/40 w-screen h-20 gap-4 text-slate-100">
        {NavbarData.map((data)=> (
            <Link to={data.link} key={data.id}>{data.name}</Link>
        ))}
    </div>
  )
}

export default Navbar