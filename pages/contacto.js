import Header from '../components/Header'
import ContactForm from '../components/ContactForm'
import Footer from '../components/Footer'
import React from 'react'

export default function Contacto(){
  return (
    <div>
      <Header />
      <section className="max-w-7xl mx-auto px-4 py-12 grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-heading font-extrabold mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>Contáctanos</h2>
          <p className="text-gray-700">¿Listo para tu pedido personalizado? Completa el formulario y te contactamos con un presupuesto y tiempos estimados.</p>
        </div>
        <div className="bg-white/80 p-6 rounded-xl shadow-md">
          <ContactForm />
        </div>
      </section>
      <Footer />
    </div>
  )
}
