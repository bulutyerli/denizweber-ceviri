"use client";

import { NextStudio } from "next-sanity/studio";
import config from "@/sanity.config";

export default function Studio() {
  return (
    <div className="z-50 mt-5">
      <NextStudio config={config} />
    </div>
  );
}
