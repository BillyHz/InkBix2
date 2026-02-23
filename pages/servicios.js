import Header from '../components/Header'
import ServiceCard from '../components/ServiceCard'
import Footer from '../components/Footer'
import Link from 'next/link'
import React from 'react'

export default function Servicios(){
  const items = [
    { id:1, title:'Camisetas Sublimadas', category:'Textil', description:'Procesos de sublimación textil en prendas, alta durabilidad', image:'/images/IMG_SERVICIO_1.svg' },
    { id:2, title:'Tazas Personalizadas', category:'Cerámica', description:'Tazas con impresión de foto/logo', image:'/images/IMG_SERVICIO_2.svg' },
    { id:3, title:'Cojines Sublimados', category:'Hogar', description:'Cojines decorativos con arte único', image:'/images/IMG_SERVICIO_3.svg' },
    { id:4, title:'Llaveros Sublimados', category:'Accesorios', description:'Llaveros corporativos y regalos', image:'/images/IMG_SERVICIO_4.svg' },
    { id:5, title:'Placas y Metales', category:'Decoración', description:'Sublimación en placas y decorativos', image:'/images/IMG_SERVICIO_5.svg' },
  ]
  return (
    <div>
      <Header />
      <section className="max-w-7xl mx-auto px-4 py-12">
        <h2 className="text-3xl md:text-4xl font-heading font-extrabold mb-6" style={{ fontFamily: 'Poppins, sans-serif' }}>Catálogo de Servicios</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {items.map(it => (
            <ServiceCard key={it.id} title={it.title} category={it.category} description={it.description} image={it.image} />
          ))}
        </div>
      </section>
      <Footer />
    </div>
  )
}
