# Eva3 — Landing Page Centro de Negocios Santiago · SERCOTEC

Landing page desarrollada con **Next.js 15**, **TypeScript** y **Tailwind CSS** para el Centro de Negocios Santiago de SERCOTEC, como parte de la Evaluación Sumativa Unidad 3 de Desarrollo Frontend.

---

## Estructura del proyecto

```
eva3/
├── app/
│   ├── api/
│   │   ├── contacto/route.ts      # Endpoint POST: recibe y valida el formulario
│   │   ├── faq/route.ts           # Endpoint GET: retorna preguntas frecuentes
│   │   └── servicios/route.ts     # Endpoint GET: retorna lista de servicios
│   ├── buenas-practicas/
│   │   └── page.tsx               # Página de guía de buenas prácticas
│   ├── contacto/
│   │   └── page.tsx               # Página del formulario de contacto
│   ├── globals.css                # Estilos globales y configuración Tailwind
│   ├── layout.tsx                 # Layout raíz de la aplicación
│   └── page.tsx                   # Página principal (landing page)
├── components/
│   ├── ContactForm.tsx            # Formulario de contacto con validación doble
│   ├── FaqAccordion.tsx           # Acordeón de preguntas frecuentes
│   ├── Navbar.tsx                 # Barra de navegación responsiva
│   ├── ServiceCard.tsx            # Tarjeta de servicio reutilizable
│   └── TestimonialCarousel.tsx    # Carrusel de testimonios automático
├── public/
│   └── servicios/                 # Imágenes de los servicios
├── next.config.ts
├── tailwind.config.ts
└── tsconfig.json
```

---

## Requisitos previos

- [Node.js](https://nodejs.org) v18 o superior
- npm v9 o superior

---

## Instalación

```bash
# 1. Clona el repositorio
git clone https://github.com/BastianOrellanaIPSS/eva3-Front_END.git

# 2. Entra a la carpeta
cd eva3-Front_END

# 3. Instala las dependencias
npm install

# 4. Inicia el servidor de desarrollo
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

---

## Scripts disponibles

| Comando | Descripción |
|---|---|
| `npm run dev` | Inicia el servidor de desarrollo |
| `npm run build` | Genera la versión de producción |
| `npm run start` | Inicia el servidor de producción |
| `npm run lint` | Ejecuta ESLint para revisar el código |

---

## Guía de componentes

### `ServiceCard`
Tarjeta reutilizable para mostrar un servicio. Al hacer clic en "Contáctanos" redirige al formulario con el servicio preseleccionado.

**Props:**

| Prop | Tipo | Descripción |
|---|---|---|
| `imagen` | `string` | Ruta de la imagen del servicio |
| `titulo` | `string` | Nombre del servicio |
| `descripcion` | `string` | Descripción breve del servicio |

**Ejemplo de uso:**
```tsx
import ServiceCard from "@/components/ServiceCard";

<ServiceCard
  imagen="/servicios/asesoria.jpg"
  titulo="Asesoría Empresarial"
  descripcion="Diagnósticos y planes de mejora para tu negocio."
/>
```

---

### `TestimonialCarousel`
Carrusel automático de testimonios. Avanza cada 5 segundos y permite navegación manual con botones y puntos indicadores.

No recibe props — los testimonios están definidos internamente.

**Ejemplo de uso:**
```tsx
import TestimonialCarousel from "@/components/TestimonialCarousel";

<TestimonialCarousel />
```

---

### `FaqAccordion`
Acordeón de preguntas frecuentes. Obtiene los datos desde `/api/faq` y permite abrir/cerrar cada pregunta con animación.

No recibe props — consume la API interna automáticamente.

**Ejemplo de uso:**
```tsx
import FaqAccordion from "@/components/FaqAccordion";

<FaqAccordion />
```

---

### `ContactForm`
Formulario de contacto con validación en cliente y servidor, y protección anti-bots mediante honeypot. Si se accede con el parámetro `?servicio=`, rellena automáticamente el campo de servicio.

**Ejemplo de uso:**
```tsx
import ContactForm from "@/components/ContactForm";

<ContactForm />
```

**Acceso con servicio preseleccionado:**
```
/contacto?servicio=Asesoría Empresarial
```

---

### `Navbar`
Barra de navegación fija con menú responsivo. En móvil muestra un menú hamburguesa.

**Ejemplo de uso:**
```tsx
import Navbar from "@/components/Navbar";

<Navbar />
```

---

## API interna

| Método | Endpoint | Descripción |
|---|---|---|
| `GET` | `/api/servicios` | Retorna la lista de servicios en JSON |
| `GET` | `/api/faq` | Retorna las preguntas frecuentes en JSON |
| `POST` | `/api/contacto` | Recibe y valida el formulario de contacto |

**Ejemplo de respuesta `/api/servicios`:**
```json
[
  {
    "id": 1,
    "titulo": "Asesoría Empresarial",
    "descripcion": "Diagnósticos, planes de mejora...",
    "imagen": "/servicios/asesoria.jpg"
  }
]
```

**Ejemplo de body para `POST /api/contacto`:**
```json
{
  "nombre": "María González",
  "email": "maria@correo.cl",
  "servicio": "Asesoría Empresarial",
  "mensaje": "Me gustaría agendar una asesoría.",
  "honeypot": ""
}
```

---

## Tecnologías utilizadas

- [Next.js 15](https://nextjs.org/) — Framework React con App Router
- [TypeScript](https://www.typescriptlang.org/) — Tipado estático
- [Tailwind CSS](https://tailwindcss.com/) — Estilos utilitarios
- [ESLint](https://eslint.org/) — Linter de código

---

## Autor

**Bastian Orellana**
Estudiante de Informática — IPSS
Evaluación Sumativa Unidad 3 · Desarrollo Frontend · T1 2026
