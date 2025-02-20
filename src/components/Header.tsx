import Image from "next/image";
import { logo1, logo2, logo3 } from "@/images";
import { Button } from "./ui/button";
import SheetHandler from "./SheetHandler";
import NavBar from "./NavBar";
import NavMenuHandler from "./NavMenuHandler";

export default function Header() {
  return (
    <header className="flex items-center justify-evenly py-4 lg:justify-between lg:px-6">
      <div className="flex items-center lg:pl-5">
        <Image src={logo1} alt="logo1" className="lg:w-5" />
        <Image
          src={logo2}
          alt="logo2"
          className="m-[-0.65em] w-10 lg:w-9 h-10 lg:h-9 bg-transparent"
        />
        <Image src={logo3} alt="logo3" className="lg:w-11" />
      </div>
      <div className="flex justify-around items-center space-x-5 ">
        <NavBar />
        <Button className="hidden lg:flex lg:bg-transparent text-[#5D47E9] text-[0.8rem] border-2 border-[#5D47E9] rounded-[0.6rem] w-20 h-[1.75rem] font-open-sans">
          Entrar
        </Button>
        <Button className="h-[1.8rem] lg:h-[1.6rem] w-[11rem] lg:w-[7.5rem] rounded-[2em] lg:rounded-[0.6rem] bg-gradient-to-r from-[#5D47E9] to-[#C6BDFF] text-white text-[0.8rem] lg:text-[0.69rem] font-open-sans">
          Cadastre-se agora
        </Button>
        <NavMenuHandler />
      </div>
    </header>
  );
}
