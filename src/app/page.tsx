import Image from "next/image";
import Link from "next/link";
import { homeText } from "@/images";

export default function Home() {
  return (
    <div className="bg-[#F6F6F6]">
      <section className="justify-center align-center">
        <div>
          <Image
            src={homeText}
            alt="home-text"
            className="w-[27rem] px-6 pt-[3.8rem] pb-[1rem] lg:w-90"
          />
          <p className="text-[#5A5F64] px-6 text-left ">
            Seu negócio digital começa aqui. Transforme ideias em vendas,
            conecte-se com clientes e cresça sem limites.
          </p>
        </div>
        <div className="flex justify-center items-center p-9">
          <Link
            href={"/"}
            className="w-[14rem] h-[3.5rem] bg-gradient-to-r from-[#5D47E9] to-[#C6BDFF] text-white text-[1.5rem] rounded-[0.9rem] flex items-center justify-center font-light"
          >
            Crie um produto
          </Link>
        </div>
      </section>
      <div>registrar</div>
    </div>
  );
}
