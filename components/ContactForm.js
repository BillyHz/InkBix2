import { useState } from 'react'

export default function ContactForm(){
  const [form, setForm] = useState({ name:'', email:'', message:'' })
  const [errors, setErrors] = useState({})
  const [submitting, setSubmitting] = useState(false)
  const [sent, setSent] = useState(false)

  const onChange = (e) => {
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: value }))
  }

  const validate = () => {
    const e = {}
    if(!form.name) e.name = 'Nombre es requerido'
    if(!form.email) e.email = 'Email es requerido'
    else if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Email no es válido'
    if(!form.message) e.message = 'Mensaje es requerido'
    setErrors(e)
    return Object.keys(e).length === 0
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    if(!validate()) return
    setSubmitting(true)
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      })
      if(res.ok){
        setSent(true)
        setForm({ name:'', email:'', message:'' })
      }
    } catch(err) {
      // ignore for demo
    } finally {
      setSubmitting(false)
    }
  }

  if(sent) {
    return <p className="text-green-500">¡Gracias! Tu mensaje ha sido enviado.</p>
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4 max-w-lg">
      <div>
        <label className="block text-sm mb-1">Nombre</label>
        <input name="name" value={form.name} onChange={onChange} className="w-full border border-gray-300 rounded-md px-3 py-2" />
        {errors.name && <span className="text-sm text-red-500">{errors.name}</span>}
      </div>
      <div>
        <label className="block text-sm mb-1">Email</label>
        <input name="email" type="email" value={form.email} onChange={onChange} className="w-full border border-gray-300 rounded-md px-3 py-2" />
        {errors.email && <span className="text-sm text-red-500">{errors.email}</span>}
      </div>
      <div>
        <label className="block text-sm mb-1">Mensaje</label>
        <textarea name="message" rows={4} value={form.message} onChange={onChange} className="w-full border border-gray-300 rounded-md px-3 py-2" />
        {errors.message && <span className="text-sm text-red-500">{errors.message}</span>}
      </div>
      <button type="submit" className="px-6 py-3 rounded-full text-white" style={{ background: 'linear-gradient(90deg, #FF2E63, #007BFF)' }} disabled={submitting}>
        {submitting ? 'Enviando...' : 'Enviar'}
      </button>
    </form>
  )
}
