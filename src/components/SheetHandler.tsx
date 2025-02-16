"use client"

import React, { useState } from "react";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetClose
} from "@/components/ui/sheet";
import { Cross2Icon } from "@radix-ui/react-icons"

function SheetHandler() {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
    console.log(clicked);
  };
  return (
    <Sheet>
      <SheetTrigger>
        <div className="flex flex-col justify-between w-6 h-[1.2em] cursor-pointer lg:hidden" onClick={handleClick}>
          <div className={`h-1 w-[1.6rem] bg-[#5D47E9] rounded-sm transition-transform duration-300 ${clicked ? "transform translate-y-2 rotate-45" : ""}`}></div>
          <div className={`h-1 w-[1.6rem] bg-[#5D47E9] rounded-sm transition-opacity duration-300 ${clicked ? "hidden" : ""}`}></div>
          <div className={`h-1 w-[1.6rem] bg-[#5D47E9] rounded-sm transition-transform duration-300 ${clicked ? "transform -translate-y-2 -rotate-45" : ""}`}></div>
        </div>
      </SheetTrigger>
      <SheetContent className="bg-transparent">
        <SheetHeader>
          <SheetTitle>Vemynd Sheet</SheetTitle>
          <SheetDescription>Vemynd</SheetDescription>
        </SheetHeader>
          <SheetClose onClick={handleClick} className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary">
            <Cross2Icon className="h-4 w-4" />
            <span className="sr-only">Close</span>
          </SheetClose>
      </SheetContent>
    </Sheet>
  );
}

export default SheetHandler;
