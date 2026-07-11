# Fernando Plomería — Sitio web (Astro)

Landing page completa para Fernando Plomería (piscinas y casa), armada en
Astro. Pensada para cargar rápido, verse profesional en celular y llevar
al visitante a contactar por WhatsApp.

## Cómo correrlo

1. Instalar Node.js 18 o superior.
2. Instalar dependencias:
   ```
   npm install
   ```
3. Levantar el entorno de desarrollo (con recarga automática):
   ```
   npm run dev
   ```
   Se abre en `http://localhost:4321`
4. Generar la versión final para publicar:
   ```
   npm run build
   ```
   Los archivos listos quedan en la carpeta `dist/`.
5. Ver la versión final antes de publicar:
   ```
   npm run preview
   ```

## Antes de publicarlo — cosas para reemplazar

- **Número de WhatsApp**: buscar `5491100000000` en estos 3 archivos y
  reemplazarlo por el número real (con código de país, sin espacios ni
  guiones):
  - `src/components/Header.astro`
  - `src/components/Hero.astro`
  - `src/components/FinalCTA.astro`
  - `src/components/WhatsAppButton.astro`
  - `src/components/Footer.astro`

- **Mail de contacto**: en `src/components/Footer.astro`, reemplazar
  `contacto@fernandoplomeria.com.ar`.

- **Redes sociales**: en `src/components/Footer.astro`, completar los
  `href="#"` de Instagram y Facebook con los links reales.

- **Dominio**: en `astro.config.mjs`, cambiar `site:` por el dominio real
  una vez que esté registrado.

- **Testimonios**: los que están en `src/components/Testimonials.astro`
  son de ejemplo. Reemplazar por reseñas reales de clientes (o dejar
  los de ejemplo hasta juntar reseñas de verdad).

## Estructura del proyecto

```
src/
  layouts/Layout.astro       -> SEO, meta tags, estructura base del HTML
  components/
    Header.astro             -> Barra de navegación fija
    Hero.astro                -> Sección principal de apertura
    Benefits.astro            -> Franja de beneficios
    Services.astro            -> Grilla de servicios
    WhyUs.astro                -> Estadísticas ("por qué elegirnos")
    Process.astro              -> Los 4 pasos de trabajo
    Testimonials.astro         -> Reseñas de clientes
    Coverage.astro              -> Zona de cobertura (CABA/GBA)
    FAQ.astro                    -> Preguntas frecuentes (acordeón)
    FinalCTA.astro               -> Llamado a la acción final
    Footer.astro                  -> Pie de página
    WhatsAppButton.astro           -> Botón flotante de WhatsApp
  pages/index.astro            -> Une todas las secciones
  styles/global.css             -> Colores, tipografías, estilos base
  scripts/observeReveal.js       -> Animaciones al hacer scroll
public/
  images/logo.jpg               -> Logo del cliente
  robots.txt                     -> Indicaciones para buscadores
```

## Deploy

Este proyecto está listo para desplegar en Vercel:

```
npm i -g vercel
vercel
```

O conectando el repositorio de GitHub directamente desde el dashboard de
Vercel (build command: `npm run build`, output directory: `dist`).

## Notas técnicas

- El diseño usa `<details>`/`<summary>` nativos para el FAQ, así que
  funciona incluso si JavaScript falla en cargar.
- Las animaciones respetan `prefers-reduced-motion` (usuarios que
  desactivaron animaciones en su sistema no las van a ver).
- Los datos estructurados (`schema.org/Plumber`) en el `<head>` ayudan a
  que Google entienda que es un negocio de plomería con cobertura en
  CABA y GBA — importante para SEO local.
- No hay dependencias externas de UI: todos los iconos son SVG propios,
  no se cargan librerías de iconos ni imágenes pesadas (fuera del logo).
