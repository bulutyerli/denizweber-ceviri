"use client";

import { BiLogoInstagram, BiLogoGmail, BiLogoLinkedin } from "react-icons/bi";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const navigation = [
  {
    name: "Instagram",
    href: "https://www.instagram.com/denizweber_cevirmen/",
    icon: <BiLogoInstagram size={32} />,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/weberdeniz/",
    icon: <BiLogoLinkedin size={32} />,
  },
  {
    name: "Gmail",
    href: "mailTo: bilgi@denizweber.com",
    icon: <BiLogoGmail size={32} />,
  },
];

const date = new Date();
const year = date.getFullYear();

export default function Footer() {
  const pathName = usePathname();
  const [isHomePage, setIsHomePage] = useState(true);

  useEffect(() => {
    if (pathName === "/") {
      setIsHomePage(true);
    } else {
      setIsHomePage(false);
    }
  }, [pathName]);

  return (
    <footer
      className={` ${
        !isHomePage ? "block bg-white" : "absolute inset-x-0 bottom-0 z-50"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 py-5 md:flex md:items-center md:justify-between lg:px-8">
        <div className="flex justify-center space-x-6 md:order-2">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              target="_blank"
              rel="noreferrer"
              className={`${
                isHomePage
                  ? "text-white hover:text-gray-300"
                  : "text-gray-400 hover:text-gray-500"
              }`}
            >
              <span className="sr-only">{item.name}</span>
              {item.icon}
            </Link>
          ))}
        </div>
        <div className="mt-8 md:order-1 md:mt-0">
          <p className={`${isHomePage ? "text-white" : "text-gray-400"}`}>
            &copy; {year} Deniz Weber, Tüm hakları saklıdır.
          </p>
        </div>
      </div>
    </footer>
  );
}
