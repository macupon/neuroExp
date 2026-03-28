# Bugs y Mejoras - NeuroExp

## Actualizaciones completadas

| Paquete | Antes | Ahora |
|---------|-------|-------|
| `react` / `react-dom` | 18.2 | 19.2.4 |
| `@types/react` / `@types/react-dom` | 18.x | 19.x |
| `@radix-ui/react-label` | 2.0.2 | 2.1.8 |
| `@radix-ui/react-radio-group` | 1.1.3 | 1.3.8 |
| `@radix-ui/react-slot` | 1.0.2 | 1.2.4 |
| `@radix-ui/react-toast` | 1.1.5 | 1.2.15 |
| `@react-spring/parallax` | 9.7.3 | 10.0.3 |
| `embla-carousel` / `embla-carousel-react` | 8.0.0-rc19 | 8.6.0 |
| `lucide-react` | 0.312 | 1.7.0 |
| `react-hook-form` | 7.49.3 | 7.72.0 |
| `@hookform/resolvers` | 3.3.4 | 5.2.2 |
| `react-toastify` | 10.0.5 | 11.0.5 |
| `react-router-dom` | 6.21.3 | 6.30.3 (latest v6) |
| Vulnerabilidades HIGH | varias | resueltas con npm audit fix |

> `react-router-dom` se mantiene en v6 porque v7 elimina `BrowserRouter`/`Routes`/`Route`/`Link`
> y requiere migrar a un modelo de rutas completamente diferente.

## Actualizaciones pendientes (breaking changes)

### 15. Tailwind CSS 3.4 -> 4.x
Reescritura completa:
- Elimina `tailwind.config.js` — config pasa a CSS con `@theme`
- Elimina `postcss.config.js` — usa plugin de Vite nativo
- `@tailwind base/components/utilities` se reemplaza por `@import "tailwindcss"`
- `@apply` cambia de sintaxis
- `tailwindcss-animate` se reemplaza por `tw-animate-css`
- Los colores HSL de shadcn/ui cambian de formato

### 16. ESLint 8 -> 10 (flat config)
- Elimina `.eslintrc.cjs` — usa `eslint.config.js` (flat config)
- Plugins cambian de formato de configuracion
- `eslint-plugin-react-hooks` v4 -> v7
- `eslint-plugin-react-refresh` v0.4 -> v0.5

### 17. Vite 5 -> 8 + @vitejs/plugin-react 6
Resuelve las 3 vulnerabilidades moderate restantes de esbuild (solo afectan dev server, no produccion).

### 18. React Router 6 -> 7
Requiere migrar de `BrowserRouter`/`Routes`/`Route` a la nueva API de react-router v7 (file-based routing o `createBrowserRouter`).

## Bugs

### 1. [CRITICAL] Formulario crashea si no se selecciona un radio button
**Archivo:** `src/components/ui/Forms.jsx:27-35`
`querySelector('input:checked')` devuelve `null` si el usuario no selecciona nada, y `.value` sobre `null` lanza `TypeError`.

### 2. [CRITICAL] `handleSubmit` no previene el envio del formulario
**Archivo:** `src/components/ui/Forms.jsx:20`
`event.preventDefault()` esta comentado y el parametro `event` no esta declarado. El form tiene `action="/"`, asi que navega a `/` en lugar de procesar los datos.

### 3. [BUG] `PlaneIcon` local no retorna nada
**Archivo:** `src/components/ui/icons/PlaneIcon.jsx:1`
Arrow function con `{}` sin `return`. Devuelve `undefined`. Ademas, `IndexExp.jsx` importa `PlaneIcon` desde `lucide-react`, no del archivo local, asi que este componente esta muerto.

### 4. [BUG] console.log en produccion
- `src/components/ui/Navbar.jsx:19` — `console.log("MenuOn state changed:", menuOn)`
- `src/components/ui/Navbar.jsx:42` — `console.log(menuRef.current)`
- `src/components/ui/Forms.jsx:39` — `console.log("Form submitted with:", ...)`

## Codigo muerto

### 5. Archivos 100% comentados (borrar)
- `src/components/demo/RadioForm.jsx`
- `src/components/demo/ProfileForm.jsx`
- `src/components/ui/Form.jsx`

### 6. Codigo comentado dentro de archivos activos
- `src/components/ui/Forms.jsx` — ToastContainer, toast, eslint-disable directives
- `src/components/ui/Navbar.jsx:22-39` — bloque useEffect comentado

### 7. PlaneIcon.jsx local no se usa en ningun sitio (borrar)

## Mejoras

### 8. Migrar formulario a react-hook-form + zod
Ya tienes `react-hook-form`, `@hookform/resolvers` y `zod` instalados pero no los usas. El formulario actual usa refs manuales con querySelector — fragil e imperativo. Migrar a controlled form con validacion.

### 9. Consistencia en exports
Mezcla de `export default` y `export const` sin patron claro. Unificar a named exports.

### 10. Accesibilidad (a11y)
- Iconos sociales sin `aria-label`
- Dropdown "Services" en Navbar depende de `:hover` — no accesible por teclado
- Falta `alt` descriptivo en algunas imagenes

### 11. CSS redundante
- `invisible hidden` es redundante
- `w-full lg:w-full` no aporta nada
- Clases Tailwind repetidas entre paginas

### 12. Estructura de carpetas
- `PfdFile.jsx` — typo: deberia ser `PdfFile.jsx`. Ademas, un visor PDF no es un icono, mover fuera de `/icons/`

### 13. Iframe Google Maps
- Agregar `loading="lazy"` y `referrerpolicy="no-referrer"`
