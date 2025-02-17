import Image from "next/image";
import { homeText } from "@/images";

export default function Home() {
  return (
    <div className="bg-[#F6F6F6]">
      <section className="justify-center ">
        <div>
          <Image
            src={homeText}
            alt="home-text"
            className="w-[27rem] p-6 pt-8 lg:w-90 "
          />
          <p className="text-[#5A5F64] px-6 font-open-sans text-left">
            Seu negócio digital começa aqui. Transforme ideias em vendas,
            conecte-se com clientes e cresça sem limites.
          </p>
        </div>
        <button type="button">Crie um produto</button>
      </section>
      <div>registrar</div>
    </div>
  );
}
