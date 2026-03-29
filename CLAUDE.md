# NeuroExp - Proyecto

## Que es
Web de NeuroExp, una clinica de terapia del habla y neurodesarrollo infantil en Herlev, Dinamarca. Dirigida por Florencia Guillen (logopeda). Atiende a familias multilingues/internacionales con ninos con trastornos del neurodesarrollo (TDAH, TEA, retrasos del lenguaje, etc.).

## Stack
- React 19 + React Router 7 + Vite 8
- Tailwind CSS 4 (config en `@theme extend` en `src/index.css`, plugin via `@tailwindcss/vite`)
- ESLint 9 (flat config en `eslint.config.js`)
- Deploy: Netlify (formulario de contacto integrado en `index.html`)

## Estructura
- `src/pages/` — paginas: IndexExp (home), AboutUs, WhatWeDo, WhatWeOffer, OurApproach, HomeTraining, ContactUs
- `src/components/ui/` — Navbar, Footer, Forms, Map, CardOurApproach, icons/
- `src/text/ourApproachText.ts` — contenido de cards de OurApproach externalizado
- `src/lib/utils.js` — utilidad `cn()` (clsx + tailwind-merge)
- `public/` — imagenes, video, PDFs

## Directivas de diseno

### Tono visual
Infantil pero profesional. La web debe transmitir calidez y confianza a los padres. Colores suaves, formas redondeadas, pero con estructura clara y legible.

### Paleta de colores
Definir una paleta parametrizada en CSS variables (`index.css` via `@theme extend`). Los colores actuales son:
- Fondo: degradado peach (#ffe5d4) a crema (#fff6e1)
- Acentos: sky-200 (azul claro para highlights de texto y titulos)
- Cards: white/50 con shadow
- Navbar/Footer: violet-100
- Botones: sky-500, indigo-200
- Texto: gray-700/800

Toda decision de color debe respetar contraste WCAG AA minimo.

### Accesibilidad (a11y)
- Contraste WCAG AA en todos los textos
- `aria-label` en todos los iconos y elementos interactivos
- Navegacion accesible por teclado (incluido dropdown de Services)
- `alt` descriptivos en todas las imagenes
- Dark mode: debe funcionar y verse bien. Los colores ya estan parametrizados en `:root` y `.dark`
- `loading="lazy"` en iframes y imagenes no criticas

### Layout
- Limitar el ancho maximo del contenido principal (max-w-7xl o similar con mx-auto) para que no se estire en pantallas grandes
- Navbar: resaltar la pagina activa
- Paginas con mucho texto: usar cards, secciones claras, jerarquia visual
- Imagenes: nunca deformar — usar `object-cover` con dimensiones controladas
- Responsivo: mobile-first, breakpoints sm/md/lg

### Contenido
- Parametrizar textos en archivos JSON/TS separados (como ya se hace en `ourApproachText.ts`) para facilitar edicion y futura internacionalizacion
- Separar datos de presentacion

### Navegacion
- El boton "Services" en la navbar debe ser clickable y llevar a una pagina indice de servicios (o abrir el dropdown)
- Resaltar el link activo en la navbar

### Codigo
- Named exports preferiblemente
- No dejar console.log en produccion
- No dejar codigo comentado
