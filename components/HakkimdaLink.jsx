"use client";

import { Link } from "react-scroll";

export default function HakkimdaLink() {
  return (
    <Link
      to="hakkimda"
      className="text-sm font-semibold leading-6 text-white cursor-pointer"
      smooth={true}
      duration={500}
      offset={-100}
    >
      Hakkımda <span aria-hidden="true">→</span>
    </Link>
  );
}
