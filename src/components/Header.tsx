import Image from "next/image";
import { logo, IconMenu } from "@/images";
import { Button } from "./ui/button";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet";

export default function Header() {
  return (
    <header className="flex items-center justify-around">
      <Image src={logo} alt="logo" className="w-[10rem] h-[5rem]" />
      <div className="flex justify-around">
        <Button className="hidden lg:flex">Entrar</Button>
        <Button className="bg-gradient-to-r from-[#5D47E9] to-[#C6BDFF] text-white font-bold">
          Cadastre-se agora
        </Button>
        <Sheet>
          <SheetTrigger>
            <Image src={IconMenu} alt="iconMenu" className="lg:hidden" />
          </SheetTrigger>
          <SheetContent className="lg:hidden">
            <SheetHeader>
              <SheetTitle>Are you absolutely sure?</SheetTitle>
              <SheetDescription>
                This action cannot be undone. This will permanently delete your
                account and remove your data from our servers.
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
