import React, { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../../auth/authContext";
import { types } from "../../types/types";

export const Navbar = () => {
  const { user, dispatch } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    const action = {
      type: types.logout,
    };

    dispatch(action);

    navigate("/login", {
      replace: true,
    });
  };

  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
      <button
        class="navbar-toggler mb-3 mt-3 ms-3"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarToggler"
        aria-controls="navbarToggler"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <Link className="navbar-brand" to="/">
        <div className="ms-5">Asociaciones</div>
      </Link>

      <div id="navbarToggler" className="collapse navbar-collapse">
        <div className="w-100 navbar-nav mb-2 mb-lg-0 ps-3 pt-1">
          <NavLink
            className={({ isActive }) =>
              `nav-item nav-link ${isActive && "active"}`
            }
            to="/marvel"
          >
            Marvel
          </NavLink>

          <NavLink className="nav-item nav-link" to="/dc">
            DC
          </NavLink>
          <NavLink className="nav-item nav-link" to="/search">
            Search
          </NavLink>
          <div className="w-100 d-flex justify-content-end">
            <span className="nav-item nav-link text-info">{user.name}</span>
            <button
              className="nav-item nav-link btn btn-danger p-2 ms-3 me-3"
              onClick={handleLogout}
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};
