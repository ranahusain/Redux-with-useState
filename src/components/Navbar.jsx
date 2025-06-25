import { NavLink } from "react-router-dom";
const Navbar = () => {
  const linkclass = ({ isActive }) =>
    isActive
      ? " text-white bg-red-500 hover:bg-red-400 hover:text-white p-3 px-6 pt-2 rounded-full baseline"
      : " text-black hover:bg-red-500 hover:text-white p-3 px-6 pt-2 rounded-full baseline ";

  return (
    <>
      {/* <!-- NavBar --> */}
      <nav className="relative container mx-auto p-6">
        {/* <!-- flex container --> */}
        <div className="flex items-center justify-between">
          {/* <!-- logo --> */}
          <div>
            <NavLink to="/">
              <img src="./images/logo.svg" alt="" />
            </NavLink>
          </div>
          {/* <!-- menu items --> */}
          <div className="hidden space-x-6 md:flex">
            <NavLink to="Pricing" className={linkclass}>
              Pricing
            </NavLink>
            <NavLink to="Product" className={linkclass}>
              Product
            </NavLink>
            <NavLink to="AboutUs" className={linkclass}>
              About Us
            </NavLink>
            <NavLink to="Careers" className={linkclass}>
              Careers
            </NavLink>
            <NavLink to="Community" className={linkclass}>
              Community
            </NavLink>
          </div>
          {/* <!-- button  --> */}
          <NavLink
            to="#"
            className="p-3 px-6 pt-2 text-white bg-red-500 rounded-full baseline hover:bg-red-400 hidden md:block"
          >
            Get Started
          </NavLink>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
