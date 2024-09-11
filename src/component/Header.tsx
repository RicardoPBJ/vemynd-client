import Image from "next/image";
import { logo } from "@/images";

export default function Header() {
  return (
    <div className="">
      <Image src={logo} alt="svg" className="w-[3rem] h-[2rem]" />
    </div>
  );
}
