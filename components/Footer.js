export default function Footer(){
  return (
    <footer className="bg-gray-900 text-gray-100 pt-12 pb-6 relative">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <div className="text-2xl font-bold" style={{ fontFamily: 'Poppins, sans-serif', color: '#FF2E63' }}>InkBix</div>
          <p className="mt-2 text-sm text-gray-300">Sublimación de alta calidad para camisetas, cerámica, accesorios y más.</p>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Navegación</h4>
          <ul className="text-sm text-gray-300 space-y-1">
            <li><a href="#" className="hover:text-white">Inicio</a></li>
            <li><a href="#" className="hover:text-white">Servicios</a></li>
            <li><a href="#" className="hover:text-white">Contacto</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Horarios</h4>
          <p className="text-sm text-gray-300">Lun-Sáb: 9:00 - 18:00</p>
          <p className="text-sm text-gray-300">Domingos: 10:00 - 14:00</p>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Contacto</h4>
          <p className="text-sm text-gray-300">info@inkbix.com</p>
          <p className="text-sm text-gray-300">+34 600 000 000</p>
        </div>
      </div>
      <div className="border-t border-gray-800 mt-6 pt-4 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} InkBix. Todos los derechos reservados.
      </div>
    </footer>
  )
}
