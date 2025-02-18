import Image from "next/image";
import Link from "next/link";
import { homeText } from "@/images";
import RegisterCard from "@/components/RegisterCard";

export default function Home() {
  return (
    <div className="bg-[#F6F6F6] min-h-[100vh] lg:flex lg:justify-between lg:px-[4rem]">
      <section className="justify-center align-center lg:items-start lg:mt-[6.5rem]">
        <div className="px-8 lg:px-0">
          <Image
            src={homeText}
            alt="home-text"
            className="w-[26rem] pt-[3.8rem] lg:pt-0 pb-[1rem] lg:w-[19rem] "
          />
          <p className="text-[#5A5F64] text-left lg:text-[0.6rem] lg:w-[17rem] lg:font-medium">
            Seu negócio digital começa aqui. Transforme ideias em vendas,
            conecte-se com clientes e cresça sem limites.
          </p>
        </div>
        <div className="flex justify-center lg:justify-start items-center p-9 lg:p-0 lg:pt-5">
          <Link
            href={"/"}
            className="w-[14rem] h-[3.5rem] bg-gradient-to-r from-[#5D47E9] to-[#C6BDFF] text-white text-[1.5rem] rounded-[0.9rem] flex items-center justify-center font-light
            lg:w-[7rem] lg:h-[1.7rem] lg:text-[0.8rem] lg:rounded-[0.6rem]"
          >
            Crie um produto
          </Link>
        </div>
      </section>
      <RegisterCard />
    </div>
  );
}
