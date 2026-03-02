"use client";
import React from "react";
import { Button } from "@/components/ui/moving-border";

export default function MovingBorderDemo() {
  return (
    <div>
      <Button
        borderRadius="1.75rem"
        containerClassName="!h-auto !w-auto !min-w-0"
        className="px-6 py-3 text-sm font-medium bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800"
      >
        Borders are cool
      </Button>
    </div>
  );
}
