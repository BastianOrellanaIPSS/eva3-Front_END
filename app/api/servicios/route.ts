import { NextResponse } from "next/server";

const servicios = [
  {
    id: 1,
    imagen: "/servicios/asesoria.jpg",
    titulo: "Asesoría Empresarial",
    descripcion: "Diagnósticos, planes de mejora y seguimiento continuo para fortalecer la gestión de tu negocio.",
  },
  {
    id: 2,
    imagen: "/servicios/capacitacion.jpg",
    titulo: "Capacitación",
    descripcion: "Talleres especializados en administración, finanzas, marketing digital e innovación.",
  },
  {
    id: 3,
    imagen: "/servicios/financiamiento.jpg",
    titulo: "Acceso a Financiamiento",
    descripcion: "Te vinculamos con programas e instituciones para acceder a fondos y capital para tu empresa.",
  },
  {
    id: 4,
    imagen: "/servicios/digital.jpg",
    titulo: "Transformación Digital",
    descripcion: "Incorporación de herramientas digitales y optimización de procesos para mejorar tu eficiencia.",
  },
  {
    id: 5,
    imagen: "/servicios/networking.jpg",
    titulo: "Networking Empresarial",
    descripcion: "Espacios de encuentro y articulación con otras empresas, instituciones públicas y privadas.",
  },
  {
    id: 6,
    imagen: "/servicios/innovacion.jpg",
    titulo: "Innovación y Crecimiento",
    descripcion: "Estrategias para implementar innovación en tu modelo de negocio y escalar resultados.",
  },
];

export async function GET() {
  return NextResponse.json(servicios);
}
