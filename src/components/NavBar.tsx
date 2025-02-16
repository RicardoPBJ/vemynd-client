import React from 'react';
import Link from 'next/link';

function NavBar() {
  return (
    <nav>
      <ul className="hidden lg:flex">
        <li>
          <Link href="/">
            Acesse os cursos
          </Link>
        </li>
        <li>
          <Link href="/about">
            Seja um afiliado
          </Link>
        </li>
        <li>
          <Link href="/contact">
            Crie um produto
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;