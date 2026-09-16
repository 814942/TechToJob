# PRD-00: Foundation — TechToJob Landing Page

> **Status:** Draft  
> **Version:** 1.0  
> **Date:** 2026-09-16  
> **Context:** Torneo #2 — Etapa 1: Landing Page Simple

---

## 1. Resumen

TechToJob es una comunidad que conecta desarrolladores y empresas tech en español. Esta landing es la puerta de entrada: explica qué somos, a quién sirve y consigue que la gente entre al Discord.

El objetivo es construir una landing page estática, multiidioma (ES/EN), con SEO perfecto (Lighthouse 100), HTML semántico, responsive real y rendimiento alto.

---

## 2. Tech Stack

| Capa | Tecnología | Versión | Justificación |
|------|-----------|---------|---------------|
| Framework | Next.js (App Router) | 14+ | SSG, Metadata API, next/image, next/font. Recomendado por las bases. |
| Language | TypeScript | 5+ | Type safety, mejor DX, estándar del stack. |
| Estilos | Tailwind CSS | v4 | Obligatorio por bases. Utility-first + CSS variables. |
| i18n | next-intl | latest | Rutas `[locale]/`, hreflang automático. Mencionado en bases. |
| Iconos | Lucide React | latest | Libres, tree-shakeable, consistentes. |
| Componentes | Shadcn/ui | latest | Copy-paste (no paquete). Cumple "no plantillas compradas". |
| Animaciones | Motion (framer-motion) | latest | Solo fade-in y scroll reveal. No estorbar. |
| Fuente | Sora (Google Fonts) | 3 pesos | Obligatoria por bases. via next/font. |

---

## 3. Identidad Visual

### 3.1 Paleta (fija por bases)

| Rol | Color | Uso |
|-----|-------|-----|
| 60% — Fondo | `#ffffff` | Fondos principales, espacio en blanco |
| 30% — Texto | `#2f3436` | Texto principal, secciones de contraste |
| 10% — Acento | `#84c0bf` | Botones, CTAs, badges, detalles |

**Grises auxiliares** (para texto secundario y bordes):
- `#2f3436 / 70%` → texto secundario
- `#2f3436 / 10%` → bordes, divisores

⚠️ **Contraste:** `#84c0bf` sobre `#ffffff` NO pasa WCAG AA para texto pequeño (< 18px). Usar solo en:
- Fondos de botones (con texto oscuro encima)
- Badges, chips, highlights
- Elementos decorativos

NUNCA en: párrafos, texto de navegación, labels de formulario.

### 3.2 Tipografía

```
Font: Sora (via next/font/google)
Pesos: 400 (regular), 600 (semibold), 700 (bold)
```

### 3.3 Variables CSS (Tailwind v4)

```css
@theme {
  --color-primary: #2f3436;
  --color-accent: #84c0bf;
  --color-surface: #ffffff;
  --color-muted: #2f3436b3; /* 70% opacity */
  --color-border: #2f34361a; /* 10% opacity */
}
```

---

## 4. Arquitectura — Atomic Design

```
src/
├── app/
│   ├── [locale]/
│   │   ├── layout.tsx          # Root layout con i18n, font, metadata
│   │   ├── page.tsx            # Landing page (todas las secciones)
│   │   └── not-found.tsx
│   └── globals.css
├── components/
│   ├── atoms/                  # Botones, badges, inputs, icons
│   │   ├── Button.tsx
│   │   ├── Badge.tsx
│   │   ├── Input.tsx
│   │   └── Icon.tsx
│   ├── molecules/              # Compuestos: Card, FormField, NavItem
│   │   ├── TestimonialCard.tsx
│   │   ├── NewsCard.tsx
│   │   ├── FeatureCard.tsx
│   │   ├── NewsletterForm.tsx
│   │   └── NavItem.tsx
│   ├── organisms/              # Secciones completas
│   │   ├── Hero.tsx
│   │   ├── HowItWorks.tsx
│   │   ├── TalentSection.tsx
│   │   ├── CompaniesSection.tsx
│   │   ├── TournamentsSection.tsx
│   │   ├── NetworkingSection.tsx
│   │   ├── Testimonials.tsx
│   │   ├── News.tsx
│   │   ├── Newsletter.tsx
│   │   ├── CTA.tsx
│   │   └── Footer.tsx
│   └── layout/
│       ├── Header.tsx
│       ├── LanguageSwitcher.tsx
│       └── ScrollToTop.tsx
├── i18n/
│   ├── request.ts              # next-intl config
│   └── routing.ts              # Rutas configuradas
├── messages/
│   ├── es.json                 # Textos en español
│   └── en.json                 # Textos en inglés
├── lib/
│   ├── utils.ts                # cn() helper de Shadcn
│   └── constants.ts            # URLs, datos estáticos
└── types/
    └── index.ts                # Tipos compartidos
```

---

## 5. i18n Strategy

### 5.1 Estructura de rutas

```
/                  → redirect a /es
/es                → Landing en español
/en                → Landing en inglés
```

### 5.2 Archivos de texto

```json
// messages/es.json
{
  "hero": {
    "title": "Deja de mandar CVs al vacío",
    "subtitle": "TechToJob es la comunidad donde...",
    "cta": "Entrar a la comunidad"
  },
  "howItWorks": { ... },
  "talent": { ... },
  "companies": { ... },
  "tournaments": { ... },
  "networking": { ... },
  "testimonials": { ... },
  "news": { ... },
  "newsletter": { ... },
  "cta": { ... },
  "footer": { ... }
}
```

### 5.3 hreflang

```html
<link rel="alternate" hreflang="es" href="https://techtojob.com/es" />
<link rel="alternate" hreflang="en" href="https://techtojob.com/en" />
<link rel="alternate" hreflang="x-default" href="https://techtojob.com/es" />
```

---

## 6. SEO Requirements

### 6.1 Metadata (por página)

```ts
export const metadata: Metadata = {
  title: {
    template: '%s | TechToJob',
    default: 'TechToJob — Comunidad de desarrolladores y empresas tech'
  },
  description: 'Comunidad de desarrolladores y empresas tech en español. Te encuentran, participas en torneos y accedes a oportunidades reales.',
  metadataBase: new URL('https://techtojob.com'),
  openGraph: {
    title: 'TechToJob',
    description: '...',
    url: 'https://techtojob.com',
    siteName: 'TechToJob',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
    locale: 'es_ES',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TechToJob',
    description: '...',
    images: ['/og-image.png']
  }
}
```

### 6.2 JSON-LD

```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "TechToJob",
  "url": "https://techtojob.com",
  "logo": "https://techtojob.com/logo.svg",
  "sameAs": [
    "https://discord.gg/h9FFgKdkRd",
    "https://www.linkedin.com/company/techtojob/",
    "https://x.com/techtojob",
    "https://www.instagram.com/techtojob"
  ]
}
```

### 6.3 Checklist SEO

- [ ] Un solo `<h1>` por página con el mensaje principal
- [ ] Jerarquía h2 → h3 sin saltos
- [ ] `lang="es"` / `lang="en"` correcto
- [ ] title 50-60 chars
- [ ] description 150-160 chars
- [ ] canonical y viewport
- [ ] Open Graph con imagen 1200×630
- [ ] JSON-LD Organization
- [ ] Texto real (no en imágenes)
- [ ] URLs descriptivas (`/ofertas`, no `/page2`)
- [ ] Lighthouse SEO: 100

---

## 7. Imágenes

### 7.1 Logo

Usar los archivos de `/assets/`:
- `logo-color.svg` → sobre fondo claro
- `logo-white.svg` → sobre fondo oscuro
- `logo-black.svg` → paraISOString

### 7.2 Contenido

- **Formato:** WebP o AVIF (via next/image)
- **Lazy loading:** `loading="lazy"` en todo lo que esté debajo del hero
- **Hero:** sin lazy loading (above the fold)
- **Alt text:** descriptivo, sin spam de keywords
- **width/height:** siempre explícitos

### 7.3 Fuentes de imágenes

- Ilustraciones: [unDraw](https://undraw.co), [Pexels](https://pexels.com)
- Iconos: Lucide (ya incluido)
- Licencia: uso libre comercial, documentada en README

---

## 8. Accesibilidad

- [ ] Contraste WCAG AA (texto oscuro sobre blanco)
- [ ] Labels en todos los inputs del formulario
- [ ] Navegación completa por teclado
- [ ] Focus visible en elementos interactivos
- [ ] Atributos `aria-` donde sea necesario
- [ ] Skip to main content link
- [ ] Lighthouse Accessibility: 90+

---

## 9. Rendimiento

- [ ] Lighthouse Performance: 90+
- [ ] next/image con formato optimizado
- [ ] Font loading con display=swap
- [ ] Sin JavaScript innecesario
- [ ] Animaciones solo en elementos visibles
- [ ] Prefetch de rutas críticas

---

## 10. Contenido — Secciones

| # | Sección | Componente | Notas |
|---|---------|-----------|-------|
| 1 | Hero | `Hero.tsx` | Un solo CTA (Discord). H1 con el mensaje principal. |
| 2 | Cómo funciona | `HowItWorks.tsx` | Pasos del recorrido. |
| 3 | Ofrécete como talento | `TalentSection.tsx` | Publicar perfil: stack, nivel, disponibilidad. |
| 4 | Publica como empresa | `CompaniesSection.tsx` | El lado contrario. |
| 5 | Torneos | `TournamentsSection.tsx` | Competiciones abiertas. |
| 6 | Networking | `NetworkingSection.tsx` | Canales por área. |
| 7 | Testimonios | `Testimonials.tsx` | 4-5 tarjetas maqueta. Preparado para foto + link. |
| 8 | Noticias | `News.tsx` | 3 entradas de ejemplo. |
| 9 | Newsletter | `Newsletter.tsx` | Franja antes del footer. No en hero. |
| 10 | Cierre | `CTA.tsx` | Último empujón. |
| 11 | Footer | `Footer.tsx` | Enlaces por bloques, redes, legal. |

---

## 11. Datos Fijos (no inventar)

```ts
export const SITE = {
  name: 'TechToJob',
  discord: 'https://discord.gg/h9FFgKdkRd',
  linkedin: 'https://www.linkedin.com/company/techtojob/',
  x: 'https://x.com/techtojob',
  instagram: 'https://www.instagram.com/techtojob',
  url: 'https://techtojob.com'
} as const
```

---

## 12. Entregable

- [ ] Repo público en GitHub con README
- [ ] Web desplegada (Vercel o Cloudflare Pages)
- [ ] Capturas desktop y móvil
- [ ] Captura Lighthouse (SEO 100, Accesibilidad 90+, Rendimiento 90+)
- [ ] Entrega antes del miércoles 23 a las 23:59

---

## 13. Tareas de Foundation

| # | Tarea | Dependencias | Estado |
|---|-------|-------------|--------|
| F-01 | Inicializar proyecto Next.js 14 + TS + Tailwind v4 | — | ⬜ |
| F-02 | Configurar Shadcn/ui | F-01 | ⬜ |
| F-03 | Configurar next-intl (ES/EN) | F-01 | ⬜ |
| F-04 | Crear estructura de directorios (Atomic Design) | F-01 | ⬜ |
| F-05 | Definir variables CSS + tokens de diseño | F-02 | ⬜ |
| F-06 | Configurar next/font (Sora, 3 pesos) | F-01 | ⬜ |
| F-07 | Configurar metadata base (layout.tsx) | F-03 | ⬜ |
| F-08 | Crear atoms básicos (Button, Badge, Input) | F-05 | ⬜ |
| F-09 | Crear messages/es.json con textos base | — | ⬜ |
| F-10 | Crear messages/en.json con textos base | F-09 | ⬜ |
| F-11 | Configurar Open Graph + JSON-LD | F-07 | ⬜ |
| F-12 | Verificar Lighthouse base | F-01 → F-11 | ⬜ |

---

## 14. Criterios de Aceptación

- [ ] El proyecto compila sin errores (`npm run build`)
- [ ] Las rutas `/es` y `/en` funcionan correctamente
- [ ] El LanguageSwitcher cambia idioma sin recargar
- [ ] La paleta CSS está definida como variables
- [ ] Shadcn/ui está configurado y funcionando
- [ ] La tipografía Sora se carga correctamente
- [ ] La estructura de carpetas sigue Atomic Design
- [ ] Los textos están en archivos separados (no hardcodeados)
- [ ] El layout tiene metadata configurada
- [ ] El proyecto es desplegable en Vercel sin cambios
