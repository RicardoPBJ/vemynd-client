"use client";

import React, { useState } from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuContent,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

function NavMenuHandler() {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
    console.log(clicked);
  };
  return (
    <NavigationMenu>
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
        <NavigationMenuContent>
          <NavigationMenuLink href="/cursos">
            Acesse os Cursos
          </NavigationMenuLink>
          <NavigationMenuLink href="/afiliado">
            Seja um afiliado
          </NavigationMenuLink>
          <NavigationMenuLink href="/produto">
            Crie um produto
          </NavigationMenuLink>
        </NavigationMenuContent>
      </NavigationMenuItem>
    </NavigationMenu>
  );
}

export default NavMenuHandler;
