# Raíz Viva - Reto Estado

Proyecto realizado con React y Vite para el reto de estado.

## Descripción

Raíz Viva es una página web sencilla para una verdulería en línea. El sitio simula un negocio local que promociona productos frescos de huerto y permite seleccionar la cantidad de artículos mediante contadores independientes en cada tarjeta de producto.

El objetivo principal del proyecto es practicar el manejo de estado en React usando `useState`.

## Objetivo del reto

Crear un componente de tarjetas de productos que incluya:

* Imagen del producto.
* Título.
* Descripción.
* Contador con cantidad de artículos.
* Botones para aumentar y disminuir la cantidad.
* Estilos con CSS.
* Diseño responsivo.

## Tecnologías utilizadas

* React
* Vite
* JavaScript
* HTML
* CSS

## Conceptos aplicados

* Componentes funcionales.
* Props.
* Estado con `useState`.
* Eventos con `onClick`.
* Renderizado de listas con `.map()`.
* Uso de `key` en listas.
* Estilos responsivos con CSS.
* Organización de imágenes en la carpeta `public`.

## Productos incluidos

* Papa
* Jitomate
* Cebolla
* Ajos
* Chile
* Zanahoria

## Funcionalidades

* Muestra una portada principal del negocio.
* Muestra tarjetas de productos.
* Cada tarjeta tiene su propia imagen, nombre y descripción.
* Cada producto tiene un contador independiente.
* El botón `+` aumenta la cantidad del producto.
* El botón `-` disminuye la cantidad del producto.
* El contador no permite valores menores a cero.
* Cada tarjeta incluye un enlace de más información.
* La página se adapta a computadora, tablet y celular.

## Fuentes de información

Los enlaces de “Más información” dirigen a páginas de `gob.mx` relacionadas con productos agrícolas en México.

## Estructura del proyecto

```txt
RETO-ESTADO/
  public/
    images/
      portada.png
      papa.png
      jitomate.png
      cebolla.png
      ajos.png
      chile.png
      zanahoria.png
  src/
    App.jsx
    App.css
    index.css
    main.jsx
  index.html
  package.json
  README.md
  vite.config.js
```

## Cómo ejecutar el proyecto

Instalar dependencias:

```bash
npm install
```

Ejecutar el servidor de desarrollo:

```bash
npm run dev
```

Abrir en el navegador la dirección que muestra Vite, por ejemplo:

```txt
http://localhost:5173/
```

## Autor

© 2026 Carlos ChG Dev. Todos los derechos reservados.

Estudiante en Academia X
