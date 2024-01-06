"use client";

import Loading from "./Loading";

export default function CustomButton({ text, type, loading, disabled }) {
  return (
    <button
      type={type}
      className={`rounded-md bg-primary px-3 w-full py-2 text-sm font-semibold text-gray-700 shadow-sm hover:bg-primary_dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary_dark ${
        disabled && "pointer-events-none opacity-50"
      }`}
    >
      <div className="flex gap-1 items-center justify-center">
        {loading ? <Loading /> : text}
      </div>
    </button>
  );
}
