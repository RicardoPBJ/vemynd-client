import React from 'react';
import Link from 'next/link';

function NavBar() {
  return (
    <nav>
      <ul className="hidden justify-evenly lg:flex space-x-5 ">
        <li>
          <Link href="/" className="text-[0.7rem] text-[#5A5F64]">
            Acesse os cursos
          </Link>
        </li>
        <li>
          <Link href="/about" className="text-[0.7rem] text-[#5A5F64]">
            Seja um afiliado
          </Link>
        </li>
        <li>
          <Link href="/contact" className="text-[0.7rem] text-[#5A5F64]">
            Crie um produto
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;