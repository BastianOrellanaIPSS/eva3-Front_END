"use client";

import { useState, useEffect } from "react";

const servicios = [
  "Asesoría Empresarial",
  "Capacitación",
  "Acceso a Financiamiento",
  "Transformación Digital",
  "Networking Empresarial",
  "Innovación y Crecimiento",
];

export default function ContactForm() {
  const [form, setForm] = useState({
    nombre: "",
    email: "",
    servicio: "",
    mensaje: "",
    honeypot: "", // campo trampa para bots, siempre vacío en humanos
  });
  const [errores, setErrores] = useState<Record<string, string>>({});
  const [enviado, setEnviado] = useState(false);
  const [cargando, setCargando] = useState(false);
  const [errorServidor, setErrorServidor] = useState("");

  // Lee el parámetro ?servicio= de la URL y lo rellena automáticamente
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const servicio = params.get("servicio");
    if (servicio) {
      setForm((prev) => ({ ...prev, servicio }));
    }
  }, []);

  const validarCliente = () => {
    const nuevosErrores: Record<string, string> = {};
    if (!form.nombre.trim()) nuevosErrores.nombre = "El nombre es obligatorio.";
    if (!form.email.trim()) {
      nuevosErrores.email = "El email es obligatorio.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      nuevosErrores.email = "Ingresa un email válido.";
    }
    if (!form.servicio) nuevosErrores.servicio = "Selecciona un servicio.";
    if (!form.mensaje.trim()) {
      nuevosErrores.mensaje = "El mensaje es obligatorio.";
    } else if (form.mensaje.trim().length < 10) {
      nuevosErrores.mensaje = "El mensaje debe tener al menos 10 caracteres.";
    }
    return nuevosErrores;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrores({ ...errores, [e.target.name]: "" });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorServidor("");

    // Validación del cliente primero
    const nuevosErrores = validarCliente();
    if (Object.keys(nuevosErrores).length > 0) {
      setErrores(nuevosErrores);
      return;
    }

    setCargando(true);

    try {
      const res = await fetch("/api/contacto", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) {
        if (data.errores) {
          setErrores(data.errores);
        } else {
          setErrorServidor("Hubo un error al enviar. Intenta nuevamente.");
        }
        return;
      }

      setEnviado(true);
    } catch {
      setErrorServidor("No se pudo conectar con el servidor.");
    } finally {
      setCargando(false);
    }
  };

  if (enviado) {
    return (
      <div className="text-center py-12">
        <p className="text-2xl font-bold text-gray-800 mb-2">¡Mensaje enviado!</p>
        <p className="text-gray-600">Nos contactaremos contigo a la brevedad.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">

      {/* Campo honeypot — oculto para humanos, los bots lo rellenan */}
      <input
        type="text"
        name="honeypot"
        value={form.honeypot}
        onChange={handleChange}
        aria-hidden="true"
        tabIndex={-1}
        style={{ display: "none" }}
      />

      <div>
        <label htmlFor="nombre" className="block text-sm font-medium text-gray-700 mb-1">
          Nombre completo
        </label>
        <input
          id="nombre"
          name="nombre"
          type="text"
          value={form.nombre}
          onChange={handleChange}
          placeholder="Ej: María González"
          className={`w-full border rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#C8102E] placeholder:text-gray-500 ${errores.nombre ? "border-red-500" : "border-gray-300"}`}
        />
        {errores.nombre && <p className="text-red-500 text-xs mt-1">{errores.nombre}</p>}
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
          Correo electrónico
        </label>
        <input
          id="email"
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Ej: maria@correo.cl"
          className={`w-full border rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#C8102E] placeholder:text-gray-500 ${errores.email ? "border-red-500" : "border-gray-300"}`}
        />
        {errores.email && <p className="text-red-500 text-xs mt-1">{errores.email}</p>}
      </div>

      <div>
        <label htmlFor="servicio" className="block text-sm font-medium text-gray-700 mb-1">
          Servicio de interés
        </label>
        <select
          id="servicio"
          name="servicio"
          value={form.servicio}
          onChange={handleChange}
          className={`w-full border rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#C8102E] bg-white ${errores.servicio ? "border-red-500" : "border-gray-300"} ${form.servicio === "" ? "text-gray-500" : "text-gray-900"}`}
        >
          <option value="">Selecciona un servicio</option>
          {servicios.map((s) => (
            <option key={s} value={s}>{s}</option>
          ))}
        </select>
        {errores.servicio && <p className="text-red-500 text-xs mt-1">{errores.servicio}</p>}
      </div>

      <div>
        <label htmlFor="mensaje" className="block text-sm font-medium text-gray-700 mb-1">
          Mensaje
        </label>
        <textarea
          id="mensaje"
          name="mensaje"
          value={form.mensaje}
          onChange={handleChange}
          placeholder="Cuéntanos sobre tu negocio y en qué te podemos ayudar..."
          rows={4}
          className={`w-full border rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#C8102E] placeholder:text-gray-500 resize-none ${errores.mensaje ? "border-red-500" : "border-gray-300"}`}
        />
        {errores.mensaje && <p className="text-red-500 text-xs mt-1">{errores.mensaje}</p>}
      </div>

      {errorServidor && (
        <p className="text-red-500 text-sm text-center">{errorServidor}</p>
      )}

      <button
        type="submit"
        disabled={cargando}
        className="bg-[#C8102E] text-white font-semibold py-3 rounded-full hover:bg-red-700 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {cargando ? "Enviando..." : "Enviar mensaje"}
      </button>
    </form>
  );
}
