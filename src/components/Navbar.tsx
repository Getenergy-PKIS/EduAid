"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import Image from "next/image";

const navItems = [
  { label: "Home", path: "/" },
  { label: "About Us", path: "/about" },
  { label: "Get Involve", path: "/getinvolve" },
  { label: "CSE Partners", path: "/cse-partners" },
  { label: "Diaspora Portal", path: "/diaspora-portal" },
  { label: "News & Events", path: "/news-events" },
  { label: "Contact Us", path: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  // Close mobile menu when pathname changes (page navigation)
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <nav
      className="w-full bg-white fixed top-0 left-0 shadow-sm"
      style={{ zIndex: 1000 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-[72px]">
        <div className="flex justify-between items-center h-[80px] sm:h-[100px]">
          {/* Logo Section */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center" prefetch={true}>
              <Image
                src="/Logo.png"
                alt="Eduaid Africa Logo"
                className="w-[100px] h-[60px] sm:w-[136.27px] sm:h-[81.61px] object-contain"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center justify-center flex-grow px-4">
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                prefetch={true}
                className={`
                  font-['Poppins'] text-xs font-medium leading-4 mx-3
                  ${
                    pathname === item.path ? "text-[#1F892B]" : "text-[#525151]"
                  }
                  hover:text-[#1F892B] transition-colors duration-200
                `}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Desktop Auth Buttons and Flag */}
          <div className="hidden lg:flex items-center space-x-3">
            <Link
              href="/sign-in"
              prefetch={true}
              className="font-['Poppins'] text-xs font-medium text-[#525151] hover:text-[#1F892B] transition-colors duration-200"
            >
              Sign in
            </Link>
            <Link
              href="/become-member"
              prefetch={true}
              className="font-['Poppins'] text-xs font-medium bg-[#F5FBF4] bg-padding text-[#1F892B] px-5 py-4 rounded-[25px] hover:bg-[#1F892B] hover:text-white transition-colors duration-200"
            >
              Become a Member
            </Link>
            <Image
              src="/nigeria-flag.svg"
              alt="Nigeria Flag"
              className="w-6 h-6 ml-4"
            />
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#1F892B]"
          >
            <span className="sr-only">Open menu</span>
            <svg
              className="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>

          {/* Mobile Navigation Menu */}
          {isOpen && (
            <div className="fixed top-[80px] sm:top-[100px] left-0 w-full bg-white shadow-lg lg:hidden z-50">
              <div className="px-4 pt-2 pb-3 space-y-2 max-h-[calc(100vh-100px)] overflow-y-auto">
                {navItems.map((item) => (
                  <Link
                    key={item.path}
                    href={item.path}
                    prefetch={true}
                    className={`
                      block px-3 py-2 rounded-md text-xs font-['Poppins']
                      ${
                        pathname === item.path
                          ? "text-[#1F892B] bg-gray-50"
                          : "text-[#525151]"
                      }
                      hover:text-[#1F892B] hover:bg-gray-50 transition-colors duration-200
                    `}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
                <div className="px-3 py-3 space-y-2">
                  <div className="flex justify-center py-2">
                    <Image
                      src="/nigeria-flag.svg"
                      alt="Nigeria Flag"
                      className="w-6 h-6"
                    />
                  </div>
                  <Link
                    href="/sign-in"
                    prefetch={true}
                    className="block w-full text-center font-['Poppins'] text-xs text-[#525151] hover:text-[#1F892B] transition-colors duration-200 py-2"
                    onClick={() => setIsOpen(false)}
                  >
                    Sign in
                  </Link>
                  <Link
                    href="/become-member"
                    prefetch={true}
                    className="block w-full text-center font-['Poppins'] text-xs font-medium bg-[#1F892B] text-white px-4 py-2 rounded-[4px] hover:bg-[#176F22] transition-colors duration-200"
                    onClick={() => setIsOpen(false)}
                  >
                    Become a Member
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
