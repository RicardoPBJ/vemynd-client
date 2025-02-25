"use client";

import React, { useState } from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuContent,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import "../styles/slideDownAnime.css";

function NavMenuHandler() {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
    console.log(clicked);
  };
  return (
    <NavigationMenu className="lg:hidden">
      <NavigationMenuItem className="flex items-center justify-center">
        <NavigationMenuTrigger>
          <div
            className="flex flex-col justify-between w-6 h-[1.2em] cursor-pointer lg:hidden"
            onClick={handleClick}
          >
            <div
              className={`h-1 w-[1.6rem] bg-[#5D47E9] rounded-sm transition-transform duration-300 ${
                clicked ? "transform translate-y-2 rotate-45" : ""
              }`}
            ></div>
            <div
              className={`h-1 w-[1.6rem] bg-[#5D47E9] rounded-sm transition-opacity duration-300 ${
                clicked ? "hidden" : ""
              }`}
            ></div>
            <div
              className={`h-1 w-[1.6rem] bg-[#5D47E9] rounded-sm transition-transform duration-300 ${
                clicked ? "transform -translate-y-2 -rotate-45" : ""
              }`}
            ></div>
          </div>
        </NavigationMenuTrigger>
        <NavigationMenuContent
          className={`bg-white relative h-auto flex flex-col items-center
            ${
              clicked ? "animate-slide-down" : "animate-slide-up"
            } overflow-hidden border-none`}
        >
          <NavigationMenuLink
            href="/cursos"
            className=" text-md p-4 font-semibold border-y rounded-none w-[100vw] text-center"
          >
            Acesse os Cursos
          </NavigationMenuLink>
          <NavigationMenuLink
            href="/afiliado"
            className=" text-md p-4 font-semibold border-b w-[100vw] text-center rounded-none"
          >
            Seja um afiliado
          </NavigationMenuLink>
          <NavigationMenuLink
            href="/produto"
            className=" text-md font-semibold p-4 border-b w-[100vw] text-center rounded-none"
          >
            Crie um produto
          </NavigationMenuLink>
        </NavigationMenuContent>
      </NavigationMenuItem>
    </NavigationMenu>
  );
}

export default NavMenuHandler;
