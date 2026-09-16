📋 Torneo #2 · Qué hay que construir

La landing es la puerta de entrada del proyecto. Tiene que explicar qué somos, a quién le sirve y conseguir que la gente entre al Discord.

━━━━━━━━━━━━━━━━━━━━

⚠️ Los textos los escribes tú

No damos la copia hecha porque forma parte de lo que se compite y puntúa.

Lo que sí damos es un brief con lo que tiene que comunicar cada sección: brief-techtojob.md

Léelo antes de escribir nada, que ahí está el posicionamiento y eso no se cambia.

━━━━━━━━━━━━━━━━━━━━

🧩 Secciones obligatorias

**1. Hero** — Qué es TechToJob y por qué no es un portal de empleo más. Un solo botón: entrar al Discord.

**2. Cómo funciona** — El recorrido desde que llegas hasta que sale una oportunidad.

**3. Ofrécete como talento** — Publicar tu perfil: stack, nivel, disponibilidad.

**4. Publica como empresa** — El lado contrario: publicas lo que buscas y accedes a perfiles.

**5. Torneos** — Competiciones abiertas como esta.

**6. Networking** — Canales por área y gente del sector.

**7. Testimonios** — Qué dice la gente que ya está dentro. Maqueta cuatro o cinco tarjetas con nombre y una frase. Para el torneo son de relleno: los recogeremos reales en el servidor antes de publicar la web, y se podrán verificar con el perfil de cada persona. Ten en cuenta que en la versión final llevarán foto y enlace al perfil (seguramente de linkedin), así que deja sitio para eso en el diseño.

**8. Noticias** — Listado de novedades. Maqueta tres entradas de ejemplo.

**9. Newsletter** — Formulario de suscripción. Va mejor en una franja antes del footer que arriba: si lo pones en el hero compite con el botón del Discord y no se elige ninguno.

**10. Cierre** — Último empujón antes del footer.

**11. Footer** — Enlaces por bloques, redes y legal.

━━━━━━━━━━━━━━━━━━━━

El orden es orientativo menos el hero y el footer. Si tu diseño mejora reordenando, hazlo y cuéntalo en el README.

🎨 Torneo #2 · Identidad y requisitos
Lo que os damos nosotros

Está todo en /assets: el logo en todas sus versiones (color, negro, blanco y SVG), la paleta y la tipografía.

Paleta: 
#2f3436 · 
#84c0bf · 
#ffffff
Tipografía: Sora → https://fonts.google.com/specimen/Sora

Los tres colores y la tipografía son fijos y tienen que dominar el diseño. Puedes añadir grises intermedios para textos y bordes, y un color de acento si te hace falta, pero como apoyo y sin sustituir a los base.

⚠️ Aviso con el contraste, que va a pasar: el verde sobre blanco no llega al mínimo para texto pequeño. Úsalo en fondos, botones y detalles, no en párrafos.

━━━━━━━━━━━━━━━━━━━━

🖼️ Las imágenes las ponéis vosotros

Ilustraciones e iconos, con dos condiciones:

De uso libre comercial — Unsplash, Pexels, unDraw, Lucide, Heroicons, Phosphor y similares
Fuente apuntada en el README

La web ganadora se publica de verdad, así que no podemos arriesgarnos con licencias raras.

━━━━━━━━━━━━━━━━━━━━

🛠️ Con qué se puede hacer
Recomendado: Next.js con TypeScript y Tailwind, que es el stack final y así se integra tal cual
También vale: HTML, CSS y JS con Tailwind

Las dos vías compiten con la misma rúbrica y usar Next no suma puntos por sí solo. Si gana una entrega en HTML, el equipo la porta a Next y el autor entra en ese trabajo si le apetece.

━━━━━━━━━━━━━━━━━━━━

📐 Requisitos comunes
Tailwind obligatorio en las dos vías
Responsive real en móvil, tablet y escritorio
HTML semántico
Nada de plantillas compradas ni kits de componentes ya montados
Animaciones libres, pero que no estorben

━━━━━━━━━━━━━━━━━━━━

🤖 Sobre la IA

Se permite, tanto para código como para imágenes. Solo pedimos que lo digas al entregar. Tienes que entender y poder defender lo que entregas.

🔍 Torneo #2 · SEO (1/2)

El SEO no es algo que se añade al final, se construye con la página. Mientras maquetas hazte estas preguntas:

¿Google puede encontrar esto? ¿Puede entenderlo? ¿El contenido aparece al cargar o hay que esperar? ¿Es rápida? ¿Funciona en móvil?

━━━━━━━━━━━━━━━━━━━━

📝 El contenido es lo que más pesa

Google entiende de qué va una página por lo que dice.

❌ "Conectamos talento con oportunidades" → no posiciona para nada, nadie busca eso
✅ "Comunidad de desarrolladores y empresas tech en español"

Y que sea texto de verdad, no metido dentro de una imagen.

━━━━━━━━━━━━━━━━━━━━

🏗️ Estructura
Un solo h1 en toda la página, y que lleve el mensaje principal
Jerarquía de h2 y h3 sin saltos: los encabezados marcan estructura, no tamaño de letra
Usa header, nav, main, section, article, footer, button y a donde corresponda

Tailwind sirve para el estilo, no sustituye al HTML semántico. Un div dentro de un div dentro de un div no le dice nada a nadie.

Y un div con onClick no es un enlace. Si navega, es a o Link.

━━━━━━━━━━━━━━━━━━━━

🔗 Enlaces

Texto descriptivo siempre:

✅ "Ver ofertas de empleo tech"
❌ "haz clic aquí" · "leer más"

Y las URLs, aunque en la landing sean anclas, con nombres que se entiendan: /ofertas, no /page2. Es la misma lógica que usaremos luego para las páginas de oferta.

⚡ Torneo #2 · SEO (2/2)
🏷️ Metadata
lang="es"
title de 50 a 60 caracteres
description de 150 a 160
canonical y viewport

Si vas con Next, usa la Metadata API con title.template (%s | TechToJob) y metadataBase en el layout. Nada de títulos escritos a mano sueltos por ahí.

Añade también Open Graph y Twitter Card completos, con imagen de 1200×630, que es lo que se ve cuando alguien pega el enlace en Discord o LinkedIn. Compruébalo en opengraph.xyz antes de entregar.

Y un JSON-LD de tipo Organization con nombre, logo, URL y redes.

━━━━━━━━━━━━━━━━━━━━

🖼️ Imágenes
WebP o AVIF, nunca un PNG de dos megas
next/image si vas con Next
width y height siempre puestos, o el diseño salta al cargar
loading="lazy" en todo lo que esté por debajo del primer pantallazo, nunca en la imagen del hero

Y alt descriptivo de verdad:

✅ alt="Logo de TechToJob"
❌ alt="imagen"
❌ alt="empleo trabajo junior python developer" → eso es spam y penaliza

━━━━━━━━━━━━━━━━━━━━

🔤 Fuentes

Sora con next/font, o con preconnect y display=swap si vas en HTML.

Una fuente y tres pesos. No ocho variantes porque queden bonitas.

━━━━━━━━━━━━━━━━━━━━

🚫 Nada de trucos

No escondas texto lleno de keywords con hidden, opacity-0 o tamaño cero. Google lo detecta.

━━━━━━━━━━━━━━━━━━━━

✅ Antes de entregar

Pasa Lighthouse en modo móvil y adjunta la captura.

Objetivo: SEO en 100
Accesibilidad y rendimiento por encima de 90

Con todo lo anterior bien puesto se llega.

⚖️ Torneo #2 · Entrega y valoración

📦 Cómo se entrega

Repo público en GitHub con README
Enlace a la web desplegada (Cloudflare Pages o Vercel, las dos gratis)
Capturas de escritorio y móvil
Captura de Lighthouse

Antes del miércoles 23 a las 23:59. Nada del 24 en adelante.

Puede participar cualquiera del servidor, en solitario o en pareja. Si vais dos, decidlo al entregar.

━━━━━━━━━━━━━━━━━━━━

⚖️ Cómo se puntúa

Diseño y jerarquía visual — 25% Que entre por los ojos y que se entienda a la primera qué es TechToJob. Uso del logo y la paleta.

Contenido y mensaje — 25% Tus textos. Que estén todas las secciones, que cada público encuentre lo suyo rápido y que el mensaje sea el del brief. El relleno se nota, y copiar el ejemplo orientativo penaliza aquí.

Responsive — 15% Se prueba en móvil real, no solo en el inspector.

Código y estructura — 15% HTML semántico, secciones bien separadas, nombres claros, sin código muerto. Que se pueda mantener entre varios.

SEO — 10% Los dos mensajes de arriba. Se comprueba con Lighthouse y a mano.

Accesibilidad y rendimiento — 10% Contraste, textos alternativos, navegación con teclado, etiquetas en el formulario, imágenes optimizadas.

Si hay empate, decide el criterio de diseño.

━━━━━━━━━━━━━━━━━━━━

🏅 Premios
La landing ganadora se convierte en la web oficial de TechToJob
Crédito visible en la web y en el repo
Rol en el servidor
Difusión de tu perfil en nuestras redes

Y seguimos buscando más: si alguien puede aportar algo (licencias, cursos, suscripciones) que me escriba y lo sumamos antes del cierre.

━━━━━━━━━━━━━━━━━━━━

📅 Recordad: entregas hasta el miércoles 23, revisión el jueves 24 y ganador el viernes 25.


⚠️ ACTUALIZACIÓN DE LAS BASES — Torneo #2

Dos cosas nuevas a partir de ahora. Ninguna os obliga a rehacer el diseño de lo que llevéis.

━━━━━━━━━━━━━━━━━━━━

💻 CÓDIGO EN INGLÉS

Variables, funciones, componentes y commits, todo en inglés. Es el estándar y evita acabar con getUsuarios() por ahí.

━━━━━━━━━━━━━━━━━━━━

🌍 PREPARADO PARA MULTIIDIOMA

La web va en español. Pero el código tiene que quedar listo para añadir inglés más adelante sin reescribirla.

Lo único obligatorio: los textos agrupados en un archivo aparte, nunca incrustados por todo el código.
· Con Next → messages/es.json
· Con HTML → un objeto de textos o un archivo aparte

No hay que traducir nada. Solo que el día que abramos el inglés sea rellenar un archivo.

Si ya lleváis parte hecha, esto es mover los textos a un sitio. No se toca el diseño.

━━━━━━━━━━━━━━━━━━━━

✨ OPCIONAL: entregar ya las dos versiones

Si te apetece, puedes entregar directamente en español e inglés. Todo estático, sin backend:

· Con Next → next-intl, rutas app/[locale]/ y generateStaticParams devolviendo ['es','en']
· Con HTML → dos archivos: index.html y en/index.html
· En los dos casos: hreflang cruzado, lang correcto en cada versión y selector de idioma que sea un enlace de verdad, no JS

La IA está permitida, así que la traducción se resuelve rápido. Eso sí, revisad que suene natural.

━━━━━━━━━━━━━━━━━━━━

⚖️ CÓMO AFECTA A LA RÚBRICA

La organización de los textos entra en "Código y estructura" (15%). Si entregáis las dos versiones, el hreflang y el lang suman en "SEO" (10%).

No sube el peso de ningún criterio.

━━━━━━━━━━━━━━━━━━━━

Cualquier duda en 💬│𝗖𝗛𝗔𝗥𝗟𝗔