import { Link } from "react-router-dom";
import { useContext } from "react";
import { useAuth } from "../context/AuthContext";

export default function Navbar() {
  const { user, logout } = useAuth();

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container d-flex justify-content-between align-items-center">

        {/* Left: Brand */}
        <Link className="navbar-brand" to="/">
          ShopHub
        </Link>

        {/* Center: Nav Links */}
        <ul className="navbar-nav mx-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/checkout">
              Cart
            </Link>
          </li>
        </ul>

        {/* Right: Buttons */}
        <div className="d-flex align-items-center">
          {user ? (
            <>
              <span className="me-2">Hello, {user.email}</span>
              <button
                className="btn btn-outline-secondary rounded-0"
                onClick={logout}
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/auth" className="btn btn-secondary me-2 rounded-0">
                Login
              </Link>
              <Link to="/auth" className="btn btn-primary rounded-0">
                Sign Up
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}