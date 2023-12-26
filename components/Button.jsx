"use client";

import { Link, animateScroll as scroll } from "react-scroll";

export default function CustomButton({ text, link, color, type }) {
  const button = (
    <button
      type={type}
      className="rounded-md bg-primary px-3 w-full py-2 text-sm font-semibold text-white shadow-sm hover:bg-pink-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary_dark"
    >
      {text}
    </button>
  );

  return link ? (
    <Link smooth={true} duration={1000} to={link}>
      {button}
    </Link>
  ) : (
    button
  );
}
