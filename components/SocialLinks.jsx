import Link from "next/link";
import { BiLogoInstagram } from "react-icons/bi";
import { BiLogoGmail } from "react-icons/bi";

export default function SocialLinks() {
  return (
    <section className="flex flex-col gap-2">
      <Link
        href="https://www.instagram.com/denizweber_cevirmen/"
        target="_blank"
        rel="noreferrer"
        className="flex items-center justify-between gap-5 text-2xl text-gray-600 hover:text-gray-500 cursor-pointer group"
      >
        <BiLogoInstagram />
        <span className="sr-only">{"deniz weber çeviri instagram"}</span>
        <p className="group-hover:underline">@denizweber_cevirmen</p>
      </Link>

      <Link
        href="mailTo:weber.dnz@gmail.com"
        target="_blank"
        rel="noreferrer"
        className="flex items-center justify-between gap-5 text-2xl text-gray-600 hover:text-gray-700 cursor-pointer group"
      >
        <BiLogoGmail />
        <p className="group-hover:underline">weber.dnz@gmail.com</p>
        <span className="sr-only">{"deniz weber çeviri email address"}</span>
      </Link>
    </section>
  );
}
