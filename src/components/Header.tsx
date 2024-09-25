import Image from "next/image";
import { logo } from "@/images";
import { Button } from "./ui/button";
import SheetHandler from "./SheetHandler";

export default function Header() {
  return (
    <header className="flex items-center justify-around">
      <Image src={logo} alt="logo" className="w-[10rem] h-[5rem]" />
      <div className="flex justify-around">
        <Button className="hidden lg:flex">Entrar</Button>
        <Button className="bg-gradient-to-r from-[#5D47E9] to-[#C6BDFF] text-white font-bold">
          Cadastre-se agora
        </Button>
        <SheetHandler />
      </div>
    </header>
  );
}
