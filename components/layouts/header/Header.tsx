"use client";

import { Logo, Menu } from "@/components";
import { useEffect, useState } from "react";
import Link from "next/link";
import cx from "classnames";
import { useWindowScreenOverSize } from "@/hooks/useWindowSize";
import headerData from "@/data/header.json";

export const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu((prev) => !prev);
  };

  const size = useWindowScreenOverSize();
  useEffect(() => {
    if (size.width > 760) {
      setShowMenu(false);
    }
  }, [size.width]);

  return (
    <header className="fixed sm:border-b border-b-primary-100  bg-secondary-950 w-full py-6">
      <div className="container flex justify-between">
        <div className="flex items-center gap-10">
          <Link href="/" className="z-10">
            <Logo />
          </Link>
          <nav
            className={cx(
              "flex gap-8 list-none bg-secondary-950 absolute sm:translate-y-0 sm:relative sm:h-fit sm:w-fit h-screen right-0 w-screen top-0 text-secondary-50  flex-col items-center justify-center sm:flex-row duration-300",
              showMenu === true ? "translate-y-0" : "-translate-y-full"
            )}
          >
            {headerData.header.map((navItem, index) => {
              return (
                <li key={index}>
                  <Link className="capitalize" href={navItem.href}>
                    {navItem.label}
                  </Link>
                </li>
              );
            })}
          </nav>
        </div>

        <div className="flex z-10">
          <button
            onClick={toggleMenu}
            className="p-3 flex sm:hidden  items-center justify-center border rounded-full text-secondary-50"
          >
            <Menu />
          </button>
          <button className="border py-3 px-5 rounded-full text-secondary-50 hover:bg-primary-300 hover:text-textColor-black  duration-300">
            Get in touch
          </button>
        </div>
      </div>
    </header>
  );
};
