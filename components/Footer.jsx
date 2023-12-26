"use client";

import { BiLogoInstagram } from "react-icons/bi";
import { BiLogoGmail } from "react-icons/bi";
import Link from "next/link";

const navigation = [
  {
    name: "Instagram",
    href: "https://www.instagram.com/denizweber_cevirmen/",
    icon: <BiLogoInstagram size={32} />,
  },
  {
    name: "Gmail",
    href: "mailTo: denizweber@gmail.com",
    icon: <BiLogoGmail size={32} />,
  },
];

const date = new Date();
const year = date.getFullYear();

export default function Footer() {
  return (
    <footer className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8">
        <div className="flex justify-center space-x-6 md:order-2">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              target="_blank"
              rel="noreferrer"
              className="text-gray-400 hover:text-gray-500"
            >
              <span className="sr-only">{item.name}</span>
              {item.icon}
            </Link>
          ))}
        </div>
        <div className="mt-8 md:order-1 md:mt-0">
          <p className="text-center text-xs leading-5 text-gray-500">
            &copy; {year} Deniz Weber Çeviri, Tüm hakları saklıdır.
          </p>
        </div>
      </div>
    </footer>
  );
}
