import React from "react";

import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";

import placeholderProfile from "../assets/images/placeholder-profile.jpg";
import { contextAct } from "../redux/slices/context.slice";
import { getUserData } from "../utils/authUtils";

function Sidebar({ onClose }) {
  const profile = useSelector((state) => state.profile);
  const userInfo = useSelector((state) => state.userInfo);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <>
      <div className="h-full">
        <div className="p-5 flex flex-col h-full">
          <div
            className={`flex flex-row gap-x-2 items-center mb-8 relative ${
              userInfo.token && "cursor-pointer"
            }`}
            onClick={() => userInfo.token && navigate("/profile")}
          >
            <div className="avatar">
              <div className="w-12 rounded-xl border">
                <img
                  src={
                    getUserData()
                      ? getUserData().photo
                      : placeholderProfile
                  }
                />
              </div>
            </div>
            <div className="flex-col">
              {getUserData() ? (
                <>
                  <p className="font-medium">{getUserData().email}</p>
                  <p className="text-sm">{getUserData().email}</p>
                </>
              ) : (
                <>
                  <p className="font-medium">Invitado </p>
                  <p className="text-sm ">
                    {/* <Link to={"/auth/login"} className="text-yellow-600">
                      Login
                    </Link>{" "}
                    or Sign Up */}
                  </p>
                </>
              )}
            </div>
            {/* <a className="mr-auto text-1xl font-bold leading-none" href="#">
              <img
                src={logo}
                alt="icon-coffee"
                width="50px"
                className="align-middle"
              />
            </a> */}
            <button
              className="navbar-close absolute right-0 top-0"
              onClick={(e) => {
                e.stopPropagation();
                onClose();
              }}
            >
              <svg
                className="h-6 w-6 text-gray-400 cursor-pointer hover:text-gray-500"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </button>
          </div>
          <div>
            <ul>
              <li className="mb-1">
                <NavLink
                  className="block p-4 text-sm font-semibold text-gray-400 hover:bg-tertiary/40 hover:text-tertiary rounded"
                  to="/"
                >
                  Inicio
                </NavLink>
              </li>
              <li className="mb-1">
                <NavLink
                  className="block p-4 text-sm font-semibold text-gray-400 hover:bg-tertiary/40 hover:text-tertiary rounded"
                  to="/products"
                >
                  Productos
                </NavLink>
              </li>
              <li className="mb-1">
                <NavLink
                  className="block p-4 text-sm font-semibold text-gray-400 hover:bg-tertiary/40 hover:text-tertiary rounded"
                  to="/cart"
                >
                  tu pedido
                </NavLink>
              </li>
              <li className="mb-1">
                <NavLink
                  className="block p-4 text-sm font-semibold text-gray-400 hover:bg-tertiary/40 hover:text-tertiary rounded"
                  to="/history"
                >
                  
                </NavLink>
              </li>
              {Number(userInfo.role) > 1 && (
                <>
                  <li className="mb-1">
                    <NavLink
                      className="block p-4 text-sm font-semibold text-gray-400 hover:bg-tertiary/40 hover:text-tertiary rounded"
                      to="/admin"
                    >
                      Panel de administración
                    </NavLink>
                  </li>
                  <li className="mb-1">
                    <NavLink
                      className="block p-4 text-sm font-semibold text-gray-400 hover:bg-tertiary/40 hover:text-tertiary rounded"
                      to="/manage-order"
                    >
                      Gestionar pedido
                    </NavLink>
                  </li>
                </>
              )}
            </ul>
          </div>
          <div className="mt-auto">
            {getUserData() ? (
              <button
                onClick={() => dispatch(contextAct.openLogout())}
                className="block p-4 text-sm font-semibold text-gray-400 hover:bg-tertiary/40 hover:text-tertiary rounded"
                to="/history"
              >
               Cerrar sesión
              </button>
            ) : (
              <div className="pt-6">
                <NavLink
                  className="block px-4 py-3 mb-3 leading-loose text-xs text-center font-semibold bg-gray-50 hover:bg-gray-100 rounded-xl shadow-md"
                  to="/auth/login"
                >
                  Inicio de Sesion
                </NavLink>
                <NavLink
                  className="block px-4 py-3 mb-2 leading-loose text-xs text-center font-semibold bg-secondary hover:bg-secondary-focus  rounded-xl shadow-md"
                  to="/auth/register"
                >
                  Inscribirse
                </NavLink>
              </div>
            )}
            <p className="my-4 text-xs text-center text-gray-400">
              <span>HenryCafe© 2023</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
