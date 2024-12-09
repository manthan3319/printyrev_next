"use client";
import Image from "next/image";
import React, { useState } from "react";
import Link from "next/link";
import { NavbarMenu } from "../Data/page";
import { blogo, usericon, carticon } from "../../../public/Images/Images";

const UserNavbar = () => {
  const [openDropdown, setOpenDropdown] = useState(null);

  const handleDropdownToggle = (id) => {
    setOpenDropdown(openDropdown === id ? null : id);
  };

  return (
    <nav className="text-black">
      <div className="lg:max-w-[1440px] m-auto px-[20px] flex items-center justify-between py-4">
        <div>
          <Image src={blogo} alt="Printy Rev Logo" className="w-[200px]" crossOrigin="anonymous" />
        </div>

        <div className="flex flex-row gap-[25px] items-center">
          <ul className="flex space-x-8">
            {NavbarMenu.map((item) => (
              <li
                key={item.id}
                className="relative group text-[18px] font-onest"
                onMouseEnter={() => handleDropdownToggle(item.id)}
                onMouseLeave={() => handleDropdownToggle(null)}
              >
                <Link
                  href={item.link || "#"}
                  className="hover:text-gray font-semibold"
                >
                  {item.name}
                </Link>

                {item.subcategories && (
                  <ul
                    className={`absolute z-[99] left-0 top-[100%] mt-2 bg-gray-800 text-sm text-white rounded-md font-onest shadow-lg overflow-hidden transform transition-all duration-300 ${
                      openDropdown === item.id
                        ? "scale-100 opacity-100"
                        : "scale-95 opacity-0"
                    }`}
                  >
                    {item.subcategories.map((sub) => (
                      <li
                        key={sub.id}
                        className="hover:bg-darkGray text-[18px] bg-black w-[200px] px-4 py-2"
                      >
                        <Link href={sub.link}>{sub.name}</Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>

          <div className="flex items-center space-x-4">
            <Link href="/">
              <Image src={usericon} alt="User" className="w-[30px]" crossOrigin="anonymous" />
            </Link>
            <Link href="/">
              <Image src={carticon} alt="Cart" className="w-[30px]" crossOrigin="anonymous" />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default UserNavbar;
