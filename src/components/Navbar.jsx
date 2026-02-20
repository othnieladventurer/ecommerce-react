import { Link } from "react-router-dom";

export default function Navbar() {
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
            <Link className="nav-link" to="/auth">Auth</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/checkout">Cart</Link>
          </li>
        </ul>

        {/* Right: Buttons */}
        <div>
          <Link to="/auth" className="btn btn-secondary me-2  rounded-0">
            Login
          </Link>
          <Link to="/auth" className="btn btn-primary rounded-0">
            Sign Up
          </Link>
        </div>

      </div>
    </nav>
  );
}