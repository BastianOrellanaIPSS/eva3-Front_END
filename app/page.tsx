import Navbar from "@/components/Navbar";
import ServiceCard from "@/components/ServiceCard";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import FaqAccordion from "@/components/FaqAccordion";

interface Servicio {
  id: number;
  imagen: string;
  titulo: string;
  descripcion: string;
}

// Next.js permite hacer fetch en el servidor directamente en el componente de página
async function getServicios(): Promise<Servicio[]> {
  const res = await fetch("http://localhost:3000/api/servicios", { cache: "no-store" });
  return res.json();
}

export default async function Home() {
  const servicios = await getServicios();

  return (
    <>
      <Navbar />

      <main className="pt-16">

        {/* HERO */}
        <section id="inicio" className="bg-[#C8102E] text-white py-24 px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Centro de Negocios Santiago
            </h1>
            <p className="text-lg md:text-xl mb-8 text-red-100">
              Apoyamos el crecimiento de las micro, pequeñas y medianas empresas
              con servicios integrales de asesoría, innovación y financiamiento.
            </p>
            <a
              href="/contacto"
              className="inline-block bg-white text-[#C8102E] font-semibold px-8 py-3 rounded-full hover:bg-red-50 transition-colors"
            >
              Contáctanos
            </a>
          </div>
        </section>

        {/* NOSOTROS */}
        <section id="nosotros" className="py-20 px-4 bg-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">¿Quiénes somos?</h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              El Centro de Negocios Santiago de SERCOTEC es una institución dedicada a ofrecer
              servicios integrales de apoyo y acompañamiento a las micro, pequeñas y medianas
              empresas. Nuestro objetivo es garantizar el correcto funcionamiento, sostenibilidad
              y eficiencia de los negocios de nuestros clientes, a través de asesorías, talleres
              y vinculación con redes de apoyo.
            </p>
          </div>
        </section>

        {/* SERVICIOS — datos desde /api/servicios */}
        <section id="servicios" className="py-20 px-4 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">Nuestros Servicios</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {servicios.map((s) => (
                <ServiceCard
                  key={s.id}
                  imagen={s.imagen}
                  titulo={s.titulo}
                  descripcion={s.descripcion}
                />
              ))}
            </div>
          </div>
        </section>

        {/* TESTIMONIOS */}
        <section id="testimonios" className="py-20 px-4 bg-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-12">Testimonios</h2>
            <TestimonialCarousel />
          </div>
        </section>

        {/* FAQ — datos desde /api/faq */}
        <section id="faq" className="py-20 px-4 bg-gray-50">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">
              Preguntas Frecuentes
            </h2>
            <FaqAccordion />
          </div>
        </section>

        {/* CONTACTO */}
        <section id="contacto" className="py-20 px-4 bg-white text-center">
          <div className="max-w-xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">¿Tienes alguna consulta?</h2>
            <p className="text-gray-500 mb-8">Estamos para ayudarte a hacer crecer tu negocio.</p>
            <a
              href="/contacto"
              className="inline-block bg-[#C8102E] text-white font-semibold px-8 py-3 rounded-full hover:bg-red-700 transition-colors"
            >
              Ir al formulario de contacto
            </a>
          </div>
        </section>

      </main>

      {/* FOOTER */}
      <footer className="bg-gray-800 text-gray-400 text-sm text-center py-6">
        <p>© 2026 Centro de Negocios Santiago · SERCOTEC · Manuel Rodríguez Sur 749, Santiago</p>
      </footer>
    </>
  );
}
