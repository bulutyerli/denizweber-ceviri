"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";

export default function Error({ error, reset }) {
  return (
    <html>
      <body>
        <main className="relative isolate min-h-full">
          <div className="mx-auto max-w-7xl px-6 py-32 text-center sm:py-40 lg:px-8">
            <p className="text-base font-semibold leading-8 text-white">404</p>
            <h1 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-5xl">
              Error
            </h1>
            <p className="mt-4 text-base text-white/70 sm:mt-6">
              Sorry, something went wrong.
            </p>
            <div className="mt-10 flex justify-center">
              <Link
                href="/"
                className="text-sm font-semibold leading-7 text-white"
              >
                <span aria-hidden="true">&larr;</span> Back to home
              </Link>
            </div>
          </div>
        </main>
      </body>
    </html>
  );
}
