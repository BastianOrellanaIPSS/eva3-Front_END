import Navbar from "@/components/Navbar";

const practicas = [
  {
    numero: 1,
    titulo: "Nomenclatura de componentes en PascalCase",
    descripcion:
      "Todos los componentes de React/Next.js deben nombrarse con PascalCase (primera letra de cada palabra en mayúscula).",
    ejemplo: "✅ ServiceCard.tsx, TestimonialCarousel.tsx\n❌ servicecard.tsx, testimonial_carousel.tsx",
    herramienta: "ESLint con regla react/jsx-pascal-case",
    resultado: "Distinguir fácilmente los componentes de archivos utilitarios y evitar errores de importación.",
  },
  {
    numero: 2,
    titulo: "Estructura de carpetas por función",
    descripcion:
      "Organiza el proyecto separando componentes reutilizables, páginas, estilos y lógica en carpetas distintas.",
    ejemplo: "components/ → componentes reutilizables\napp/ → páginas y rutas\npublic/ → imágenes y assets",
    herramienta: "Convención de Next.js App Router",
    resultado: "Facilita la navegación del código y el trabajo en equipo sin conflictos.",
  },
  {
    numero: 3,
    titulo: "Variables con nombres descriptivos",
    descripcion:
      "Los nombres de variables y funciones deben describir claramente su propósito, sin abreviaturas confusas.",
    ejemplo: "✅ const serviciosActivos = []\n❌ const arr = []\n❌ const sa = []",
    herramienta: "Revisión de código en pull requests",
    resultado: "Código legible sin necesidad de comentarios explicativos.",
  },
  {
    numero: 4,
    titulo: "Componentes pequeños y reutilizables",
    descripcion:
      "Cada componente debe hacer una sola cosa. Si un componente crece demasiado, divídelo en subcomponentes.",
    ejemplo: "ServiceCard recibe props y renderiza una tarjeta — no hace fetch, no maneja rutas.",
    herramienta: "Principio de responsabilidad única (SRP)",
    resultado: "Componentes fáciles de testear, reutilizar y mantener.",
  },
  {
    numero: 5,
    titulo: "Tipado estricto con TypeScript",
    descripcion:
      "Siempre define interfaces o tipos para las props de cada componente. Evita el uso de 'any'.",
    ejemplo: "✅ interface ServiceCardProps { titulo: string; descripcion: string; }\n❌ function Card(props: any)",
    herramienta: "TypeScript + tsconfig con strict: true",
    resultado: "Detectar errores en tiempo de desarrollo antes de llegar al navegador.",
  },
  {
    numero: 6,
    titulo: "Accesibilidad con atributos ARIA y semántica HTML",
    descripcion:
      "Usa etiquetas HTML semánticas y atributos ARIA para que el sitio sea accesible a personas con discapacidades.",
    ejemplo: "✅ <button aria-label='Cerrar menú'>\n✅ <nav>, <main>, <section>, <article>\n❌ <div onClick={}>",
    herramienta: "WCAG 2.1, Lighthouse Accessibility Audit",
    resultado: "Sitio usable con lectores de pantalla y conforme a estándares de accesibilidad.",
  },
  {
    numero: 7,
    titulo: "Optimización de imágenes con next/image",
    descripcion:
      "Usa siempre el componente Image de Next.js en lugar de la etiqueta <img> nativa para optimizar automáticamente el peso y formato.",
    ejemplo: "✅ import Image from 'next/image'\n❌ <img src='/foto.jpg' />",
    herramienta: "next/image (WebP automático, lazy loading, tamaño responsivo)",
    resultado: "Imágenes más livianas, carga más rápida y mejor puntaje en Lighthouse.",
  },
  {
    numero: 8,
    titulo: "Separar lógica de presentación",
    descripcion:
      "Los componentes visuales no deben contener lógica de negocio compleja. Extrae la lógica a funciones o hooks personalizados.",
    ejemplo: "✅ useFetch('/api/servicios') → hook separado\n❌ fetch() directamente dentro del JSX del componente",
    herramienta: "Custom hooks de React",
    resultado: "Componentes más simples, lógica reutilizable y fácil de testear.",
  },
  {
    numero: 9,
    titulo: "Validación de formularios en cliente y servidor",
    descripcion:
      "Valida los datos tanto en el frontend (feedback inmediato) como en el backend (seguridad real). Nunca confíes solo en la validación del cliente.",
    ejemplo: "Cliente: verificar que el email tenga formato correcto antes de enviar.\nServidor: verificar que los datos existan y sean seguros antes de procesarlos.",
    herramienta: "React state + validación en API routes de Next.js",
    resultado: "Mejor experiencia de usuario y protección contra datos maliciosos.",
  },
  {
    numero: 10,
    titulo: "Control de versiones con ramas por funcionalidad",
    descripcion:
      "Cada nueva funcionalidad o corrección debe desarrollarse en su propia rama de Git y mergearse mediante pull request con revisión.",
    ejemplo: "✅ git checkout -b feature/carrusel-testimonios\n✅ git checkout -b fix/validacion-formulario\n❌ Trabajar todo en main directamente",
    herramienta: "Git + GitHub Pull Requests",
    resultado: "Historial limpio, trabajo en equipo sin conflictos y posibilidad de revertir cambios.",
  },
  {
    numero: 11,
    titulo: "Commits descriptivos con mensajes claros",
    descripcion:
      "Cada commit debe tener un mensaje que explique qué se hizo y por qué, usando verbos en infinitivo.",
    ejemplo: "✅ 'Agregar componente ServiceCard con props tipadas'\n✅ 'Corregir validación de email en formulario de contacto'\n❌ 'fix' ❌ 'cambios' ❌ 'wip'",
    herramienta: "Git conventional commits",
    resultado: "Historial legible que cualquier integrante del equipo puede entender.",
  },
  {
    numero: 12,
    titulo: "Uso de variables de entorno para datos sensibles",
    descripcion:
      "Nunca escribas claves de API, contraseñas o URLs de producción directamente en el código. Usa archivos .env.",
    ejemplo: "✅ process.env.NEXT_PUBLIC_API_URL\n❌ const url = 'https://mi-api-secreta.com/clave123'",
    herramienta: "Archivos .env.local + .gitignore",
    resultado: "Protección de datos sensibles y evitar exposición de credenciales en repositorios públicos.",
  },
];

export default function BuenasPracticasPage() {
  return (
    <>
      <Navbar />
      <main className="pt-24 pb-20 px-4 bg-gray-50 min-h-screen">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-800 mb-2 text-center">
            Guía de Buenas Prácticas
          </h1>
          <p className="text-gray-500 text-center mb-12">
            Convenciones y estándares para el desarrollo con Next.js y React en este proyecto.
          </p>

          <div className="flex flex-col gap-6">
            {practicas.map((p) => (
              <article key={p.numero} className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
                <div className="flex items-start gap-4">
                  <span className="bg-[#C8102E] text-white text-sm font-bold rounded-full w-8 h-8 flex items-center justify-center shrink-0">
                    {p.numero}
                  </span>
                  <div className="flex-1">
                    <h2 className="text-lg font-bold text-gray-800 mb-1">{p.titulo}</h2>
                    <p className="text-gray-600 text-sm mb-3">{p.descripcion}</p>

                    <div className="bg-gray-50 rounded-lg p-3 mb-3">
                      <p className="text-xs font-semibold text-gray-500 uppercase mb-1">Ejemplo</p>
                      <pre className="text-xs text-gray-700 whitespace-pre-wrap font-mono">{p.ejemplo}</pre>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-3 text-xs">
                      <div className="flex-1 bg-blue-50 rounded-lg p-3">
                        <p className="font-semibold text-blue-700 mb-1">Herramienta / Técnica</p>
                        <p className="text-blue-600">{p.herramienta}</p>
                      </div>
                      <div className="flex-1 bg-green-50 rounded-lg p-3">
                        <p className="font-semibold text-green-700 mb-1">Resultado esperado</p>
                        <p className="text-green-600">{p.resultado}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </main>
      <footer className="bg-gray-800 text-gray-400 text-sm text-center py-6">
        <p>© 2026 Centro de Negocios Santiago · SERCOTEC</p>
      </footer>
    </>
  );
}
