const hitosImg = '/images/rutas/historica/hitos/';
const thumbnailsImg = '/images/rutas/historica/thumbnails/';

export default {

  id: 'historica',
  nombre: 'Pasarelas Históricas',
  descripcion:
    'Las pasarelas de Tortel no solo conectan distintos sectores del pueblo: también permiten recorrer su historia. Esta ruta invita a descubrir cómo fue creciendo la localidad, reconociendo antiguos espacios de encuentro, viviendas, servicios y lugares vinculados al trabajo y la vida comunitaria. A lo largo del recorrido, la madera aparece como parte fundamental de esta historia, desde la construcción de pasarelas y viviendas hasta la carpintería de ribera y otros saberes desarrollados en el territorio. Una forma de conocer Tortel siguiendo las huellas de quienes lo construyeron y habitaron a lo largo del tiempo.',
  imagen_portada: '/images/rutas/historicas-main.jpg',
  color: '#F2DC57',
  duracion: '2 horas',
  dificultad: 'Fácil',
  distancia: '1,5 kilometros',

  hitos: [
    {
      id: 1,
      nombre: 'Hito 1 — Muelle Juana Vidal (Muelle 1)',
      descripcion: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam maiores dolore, distinctio quisquam ex quae voluptatem tenetur quas, quam, quis quod beatae recusandae porro totam quia asperiores fugiat quibusdam quo corporis? Omnis maiores nisi ducimus, officiis asperiores tempora odio sapiente?',
      coordenadas: [-47.797992, -73.531748],
      thumbnail: `${thumbnailsImg}1-muelle-juana-vidal-sm.webp`,
      galeria: [
        `${hitosImg}1-muelle-juana-vidal.webp`
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
      nombre: 'Hito 2 — Casa familia Ayán',
      descripcion: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam maiores dolore, distinctio quisquam ex quae voluptatem tenetur quas, quam, quis quod beatae recusandae porro totam quia asperiores fugiat quibusdam quo corporis? Omnis maiores nisi ducimus, officiis asperiores tempora odio sapiente?',
      coordenadas: [-47.797868, -73.531491],
      thumbnail: `${thumbnailsImg}2-casa-ayan-sm.webp`,
      galeria: [
        `${hitosImg}2-casa-ayan.webp`
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
      nombre: 'Hito 3 — Plaza Elicura',
      descripcion: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam maiores dolore, distinctio quisquam ex quae voluptatem tenetur quas, quam, quis quod beatae recusandae porro totam quia asperiores fugiat quibusdam quo corporis? Omnis maiores nisi ducimus, officiis asperiores tempora odio sapiente?',
      coordenadas: [-47.798011, -73.53546],
      thumbnail: `${thumbnailsImg}3-plaza-elicura.webp`,
      galeria: [
        `${hitosImg}3-plaza-elicura-a.webp`,
        `${hitosImg}3-plaza-elicura-b.webp`,
        `${hitosImg}3-plaza-elicura-c.webp`
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
      nombre: 'Hito 4 — Estación de vacio Icafal',
      descripcion: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam maiores dolore, distinctio quisquam ex quae voluptatem tenetur quas, quam, quis quod beatae recusandae porro totam quia asperiores fugiat quibusdam quo corporis? Omnis maiores nisi ducimus, officiis asperiores tempora odio sapiente?',
      coordenadas: [-47.800615, -73.53566],
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
      id: 5,
      nombre: 'Hito 5 — Casa Caleta',
      descripcion: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam maiores dolore, distinctio quisquam ex quae voluptatem tenetur quas, quam, quis quod beatae recusandae porro totam quia asperiores fugiat quibusdam quo corporis? Omnis maiores nisi ducimus, officiis asperiores tempora odio sapiente?',
      coordenadas: [-47.801168, -73.53593],
      thumbnail: `${thumbnailsImg}5-casa-caleta-sm.webp`,
      galeria: [
        `${hitosImg}5-casa-caleta-a.webp`,
        `${hitosImg}5-casa-caleta-b.webp`
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
      nombre: 'Hito 6 — Iglesia de Dios Pentecostal',
      descripcion: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam maiores dolore, distinctio quisquam ex quae voluptatem tenetur quas, quam, quis quod beatae recusandae porro totam quia asperiores fugiat quibusdam quo corporis? Omnis maiores nisi ducimus, officiis asperiores tempora odio sapiente?',
      coordenadas: [-47.801295, -73.535775],
      thumbnail: `${thumbnailsImg}6-iglesia-pentecostal-sm.webp`,
      galeria: [
        `${hitosImg}6-iglesia-pentecostal-a.webp`,
        `${hitosImg}6-iglesia-pentecostal-b.webp`,
        `${hitosImg}6-iglesia-pentecostal-c.webp`
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
      nombre: 'Hito 7 — Pasarela Padre Antonio Ronchi',
      descripcion: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam maiores dolore, distinctio quisquam ex quae voluptatem tenetur quas, quam, quis quod beatae recusandae porro totam quia asperiores fugiat quibusdam quo corporis? Omnis maiores nisi ducimus, officiis asperiores tempora odio sapiente?',
      coordenadas: [-47.801453, -73.536332],
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
      nombre: 'Hito 8 — Primera Población Serviu',
      descripcion: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam maiores dolore, distinctio quisquam ex quae voluptatem tenetur quas, quam, quis quod beatae recusandae porro totam quia asperiores fugiat quibusdam quo corporis? Omnis maiores nisi ducimus, officiis asperiores tempora odio sapiente?',
      coordenadas: [-47.801607, -73.536906],
      thumbnail: `${thumbnailsImg}8-primera-poblacion-sm.webp`,
      galeria: [
        `${hitosImg}8-primera-poblacion-a.webp`,
        `${hitosImg}8-primera-poblacion-b.webp`
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
      nombre: 'Hito 9 — Cuartel de Bomberos',
      descripcion: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam maiores dolore, distinctio quisquam ex quae voluptatem tenetur quas, quam, quis quod beatae recusandae porro totam quia asperiores fugiat quibusdam quo corporis? Omnis maiores nisi ducimus, officiis asperiores tempora odio sapiente?',
      coordenadas: [-47.801759, -73.536726],
      thumbnail: `${thumbnailsImg}9-bomberos-sm.webp`,
      galeria: [
        `${hitosImg}9-bomberos.webp`
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
      nombre: 'Hito 10 — Escuela antigua',
      descripcion: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam maiores dolore, distinctio quisquam ex quae voluptatem tenetur quas, quam, quis quod beatae recusandae porro totam quia asperiores fugiat quibusdam quo corporis? Omnis maiores nisi ducimus, officiis asperiores tempora odio sapiente?',
      coordenadas: [-47.802538, -73.537858],
      thumbnail: `${thumbnailsImg}10-escuela-antigua-sm.webp`,
      galeria: [
        `${hitosImg}10-escuela-antigua-a.webp`,
        `${hitosImg}10-escuela-antigua-b.webp`],
      creditos: {
        autor: 'Rutas de Tortel',
        año: 2026,
        licencia: 'Todos los derechos reservados',
        terminos: 'https://rutasdetortel.cl/terminos-de-uso',
      },
    },
    {
      id: 11,
      nombre: 'Hito 11 — Capilla Nuestra Señora del Trabajo',
      descripcion: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam maiores dolore, distinctio quisquam ex quae voluptatem tenetur quas, quam, quis quod beatae recusandae porro totam quia asperiores fugiat quibusdam quo corporis? Omnis maiores nisi ducimus, officiis asperiores tempora odio sapiente?',
      coordenadas: [-47.803030, -73.537972],
      thumbnail: `${thumbnailsImg}11-capilla-catolica-sm.webp`,
      galeria: [
        `${hitosImg}11-capilla-catolica-a.webp`,
        `${hitosImg}11-capilla-catolica-b.webp`,
        `${hitosImg}11-capilla-catolica-c.webp`
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
      nombre: 'Hito 12 — Escultura Padre Antonio Ronchi',
      descripcion: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam maiores dolore, distinctio quisquam ex quae voluptatem tenetur quas, quam, quis quod beatae recusandae porro totam quia asperiores fugiat quibusdam quo corporis? Omnis maiores nisi ducimus, officiis asperiores tempora odio sapiente?',
      coordenadas: [-47.803063, -73.537894],
      thumbnail: `${thumbnailsImg}12-escultura-padre-ronchi-sm.webp`,
      galeria: [
        `${hitosImg}12-escultura-padre-ronchi.webp`
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
      nombre: 'Hito 13 — Radio Madipro',
      descripcion: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam maiores dolore, distinctio quisquam ex quae voluptatem tenetur quas, quam, quis quod beatae recusandae porro totam quia asperiores fugiat quibusdam quo corporis? Omnis maiores nisi ducimus, officiis asperiores tempora odio sapiente?',
      coordenadas: [-47.803132, -73.537999],
      thumbnail: `${thumbnailsImg}13-radio-madipro.sm.webp`,
      galeria: [
        `${hitosImg}13-radio-madipro-a.webp`,
        `${hitosImg}13-radio-madipro-b.webp`],
      creditos: {
        autor: 'Rutas de Tortel',
        año: 2026,
        licencia: 'Todos los derechos reservados',
        terminos: 'https://rutasdetortel.cl/terminos-de-uso',
      },
    },

    {
      id: 14,
      nombre: 'Hito 14 — Muncipalidad de Tortel',
      descripcion: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam maiores dolore, distinctio quisquam ex quae voluptatem tenetur quas, quam, quis quod beatae recusandae porro totam quia asperiores fugiat quibusdam quo corporis? Omnis maiores nisi ducimus, officiis asperiores tempora odio sapiente?',
      coordenadas: [-47.803291, -73.537732],
      thumbnail: `${thumbnailsImg}14-municipalidad-sm.webp`,
      galeria: [
        `${hitosImg}14-municipalidad-a.webp`,
        `${hitosImg}14-municipalidad-b.webp`
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
      nombre: 'Hito 15 — Comité eléctrico',
      descripcion: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam maiores dolore, distinctio quisquam ex quae voluptatem tenetur quas, quam, quis quod beatae recusandae porro totam quia asperiores fugiat quibusdam quo corporis? Omnis maiores nisi ducimus, officiis asperiores tempora odio sapiente?',
      coordenadas: [-47.803464, -73.537996],
      thumbnail: `${thumbnailsImg}15-comite-electrico.sm.webp`,
      galeria: [
        `${hitosImg}15-comite-electrico.webp`
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
      nombre: 'Hito 16 — Plaza de Armas',
      descripcion: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam maiores dolore, distinctio quisquam ex quae voluptatem tenetur quas, quam, quis quod beatae recusandae porro totam quia asperiores fugiat quibusdam quo corporis? Omnis maiores nisi ducimus, officiis asperiores tempora odio sapiente?',
      coordenadas: [-47.803633, -73.537499],
      thumbnail: `${thumbnailsImg}16-plaza-armas-sm.webp`,
      galeria: [
        `${hitosImg}16-plaza-armas-a.webp`,
        `${hitosImg}16-plaza-armas-b.webp`,
        `${hitosImg}16-plaza-armas-c.webp`],
      creditos: {
        autor: 'Rutas de Tortel',
        año: 2026,
        licencia: 'Todos los derechos reservados',
        terminos: 'https://rutasdetortel.cl/terminos-de-uso',
      },
    },
    {
      id: 17,
      nombre: 'Hito 17 — Capitanía de Puerto',
      descripcion: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam maiores dolore, distinctio quisquam ex quae voluptatem tenetur quas, quam, quis quod beatae recusandae porro totam quia asperiores fugiat quibusdam quo corporis? Omnis maiores nisi ducimus, officiis asperiores tempora odio sapiente?',
      coordenadas: [-47.803840, -73.537281],
      thumbnail: `${thumbnailsImg}17-capitania-puerto-sm.webp`,
      galeria: [
        `${hitosImg}17-capitania-puerto-a.webp`,
        `${hitosImg}17-capitania-puerto-b.webp`,
        `${hitosImg}17-capitania-puerto-c.webp`
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
      nombre: 'Hito 18 — Almacén ECA',
      descripcion: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam maiores dolore, distinctio quisquam ex quae voluptatem tenetur quas, quam, quis quod beatae recusandae porro totam quia asperiores fugiat quibusdam quo corporis? Omnis maiores nisi ducimus, officiis asperiores tempora odio sapiente?',
      coordenadas: [-47.803756, -73.538156],
      thumbnail: `${thumbnailsImg}18-eca-sm.webp`,
      galeria: [
        `${hitosImg}18-eca.webp`
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
      nombre: 'Hito 19 — Ex-aserradero',
      descripcion: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam maiores dolore, distinctio quisquam ex quae voluptatem tenetur quas, quam, quis quod beatae recusandae porro totam quia asperiores fugiat quibusdam quo corporis? Omnis maiores nisi ducimus, officiis asperiores tempora odio sapiente?',
      coordenadas: [-47.803445, -73.538702],
      thumbnail: ``,
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
      id: 20,
      nombre: 'Hito 20 — Lancha Padre Antonio Ronchi',
      descripcion: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam maiores dolore, distinctio quisquam ex quae voluptatem tenetur quas, quam, quis quod beatae recusandae porro totam quia asperiores fugiat quibusdam quo corporis? Omnis maiores nisi ducimus, officiis asperiores tempora odio sapiente?',
      coordenadas: [-47.803679, -73.538694],
      thumbnail: `${thumbnailsImg}20-lancha-padre-ronchi-sm.webp`,
      galeria: [
        `${hitosImg}20-lancha-padre-ronchi-a.webp`,
        `${hitosImg}20-lancha-padre-ronchi-b.webp`
      ],
      creditos: {
        autor: 'Rutas de Tortel',
        año: 2026,
        licencia: 'Todos los derechos reservados',
        terminos: 'https://rutasdetortel.cl/terminos-de-uso',
      },
    },

    {
      id: 21,
      nombre: 'Hito 21 — Junquillo',
      descripcion: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam maiores dolore, distinctio quisquam ex quae voluptatem tenetur quas, quam, quis quod beatae recusandae porro totam quia asperiores fugiat quibusdam quo corporis? Omnis maiores nisi ducimus, officiis asperiores tempora odio sapiente?',
      coordenadas: [-47.804509, -73.547059],
      thumbnail: `${thumbnailsImg}21-junquillo-sm.webp`,
      galeria: [
        `${hitosImg}21-junquillo-a.webp`,
        `${hitosImg}21-junquillo-b.webp`,
        `${hitosImg}21-junquillo-c.webp`
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
    [-47.797992, -73.531748],
    [-47.797974, -73.531576],
    [-47.797857, -73.531540],
    [-47.797162, -73.532730],
    [-47.797092, -73.532887],
    [-47.797064, -73.533179],
    [-47.797068, -73.533386],
    [-47.797223, -73.534169],
    [-47.797616, -73.535080],
    [-47.797911, -73.535495],
    [-47.798110, -73.535728],
    [-47.798188, -73.535783],
    [-47.798844, -73.535837],
    [-47.799548, -73.535539],
    [-47.800049, -73.535450],
    [-47.800515, -73.535605],
    [-47.800591, -73.535774],
    [-47.800648, -73.535758],
    [-47.800706, -73.535804],
    [-47.800799, -73.535796],
    [-47.800875, -73.535914],
    [-47.801111, -73.535985],
    [-47.801201, -73.536038],
    [-47.801290, -73.535947],
    [-47.801413, -73.535903],
    [-47.801459, -73.536253],
    [-47.801663, -73.536723],
    [-47.802230, -73.537263],
    [-47.802271, -73.537323],
    [-47.802730, -73.537525],
    [-47.803160, -73.537842],
    [-47.803167, -73.537797],
    [-47.803448, -73.538050],
    [-47.803523, -73.537758],
    [-47.803622, -73.537606],
    [-47.803702, -73.537364],
    [-47.803724, -73.537254],
    [-47.803742, -73.537259],
    [-47.803786, -73.537213],
    [-47.803808, -73.537257],
    [-47.803923, -73.537123],
    [-47.804255, -73.537755],
    [-47.804253, -73.537832],
    [-47.803965, -73.538189],
    [-47.803747, -73.538014],
    [-47.803678, -73.538238],
    [-47.803563, -73.538248],
    [-47.803483, -73.538498],
    [-47.803504, -73.538529],
    [-47.803631, -73.538857],
    [-47.803711, -73.538947],
    [-47.803800, -73.539004],
    [-47.803970, -73.538903],
    [-47.804548, -73.539733],
    [-47.804759, -73.539964],
    [-47.804890, -73.540079],
    [-47.805117, -73.540602],
    [-47.805099, -73.540926],
    [-47.805025, -73.541145],
    [-47.805036, -73.541204],
    [-47.805014, -73.541446],
    [-47.804885, -73.541883],
    [-47.804858, -73.542388],
    [-47.805069, -73.542721],
    [-47.805226, -73.543030],
    [-47.805594, -73.543781],
    [-47.805548, -73.543960],
    [-47.805358, -73.544847],
    [-47.805278, -73.545237],
    [-47.805241, -73.545516],
    [-47.805262, -73.545937],
    [-47.805231, -73.546084],
    [-47.805176, -73.546201],
    [-47.805109, -73.546245],
    [-47.805031, -73.546295],
    [-47.805003, -73.546321],
    [-47.804929, -73.546383],
    [-47.804505, -73.547070]
  ],
}
