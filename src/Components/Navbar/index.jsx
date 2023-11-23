import { NavLink } from "react-router-dom";
import icon from "../../assets/descarga.jpg"

const Navbar = () => {
    const activeStyle = ' underline underline-offset-4'

    return (
        <nav className="flex justify-between items-center z-10 top-0 w-full py-5 px-8 text-sm font-light bg-cyan-950 text-white">
            <ul className="flex items-center gap-3">
                <li className="font-semibold text-lg gap-3 " >
                    <NavLink to='/'
                        className={({ isActive }) => isActive ? activeStyle : undefined}>
                        Brand
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/'
                        className={({ isActive }) => isActive ? activeStyle : undefined}>
                        Model
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/year'
                        className={({ isActive }) => isActive ? activeStyle : undefined}>
                        Biography
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/artist'
                        className={({ isActive }) => isActive ? activeStyle : undefined}>
                        Price
                    </NavLink>
                </li>
            </ul>
            <div>

                <img className="w-16" src={icon} />
            </div>
        </nav>
    )
}

export default Navbar