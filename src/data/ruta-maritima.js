const hitosImg = '/images/rutas/maritima/hitos/';
const thumbnailsImg = '/images/rutas/maritima/thumbnails/';

export default {

  id: 'maritima',
  nombre: 'Ruta Marítima',
  descripcion:
    'Descubrir Tortel desde el agua es descubrirla desde otra perspectiva. Esta ruta marítima invita a navegar por la bahía y contemplar el pueblo, sus pasarelas y el bosque desde un paisaje que cambia a medida que avanza el recorrido. La navegación permite acercarse a la historia de Tortel y a su estrecha relación con el agua, mientras se observan aves y otros elementos del entorno natural. Una experiencia para disfrutar la bahía con otros ritmos y comprender por qué navegar ha sido parte fundamental de la vida en este territorio.',
  imagen_portada: '/images/rutas/hero-lg.jpg',
  galeria: [
    '/images/rutas/maritima/galeria/1-sector-base.webp',
    '/images/rutas/maritima/galeria/2-pasarelas.webp',
    '/images/rutas/maritima/galeria/3-rio-baker.webp'
  ],
  color: '#ED7133',
  duracion: '1,5 horas',
  dificultad: 'Difícil',
  distancia: '4 kilometros',
  hitos: [
    {
      id: 1,
      nombre: 'Hito 1 — Muelle señora Carmen (Muelle 3)',
      descripcion:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam maiores dolore, distinctio quisquam ex quae voluptatem tenetur quas, quam, quis quod beatae recusandae porro totam quia asperiores fugiat quibusdam quo corporis? Omnis maiores nisi ducimus, officiis asperiores tempora odio sapiente?',
      coordenadas: [-47.797639, -73.534000],
      thumbnail: '/images/rutas/naturaleza/naturaleza-1.webp',
      galeria: [
        '/images/hitos/colonial-1-a.jpg',
        '/images/hitos/colonial-1-b.jpg',
        '/images/hitos/colonial-1-c.jpg',
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
      nombre: 'Hito 2 — Poblamiento de la bahía',
      descripcion: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam maiores dolore, distinctio quisquam ex quae voluptatem tenetur quas, quam, quis quod beatae recusandae porro totam quia asperiores fugiat quibusdam quo corporis? Omnis maiores nisi ducimus, officiis asperiores tempora odio sapiente?',
      coordenadas: [-47.797834, -73.533402],
      thumbnail: '/images/rutas/hero-lg.jpg',
      galeria: [
        '/images/hitos/colonial-2-a.jpg',
        '/images/hitos/colonial-2-b.jpg'
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
      nombre: 'Hito 3 — Paisaje austral',
      descripcion: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam maiores dolore, distinctio quisquam ex quae voluptatem tenetur quas, quam, quis quod beatae recusandae porro totam quia asperiores fugiat quibusdam quo corporis? Omnis maiores nisi ducimus, officiis asperiores tempora odio sapiente?',
      coordenadas: [-47.799526, -73.534217],
      thumbnail: `${thumbnailsImg}3-paisaje-austral-sm.webp`,
      galeria: [
        `${hitosImg}3-paisaje-austral.webp`
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
      nombre: 'Hito 4 — Antiguos recorridos',
      descripcion: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam maiores dolore, distinctio quisquam ex quae voluptatem tenetur quas, quam, quis quod beatae recusandae porro totam quia asperiores fugiat quibusdam quo corporis? Omnis maiores nisi ducimus, officiis asperiores tempora odio sapiente?',
      coordenadas: [-47.800428, -73.534531],
      thumbnail: '/images/rutas/hero-lg.jpg',
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
      id: 5,
      nombre: 'Hito 5 — Bajo las pasarelas',
      descripcion: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam maiores dolore, distinctio quisquam ex quae voluptatem tenetur quas, quam, quis quod beatae recusandae porro totam quia asperiores fugiat quibusdam quo corporis? Omnis maiores nisi ducimus, officiis asperiores tempora odio sapiente?',
      coordenadas: [-47.801719, -73.534069],
      thumbnail: `${thumbnailsImg}5-bajo-las-pasarelas-sm.webp`,
      galeria: [
        `${hitosImg}5-bajo-las-pasarelas-a.webp`,
        `${hitosImg}5-bajo-las-pasarelas-b.webp`,
        `${hitosImg}5-bajo-las-pasarelas-c.webp`
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
      nombre: 'Hito 6 — Sector Base',
      descripcion: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam maiores dolore, distinctio quisquam ex quae voluptatem tenetur quas, quam, quis quod beatae recusandae porro totam quia asperiores fugiat quibusdam quo corporis? Omnis maiores nisi ducimus, officiis asperiores tempora odio sapiente?',
      coordenadas: [-47.803792, -73.535913],
      thumbnail: `${thumbnailsImg}6-sector-base-sm.webp`,
      galeria: [
        `${hitosImg}6-sector-base-a.webp`,
        `${hitosImg}6-sector-base-b.webp`
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
      nombre: 'Hito 7 — La turbina',
      descripcion: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam maiores dolore, distinctio quisquam ex quae voluptatem tenetur quas, quam, quis quod beatae recusandae porro totam quia asperiores fugiat quibusdam quo corporis? Omnis maiores nisi ducimus, officiis asperiores tempora odio sapiente?',
      coordenadas: [-47.804508, -73.536676],
      thumbnail: '/images/rutas/hero-lg.jpg',
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
      id: 8,
      nombre: 'Hito 8 — Cultura y comunidad',
      descripcion: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam maiores dolore, distinctio quisquam ex quae voluptatem tenetur quas, quam, quis quod beatae recusandae porro totam quia asperiores fugiat quibusdam quo corporis? Omnis maiores nisi ducimus, officiis asperiores tempora odio sapiente?',
      coordenadas: [-47.804402, -73.538624],
      thumbnail: `${thumbnailsImg}8-cultura-comunidad-sm.webp`,
      galeria: [
        `${hitosImg}8-cultura-comunidad-a.webp`,
        `${hitosImg}8-cultura-comunidad-b.webp`,
        `${hitosImg}8-cultura-comunidad-c.webp`
      ],
      creditos: {
        autor: 'Rutas de Tortel',
        año: 2026,
        licencia: 'Todos los derechos reservados',
        terminos: 'https://rutasdetortel.cl/terminos-de-uso',
      },
    },
    {
      id: 9,
      nombre: 'Hito 9 — Nueva costanera',
      descripcion: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam maiores dolore, distinctio quisquam ex quae voluptatem tenetur quas, quam, quis quod beatae recusandae porro totam quia asperiores fugiat quibusdam quo corporis? Omnis maiores nisi ducimus, officiis asperiores tempora odio sapiente?',
      coordenadas: [-47.805144, -73.539484],
      thumbnail: `${thumbnailsImg}9-nueva-costanera-sm.webp`,
      galeria: [
        `${hitosImg}9-nueva-costanera-a.webp`,
        `${hitosImg}9-nueva-costanera-b.webp`
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
      nombre: 'Hito 10 — Hacia el fiordo',
      descripcion: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam maiores dolore, distinctio quisquam ex quae voluptatem tenetur quas, quam, quis quod beatae recusandae porro totam quia asperiores fugiat quibusdam quo corporis? Omnis maiores nisi ducimus, officiis asperiores tempora odio sapiente?',
      coordenadas: [-47.805895, -73.540866],
      thumbnail: `${thumbnailsImg}10-hacia-el-fiordo-sm.webp`,
      galeria: [
        `${hitosImg}11-hacia-el-fiordo.webp`
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
      nombre: 'Hito 11 — Muelle La Bertola (Muelle 9)',
      descripcion: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam maiores dolore, distinctio quisquam ex quae voluptatem tenetur quas, quam, quis quod beatae recusandae porro totam quia asperiores fugiat quibusdam quo corporis? Omnis maiores nisi ducimus, officiis asperiores tempora odio sapiente?',
      coordenadas: [-47.805736, -73.543595],
      thumbnail: `${thumbnailsImg}11-muelle-la-bertola-sm.webp`,
      galeria: [
        `${hitosImg}11-muelle-la-bertola.webp`
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
      nombre: 'Hito 12 — Playa',
      descripcion: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam maiores dolore, distinctio quisquam ex quae voluptatem tenetur quas, quam, quis quod beatae recusandae porro totam quia asperiores fugiat quibusdam quo corporis? Omnis maiores nisi ducimus, officiis asperiores tempora odio sapiente?',
      coordenadas: [-47.807531, -73.548637],
      imagen: '/images/rutas/hero-lg.jpg',
      galeria: ['/images/hitos/colonial-3-a.jpg', '/images/hitos/colonial-3-b.jpg'],
      creditos: {
        autor: 'Rutas de Tortel',
        año: 2026,
        licencia: 'Todos los derechos reservados',
        terminos: 'https://rutasdetortel.cl/terminos-de-uso',
      },
    },
    {
      id: 13,
      nombre: 'Hito 13 — Río Baker',
      descripcion: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam maiores dolore, distinctio quisquam ex quae voluptatem tenetur quas, quam, quis quod beatae recusandae porro totam quia asperiores fugiat quibusdam quo corporis? Omnis maiores nisi ducimus, officiis asperiores tempora odio sapiente?',
      coordenadas: [-47.793645, -73.547785],
      thumbnail: `${thumbnailsImg}13-rio-baker-sm.webp`,
      galeria: [
        `${hitosImg}13-rio-baker-a.webp`,
        `${hitosImg}13-rio-baker-b.webp`,
        `${hitosImg}13-rio-baker-c.webp`
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
      nombre: 'Hito 14 — Aeródromo',
      descripcion: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam maiores dolore, distinctio quisquam ex quae voluptatem tenetur quas, quam, quis quod beatae recusandae porro totam quia asperiores fugiat quibusdam quo corporis? Omnis maiores nisi ducimus, officiis asperiores tempora odio sapiente?',
      coordenadas: [-47.785239, -73.528048],
      thumbnail: `${thumbnailsImg}14-aerodromo-sm.webp`,
      galeria: [
        `${hitosImg}14-aerodromo-a.webp`,
        `${hitosImg}14-aerodromo-b.webp`,
        `${hitosImg}14-aerodromo-c.webp`
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
    [-47.797639, -73.534000],
    [-47.797834, -73.533402],
    [-47.798043, -73.534033],
    [-47.798480, -73.534451],
    [-47.798963, -73.534528],
    [-47.799526, -73.534217],
    [-47.800428, -73.534531],
    [-47.800725, -73.534244],
    [-47.801198, -73.534026],
    [-47.801719, -73.534069],
    [-47.802154, -73.534355],
    [-47.802468, -73.534897],
    [-47.802688, -73.535625],
    [-47.802870, -73.535985],
    [-47.803151, -73.536066],
    [-47.803792, -73.535913],
    [-47.804164, -73.536099],
    [-47.804508, -73.536676],
    [-47.804633, -73.537343],
    [-47.804620, -73.537938],
    [-47.804422, -73.538295],
    [-47.804402, -73.538624],
    [-47.804573, -73.538771],

    [-47.804811, -73.538806],
    [-47.805013, -73.539087],
    [-47.805144, -73.539484],

    [-47.805895, -73.540866],
    [-47.805736, -73.543595]
  ],
  // trazado opcional
  trazadoOpcional: [
    [-47.805736, -73.543595],
    [-47.805860, -73.544461],
    [-47.806263, -73.545508],
    [-47.806893, -73.546474],
    [-47.807407, -73.547407],
    [-47.807531, -73.548637],
    [-47.807354, -73.550584],
    [-47.806835, -73.551583],
    [-47.806216, -73.551817],
    [-47.805571, -73.551889],
    [-47.805356, -73.551818],
    [-47.805153, -73.551614],
    [-47.804701, -73.550997],
    [-47.804408, -73.550708],
    [-47.804095, -73.550409],
    [-47.803842, -73.550251],
    [-47.803645, -73.550249],
    [-47.803303, -73.550422],
    [-47.802674, -73.550931],
    [-47.801968, -73.551588],
    [-47.801733, -73.552087],
    [-47.801593, -73.552428],
    [-47.801439, -73.552625],
    [-47.800968, -73.552868],
    [-47.800631, -73.553001],
    [-47.800164, -73.553041],
    [-47.799691, -73.552905],
    [-47.799337, -73.552652],
    [-47.798624, -73.551515],
    [-47.798319, -73.550887],
    [-47.797981, -73.550704],
    [-47.797213, -73.550573],
    [-47.796778, -73.550497],
    [-47.795985, -73.550303],
    [-47.795345, -73.549465],
    [-47.794469, -73.548509],
    [-47.793645, -73.547785],
    [-47.792307, -73.544250],
    [-47.790155, -73.539447],
    [-47.788697, -73.537613],
    [-47.786384, -73.535742],
    [-47.785499, -73.534478],
    [-47.784962, -73.532454],
    [-47.784906, -73.530312],
    [-47.785029, -73.528964],
    [-47.785239, -73.528048]

  ]
}
