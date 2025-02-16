"use client";

import { useState } from "react";
import EmblaCarousel from "./EmblaCarousel";
import SelectType from "./SelectType";

function TrendingNow() {
  const [contentType, setContentType] = useState("movie");

  return (
    <div className="flex flex-col gap-6 bg-black sm:px-[148px] text-white">
      <div className="flex flex-col gap-6 text-white">
        <h1 className="text-3xl text-white">Trending now</h1>
        <SelectType conentType={contentType} setContentType={setContentType} />
      </div>
      <div>
        <EmblaCarousel contentType={contentType} />
      </div>
    </div>
  );
}

export default TrendingNow;
