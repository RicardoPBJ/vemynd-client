import Image from "next/image";
import { homeText } from "@/images";

export default function Home() {
  return (
    <div className="bg-[#F6F6F6]">
      <section>
        <div>
          <Image src={homeText} alt="home-text" className="lg:w-5" />
          <p>
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
