import { NextResponse } from "next/server";

const faqs = [
  {
    id: 1,
    pregunta: "¿Quiénes pueden acceder a los servicios del Centro de Negocios?",
    respuesta: "Cualquier micro, pequeña o mediana empresa ubicada en Santiago puede acceder a nuestros servicios de forma gratuita.",
  },
  {
    id: 2,
    pregunta: "¿Cuánto cuestan las asesorías?",
    respuesta: "Todos nuestros servicios son completamente gratuitos para los emprendedores y empresas que califiquen.",
  },
  {
    id: 3,
    pregunta: "¿Cómo puedo agendar una asesoría?",
    respuesta: "Puedes contactarnos a través del formulario de esta página o visitarnos directamente en Manuel Rodríguez Sur 749, Santiago.",
  },
  {
    id: 4,
    pregunta: "¿Qué documentos necesito para postular?",
    respuesta: "Solo necesitas tu RUT de empresa o emprendedor, y tener iniciación de actividades ante el SII.",
  },
  {
    id: 5,
    pregunta: "¿Cuánto dura el proceso de acompañamiento?",
    respuesta: "El acompañamiento preventivo tiene una duración de 6 meses con reuniones periódicas. El correctivo varía según la complejidad del caso.",
  },
];

export async function GET() {
  return NextResponse.json(faqs);
}
