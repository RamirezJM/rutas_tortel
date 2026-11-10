const hitosImg = '/images/rutas/naturaleza/hitos/';
const thumbnailsImg = '/images/rutas/naturaleza/thumbnails/';
const iconosImg = '/images/rutas/naturaleza/iconos/';

export default {

  id: 'naturaleza',
  nombre: 'Naturaleza y Cultura',
  bajada_titulo: 'El paisaje que compartimos',
  descripcion_card:
    'En Tortel, el bosque, el agua y la vida del pueblo se entrelazan a cada paso. Esta ruta invita a recorrer esa relación a través de pasarelas, miradores y espacios culturales, observando de cerca musgos, líquenes, chilcos y otras especies del bosque austral, mientras aparecen esculturas, lugares de encuentro y expresiones vinculadas a la historia y los oficios locales. Desde las rocas cubiertas de vegetación hasta el arroyo, la playa y la desembocadura del río, el recorrido propone descubrir cómo naturaleza y cultura conviven y dan forma al paisaje cotidiano de Tortel.',
  descripcion_ruta: [
    'En Tortel, el paisaje se construye a partir de una relación constante entre el entorno natural y las formas de vida de sus habitantes. El bosque se extiende entre las viviendas, la vegetación crece sobre las rocas y las pasarelas permiten desplazarse por un territorio donde el agua está siempre presente.',
    'Esta ruta invita a observar esas relaciones desde distintas perspectivas. A lo largo del recorrido, los pequeños detalles de la vegetación, los cambios del terreno y las vistas hacia la desembocadura permiten conocer la diversidad de ambientes que conviven en un mismo lugar.',
    'También aparecen esculturas, espacios de encuentro y expresiones culturales que muestran cómo las personas han utilizado, interpretado y transformado su entorno. Cada uno ofrece una oportunidad para descubrir los vínculos entre el paisaje, los conocimientos locales y la vida cotidiana.',
    'Naturaleza y Cultura propone recorrer Tortel con una mirada atenta, reconociendo que aquello que llamamos paisaje es también un espacio compartido, donde distintas formas de vida se encuentran y se relacionan.'
  ],
  caracteristicas: [
    {
      titulo: '01. La vida del bosque austral',
      descripcion: 'Descubre la diversidad de especies que habitan el entorno de Tortel. Musgos, líquenes, helechos y otras plantas permiten observar cómo la vegetación crece y se adapta a las condiciones de humedad, luz y relieve'
    },
    {
      titulo: '02. El agua y sus paisajes',
      descripcion: 'Desde los pequeños arroyos hasta la desembocadura del río, reconoce la presencia del agua y su influencia en los distintos ambientes que forman parte del paisaje de Tortel.'
    },
    {
      titulo: '03. El arte en el espacio público',
      descripcion: 'Esculturas, plazas y otros espacios culturales permiten descubrir distintas formas de representar el territorio, expresar la identidad local y relacionarse con el entorno.'
    },
    {
      titulo: '04. Un territorio compartido',
      descripcion: 'Observa cómo las pasarelas, los miradores y las construcciones conviven con la vegetación y el relieve, revelando las distintas maneras en que las personas habitan y transforman el paisaje.'
    }
  ],
  recorrido: {
    introduccion: 'Las pasarelas de Tortel permiten explorar la localidad a pie, pero su trazado incluye escaleras, pendientes y desniveles. Antes de comenzar, considera estas recomendaciones',
    consejos: [
      {
        consejo: 'Calzado y vestimenta',
        descripcion: 'utiliza zapatos cómodos, con buena adherencia, y lleva ropa impermeable. Las pasarelas de madera pueden volverse resbaladizas con la lluvia.'
      },
      {
        consejo: 'Condiciones físicas',
        descripcion: 'el recorrido requiere subir y bajar escaleras, por lo que puede resultar exigente para personas con movilidad reducida. No es una ruta universalmente accesible.'
      },
      {
        consejo: 'Tiempo y ritmo',
        descripcion: 'realiza el recorrido a tu propio ritmo y considera algunas pausas para explorar los puntos de interés.'
      },
      {
        consejo: 'Respeto por el entorno',
        descripcion: 'las pasarelas son también espacios de circulación cotidiana para los habitantes de Tortel. Respeta los accesos a las viviendas y evita obstruir el paso.'
      }
    ]
  },

  imagen_portada: '/images/rutas/naturaleza/naturaleza-card.webp',
  galeria: [
    '/images/rutas/naturaleza/galeria/1-escalera-mirador.webp',
    '/images/rutas/naturaleza/galeria/2-biblioteca.webp',
    '/images/rutas/naturaleza/galeria/3-playa.webp'
  ],
  color: '#EE779C',
  modalidad: 'autoguiada, peatonal',
  duracion: '3 horas',
  dificultad: 'Media',
  distancia: '3 kilometros',
  acceso: 'gratuito',
  hitos: [
    {
      id: 1,
      nombre: 'Hito 1 — Rotonda',
      descripcion:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam maiores dolore, distinctio quisquam ex quae voluptatem tenetur quas, quam, quis quod beatae recusandae porro totam quia asperiores fugiat quibusdam quo corporis? Omnis maiores nisi ducimus, officiis asperiores tempora odio sapiente?',
      coordenadas: [-47.795865, -73.531423],
      thumbnail: `${thumbnailsImg}1-rotonda-sm.webp`,
      icono: `${iconosImg}1-rotonda.webp`,
      galeria: [
        `${hitosImg}1-rotonda-a.webp`,
        `${hitosImg}1-rotonda-b.webp`
      ],
      creditos: {
        autor: 'Rutas de Tortel',
        año: 2026,
        licencia: 'Todos los derechos reservados',
        terminos: 'https://rutasdetortel.cl/terminos-de-uso',
      },
    },
    {
      id: 2,
      nombre: 'Hito 2 — Escalera principal',
      descripcion: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam maiores dolore, distinctio quisquam ex quae voluptatem tenetur quas, quam, quis quod beatae recusandae porro totam quia asperiores fugiat quibusdam quo corporis? Omnis maiores nisi ducimus, officiis asperiores tempora odio sapiente?',
      coordenadas: [-47.796611, -73.533620],
      thumbnail: `${thumbnailsImg}2-escalera-sm.webp`,
      icono: `${iconosImg}2-escalera-principal.webp`,
      galeria: [
        `${hitosImg}2-escalera.webp`,
      ],
      creditos: {
        autor: 'Rutas de Tortel',
        año: 2026,
        licencia: 'Todos los derechos reservados',
        terminos: 'https://rutasdetortel.cl/terminos-de-uso',
      },
    },
    {
      id: 3,
      nombre: 'Hito 3 — La Barda',
      descripcion: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam maiores dolore, distinctio quisquam ex quae voluptatem tenetur quas, quam, quis quod beatae recusandae porro totam quia asperiores fugiat quibusdam quo corporis? Omnis maiores nisi ducimus, officiis asperiores tempora odio sapiente?',
      coordenadas: [-47.798269, -73.535809],
      thumbnail: '/images/rutas/hero-lg.jpg',
      icono: `${iconosImg}3-la-barda.webp`,
      galeria: [
        '/images/hitos/colonial-3-a.jpg',
        '/images/hitos/colonial-3-b.jpg'
      ],

      creditos: {
        autor: 'Rutas de Tortel',
        año: 2026,
        licencia: 'Todos los derechos reservados',
        terminos: 'https://rutasdetortel.cl/terminos-de-uso',
      },
    },
    {
      id: 4,
      nombre: 'Hito 4 — Microbosque',
      descripcion: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam maiores dolore, distinctio quisquam ex quae voluptatem tenetur quas, quam, quis quod beatae recusandae porro totam quia asperiores fugiat quibusdam quo corporis? Omnis maiores nisi ducimus, officiis asperiores tempora odio sapiente?',
      coordenadas: [-47.801975, -73.535132],
      thumbnail: '/images/rutas/hero-lg.jpg',
      icono: `${iconosImg}4-microbosque.webp`,
      galeria: [
        '/images/hitos/colonial-3-a.jpg',
        '/images/hitos/colonial-3-b.jpg'
      ],

      creditos: {
        autor: 'Rutas de Tortel',
        año: 2026,
        licencia: 'Todos los derechos reservados',
        terminos: 'https://rutasdetortel.cl/terminos-de-uso',
      },
    },
    {
      id: 5,
      nombre: 'Hito 5 — Plaza San Pedro',
      descripcion: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam maiores dolore, distinctio quisquam ex quae voluptatem tenetur quas, quam, quis quod beatae recusandae porro totam quia asperiores fugiat quibusdam quo corporis? Omnis maiores nisi ducimus, officiis asperiores tempora odio sapiente?',
      coordenadas: [-47.802022, -73.535499],
      thumbnail: '/images/rutas/hero-lg.jpg',
      icono: `${iconosImg}5-plaza-san-pedro.webp`,
      galeria: [
        '/images/hitos/colonial-3-a.jpg',
        '/images/hitos/colonial-3-b.jpg'
      ],
      creditos: {
        autor: 'Rutas de Tortel',
        año: 2026,
        licencia: 'Todos los derechos reservados',
        terminos: 'https://rutasdetortel.cl/terminos-de-uso',
      },
    },
    {
      id: 6,
      nombre: 'Hito 6 — Costanera',
      descripcion: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam maiores dolore, distinctio quisquam ex quae voluptatem tenetur quas, quam, quis quod beatae recusandae porro totam quia asperiores fugiat quibusdam quo corporis? Omnis maiores nisi ducimus, officiis asperiores tempora odio sapiente?',
      coordenadas: [-47.802477, -73.537030],
      thumbnail: `${thumbnailsImg}6-costanera-sm.webp`,
      icono: `${iconosImg}6-costanera.webp`,
      galeria: [
        `${hitosImg}6-costanera.webp`
      ],
      creditos: {
        autor: 'Rutas de Tortel',
        año: 2026,
        licencia: 'Todos los derechos reservados',
        terminos: 'https://rutasdetortel.cl/terminos-de-uso',
      },
    },
    {
      id: 7,
      nombre: 'Hito 7 — Biblioteca pública Luis Cruz Martínez',
      descripcion: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam maiores dolore, distinctio quisquam ex quae voluptatem tenetur quas, quam, quis quod beatae recusandae porro totam quia asperiores fugiat quibusdam quo corporis? Omnis maiores nisi ducimus, officiis asperiores tempora odio sapiente?',
      coordenadas: [-47.803296, -73.537247],
      thumbnail: `${thumbnailsImg}7-biblioteca-sm.webp`,
      icono: `${iconosImg}7-biblioteca.webp`,
      galeria: [
        `${hitosImg}7-biblioteca-a.webp`,
        `${hitosImg}7-biblioteca-b.webp`
      ],
      creditos: {
        autor: 'Rutas de Tortel',
        año: 2026,
        licencia: 'Todos los derechos reservados',
        terminos: 'https://rutasdetortel.cl/terminos-de-uso',
      },
    },
    {
      id: 8,
      nombre: 'Hito 8 — Plaza Kaweskar',
      descripcion: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam maiores dolore, distinctio quisquam ex quae voluptatem tenetur quas, quam, quis quod beatae recusandae porro totam quia asperiores fugiat quibusdam quo corporis? Omnis maiores nisi ducimus, officiis asperiores tempora odio sapiente?',
      coordenadas: [-47.803888, -73.538361],
      thumbnail: '/images/rutas/hero-lg.jpg',
      icono: `${iconosImg}8-plaza-kaweskar.webp`,
      galeria: [
        '/images/hitos/colonial-3-a.jpg',
        '/images/hitos/colonial-3-b.jpg'],
      creditos: {
        autor: 'Rutas de Tortel',
        año: 2026,
        licencia: 'Todos los derechos reservados',
        terminos: 'https://rutasdetortel.cl/terminos-de-uso',
      },
    },
    {
      id: 9,
      nombre: 'Hito 9 — Escultura Tejuelero',
      descripcion: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam maiores dolore, distinctio quisquam ex quae voluptatem tenetur quas, quam, quis quod beatae recusandae porro totam quia asperiores fugiat quibusdam quo corporis? Omnis maiores nisi ducimus, officiis asperiores tempora odio sapiente?',
      coordenadas: [-47.803985, -73.539029],
      thumbnail: `${thumbnailsImg}9-tejuelero-sm.webp`,
      icono: `${iconosImg}9-tejuelero.webp`,
      galeria: [
        `${hitosImg}9-tejuelero.webp`
      ],
      creditos: {
        autor: 'Rutas de Tortel',
        año: 2026,
        licencia: 'Todos los derechos reservados',
        terminos: 'https://rutasdetortel.cl/terminos-de-uso',
      },
    },
    {
      id: 10,
      nombre: 'Hito 10 — Casa de la Cultura',
      descripcion: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam maiores dolore, distinctio quisquam ex quae voluptatem tenetur quas, quam, quis quod beatae recusandae porro totam quia asperiores fugiat quibusdam quo corporis? Omnis maiores nisi ducimus, officiis asperiores tempora odio sapiente?',
      coordenadas: [-47.804005, -73.539166],
      thumbnail: `${thumbnailsImg}10-casa-cultura-sm.webp`,
      icono: `${iconosImg}10-casa-cultura.webp`,
      galeria: [
        `${hitosImg}10-casa-cultura-a.webp`,
        `${hitosImg}10-casa-cultura-b.webp`
      ],
      creditos: {
        autor: 'Rutas de Tortel',
        año: 2026,
        licencia: 'Todos los derechos reservados',
        terminos: 'https://rutasdetortel.cl/terminos-de-uso',
      },
    },
    {
      id: 11,
      nombre: 'Hito 11 — Centro de Interpretación Ambiental Copas',
      descripcion: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam maiores dolore, distinctio quisquam ex quae voluptatem tenetur quas, quam, quis quod beatae recusandae porro totam quia asperiores fugiat quibusdam quo corporis? Omnis maiores nisi ducimus, officiis asperiores tempora odio sapiente?',
      coordenadas: [-47.804026, -73.539332],
      thumbnail: `${thumbnailsImg}11-centro-interpretacion-sm.webp`,
      icono: `${iconosImg}11-centro-interpretacion.webp`,
      galeria: [
        `${hitosImg}11-centro-interpretacion-a.webp`
      ],
      creditos: {
        autor: 'Rutas de Tortel',
        año: 2026,
        licencia: 'Todos los derechos reservados',
        terminos: 'https://rutasdetortel.cl/terminos-de-uso',
      },
    },
    {
      id: 12,
      nombre: 'Hito 12 — Escultura joven artesana Kaweskar',
      descripcion: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam maiores dolore, distinctio quisquam ex quae voluptatem tenetur quas, quam, quis quod beatae recusandae porro totam quia asperiores fugiat quibusdam quo corporis? Omnis maiores nisi ducimus, officiis asperiores tempora odio sapiente?',
      coordenadas: [-47.804072, -73.539126],
      thumbnail: `${thumbnailsImg}12-escultura-artesana-sm.webp`,
      icono: `${iconosImg}12-escultura-artesana.webp`,
      galeria: [
        `${hitosImg}12-escultura-artesana.webp`
      ],

      creditos: {
        autor: 'Rutas de Tortel',
        año: 2026,
        licencia: 'Todos los derechos reservados',
        terminos: 'https://rutasdetortel.cl/terminos-de-uso',
      },
    },

    {
      id: 13,
      nombre: 'Hito 13 — Escultura Charkush Hallef',
      descripcion: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam maiores dolore, distinctio quisquam ex quae voluptatem tenetur quas, quam, quis quod beatae recusandae porro totam quia asperiores fugiat quibusdam quo corporis? Omnis maiores nisi ducimus, officiis asperiores tempora odio sapiente?',
      coordenadas: [-47.804090, -73.539172],
      thumbnail: '/images/rutas/hero-lg.jpg',
      icono: `${iconosImg}13-charkush-hallef.webp`,
      galeria: [
        '/images/hitos/colonial-3-a.jpg',
        '/images/hitos/colonial-3-b.jpg'
      ],
      creditos: {
        autor: 'Rutas de Tortel',
        año: 2026,
        licencia: 'Todos los derechos reservados',
        terminos: 'https://rutasdetortel.cl/terminos-de-uso',
      },
    },
    {
      id: 14,
      nombre: 'Hito 14 — Mirador Las Antenas',
      descripcion: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam maiores dolore, distinctio quisquam ex quae voluptatem tenetur quas, quam, quis quod beatae recusandae porro totam quia asperiores fugiat quibusdam quo corporis? Omnis maiores nisi ducimus, officiis asperiores tempora odio sapiente?',
      coordenadas: [-47.803614, -73.541006],
      thumbnail: '/images/rutas/hero-lg.jpg',
      icono: `${iconosImg}14-mirador.webp`,
      galeria: [
        '/images/hitos/colonial-3-a.jpg',
        '/images/hitos/colonial-3-b.jpg'
      ],
      creditos: {
        autor: 'Rutas de Tortel',
        año: 2026,
        licencia: 'Todos los derechos reservados',
        terminos: 'https://rutasdetortel.cl/terminos-de-uso',
      },
    },
    {
      id: 15,
      nombre: 'Hito 15 — Plaza Orompello',
      descripcion: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam maiores dolore, distinctio quisquam ex quae voluptatem tenetur quas, quam, quis quod beatae recusandae porro totam quia asperiores fugiat quibusdam quo corporis? Omnis maiores nisi ducimus, officiis asperiores tempora odio sapiente?',
      coordenadas: [-47.805164, -73.540798],
      thumbnail: `${thumbnailsImg}15-plaza-orompello-sm.webp`,
      icono: `${iconosImg}15-plaza-orompello.webp`,
      galeria: [
        `${hitosImg}15-plaza-orompello-a.webp`,
        `${hitosImg}15-plaza-orompello-b.webp`
      ],
      creditos: {
        autor: 'Rutas de Tortel',
        año: 2026,
        licencia: 'Todos los derechos reservados',
        terminos: 'https://rutasdetortel.cl/terminos-de-uso',
      },
    },
    {
      id: 16,
      nombre: 'Hito 16 — Arroyo Playa Ancha',
      descripcion: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam maiores dolore, distinctio quisquam ex quae voluptatem tenetur quas, quam, quis quod beatae recusandae porro totam quia asperiores fugiat quibusdam quo corporis? Omnis maiores nisi ducimus, officiis asperiores tempora odio sapiente?',
      coordenadas: [-47.804706, -73.542247],
      thumbnail: `${thumbnailsImg}16-arroyo-sm.webp`,
      icono: `${iconosImg}16-arroyo.webp`,
      galeria: [
        `${hitosImg}16-arroyo-a.webp`,
        `${hitosImg}16-arroyo-b.webp`
      ],
      creditos: {
        autor: 'Rutas de Tortel',
        año: 2026,
        licencia: 'Todos los derechos reservados',
        terminos: 'https://rutasdetortel.cl/terminos-de-uso',
      },
    },
    {
      id: 17,
      nombre: 'Hito 17 — Playa',
      descripcion: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam maiores dolore, distinctio quisquam ex quae voluptatem tenetur quas, quam, quis quod beatae recusandae porro totam quia asperiores fugiat quibusdam quo corporis? Omnis maiores nisi ducimus, officiis asperiores tempora odio sapiente?',
      coordenadas: [-47.805758, -73.547631],
      thumbnail: `${thumbnailsImg}17-playa-sm.webp`,
      icono: `${iconosImg}17-playa.webp`,
      galeria: [
        `${hitosImg}17-playa-a.webp`,
        `${hitosImg}17-playa-b.webp`,
        `${hitosImg}17-playa-c.webp`
      ],
      creditos: {
        autor: 'Rutas de Tortel',
        año: 2026,
        licencia: 'Todos los derechos reservados',
        terminos: 'https://rutasdetortel.cl/terminos-de-uso',
      },
    },
    {
      id: 18,
      nombre: 'Hito 18 — Parque Costumbrista',
      descripcion: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam maiores dolore, distinctio quisquam ex quae voluptatem tenetur quas, quam, quis quod beatae recusandae porro totam quia asperiores fugiat quibusdam quo corporis? Omnis maiores nisi ducimus, officiis asperiores tempora odio sapiente?',
      coordenadas: [-47.805668, -73.551078],
      thumbnail: `${thumbnailsImg}18-parque-costumbrista-sm.webp`,
      icono: `${iconosImg}18-parque-costumbrista.webp`,
      galeria: [
        `${hitosImg}18-parque-costumbrista-a.webp`,
        `${hitosImg}18-parque-costumbrista-b.webp`,
        `${hitosImg}18-parque-costumbrista-c.webp`
      ],
      creditos: {
        autor: 'Rutas de Tortel',
        año: 2026,
        licencia: 'Todos los derechos reservados',
        terminos: 'https://rutasdetortel.cl/terminos-de-uso',
      },
    },
    {
      id: 19,
      nombre: 'Hito 19 — Desembocadura Río Baker',
      descripcion: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam maiores dolore, distinctio quisquam ex quae voluptatem tenetur quas, quam, quis quod beatae recusandae porro totam quia asperiores fugiat quibusdam quo corporis? Omnis maiores nisi ducimus, officiis asperiores tempora odio sapiente?',
      coordenadas: [-47.805517, -73.551718],
      thumbnail: `${thumbnailsImg}19-desembocadura-sm.webp`,
      icono: `${iconosImg}19-desembocadura.webp`,
      galeria: [
        `${hitosImg}19-desembocadura-a.webp`,
        `${hitosImg}19-desembocadura-b.webp`
      ],
      creditos: {
        autor: 'Rutas de Tortel',
        año: 2026,
        licencia: 'Todos los derechos reservados',
        terminos: 'https://rutasdetortel.cl/terminos-de-uso',
      },
    },
  ],
  trazado: [
    //ruta principal
    [
      [-47.795865, -73.531423],
      [-47.795892, -73.531583],
      [-47.796037, -73.531822],
      [-47.796009, -73.531944],
      [-47.796437, -73.532188],
      [-47.796381, -73.532434],
      [-47.796353, -73.532501],
      [-47.796169, -73.532970],
      [-47.796244, -73.533040],
      [-47.796297, -73.533111],
      [-47.796480, -73.533410],
      [-47.796624, -73.533655],
      [-47.796768, -73.533832],
      [-47.796897, -73.533978],
      [-47.797019, -73.534062],
      [-47.797091, -73.534056],
      [-47.797108, -73.534140],
      [-47.797255, -73.534258],
      [-47.797535, -73.534898],
      [-47.797647, -73.535108],
      [-47.797812, -73.535367],
      [-47.797977, -73.535539],
      [-47.798080, -73.535666],
      [-47.798119, -73.535724],
      [-47.798188, -73.535771],
      [-47.798475, -73.535793],
      [-47.798550, -73.535803],
      [-47.798603, -73.535808],
      [-47.798844, -73.535826],
      [-47.798888, -73.535823],
      [-47.799099, -73.535733],
      [-47.799572, -73.535519],
      [-47.800018, -73.535435],
      [-47.800073, -73.535431],
      [-47.800301, -73.535515],
      [-47.800518, -73.535598],
      [-47.800754, -73.535395],
      [-47.800837, -73.535320],
      [-47.800837, -73.535232],
      [-47.800853, -73.535149],
      [-47.801003, -73.534815],
      [-47.801040, -73.534763],
      [-47.801076, -73.534723],
      [-47.801186, -73.534600],
      [-47.801215, -73.534575],
      [-47.801399, -73.534569],
      [-47.801625, -73.534559],
      [-47.801676, -73.534567],
      [-47.801708, -73.534591],
      [-47.801726, -73.534594],
      [-47.801739, -73.534637],
      [-47.801845, -73.534767],
      [-47.801856, -73.534826],
      [-47.801914, -73.535002],
      [-47.802011, -73.535126],
      [-47.802038, -73.535248],
      [-47.802117, -73.535381],
      [-47.802118, -73.535440],
      [-47.802098, -73.535520],
      [-47.802039, -73.535644],
      [-47.802010, -73.535691],
      [-47.801979, -73.535720],
      [-47.801896, -73.535811],
      [-47.801862, -73.535852],
      [-47.801814, -73.535921],
      [-47.801716, -73.536097],
      [-47.801692, -73.536155],
      [-47.801673, -73.536247],
      [-47.801672, -73.536303],
      [-47.801686, -73.536372],
      [-47.801721, -73.536448],
      [-47.801776, -73.536535],
      [-47.801816, -73.536583],
      [-47.801887, -73.536636],
      [-47.802237, -73.536893],
      [-47.802347, -73.536947],
      [-47.802449, -73.536998],
      [-47.802733, -73.537138],
      [-47.803026, -73.537337],
      [-47.803118, -73.537183],
      [-47.803563, -73.536958],
      [-47.803698, -73.537001],
      [-47.803719, -73.536873],
      [-47.803945, -73.536944],
      [-47.803925, -73.537122],
      [-47.804255, -73.537754],
      [-47.804252, -73.537833],
      [-47.803966, -73.538188],
      [-47.803913, -73.538147],
      [-47.803883, -73.538120],
      [-47.803747, -73.538012],
      [-47.803678, -73.538239],
      [-47.803563, -73.538250],
      [-47.803484, -73.538498],
      [-47.803506, -73.538532],
      [-47.803632, -73.538858],
      [-47.803709, -73.538947],
      [-47.803802, -73.539005]
    ],
    // trazado Mirador Cerro Las Antenas
    [
      [-47.803802, -73.539005],
      [-47.803944, -73.539066],
      [-47.804013, -73.539245],
      [-47.803813, -73.539580],
      [-47.803624, -73.540075],
      [-47.803635, -73.540196],
      [-47.803593, -73.540355],
      [-47.803709, -73.540556],
      [-47.803697, -73.540610],
      [-47.803640, -73.540746],
      [-47.803561, -73.540834]
    ],
    // trazado Costanera
    [
      [-47.803802, -73.539005],
      [-47.803970, -73.538904],
      [-47.804247, -73.539322],
      [-47.804552, -73.539737]
    ],
    // trazado centro ambiental
    [
      [-47.804013, -73.539245],
      [-47.804083, -73.539525],
      [-47.804118, -73.539640],
      [-47.804170, -73.539708],
      [-47.804247, -73.539739],
      [-47.804322, -73.539717],
      [-47.804421, -73.539727],
      [-47.804552, -73.539737]
    ],
    //trazado principal
    [
      [-47.804552, -73.539737],
      [-47.804587, -73.539776],
      [-47.804753, -73.539957],
      [-47.804892, -73.540080],
      [-47.805117, -73.540602],
      [-47.805099, -73.540927],
      [-47.805025, -73.541147],
      [-47.805037, -73.541199],
      [-47.805014, -73.541448],
      [-47.804886, -73.541879],
      [-47.804883, -73.541964],
      [-47.804873, -73.542124],
      [-47.804858, -73.542389],
      [-47.805068, -73.542720],
      [-47.805148, -73.542876],
      [-47.805240, -73.543057],
      [-47.805331, -73.543237],
      [-47.805595, -73.543782],
      [-47.805546, -73.543967],
      [-47.805368, -73.544795],
      [-47.805278, -73.545236],
      [-47.805241, -73.545517],
      [-47.805262, -73.545937],
      [-47.805230, -73.546086],
      [-47.805177, -73.546201],
      [-47.805030, -73.546296],
      [-47.805007, -73.546318],
      [-47.805154, -73.546629],
      [-47.805969, -73.547953],
      [-47.806430, -73.548693],
      [-47.806366, -73.548783],
      [-47.805952, -73.550627],
      [-47.805806, -73.550816],
      [-47.805421, -73.551120]

    ]
  ]
}
