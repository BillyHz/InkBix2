import Link from 'next/link'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'

export default function Header() {
  const [open, setOpen] = useState(false)
  return (
    <header className="bg-white/90 backdrop-blur-md shadow sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" passHref>
          <a className="flex items-center space-x-2">
            <span className="text-2xl font-bold" style={{ fontFamily: 'Poppins, sans-serif', color: '#007BFF' }}>InkBix</span>
          </a>
        </Link>
        <nav className="hidden md:flex space-x-6 items-center">
          <Link href="/" passHref>
            <a className="hover:text-primary">Inicio</a>
          </Link>
          <Link href="/servicios" passHref>
            <a className="hover:text-primary">Servicios</a>
          </Link>
          <Link href="/contacto" passHref>
            <a className="hover:text-primary">Contacto</a>
          </Link>
        </nav>
        <Link href="/contacto" passHref>
          <a className="hidden md:inline-block px-4 py-2 rounded-full text-white" style={{ background: 'linear-gradient(90deg, #007BFF 0%, #FF2E63 60%, #FFC107 100%)' }}>
            Personaliza tu pedido
          </a>
        </Link>
        <button aria-label="menu" className="md:hidden p-2" onClick={() => setOpen(!open)}>
          <FontAwesomeIcon icon={open ? faTimes : faBars} size="lg" />
        </button>
      </div>
        {open && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <Link href="/" passHref><a className="block px-4 py-2">Inicio</a></Link>
          <Link href="/servicios" passHref><a className="block px-4 py-2">Servicios</a></Link>
          <Link href="/contacto" passHref><a className="block px-4 py-2">Contacto</a></Link>
        </div>
      )}
    </header>
  )
}
