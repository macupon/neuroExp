# Bugs y Mejoras - NeuroExp

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

### 5. Codigo comentado dentro de archivos activos
- `src/components/ui/Forms.jsx` — eslint-disable directives
- `src/components/ui/Navbar.jsx:22-39` — bloque useEffect comentado

### 6. PlaneIcon.jsx local no se usa en ningun sitio (borrar)

## Mejoras

### 7. Consistencia en exports
Mezcla de `export default` y `export const` sin patron claro. Unificar a named exports.

### 8. Accesibilidad (a11y)
- Iconos sociales sin `aria-label`
- Dropdown "Services" en Navbar depende de `:hover` — no accesible por teclado
- Falta `alt` descriptivo en algunas imagenes

### 9. CSS redundante
- `invisible hidden` es redundante
- `w-full lg:w-full` no aporta nada
- Clases Tailwind repetidas entre paginas

### 10. Estructura de carpetas
- `PfdFile.jsx` — typo: deberia ser `PdfFile.jsx`. Ademas, un visor PDF no es un icono, mover fuera de `/icons/`

### 11. Iframe Google Maps
- Agregar `loading="lazy"` y `referrerpolicy="no-referrer"`
