"use client";

import Loading from "./Loading";

export default function CustomButton({ text, type, loading, disabled }) {
  return (
    <button
      type={type}
      className={`rounded-md bg-gray-500 px-3 w-full py-2 text-sm font-semibold text-white shadow-sm hover:bg-gray-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600 ${
        disabled && "pointer-events-none opacity-50"
      }`}
    >
      <div className="flex gap-1 items-center justify-center">
        {loading ? <Loading /> : text}
      </div>
    </button>
  );
}
