import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { nombre, email, servicio, mensaje, honeypot } = body;

  // Protección anti-bots: si el campo honeypot viene relleno, es un bot
  if (honeypot) {
    return NextResponse.json({ error: "Solicitud rechazada." }, { status: 400 });
  }

  // Validación del servidor
  const errores: Record<string, string> = {};

  if (!nombre || nombre.trim().length < 2) {
    errores.nombre = "El nombre debe tener al menos 2 caracteres.";
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email || !emailRegex.test(email)) {
    errores.email = "El email no tiene un formato válido.";
  }

  if (!servicio) {
    errores.servicio = "Debes seleccionar un servicio.";
  }

  if (!mensaje || mensaje.trim().length < 10) {
    errores.mensaje = "El mensaje debe tener al menos 10 caracteres.";
  }

  if (Object.keys(errores).length > 0) {
    return NextResponse.json({ errores }, { status: 422 });
  }

  // Aquí iría el envío real del email (con un servicio como Resend o Nodemailer)
  // Por ahora simulamos una respuesta exitosa
  return NextResponse.json({ ok: true, mensaje: "Formulario recibido correctamente." });
}
