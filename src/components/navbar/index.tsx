"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import Logo from "@/assets/images/logo-supremagaming-preto.svg";

interface Page {
  label: string;
  value: string;
}

interface NavbarProps {
  pages: Page[];
}

const Navbar: React.FC<NavbarProps> = ({ pages }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        <div className="flex items-center w-full">
          <Image src={Logo} alt="Logo Suprema" className="h-8 w-auto mr-4" />
          <div className="relative w-full">
            <button
              onClick={toggleDropdown}
              className="text-gray-700 font-semibold py-2 px-4 rounded inline-flex items-center"
            >
              <span className="mr-1">Páginas</span>
              <svg
                className="fill-current h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M0 0h20v20H0z" fill="none" />
                <path d="M10 12l-6-6h12z" />
              </svg>
            </button>
            <ul
              className={`dropdown-menu absolute text-gray-700 pt-1 z-10 ${
                dropdownOpen ? "block" : "hidden"
              }`}
            >
              {pages.map((page) => (
                <li key={page.value}>
                  <Link
                    href={`/${page.value}`}
                    onClick={toggleDropdown}
                    className="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                  >
                    {page.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
