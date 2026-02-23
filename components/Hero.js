import Link from 'next/link'

export default function Hero(){
  return (
    <section className="relative bg-gradient-to-br from-white to-gray-50 pt-8 pb-16 md:pb-24">
      <div className="absolute -top-16 right-0 w-1/2 h-1/2 opacity-20" aria-hidden="true">
        <img src="/images/IMG_HERO.svg" alt="Hero" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
      </div>
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 items-center gap-8 z-10 relative">
        <div>
          <span className="inline-block mb-2 px-3 py-1 rounded-full text-xs font-semibold" style={{ background: '#E5F2FF', color: '#1D4ED8' }}>Sublimación y Personalización</span>
          <h1 className="text-4xl md:text-5xl font-heading font-extrabold mt-2 mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
            InkBix: Sublimación que toma vida
          </h1>
          <p className="text-lg text-gray-700 mb-6">Impresiones vibrantes, duraderas y personalizadas para camisetas, tazas, cojines y más.</p>
          <ul className="space-y-2 text-sm text-gray-700 mb-6">
            <li>• Sublimación textil de alta resistencia</li>
            <li>• Cerámica con colores vivos</li>
            <li>• Personalización para eventos y empresas</li>
          </ul>
          <div className="flex flex-wrap gap-4">
            <Link href="/servicios" passHref>
              <a className="px-5 py-3 rounded-full text-white" style={{ background: 'linear-gradient(90deg, #007BFF, #FF2E63, #FFC107)' }}>Ver catálogo</a>
            </Link>
            <Link href="/contacto" passHref>
              <a className="px-5 py-3 rounded-full text-white" style={{ background: 'linear-gradient(90deg, #FF2E63, #007BFF)' }}>Personaliza ahora</a>
            </Link>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <img src="/images/IMG_AMBIENTE.svg" alt="Ambiente de taller" className="w-full max-w-md rounded-xl shadow-xl" style={{ aspectRatio: '1/1', objectFit: 'cover' }} />
        </div>
      </div>
      <div className="mx-auto w-12 h-12 mt-6 rounded-full border-2 border-primary animate-bounce mx-4 md:mx-0"></div>
    </section>
  )
}
