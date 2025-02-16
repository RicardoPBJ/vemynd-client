import Image from "next/image";
import { logo1, logo2, logo3 } from "@/images";
import { Button } from "./ui/button";
import SheetHandler from "./SheetHandler";
import NavBar from "./NavBar";

export default function Header() {
  return (
    <header className="flex items-center justify-around  p-2 pt-6">
      <div className="flex items-center justify-around">
        <Image src={logo1} alt="logo1" className="" />
        <Image src={logo2} alt="logo2" className="m-[-0.7em] w-10 h-10 bg-transparent" />
        <Image src={logo3} alt="logo3" className="" />
      </div>
      <div className="flex justify-around items-center space-x-5 ">
        <NavBar />
        <Button className="hidden lg:flex">Entrar</Button>
        <Button className="h-[1.8rem] w-[12rem] rounded-[2em] bg-gradient-to-r from-[#5D47E9] to-[#C6BDFF] text-white font-normal italic text-[0.9rem] font-open-sans">
          Cadastre-se agora
        </Button>
        <SheetHandler />
      </div>
    </header>
  );
}
