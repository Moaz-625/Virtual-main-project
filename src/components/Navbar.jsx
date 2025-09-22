import { Menu, X } from "lucide-react";
import { useState } from "react";
import logo from "../assets/logo2.jpg";
import { navItems } from "../constants";

const Navbar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  return (
    <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80">
      <div className="container px-4 mx-auto relative lg:text-sm">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center flex-shrink-0 cursor-pointer">
            <img
              className="h-10 w-10 mr-2 transition-transform duration-300 hover:scale-110"
              src={logo}
              alt="Logo"
            />
            <span className="text-xl tracking-tight font-bold hover:text-teal-400 transition-colors duration-300">
              VirtualR
            </span>
          </div>

          {/* Nav Links (Desktop) */}
          <ul className="hidden lg:flex ml-14 space-x-12 text-lg font-medium">
            {navItems.map((item, index) => (
              <li key={index}>
                <a
                  href={item.href}
                  className="relative text-neutral-300 hover:text-teal-400 transition-colors duration-300 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-teal-400 after:transition-all after:duration-300 hover:after:w-full"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Right Side Buttons */}
          <div className="hidden lg:flex justify-center space-x-6 items-center">
            <a
              href="#"
              className="py-2 px-4 font-medium border border-neutral-500 rounded-md transition duration-300 hover:border-teal-400 hover:text-teal-400 hover:shadow-md hover:shadow-teal-400/30"
            >
              Sign In
            </a>
            <a
              href="#"
              className="bg-gradient-to-r from-teal-400 to-teal-800 py-2 px-4 rounded-md text-white font-medium transition-all duration-300 hover:shadow-lg hover:shadow-teal-500/40 hover:scale-105"
            >
              Create an account
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden md:flex flex-col justify-end">
            <button
              onClick={toggleNavbar}
              className="p-2 rounded-md hover:bg-neutral-800 transition-colors duration-300"
            >
              {mobileDrawerOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Drawer */}
        {mobileDrawerOpen && (
          <div className="fixed right-0 top-0 z-20 bg-neutral-900 w-full h-screen p-12 flex flex-col justify-center items-center lg:hidden animate-slideDown">
            <ul className="space-y-6 mb-8 text-center">
              {navItems.map((item, index) => (
                <li key={index}>
                  <a
                    href={item.href}
                    className="text-neutral-300 hover:text-teal-400 transition-colors duration-300"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="flex flex-col space-y-4 w-full max-w-xs">
              <a
                href="#"
                className="py-2 px-4  border border-neutral-500 rounded-md text-center transition duration-300 hover:border-teal-400 hover:text-teal-400 hover:shadow-md hover:shadow-teal-400/30"
              >
                Sign In
              </a>
              <a
                href="#"
                className="py-2 px-4 rounded-md text-center bg-gradient-to-r from-teal-400 to-teal-800 text-white font-medium transition-all duration-300 hover:shadow-lg hover:shadow-teal-500/40 hover:scale-105"
              >
                Create an account
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
