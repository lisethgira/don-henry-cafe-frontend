import { useContext, useRef } from "react";

//Context
import { AuthContext } from "../common/middlewares/Auth";

import { Link, NavLink } from "react-router-dom";

//imagenes
import logo from "../assets/donHenryCafe.png";
import { CartContext } from "../contexts/ShoppinCartContext";

const Navbar = () => {
  //===============================================================================================================================================
  //========================================== Context ============================================================================================
  //===============================================================================================================================================
  const { token, cerrarSesion } = useContext(AuthContext);
  const [cart] = useContext(CartContext);

  //===============================================================================================================================================
  //========================================== Referencias ========================================================================================
  //===============================================================================================================================================
  const cerrarSesionRef = useRef(cerrarSesion);

  const quantity = cart.reduce((acc, currElem) => acc + currElem.quantity, 0);
  console.log(cart);
  const subTotal = cart.reduce(
    (acc, currElem) => acc + parseInt(currElem.price) * currElem.quantity,
    0
  );

  return (
    <>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
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
            <nav
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive ? "font-bold text-[#6A4029]" : ""
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/productos"
                  className={({ isActive }) =>
                    isActive ? "font-bold text-[#6A4029]" : ""
                  }
                >
                  Productos
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/eventos"
                  className={({ isActive }) =>
                    isActive ? "font-bold text-[#6A4029]" : ""
                  }
                >
                  Eventos
                </NavLink>
              </li>
            </nav>
          </div>
          <Link to="/" className="btn btn-ghost">
            <img src={logo} alt="logo" width="30px" />
            <p className="hidden md:flex text-xl">Don Henry Café</p>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <nav className="menu menu-horizontal px-1">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "font-bold text-[#6A4029]" : ""
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/productos"
                className={({ isActive }) =>
                  isActive ? "font-bold text-[#6A4029]" : ""
                }
              >
                Productos
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/eventos"
                className={({ isActive }) =>
                  isActive ? "font-bold text-[#6A4029]" : ""
                }
              >
                Eventos
              </NavLink>
            </li>
          </nav>
        </div>
        <div className="navbar-end gap-2">
          {!token ? (
            <div className="flex gap-2">
              <Link to="/login" className="btn bg-secondary text-tertiary">
                Iniciar Sesión
              </Link>
              <Link to="/register" className="btn bg-secondary text-tertiary">
                Registrarse
              </Link>
            </div>
          ) : null}

          <div className="flex-none">
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle">
                <div className="indicator">
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
                      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                  <span className="badge badge-sm indicator-item">
                    {quantity}
                  </span>
                </div>
              </label>
              <div
                tabIndex={0}
                className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow"
              >
                <div className="card-body">
                  <span className="font-bold text-lg"> {quantity} Items</span>
                  <span className="text-info">Subtotal: ${subTotal} </span>
                  <div className="card-actions">
                    <Link to="/cart" className="btn btn-primary btn-block">
                      Ver Carrito
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            {token ? (
              <div className="dropdown dropdown-end">
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                  <div className="w-10 rounded-full">
                    <img
                      alt="Tailwind CSS Navbar component"
                      src="https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/44/44dc4bee8bf175f573c7d417afc31540ac40f518_full.jpg"
                    />
                  </div>
                </label>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
                >
                  <li>
                    <a className="justify-between">Perfil</a>
                  </li>
                  <li>
                    <a>Configuración</a>
                  </li>
                  <li onClick={cerrarSesionRef}>
                    <a>Cerrar Sesión</a>
                  </li>
                </ul>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
