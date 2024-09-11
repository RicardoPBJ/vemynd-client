import Image from "next/image";
import { logo, IconMenu } from "@/images";
import { Button } from "./ui/button";

export default function Header() {
  return (
    <div className="flex align-items-center justify-around">
      <Image src={logo} alt="logo" className="w-[3rem] h-[2rem]" />
      <Button className="bg-gradient-to-r from-[#5D47E9] to-[#C6BDFF] hover:bg-gradient-to-bl text-white font-bold rounded">
        Cadastre-se agora
      </Button>
      <Image src={IconMenu} alt="iconMenu" />
    </div>
  );
}
