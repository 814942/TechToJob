# TechToJob

> Comunidad de desarrolladores y empresas tech en español.

TechToJob no es un portal de empleo más. Es una comunidad donde desarrolladores y empresas se conocen antes de que exista una vacante. Construyes, participas en torneos y te ven trabajar.

---

## Etapa 1: Landing Page

Primera etapa del torneo. Una landing page que explica qué es TechToJob, a quién sirve y consigue que la gente entre al Discord.

### Secciones

1. **Hero** — Qué es TechToJob y por qué no es un portal de empleo más
2. **Cómo funciona** — El recorrido desde que llegas hasta que sale una oportunidad
3. **Ofrécete como talento** — Publica tu perfil: stack, nivel, disponibilidad
4. **Publica como empresa** — Publica lo que buscas y accede a perfiles
5. **Torneos** — Competiciones abiertas como esta
6. **Networking** — Canales por área y gente del sector
7. **Testimonios** — Qué dice la gente que ya está dentro
8. **Noticias** — Listado de novedades
9. **Newsletter** — Formulario de suscripción
10. **Cierre** — Último empujón antes del footer
11. **Footer** — Enlaces por bloques, redes y legal

---

## Cómo Trabajamos

### Equipo

- **Pablo** — Product Owner + Director Creativo. Decide qué se construye.
- **AI** — Tech Lead + Implementador. Propone arquitectura e implementa.

### Flujo

```
1. PRD brief → Pablo define qué quiere
2. Discusión → Ambos aclaramos dudas
3. PRD completo → Se documentan requisitos
4. Aprobación → Pablo aprueba o pide cambios
5. Implementación → Se construye
6. Revisión → Pablo revisa visualmente
7. Ajustes → Se itera hasta OK
```

### Herramientas

- **Framework:** Next.js 16 (App Router)
- **Estilos:** Tailwind CSS v4
- **Componentes:** Shadcn/ui
- **i18n:** next-intl (ES/EN)
- **Deploy:** Vercel

---

## Getting Started

### Prerequisites

- Node.js 20+
- npm, yarn, o pnpm

### Installation

```bash
# Clone el repo
git clone https://github.com/814942/TechToJob.git
cd TechToJob

# Instale dependencias
npm install

# Copie variables de entorno
cp .env.example .env.local

# Ejecute en desarrollo
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

### Scripts

```bash
npm run dev          # Desarrollo
npm run build        # Build de producción
npm run start        # Iniciar producción
npm run lint         # Verificar código
npm run lint:fix     # Auto-corregir errores
```

---

## Estructura del Proyecto

```
TechToJob/
├── src/
│   ├── app/[locale]/    # Rutas Next.js
│   ├── components/      # Componentes Atomic Design
│   │   ├── atoms/       # Elementos básicos
│   │   ├── molecules/   # Compuestos simples
│   │   ├── organisms/   # Secciones completas
│   │   └── layout/      # Elementos de layout
│   ├── i18n/            # Configuración i18n
│   ├── messages/        # Textos (es.json, en.json)
│   ├── lib/             # Utilidades
│   └── types/           # Tipos TypeScript
├── public/              # Assets estáticos
├── docs/                # Documentación del proyecto
└── AGENT.MD             # Convenciones técnicas
```

---

## Idiomas

La web está disponible en español e inglés. Los textos están en archivos separados:

- `messages/es.json` — Textos en español
- `messages/en.json` — Textos en inglés

Para agregar un nuevo idioma, crear un nuevo archivo `messages/{locale}.json`.

---

## Contribuir

1. Crear un branch (`git checkout -b feat/nombre-feature`)
2. Hacer cambios con commits atómicos
3. Abrir un Pull Request
4. Esperar review antes de merge

Ver `AGENT.MD` para convenciones de código y branching.

---

## Deploy

La web está desplegada en Vercel. Cada push a `main` despliega automáticamente.

**URL de producción:** [https://techtojob.vercel.app](https://techtojob.vercel.app)

---

## Licencia

Proyecto privado — Torneo #2 TechToJob.

---

## Contacto

- **Discord:** [https://discord.gg/h9FFgKdkRd](https://discord.gg/h9FFgKdkRd)
- **LinkedIn:** [https://www.linkedin.com/company/techtojob/](https://www.linkedin.com/company/techtojob/)
- **X:** [https://x.com/techtojob](https://x.com/techtojob)
- **Instagram:** [https://www.instagram.com/techtojob](https://www.instagram.com/techtojob)
