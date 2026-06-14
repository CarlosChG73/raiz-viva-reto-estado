// Importa useState desde React
import { useState } from "react";

// Importa los estilos
import "./App.css";

// Ruta base para que las imágenes funcionen en local y en GitHub Pages
const rutaBase = import.meta.env.BASE_URL;

// Datos de los productos
const productos = [
  {
    id: 1,
    nombre: "Papa",
    descripcion:
      "Papa fresca de huerto, ideal para guisos, sopas y platillos caseros.",
    imagen: `${rutaBase}images/papa.png`,
    enlace:
      "https://www.gob.mx/agricultura/articulos/la-papa-un-alimento-con-historia-y-cultura",
  },
  {
    id: 2,
    nombre: "Jitomate",
    descripcion:
      "Jitomate fresco, de gran sabor y muy utilizado en la cocina mexicana.",
    imagen: `${rutaBase}images/jitomate.png`,
    enlace:
      "https://www.gob.mx/agricultura/articulos/el-jitomate-hortaliza-mexicana-de-importancia-mundial?idiom=es",
  },
  {
    id: 3,
    nombre: "Cebolla",
    descripcion:
      "Cebolla natural, perfecta para dar sabor y aroma a tus alimentos.",
    imagen: `${rutaBase}images/cebolla.png`,
    enlace:
      "https://www.gob.mx/agricultura/articulos/cebolla-capas-de-sabor-y-textura?idiom=es",
  },
  {
    id: 4,
    nombre: "Ajos",
    descripcion:
      "Ajo fresco con aroma intenso, ideal para cocinar platillos tradicionales.",
    imagen: `${rutaBase}images/ajos.png`,
    enlace:
      "https://www.gob.mx/agricultura/prensa/se-ubica-mexico-como-el-noveno-exportador-mundial-de-ajos?idiom=es",
  },
  {
    id: 5,
    nombre: "Chile",
    descripcion:
      "Chile fresco, producto agrícola con identidad cultural y gastronómica.",
    imagen: `${rutaBase}images/chile.png`,
    enlace:
      "https://www.gob.mx/agricultura/articulos/chile-un-producto-agricola-con-identidad-cultural-y-gastronomica?idiom=es",
  },
  {
    id: 6,
    nombre: "Zanahoria",
    descripcion:
      "Zanahoria fresca, crujiente y nutritiva para comidas saludables.",
    imagen: `${rutaBase}images/zanahoria.png`,
    enlace: "https://www.gob.mx/agricultura/articulos/zanahoria-una-joya-mundial",
  },
];

// Componente de tarjeta
function ProductoCard({ producto }) {
  // Estado propio de cada producto
  const [cantidad, setCantidad] = useState(0);

  // Aumenta usando el valor anterior
  function aumentarCantidad() {
    setCantidad((cantidadAnterior) => cantidadAnterior + 1);
  }

  // Disminuye sin bajar de cero
  function disminuirCantidad() {
    setCantidad((cantidadAnterior) => {
      if (cantidadAnterior > 0) {
        return cantidadAnterior - 1;
      }

      return 0;
    });
  }

  return (
    <article className="producto-card">
      <img
        className="producto-imagen"
        src={producto.imagen}
        alt={producto.nombre}
      />

      <div className="producto-contenido">
        <h3>{producto.nombre}</h3>

        <p>{producto.descripcion}</p>

        <a
          className="producto-link"
          href={producto.enlace}
          target="_blank"
          rel="noreferrer"
        >
          Más información
        </a>

        <div className="contador">
          <button type="button" onClick={disminuirCantidad}>
            -
          </button>

          <span>{cantidad}</span>

          <button type="button" onClick={aumentarCantidad}>
            +
          </button>
        </div>
      </div>
    </article>
  );
}

// Componente principal
function App() {
  return (
    <div className="app">
      <header className="hero">
        <div className="hero-contenedor">
          <div className="hero-texto">
            <p className="etiqueta">Venta directa del productor</p>

            <h1>Raíz Viva</h1>

            <p>
              Verdulería en línea con productos frescos de huerto, cosechados
              con cuidado y pensados para una alimentación más natural.
            </p>
          </div>

          <div className="hero-imagen-contenedor">
            <img
              className="hero-imagen"
              src={`${rutaBase}images/portada.png`}
              alt="Productores con verduras frescas"
            />
          </div>
        </div>
      </header>

      <main>
        <section className="productos-seccion">
          <div className="productos-header">
            <h2>Productos disponibles</h2>

            <p>
              Elige productos frescos del huerto y ajusta la cantidad que deseas.
            </p>
          </div>

          <div className="productos-grid">
            {productos.map((producto) => (
              <ProductoCard key={producto.id} producto={producto} />
            ))}
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>© 2026 Carlos ChG Dev. Todos los derechos reservados.</p>
        <small>Estudiante en Academia X</small>
      </footer>
    </div>
  );
}

// Exporta el componente principal
export default App;