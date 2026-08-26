# Mezcal Mayalen — sitio web

Sitio estático de una sola página. Español por defecto, inglés con el
interruptor del encabezado. Sin dependencias externas: tipografías, imágenes y
scripts viven en este repositorio.

## Dirección de diseño

El sitio está construido como un **herbario**: pliegos de papel con la acuarela
del maguey montada y su etiqueta al pie, ficha de especimen con guía punteada y
la nota de cata como prosa, sin recuadros. La paleta es papel, tinta y el color
que aportan las propias acuarelas.

Es un sistema propio de Mayalen y deliberadamente distinto del de Mezcal
Machetazo, que es oscuro, dorado y de tipografía de palo seco. Aquí:

| | Mayalen | Machetazo |
|---|---|---|
| Fondo | Papel `#FBF8F2` | Oscuro |
| Acento | Sin acento; el color lo pone la acuarela | Dorado |
| Tipografía | Cormorant Garamond + EB Garamond, sin ninguna sans | Caudex + DIN condensada |
| Rótulos | Versalitas y cursivas | Mayúsculas espaciadas |
| Protagonista | La lámina botánica | La fotografía y la botella |

```
index.html          Página completa (ES en el HTML, EN en el diccionario de js/main.js)
css/style.css       Sistema de herbario
js/main.js          Umbral de edad, idioma, revelados, formulario
assets/web/         Imágenes optimizadas que usa el sitio (~4 MB)
assets/fonts/       Cormorant Garamond y EB Garamond (woff2, subconjunto latino)
assets/bottles|agaves|photos|logos|maps/   Originales en alta resolución
CNAME               mezcalmayalen.com
```

## Ver el sitio en local

```bash
npx -y serve "/Users/christophermir/Documents/Claude/Projects/Mezcal Mayalen/Website" -l 4371
```

## Publicar en GitHub Pages

1. Crear el repositorio en GitHub (por ejemplo `mezcal-mayalen`).
2. Desde esta carpeta:

```bash
git remote add origin git@github.com:USUARIO/mezcal-mayalen.git && git push -u origin main
```

3. En GitHub: **Settings → Pages → Source: Deploy from a branch → `main` / `(root)`**.
4. En **Settings → Pages → Custom domain** escribir `mezcalmayalen.com` y activar
   **Enforce HTTPS** una vez que el certificado se emita.

## DNS en Turbify

| Tipo  | Nombre | Valor |
|-------|--------|-------|
| A     | `@`    | `185.199.108.153` |
| A     | `@`    | `185.199.109.153` |
| A     | `@`    | `185.199.110.153` |
| A     | `@`    | `185.199.111.153` |
| CNAME | `www`  | `USUARIO.github.io.` |

Conviene retirar los registros A o de reenvío que Turbify tenga apuntando a su
propio hospedaje. Verificación:

```bash
dig +short mezcalmayalen.com
```

## Pendientes para dejarlo en producción

- **Formulario**: `index.html` trae el destino de ejemplo
  `https://formspree.io/f/YOUR_FORM_ID`. Al crear el formulario en
  [formspree.io](https://formspree.io) se sustituye ese identificador. Mientras
  tanto el botón muestra un aviso con la dirección de correo.
- **Correo**: el sitio publica `hola@mezcalmayalen.com`. Confirmar que ese buzón
  existe o cambiarlo.
- **Redes**: el enlace de Instagram apunta a `@mezcalmachetazo`, que es el que
  traía el sitio de Wix. Actualizar si Mayalen tiene cuenta propia.

## Notas de contenido

- Los textos son **originales**, escritos para este sitio en registro de cuaderno
  de naturalista. El sitio anterior en Wix sirvió como fuente de datos (agaves,
  regiones, graduaciones, notas de cata), y no de redacción.
- Binomios latinos publicados: *Agave cupreata* (Cupreata y Guerrero),
  *A. potatorum* (Tobalá), *A. karwinskii* (Barril y Cuishe),
  *A. americana* (Coyote). Conviene que el Maestro Mezcalero los confirme.
- Los rangos de maduración de Tobalá, Barril, Coyote y Cuishe son estimaciones
  de referencia para la especie; el sitio de Wix únicamente publicaba el de
  Cupreata. **Revisarlos antes de publicar.**
- Cupreata aparecía como «8 a 16 años» en español y «12 to 18 years» en inglés
  en el sitio anterior. Aquí se unificó a **8 a 16 años** en ambos idiomas.
- El umbral de edad recuerda la respuesta durante la sesión del navegador; el
  idioma elegido se guarda de forma permanente.
