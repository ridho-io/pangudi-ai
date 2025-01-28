import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
// import Particles from "@/components/ui/Particles";

export default function Page() {
  return (
    <div className="flex flex-1 flex-col gap-4 p-4 mb-20 w-full max-w-3xl z-10">
        {/* <Particles /> */}
      <div>
        {Array.from({ length: 24 }).map((_, index) => (
          <div
            key={index}
            className="aspect-video mb-3 h-12 w-full rounded-lg bg-zinc-800 z-50"
          />
        ))}
      </div>
    </div>
  );
}
