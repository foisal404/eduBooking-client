import { Link } from "react-router-dom";
const NavHead = () => {
  const NavIiems = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/college">Colleges</Link>
      </li>
      <li>
        <Link to="/addmission">Admission</Link>
      </li>
      <li>
        <Link to="/">My College</Link>
      </li>
    </>
  );

  return (
    <div className="navbar fixed bg-slate-500 bg-opacity-10 z-10 top-0 ">
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
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {NavIiems}
          </ul>
        </div>
        <img src="/logo.png" className="w-10 h-10 ms-3" alt="" />
        <a className="btn btn-ghost normal-case text-xl">Edu-Booking</a>

      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{NavIiems}</ul>
      </div>
      <div className="navbar-end">
        <a className="btn">Login</a>
      </div>
    </div>
  );
};

export default NavHead;
