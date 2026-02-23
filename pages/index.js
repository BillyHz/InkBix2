import Header from '../components/Header'
import Hero from '../components/Hero'
import ServiceCard from '../components/ServiceCard'
import Footer from '../components/Footer'
import Link from 'next/link'
import React from 'react'

export default function Home(){
  const services = [
    { id:1, title:'Camisetas Sublimadas', category:'Textil', description:'Camisetas de alta calidad con diseños vibrantes', image:'/images/IMG_SERVICIO_1.svg' },
    { id:2, title:'Tazas Personalizadas', category:'Cerámica', description:'Tazas duraderas con logos/ilustraciones', image:'/images/IMG_SERVICIO_2.svg' },
    { id:3, title:'Cojines Sublimados', category:'Hogar', description:'Cojines con impresiones nítidas y duraderas', image:'/images/IMG_SERVICIO_3.svg' },
    { id:4, title:'Llaveros Sublimados', category:'Accesorios', description:'Llaveros personalizados para empresas', image:'/images/IMG_SERVICIO_4.svg' },
  ]
  return (
    <div>
      <Header />
      <Hero />
      <section className="max-w-7xl mx-auto px-4 py-12">
        <h2 className="text-3xl md:text-4xl font-heading font-extrabold mb-6" style={{ fontFamily: 'Poppins, sans-serif' }}>Nuestros Servicios</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map(s => (
            <ServiceCard key={s.id} title={s.title} category={s.category} description={s.description} image={s.image} />
          ))}
        </div>
        <div className="flex justify-center mt-8">
          <Link href="/servicios" className="px-6 py-3 rounded-full text-white" style={{ background: 'linear-gradient(90deg, #007BFF, #FF2E63)' }}>Ver catálogo completo</Link>
        </div>
      </section>
      <Footer />
    </div>
  )
}
