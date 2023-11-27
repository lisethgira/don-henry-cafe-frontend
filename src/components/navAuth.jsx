import { Link, useLocation } from "react-router-dom";

//imagenes
import logo from "../assets/donHenryCafe.png";

const NavAuth = () => {

  const location = useLocation();
  
  const isLoginScreen = location.pathname === '/login';

  return (
    <>
      <div className="flex items-center justify-between bg-base-100 p-4">
        <div className="flex items-center">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
          </div>
          <Link to="/" className="btn btn-ghost">
            <img src={logo} alt="logo" width="30px" />
            <p className="hidden md:flex text-xl ml-2">Don Henry Café</p>
          </Link>
        </div>

        <div className="flex gap-2">
      {isLoginScreen ? (
        <Link to="/register" className="btn bg-secondary text-tertiary">
          Registrarse
        </Link>
      ) : (
        <Link to="/login" className="btn bg-secondary text-tertiary">
          Iniciar Sesión
        </Link>
      )}
    </div>
      </div>
    </>
  );
};

export default NavAuth;
