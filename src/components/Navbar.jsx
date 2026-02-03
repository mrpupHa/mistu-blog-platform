import { useState } from "react";
import logo from "../assets/images/logo.png";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="relative">
      <nav className="flex items-center justify-between px-[24px] py-[12px] md:pr-[120px] md:pl-[120px] border-b border-brown-300">
        <div>
          <a href="/" className="text-2xl font-bold text-black">
            <img src={logo} alt="hh-logo" className="h-[24px] md:h-[44px]" />
          </a>
        </div>
        <div className="hidden md:gap-[8px] md:flex md:items-center ">
          <a
            href="/login"
            className="pt-[8px] pr-[20px] pb-[8px] pl-[20px] md:pt-[12px] md:pr-[40px] md:pb-[12px] md:pl-[40px] font-medium text-brown-600 border border-brown-400 rounded-full hover:bg-brown-600 hover:text-white transition text-sm md:text-base"
          >
            Log in
          </a>

          <a
            href="/signup"
            className="pt-[8px] pr-[20px] pb-[8px] pl-[20px] md:pt-[12px] md:pr-[40px] md:pb-[12px] md:pl-[40px] font-medium text-white bg-brown-600 border-brown-400 rounded-full hover:opacity-90 transition text-sm md:text-base"
          >
            Sign up
          </a>
        </div>
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-brown-400 hover:text-brown-700 transition p-2 cursor-pointer"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X size={24} strokeWidth={2} />
            ) : (
              <Menu size={24} strokeWidth={2} />
            )}
          </button>
        </div>
      </nav>
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-brown-100 px-[24px] py-[40px] border-b drop-shadow-md z-50">
          <div className="flex flex-col gap-[24px]">
            <a
              href="/login"
              className="w-full px-[40px] py-[12px] font-medium bg-white text-brown-600 border border-brown-400 rounded-full hover:bg-brown-600 hover:text-white transition text-center"
            >
              Log in
            </a>
            <a
              href="/signup"
              className="w-full px-[40px] py-[12px] font-medium text-white bg-brown-600 border-brown-400 rounded-full hover:opacity-90 transition text-center"
            >
              Sign up
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
