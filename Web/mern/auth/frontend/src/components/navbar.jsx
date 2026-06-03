import { Link } from "react-router-dom";


export function Navbar()
{
    return(
        <nav className="bg-gray-900 text-white px-6 py-4">
            <div className="flex items-center justify-between">
                <h1 className="text-2xl font-bold">My APP</h1>
                <ul className="flex gap-6 items-center">
                    <li className="hover:text-blue-400 transition">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="hover:text-blue-400 transition">
                        <Link to="/login" >Login</Link>
                    </li>
                    <li className="hover:text-blue-400 transition">
                        <Link to="/register">Register</Link>
                    </li>

                    <li className="hover:text-blue-400 transition">
                        <Link to="/logout">Logout</Link>
                    </li>
                </ul>

            </div>
        </nav>
    );
}