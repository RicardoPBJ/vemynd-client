import React from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuContent,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

function NavMenuHandler() {
  return (
    <NavigationMenu>
      <NavigationMenuItem>
        <NavigationMenuTrigger> Menu </NavigationMenuTrigger>
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
