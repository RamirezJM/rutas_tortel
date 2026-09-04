export const rutas = [
  {
    id: 'historica',
    nombre: 'Pasarelas Históricas',
    descripcion:
      'Lorem ipsum descripción de la ruta histórica. Texto placeholder hasta recibir contenido final.',
    imagen_portada: '/images/rutas/colonial-portada.jpg',
    color: '#8B4513',
    hitos: [
      {
        id: 1,
        nombre: 'Hito 1 — Muelle Juana Vidal',
        descripcion_breve: 'Texto corto para el popup del mapa. Máximo 2 líneas.',
        descripcion_completa:
          'Descripción extendida del hito para su página de detalle. Texto placeholder.',
        coordenadas: [-47.797992, -73.531748],
        imagen: '/images/hitos/colonial-1.jpg',
        galeria: [
          '/images/hitos/colonial-1-a.jpg',
          '/images/hitos/colonial-1-b.jpg',
          '/images/hitos/colonial-1-c.jpg',
        ],
        datos: {
          duracion: '20 minutos',
          dificultad: 'Fácil',
          epoca: 'Siglo XVIII',
          tipo: 'Arquitectura religiosa',
        },
        creditos: {
          autor: 'Nombre de la Propietaria',
          año: 2024,
          licencia: 'Todos los derechos reservados',
          terminos: 'https://tusitio.cl/terminos-de-uso',
        },
      },
      {
        id: 2,
        nombre: 'Hito 2 — Casa Vicente Ayán',
        descripcion_breve: 'Texto corto para el popup del mapa.',
        descripcion_completa: 'Descripción extendida. Texto placeholder.',
        coordenadas: [-47.797868, -73.531491],
        imagen: '/images/hitos/colonial-2.jpg',
        galeria: ['/images/hitos/colonial-2-a.jpg', '/images/hitos/colonial-2-b.jpg'],
        datos: {
          duracion: '15 minutos',
          dificultad: 'Fácil',
          epoca: 'Siglo XIX',
          tipo: 'Patrimonio civil',
        },
        creditos: {
          autor: 'Nombre de la Propietaria',
          año: 2024,
          licencia: 'Todos los derechos reservados',
          terminos: 'https://tusitio.cl/terminos-de-uso',
        },
      },
      {
        id: 3,
        nombre: 'Hito 3 — Plaza Elicura',
        descripcion_breve: 'Texto corto para el popup del mapa.',
        descripcion_completa: 'Descripción extendida. Texto placeholder.',
        coordenadas: [-47.798011, -73.53546],
        imagen: '/images/hitos/colonial-3.jpg',
        galeria: ['/images/hitos/colonial-3-a.jpg', '/images/hitos/colonial-3-b.jpg'],
        datos: {
          duracion: '30 minutos',
          dificultad: 'Moderada',
          epoca: 'Siglo XVIII',
          tipo: 'Arqueología',
        },
        creditos: {
          autor: 'Nombre de la Propietaria',
          año: 2024,
          licencia: 'Todos los derechos reservados',
          terminos: 'https://tusitio.cl/terminos-de-uso',
        },
      },
      {
        id: 4,
        nombre: 'Hito 4 — Estación de vacio',
        descripcion_breve: 'Texto corto para el popup del mapa.',
        descripcion_completa: 'Descripción extendida. Texto placeholder.',
        coordenadas: [-47.800615, -73.53566],
        imagen: '/images/hitos/colonial-3.jpg',
        galeria: ['/images/hitos/colonial-3-a.jpg', '/images/hitos/colonial-3-b.jpg'],
        datos: {
          duracion: '30 minutos',
          dificultad: 'Moderada',
          epoca: 'Siglo XVIII',
          tipo: 'Arqueología',
        },
        creditos: {
          autor: 'Nombre de la Propietaria',
          año: 2024,
          licencia: 'Todos los derechos reservados',
          terminos: 'https://tusitio.cl/terminos-de-uso',
        },
      },
      {
        id: 5,
        nombre: 'Hito 5 — Casa caleta',
        descripcion_breve: 'Texto corto para el popup del mapa.',
        descripcion_completa: 'Descripción extendida. Texto placeholder.',
        coordenadas: [-47.801168, -73.53593],
        imagen: '/images/hitos/colonial-3.jpg',
        galeria: ['/images/hitos/colonial-3-a.jpg', '/images/hitos/colonial-3-b.jpg'],
        datos: {
          duracion: '30 minutos',
          dificultad: 'Moderada',
          epoca: 'Siglo XVIII',
          tipo: 'Arqueología',
        },
        creditos: {
          autor: 'Nombre de la Propietaria',
          año: 2024,
          licencia: 'Todos los derechos reservados',
          terminos: 'https://tusitio.cl/terminos-de-uso',
        },
      },
      {
        id: 6,
        nombre: 'Hito 6 — Iglesia evangélica',
        descripcion_breve: 'Texto corto para el popup del mapa.',
        descripcion_completa: 'Descripción extendida. Texto placeholder.',
        coordenadas: [-47.801295, -73.535775],
        imagen: '/images/hitos/colonial-3.jpg',
        galeria: ['/images/hitos/colonial-3-a.jpg', '/images/hitos/colonial-3-b.jpg'],
        datos: {
          duracion: '30 minutos',
          dificultad: 'Moderada',
          epoca: 'Siglo XVIII',
          tipo: 'Arqueología',
        },
        creditos: {
          autor: 'Nombre de la Propietaria',
          año: 2024,
          licencia: 'Todos los derechos reservados',
          terminos: 'https://tusitio.cl/terminos-de-uso',
        },
      },
      {
        id: 7,
        nombre: 'Hito 7 — Pasarela padre Ronchi',
        descripcion_breve: 'Texto corto para el popup del mapa.',
        descripcion_completa: 'Descripción extendida. Texto placeholder.',
        coordenadas: [-47.801453, -73.536332],
        imagen: '/images/hitos/colonial-3.jpg',
        galeria: ['/images/hitos/colonial-3-a.jpg', '/images/hitos/colonial-3-b.jpg'],
        datos: {
          duracion: '30 minutos',
          dificultad: 'Moderada',
          epoca: 'Siglo XVIII',
          tipo: 'Arqueología',
        },
        creditos: {
          autor: 'Nombre de la Propietaria',
          año: 2024,
          licencia: 'Todos los derechos reservados',
          terminos: 'https://tusitio.cl/terminos-de-uso',
        },
      },
      {
        id: 8,
        nombre: 'Hito 8 — Primera población de Tortel',
        descripcion_breve: 'Texto corto para el popup del mapa.',
        descripcion_completa: 'Descripción extendida. Texto placeholder.',
        coordenadas: [-47.801607, -73.536906],
        imagen: '/images/hitos/colonial-3.jpg',
        galeria: ['/images/hitos/colonial-3-a.jpg', '/images/hitos/colonial-3-b.jpg'],
        datos: {
          duracion: '30 minutos',
          dificultad: 'Moderada',
          epoca: 'Siglo XVIII',
          tipo: 'Arqueología',
        },
        creditos: {
          autor: 'Nombre de la Propietaria',
          año: 2024,
          licencia: 'Todos los derechos reservados',
          terminos: 'https://tusitio.cl/terminos-de-uso',
        },
      },
      {
        id: 9,
        nombre: 'Hito 9 — Escuela vieja',
        descripcion_breve: 'Texto corto para el popup del mapa.',
        descripcion_completa: 'Descripción extendida. Texto placeholder.',
        coordenadas: [-47.802538, -73.537858],
        imagen: '/images/hitos/colonial-3.jpg',
        galeria: ['/images/hitos/colonial-3-a.jpg', '/images/hitos/colonial-3-b.jpg'],
        datos: {
          duracion: '30 minutos',
          dificultad: 'Moderada',
          epoca: 'Siglo XVIII',
          tipo: 'Arqueología',
        },
        creditos: {
          autor: 'Nombre de la Propietaria',
          año: 2024,
          licencia: 'Todos los derechos reservados',
          terminos: 'https://tusitio.cl/terminos-de-uso',
        },
      },
      {
        id: 10,
        nombre: 'Hito 10 — Iglesia católica',
        descripcion_breve: 'Texto corto para el popup del mapa.',
        descripcion_completa: 'Descripción extendida. Texto placeholder.',
        coordenadas: [-47.803030, -73.537972],
        imagen: '/images/hitos/colonial-3.jpg',
        galeria: ['/images/hitos/colonial-3-a.jpg', '/images/hitos/colonial-3-b.jpg'],
        datos: {
          duracion: '30 minutos',
          dificultad: 'Moderada',
          epoca: 'Siglo XVIII',
          tipo: 'Arqueología',
        },
        creditos: {
          autor: 'Nombre de la Propietaria',
          año: 2024,
          licencia: 'Todos los derechos reservados',
          terminos: 'https://tusitio.cl/terminos-de-uso',
        },
      },
       {
        id: 11,
        nombre: 'Hito 12 — Escultura padre Ronchi',
        descripcion_breve: 'Texto corto para el popup del mapa.',
        descripcion_completa: 'Descripción extendida. Texto placeholder.',
        coordenadas: [-47.803063, -73.537894],
        imagen: '/images/hitos/colonial-3.jpg',
        galeria: ['/images/hitos/colonial-3-a.jpg', '/images/hitos/colonial-3-b.jpg'],
        datos: {
          duracion: '30 minutos',
          dificultad: 'Moderada',
          epoca: 'Siglo XVIII',
          tipo: 'Arqueología',
        },
        creditos: {
          autor: 'Nombre de la Propietaria',
          año: 2024,
          licencia: 'Todos los derechos reservados',
          terminos: 'https://tusitio.cl/terminos-de-uso',
        },
      },
      {
        id: 12,
        nombre: 'Hito 11 — Radio Madipro',
        descripcion_breve: 'Texto corto para el popup del mapa.',
        descripcion_completa: 'Descripción extendida. Texto placeholder.',
        coordenadas: [-47.803132, -73.537999],
        imagen: '/images/hitos/colonial-3.jpg',
        galeria: ['/images/hitos/colonial-3-a.jpg', '/images/hitos/colonial-3-b.jpg'],
        datos: {
          duracion: '30 minutos',
          dificultad: 'Moderada',
          epoca: 'Siglo XVIII',
          tipo: 'Arqueología',
        },
        creditos: {
          autor: 'Nombre de la Propietaria',
          año: 2024,
          licencia: 'Todos los derechos reservados',
          terminos: 'https://tusitio.cl/terminos-de-uso',
        },
      },

      {
        id: 13,
        nombre: 'Hito 13 — Muncipalidad',
        descripcion_breve: 'Texto corto para el popup del mapa.',
        descripcion_completa: 'Descripción extendida. Texto placeholder.',
        coordenadas: [-47.803291, -73.537732],
        imagen: '/images/hitos/colonial-3.jpg',
        galeria: ['/images/hitos/colonial-3-a.jpg', '/images/hitos/colonial-3-b.jpg'],
        datos: {
          duracion: '30 minutos',
          dificultad: 'Moderada',
          epoca: 'Siglo XVIII',
          tipo: 'Arqueología',
        },
        creditos: {
          autor: 'Nombre de la Propietaria',
          año: 2024,
          licencia: 'Todos los derechos reservados',
          terminos: 'https://tusitio.cl/terminos-de-uso',
        },
      },
      {
        id: 14,
        nombre: 'Hito 14 — Comité Eléctrico',
        descripcion_breve: 'Texto corto para el popup del mapa.',
        descripcion_completa: 'Descripción extendida. Texto placeholder.',
        coordenadas: [-47.803464, -73.537996],
        imagen: '/images/hitos/colonial-3.jpg',
        galeria: ['/images/hitos/colonial-3-a.jpg', '/images/hitos/colonial-3-b.jpg'],
        datos: {
          duracion: '30 minutos',
          dificultad: 'Moderada',
          epoca: 'Siglo XVIII',
          tipo: 'Arqueología',
        },
        creditos: {
          autor: 'Nombre de la Propietaria',
          año: 2024,
          licencia: 'Todos los derechos reservados',
          terminos: 'https://tusitio.cl/terminos-de-uso',
        },
      },
      {
        id: 15,
        nombre: 'Hito 13 — Centro cívico',
        descripcion_breve: 'Texto corto para el popup del mapa.',
        descripcion_completa: 'Descripción extendida. Texto placeholder.',
        coordenadas: [-47.803761, -73.537311],
        imagen: '/images/hitos/colonial-3.jpg',
        galeria: ['/images/hitos/colonial-3-a.jpg', '/images/hitos/colonial-3-b.jpg'],
        datos: {
          duracion: '30 minutos',
          dificultad: 'Moderada',
          epoca: 'Siglo XVIII',
          tipo: 'Arqueología',
        },
        creditos: {
          autor: 'Nombre de la Propietaria',
          año: 2024,
          licencia: 'Todos los derechos reservados',
          terminos: 'https://tusitio.cl/terminos-de-uso',
        },
      },
      {
        id: 16,
        nombre: 'Hito 16 — Almacenes ECA',
        descripcion_breve: 'Texto corto para el popup del mapa.',
        descripcion_completa: 'Descripción extendida. Texto placeholder.',
        coordenadas: [-47.803756, -73.538156],
        imagen: '/images/hitos/colonial-3.jpg',
        galeria: ['/images/hitos/colonial-3-a.jpg', '/images/hitos/colonial-3-b.jpg'],
        datos: {
          duracion: '30 minutos',
          dificultad: 'Moderada',
          epoca: 'Siglo XVIII',
          tipo: 'Arqueología',
        },
        creditos: {
          autor: 'Nombre de la Propietaria',
          año: 2024,
          licencia: 'Todos los derechos reservados',
          terminos: 'https://tusitio.cl/terminos-de-uso',
        },
      },
      {
        id: 17,
        nombre: 'Hito 17 — Lancha padre Ronchi',
        descripcion_breve: 'Texto corto para el popup del mapa.',
        descripcion_completa: 'Descripción extendida. Texto placeholder.',
        coordenadas: [-47.803679, -73.538694],
        imagen: '/images/hitos/colonial-3.jpg',
        galeria: ['/images/hitos/colonial-3-a.jpg', '/images/hitos/colonial-3-b.jpg'],
        datos: {
          duracion: '30 minutos',
          dificultad: 'Moderada',
          epoca: 'Siglo XVIII',
          tipo: 'Arqueología',
        },
        creditos: {
          autor: 'Nombre de la Propietaria',
          año: 2024,
          licencia: 'Todos los derechos reservados',
          terminos: 'https://tusitio.cl/terminos-de-uso',
        },
      },
      {
        id: 18,
        nombre: 'Hito 18 — Ex-aserradero',
        descripcion_breve: 'Texto corto para el popup del mapa.',
        descripcion_completa: 'Descripción extendida. Texto placeholder.',
        coordenadas: [-47.803445, -73.538702],
        imagen: '/images/hitos/colonial-3.jpg',
        galeria: ['/images/hitos/colonial-3-a.jpg', '/images/hitos/colonial-3-b.jpg'],
        datos: {
          duracion: '30 minutos',
          dificultad: 'Moderada',
          epoca: 'Siglo XVIII',
          tipo: 'Arqueología',
        },
        creditos: {
          autor: 'Nombre de la Propietaria',
          año: 2024,
          licencia: 'Todos los derechos reservados',
          terminos: 'https://tusitio.cl/terminos-de-uso',
        },
      },
      {
        id: 19,
        nombre: 'Hito 19 — Junquillos',
        descripcion_breve: 'Texto corto para el popup del mapa.',
        descripcion_completa: 'Descripción extendida. Texto placeholder.',
        coordenadas: [-47.804509, -73.547059],
        imagen: '/images/hitos/colonial-3.jpg',
        galeria: ['/images/hitos/colonial-3-a.jpg', '/images/hitos/colonial-3-b.jpg'],
        datos: {
          duracion: '30 minutos',
          dificultad: 'Moderada',
          epoca: 'Siglo XVIII',
          tipo: 'Arqueología',
        },
        creditos: {
          autor: 'Nombre de la Propietaria',
          año: 2024,
          licencia: 'Todos los derechos reservados',
          terminos: 'https://tusitio.cl/terminos-de-uso',
        },
      },
    ],
    trazado:[
      [-47.797992, -73.531748], //hito1
      [-47.797868, -73.531491], //hito2
      [-47.798011, -73.535460], //hito3
      [-47.800615, -73.535660], //hito4
      [-47.801168, -73.535930], //hito5
      [-47.801295, -73.535775], //hito6
      [-47.801453, -73.536332], //hito7
      [-47.801607, -73.536906], //hito8
      [-47.802538, -73.537858], //hito9
      [-47.803049, -73.537880], //hito10
      [-47.802538, -73.537992], //hito11
      [-47.803132, -73.537999], //hito12
      [-47.803291, -73.537732], //hito13
      [-47.803464, -73.537996], //hito14
      [-47.803761, -73.537311], //hito15
      [-47.803756, -73.538156], //hito16
      [-47.803679, -73.538694], //hito17
      [-47.803445, -73.538702], //hito18
      [-47.804509, -73.547059], //hito19


    ],
  },
   {
    id: 'naturaleza',
    nombre: 'Naturaleza y Cultura',
    descripcion:
      'Lorem ipsum descripción de la ruta naturaleza y cultura. Texto placeholder hasta recibir contenido final.',
    imagen_portada: '/images/rutas/colonial-portada.jpg',
    color: '#5EA65A',
    hitos: [
      {
        id: 1,
        nombre: 'Hito 1 — Rotonda',
        descripcion_breve: 'Texto corto para el popup del mapa. Máximo 2 líneas.',
        descripcion_completa:
          'Descripción extendida del hito para su página de detalle. Texto placeholder.',
        coordenadas: [-47.795848, -73.531481],
        imagen: '/images/hitos/colonial-1.jpg',
        galeria: [
          '/images/hitos/colonial-1-a.jpg',
          '/images/hitos/colonial-1-b.jpg',
          '/images/hitos/colonial-1-c.jpg',
        ],
        datos: {
          duracion: '20 minutos',
          dificultad: 'Fácil',
          epoca: 'Siglo XVIII',
          tipo: 'Arquitectura religiosa',
        },
        creditos: {
          autor: 'Nombre de la Propietaria',
          año: 2024,
          licencia: 'Todos los derechos reservados',
          terminos: 'https://tusitio.cl/terminos-de-uso',
        },
      },
      {
        id: 2,
        nombre: 'Hito 2 — Escalera municipal',
        descripcion_breve: 'Texto corto para el popup del mapa.',
        descripcion_completa: 'Descripción extendida. Texto placeholder.',
        coordenadas: [-47.796689, -73.533676],
        imagen: '/images/hitos/colonial-2.jpg',
        galeria: ['/images/hitos/colonial-2-a.jpg', '/images/hitos/colonial-2-b.jpg'],
        datos: {
          duracion: '15 minutos',
          dificultad: 'Fácil',
          epoca: 'Siglo XIX',
          tipo: 'Patrimonio civil',
        },
        creditos: {
          autor: 'Nombre de la Propietaria',
          año: 2024,
          licencia: 'Todos los derechos reservados',
          terminos: 'https://tusitio.cl/terminos-de-uso',
        },
      },
      {
        id: 3,
        nombre: 'Hito 3 — Muro rocas especies',
        descripcion_breve: 'Texto corto para el popup del mapa.',
        descripcion_completa: 'Descripción extendida. Texto placeholder.',
        coordenadas: [-47.798267, -73.535825],
        imagen: '/images/hitos/colonial-3.jpg',
        galeria: ['/images/hitos/colonial-3-a.jpg', '/images/hitos/colonial-3-b.jpg'],
        datos: {
          duracion: '30 minutos',
          dificultad: 'Moderada',
          epoca: 'Siglo XVIII',
          tipo: 'Arqueología',
        },
        creditos: {
          autor: 'Nombre de la Propietaria',
          año: 2024,
          licencia: 'Todos los derechos reservados',
          terminos: 'https://tusitio.cl/terminos-de-uso',
        },
      },
      {
        id: 4,
        nombre: 'Hito 4 — muro2',
        descripcion_breve: 'Texto corto para el popup del mapa.',
        descripcion_completa: 'Descripción extendida. Texto placeholder.',
        coordenadas: [-47.798267, -73.535825],
        imagen: '/images/hitos/colonial-3.jpg',
        galeria: ['/images/hitos/colonial-3-a.jpg', '/images/hitos/colonial-3-b.jpg'],
        datos: {
          duracion: '30 minutos',
          dificultad: 'Moderada',
          epoca: 'Siglo XVIII',
          tipo: 'Arqueología',
        },
        creditos: {
          autor: 'Nombre de la Propietaria',
          año: 2024,
          licencia: 'Todos los derechos reservados',
          terminos: 'https://tusitio.cl/terminos-de-uso',
        },
      },
      {
        id: 5,
        nombre: 'Hito 5 — plaza san pedro',
        descripcion_breve: 'Texto corto para el popup del mapa.',
        descripcion_completa: 'Descripción extendida. Texto placeholder.',
        coordenadas: [-47.798267, -73.535825],
        imagen: '/images/hitos/colonial-3.jpg',
        galeria: ['/images/hitos/colonial-3-a.jpg', '/images/hitos/colonial-3-b.jpg'],
        datos: {
          duracion: '30 minutos',
          dificultad: 'Moderada',
          epoca: 'Siglo XVIII',
          tipo: 'Arqueología',
        },
        creditos: {
          autor: 'Nombre de la Propietaria',
          año: 2024,
          licencia: 'Todos los derechos reservados',
          terminos: 'https://tusitio.cl/terminos-de-uso',
        },
      },
      {
        id: 6,
        nombre: 'Hito 6 — chilco',
        descripcion_breve: 'Texto corto para el popup del mapa.',
        descripcion_completa: 'Descripción extendida. Texto placeholder.',
        coordenadas: [-47.802489, -73.536999],
        imagen: '/images/hitos/colonial-3.jpg',
        galeria: ['/images/hitos/colonial-3-a.jpg', '/images/hitos/colonial-3-b.jpg'],
        datos: {
          duracion: '30 minutos',
          dificultad: 'Moderada',
          epoca: 'Siglo XVIII',
          tipo: 'Arqueología',
        },
        creditos: {
          autor: 'Nombre de la Propietaria',
          año: 2024,
          licencia: 'Todos los derechos reservados',
          terminos: 'https://tusitio.cl/terminos-de-uso',
        },
      },
      {
        id: 7,
        nombre: 'Hito 7 — biblioteca',
        descripcion_breve: 'Texto corto para el popup del mapa.',
        descripcion_completa: 'Descripción extendida. Texto placeholder.',
        coordenadas: [-47.803209, -73.537235],
        imagen: '/images/hitos/colonial-3.jpg',
        galeria: ['/images/hitos/colonial-3-a.jpg', '/images/hitos/colonial-3-b.jpg'],
        datos: {
          duracion: '30 minutos',
          dificultad: 'Moderada',
          epoca: 'Siglo XVIII',
          tipo: 'Arqueología',
        },
        creditos: {
          autor: 'Nombre de la Propietaria',
          año: 2024,
          licencia: 'Todos los derechos reservados',
          terminos: 'https://tusitio.cl/terminos-de-uso',
        },
      },
      {
        id: 8,
        nombre: 'Hito 8 — Plaza kaweskar',
        descripcion_breve: 'Texto corto para el popup del mapa.',
        descripcion_completa: 'Descripción extendida. Texto placeholder.',
        coordenadas: [-47.803937, -73.538407],
        imagen: '/images/hitos/colonial-3.jpg',
        galeria: ['/images/hitos/colonial-3-a.jpg', '/images/hitos/colonial-3-b.jpg'],
        datos: {
          duracion: '30 minutos',
          dificultad: 'Moderada',
          epoca: 'Siglo XVIII',
          tipo: 'Arqueología',
        },
        creditos: {
          autor: 'Nombre de la Propietaria',
          año: 2024,
          licencia: 'Todos los derechos reservados',
          terminos: 'https://tusitio.cl/terminos-de-uso',
        },
      },
      {
        id: 9,
        nombre: 'Hito 9 — Escultura tejuelero',
        descripcion_breve: 'Texto corto para el popup del mapa.',
        descripcion_completa: 'Descripción extendida. Texto placeholder.',
        coordenadas: [-47.803947, -73.538939],
        imagen: '/images/hitos/colonial-3.jpg',
        galeria: ['/images/hitos/colonial-3-a.jpg', '/images/hitos/colonial-3-b.jpg'],
        datos: {
          duracion: '30 minutos',
          dificultad: 'Moderada',
          epoca: 'Siglo XVIII',
          tipo: 'Arqueología',
        },
        creditos: {
          autor: 'Nombre de la Propietaria',
          año: 2024,
          licencia: 'Todos los derechos reservados',
          terminos: 'https://tusitio.cl/terminos-de-uso',
        },
      },
      {
        id: 10,
        nombre: 'Hito 10 — casa de la cultura',
        descripcion_breve: 'Texto corto para el popup del mapa.',
        descripcion_completa: 'Descripción extendida. Texto placeholder.',
        coordenadas: [-47.803999, -73.539095],
        imagen: '/images/hitos/colonial-3.jpg',
        galeria: ['/images/hitos/colonial-3-a.jpg', '/images/hitos/colonial-3-b.jpg'],
        datos: {
          duracion: '30 minutos',
          dificultad: 'Moderada',
          epoca: 'Siglo XVIII',
          tipo: 'Arqueología',
        },
        creditos: {
          autor: 'Nombre de la Propietaria',
          año: 2024,
          licencia: 'Todos los derechos reservados',
          terminos: 'https://tusitio.cl/terminos-de-uso',
        },
      },
       {
        id: 11,
        nombre: 'Hito 11 — centro de interpretación',
        descripcion_breve: 'Texto corto para el popup del mapa.',
        descripcion_completa: 'Descripción extendida. Texto placeholder.',
        coordenadas: [-47.803824, -73.539295],
        imagen: '/images/hitos/colonial-3.jpg',
        galeria: ['/images/hitos/colonial-3-a.jpg', '/images/hitos/colonial-3-b.jpg'],
        datos: {
          duracion: '30 minutos',
          dificultad: 'Moderada',
          epoca: 'Siglo XVIII',
          tipo: 'Arqueología',
        },
        creditos: {
          autor: 'Nombre de la Propietaria',
          año: 2024,
          licencia: 'Todos los derechos reservados',
          terminos: 'https://tusitio.cl/terminos-de-uso',
        },
      },
      {
        id: 12,
        nombre: 'Hito 12 — escultura artesana kaweskar',
        descripcion_breve: 'Texto corto para el popup del mapa.',
        descripcion_completa: 'Descripción extendida. Texto placeholder.',
        coordenadas: [-47.804072, -73.539072],
        imagen: '/images/hitos/colonial-3.jpg',
        galeria: ['/images/hitos/colonial-3-a.jpg', '/images/hitos/colonial-3-b.jpg'],
        datos: {
          duracion: '30 minutos',
          dificultad: 'Moderada',
          epoca: 'Siglo XVIII',
          tipo: 'Arqueología',
        },
        creditos: {
          autor: 'Nombre de la Propietaria',
          año: 2024,
          licencia: 'Todos los derechos reservados',
          terminos: 'https://tusitio.cl/terminos-de-uso',
        },
      },

      {
        id: 13,
        nombre: 'Hito 13 — escultura canoa kaweskar',
        descripcion_breve: 'Texto corto para el popup del mapa.',
        descripcion_completa: 'Descripción extendida. Texto placeholder.',
        coordenadas: [-47.804093, -73.539100],
        imagen: '/images/hitos/colonial-3.jpg',
        galeria: ['/images/hitos/colonial-3-a.jpg', '/images/hitos/colonial-3-b.jpg'],
        datos: {
          duracion: '30 minutos',
          dificultad: 'Moderada',
          epoca: 'Siglo XVIII',
          tipo: 'Arqueología',
        },
        creditos: {
          autor: 'Nombre de la Propietaria',
          año: 2024,
          licencia: 'Todos los derechos reservados',
          terminos: 'https://tusitio.cl/terminos-de-uso',
        },
      },
      {
        id: 14,
        nombre: 'Hito 14 — mirador antena',
        descripcion_breve: 'Texto corto para el popup del mapa.',
        descripcion_completa: 'Descripción extendida. Texto placeholder.',
        coordenadas: [-47.803614, -73.541006],
        imagen: '/images/hitos/colonial-3.jpg',
        galeria: ['/images/hitos/colonial-3-a.jpg', '/images/hitos/colonial-3-b.jpg'],
        datos: {
          duracion: '30 minutos',
          dificultad: 'Moderada',
          epoca: 'Siglo XVIII',
          tipo: 'Arqueología',
        },
        creditos: {
          autor: 'Nombre de la Propietaria',
          año: 2024,
          licencia: 'Todos los derechos reservados',
          terminos: 'https://tusitio.cl/terminos-de-uso',
        },
      },
      {
        id: 15,
        nombre: 'Hito 15 — plaza orompello',
        descripcion_breve: 'Texto corto para el popup del mapa.',
        descripcion_completa: 'Descripción extendida. Texto placeholder.',
        coordenadas: [-47.805164, -73.540798],
        imagen: '/images/hitos/colonial-3.jpg',
        galeria: ['/images/hitos/colonial-3-a.jpg', '/images/hitos/colonial-3-b.jpg'],
        datos: {
          duracion: '30 minutos',
          dificultad: 'Moderada',
          epoca: 'Siglo XVIII',
          tipo: 'Arqueología',
        },
        creditos: {
          autor: 'Nombre de la Propietaria',
          año: 2024,
          licencia: 'Todos los derechos reservados',
          terminos: 'https://tusitio.cl/terminos-de-uso',
        },
      },
      {
        id: 16,
        nombre: 'Hito 16 — escultura arroyo',
        descripcion_breve: 'Texto corto para el popup del mapa.',
        descripcion_completa: 'Descripción extendida. Texto placeholder.',
        coordenadas: [-47.804891, -73.542101],
        imagen: '/images/hitos/colonial-3.jpg',
        galeria: ['/images/hitos/colonial-3-a.jpg', '/images/hitos/colonial-3-b.jpg'],
        datos: {
          duracion: '30 minutos',
          dificultad: 'Moderada',
          epoca: 'Siglo XVIII',
          tipo: 'Arqueología',
        },
        creditos: {
          autor: 'Nombre de la Propietaria',
          año: 2024,
          licencia: 'Todos los derechos reservados',
          terminos: 'https://tusitio.cl/terminos-de-uso',
        },
      },
      {
        id: 17,
        nombre: 'Hito 17 — playa',
        descripcion_breve: 'Texto corto para el popup del mapa.',
        descripcion_completa: 'Descripción extendida. Texto placeholder.',
        coordenadas: [-47.805758, -73.547631],
        imagen: '/images/hitos/colonial-3.jpg',
        galeria: ['/images/hitos/colonial-3-a.jpg', '/images/hitos/colonial-3-b.jpg'],
        datos: {
          duracion: '30 minutos',
          dificultad: 'Moderada',
          epoca: 'Siglo XVIII',
          tipo: 'Arqueología',
        },
        creditos: {
          autor: 'Nombre de la Propietaria',
          año: 2024,
          licencia: 'Todos los derechos reservados',
          terminos: 'https://tusitio.cl/terminos-de-uso',
        },
      },
      {
        id: 18,
        nombre: 'Hito 18 — quincho playa',
        descripcion_breve: 'Texto corto para el popup del mapa.',
        descripcion_completa: 'Descripción extendida. Texto placeholder.',
        coordenadas: [-47.805668, -73.551078],
        imagen: '/images/hitos/colonial-3.jpg',
        galeria: ['/images/hitos/colonial-3-a.jpg', '/images/hitos/colonial-3-b.jpg'],
        datos: {
          duracion: '30 minutos',
          dificultad: 'Moderada',
          epoca: 'Siglo XVIII',
          tipo: 'Arqueología',
        },
        creditos: {
          autor: 'Nombre de la Propietaria',
          año: 2024,
          licencia: 'Todos los derechos reservados',
          terminos: 'https://tusitio.cl/terminos-de-uso',
        },
      },
      {
        id: 19,
        nombre: 'Hito 19 — desembocadura',
        descripcion_breve: 'Texto corto para el popup del mapa.',
        descripcion_completa: 'Descripción extendida. Texto placeholder.',
        coordenadas: [-47.805087, -73.551340],
        imagen: '/images/hitos/colonial-3.jpg',
        galeria: ['/images/hitos/colonial-3-a.jpg', '/images/hitos/colonial-3-b.jpg'],
        datos: {
          duracion: '30 minutos',
          dificultad: 'Moderada',
          epoca: 'Siglo XVIII',
          tipo: 'Arqueología',
        },
        creditos: {
          autor: 'Nombre de la Propietaria',
          año: 2024,
          licencia: 'Todos los derechos reservados',
          terminos: 'https://tusitio.cl/terminos-de-uso',
        },
      },
    ],
    trazado:[
      [-47.797992, -73.531748], //hito1
      [-47.797868, -73.531491], //hito2
      [-47.798011, -73.535460], //hito3
      [-47.800615, -73.535660], //hito4
      [-47.801168, -73.535930], //hito5
      [-47.801295, -73.535775], //hito6
      [-47.801453, -73.536332], //hito7
      [-47.801607, -73.536906], //hito8
      [-47.802538, -73.537858], //hito9
      [-47.803049, -73.537880], //hito10
      [-47.802538, -73.537992], //hito11
      [-47.803132, -73.537999], //hito12
      [-47.803291, -73.537732], //hito13
      [-47.803464, -73.537996], //hito14
      [-47.803761, -73.537311], //hito15
      [-47.803756, -73.538156], //hito16
      [-47.803679, -73.538694], //hito17
      [-47.803445, -73.538702], //hito18
      [-47.804509, -73.547059], //hito19


    ],
  }, {
    id: 'maritima',
    nombre: 'Ruta Marítima',
    descripcion:
      'Lorem ipsum descripción de la ruta histórica. Texto placeholder hasta recibir contenido final.',
    imagen_portada: '/images/rutas/colonial-portada.jpg',
    color: '#551ADB',
    hitos: [
      {
        id: 1,
        nombre: 'Hito 1 — Muelle natureza',
        descripcion_breve: 'Texto corto para el popup del mapa. Máximo 2 líneas.',
        descripcion_completa:
          'Descripción extendida del hito para su página de detalle. Texto placeholder.',
        coordenadas: [-47.797657, -73.534048],
        imagen: '/images/hitos/colonial-1.jpg',
        galeria: [
          '/images/hitos/colonial-1-a.jpg',
          '/images/hitos/colonial-1-b.jpg',
          '/images/hitos/colonial-1-c.jpg',
        ],
        datos: {
          duracion: '20 minutos',
          dificultad: 'Fácil',
          epoca: 'Siglo XVIII',
          tipo: 'Arquitectura religiosa',
        },
        creditos: {
          autor: 'Nombre de la Propietaria',
          año: 2024,
          licencia: 'Todos los derechos reservados',
          terminos: 'https://tusitio.cl/terminos-de-uso',
        },
      },
      {
        id: 2,
        nombre: 'Hito 2 — bahia1',
        descripcion_breve: 'Texto corto para el popup del mapa.',
        descripcion_completa: 'Descripción extendida. Texto placeholder.',
        coordenadas: [-47.798282, -73.535012],
        imagen: '/images/hitos/colonial-2.jpg',
        galeria: ['/images/hitos/colonial-2-a.jpg', '/images/hitos/colonial-2-b.jpg'],
        datos: {
          duracion: '15 minutos',
          dificultad: 'Fácil',
          epoca: 'Siglo XIX',
          tipo: 'Patrimonio civil',
        },
        creditos: {
          autor: 'Nombre de la Propietaria',
          año: 2024,
          licencia: 'Todos los derechos reservados',
          terminos: 'https://tusitio.cl/terminos-de-uso',
        },
      },
      {
        id: 3,
        nombre: 'Hito 3 — bahia2',
        descripcion_breve: 'Texto corto para el popup del mapa.',
        descripcion_completa: 'Descripción extendida. Texto placeholder.',
        coordenadas: [-47.799826, -73.534549],
        imagen: '/images/hitos/colonial-3.jpg',
        galeria: ['/images/hitos/colonial-3-a.jpg', '/images/hitos/colonial-3-b.jpg'],
        datos: {
          duracion: '30 minutos',
          dificultad: 'Moderada',
          epoca: 'Siglo XVIII',
          tipo: 'Arqueología',
        },
        creditos: {
          autor: 'Nombre de la Propietaria',
          año: 2024,
          licencia: 'Todos los derechos reservados',
          terminos: 'https://tusitio.cl/terminos-de-uso',
        },
      },
      {
        id: 4,
        nombre: 'Hito 4 — bahia3-pasarelas',
        descripcion_breve: 'Texto corto para el popup del mapa.',
        descripcion_completa: 'Descripción extendida. Texto placeholder.',
        coordenadas: [-47.801795, -73.534236],
        imagen: '/images/hitos/colonial-3.jpg',
        galeria: ['/images/hitos/colonial-3-a.jpg', '/images/hitos/colonial-3-b.jpg'],
        datos: {
          duracion: '30 minutos',
          dificultad: 'Moderada',
          epoca: 'Siglo XVIII',
          tipo: 'Arqueología',
        },
        creditos: {
          autor: 'Nombre de la Propietaria',
          año: 2024,
          licencia: 'Todos los derechos reservados',
          terminos: 'https://tusitio.cl/terminos-de-uso',
        },
      },
      {
        id: 5,
        nombre: 'Hito 5 — bahia4',
        descripcion_breve: 'Texto corto para el popup del mapa.',
        descripcion_completa: 'Descripción extendida. Texto placeholder.',
        coordenadas: [-47.802741, -73.535846],
        imagen: '/images/hitos/colonial-3.jpg',
        galeria: ['/images/hitos/colonial-3-a.jpg', '/images/hitos/colonial-3-b.jpg'],
        datos: {
          duracion: '30 minutos',
          dificultad: 'Moderada',
          epoca: 'Siglo XVIII',
          tipo: 'Arqueología',
        },
        creditos: {
          autor: 'Nombre de la Propietaria',
          año: 2024,
          licencia: 'Todos los derechos reservados',
          terminos: 'https://tusitio.cl/terminos-de-uso',
        },
      },
      {
        id: 6,
        nombre: 'Hito 6 — bahia5-centro civico',
        descripcion_breve: 'Texto corto para el popup del mapa.',
        descripcion_completa: 'Descripción extendida. Texto placeholder.',
        coordenadas: [-47.804186, -73.536047],
        imagen: '/images/hitos/colonial-3.jpg',
        galeria: ['/images/hitos/colonial-3-a.jpg', '/images/hitos/colonial-3-b.jpg'],
        datos: {
          duracion: '30 minutos',
          dificultad: 'Moderada',
          epoca: 'Siglo XVIII',
          tipo: 'Arqueología',
        },
        creditos: {
          autor: 'Nombre de la Propietaria',
          año: 2024,
          licencia: 'Todos los derechos reservados',
          terminos: 'https://tusitio.cl/terminos-de-uso',
        },
      },
      {
        id: 7,
        nombre: 'Hito 7 — bahia6-plaza',
        descripcion_breve: 'Texto corto para el popup del mapa.',
        descripcion_completa: 'Descripción extendida. Texto placeholder.',
        coordenadas: [-47.804217, -73.538608],
        imagen: '/images/hitos/colonial-3.jpg',
        galeria: ['/images/hitos/colonial-3-a.jpg', '/images/hitos/colonial-3-b.jpg'],
        datos: {
          duracion: '30 minutos',
          dificultad: 'Moderada',
          epoca: 'Siglo XVIII',
          tipo: 'Arqueología',
        },
        creditos: {
          autor: 'Nombre de la Propietaria',
          año: 2024,
          licencia: 'Todos los derechos reservados',
          terminos: 'https://tusitio.cl/terminos-de-uso',
        },
      },
      {
        id: 8,
        nombre: 'Hito 8 — bahia7-turbina',
        descripcion_breve: 'Texto corto para el popup del mapa.',
        descripcion_completa: 'Descripción extendida. Texto placeholder.',
        coordenadas: [-47.805083, -73.539384],
        imagen: '/images/hitos/colonial-3.jpg',
        galeria: ['/images/hitos/colonial-3-a.jpg', '/images/hitos/colonial-3-b.jpg'],
        datos: {
          duracion: '30 minutos',
          dificultad: 'Moderada',
          epoca: 'Siglo XVIII',
          tipo: 'Arqueología',
        },
        creditos: {
          autor: 'Nombre de la Propietaria',
          año: 2024,
          licencia: 'Todos los derechos reservados',
          terminos: 'https://tusitio.cl/terminos-de-uso',
        },
      },
      {
        id: 9,
        nombre: 'Hito 9 — bahia8-fiordo',
        descripcion_breve: 'Texto corto para el popup del mapa.',
        descripcion_completa: 'Descripción extendida. Texto placeholder.',
        coordenadas: [-47.806839, -73.539674],
        imagen: '/images/hitos/colonial-3.jpg',
        galeria: ['/images/hitos/colonial-3-a.jpg', '/images/hitos/colonial-3-b.jpg'],
        datos: {
          duracion: '30 minutos',
          dificultad: 'Moderada',
          epoca: 'Siglo XVIII',
          tipo: 'Arqueología',
        },
        creditos: {
          autor: 'Nombre de la Propietaria',
          año: 2024,
          licencia: 'Todos los derechos reservados',
          terminos: 'https://tusitio.cl/terminos-de-uso',
        },
      },
      {
        id: 10,
        nombre: 'Hito 10 — muelle la puntilla',
        descripcion_breve: 'Texto corto para el popup del mapa.',
        descripcion_completa: 'Descripción extendida. Texto placeholder.',
        coordenadas: [-47.805698, -73.543682],
        imagen: '/images/hitos/colonial-3.jpg',
        galeria: ['/images/hitos/colonial-3-a.jpg', '/images/hitos/colonial-3-b.jpg'],
        datos: {
          duracion: '30 minutos',
          dificultad: 'Moderada',
          epoca: 'Siglo XVIII',
          tipo: 'Arqueología',
        },
        creditos: {
          autor: 'Nombre de la Propietaria',
          año: 2024,
          licencia: 'Todos los derechos reservados',
          terminos: 'https://tusitio.cl/terminos-de-uso',
        },
      },

    ],
    trazado:[
      [-47.797992, -73.531748], //hito1
      [-47.797868, -73.531491], //hito2
      [-47.798011, -73.535460], //hito3
      [-47.800615, -73.535660], //hito4
      [-47.801168, -73.535930], //hito5
      [-47.801295, -73.535775], //hito6
      [-47.801453, -73.536332], //hito7
      [-47.801607, -73.536906], //hito8
      [-47.802538, -73.537858], //hito9
      [-47.803049, -73.537880], //hito10
      [-47.802538, -73.537992], //hito11
      [-47.803132, -73.537999], //hito12
      [-47.803291, -73.537732], //hito13
      [-47.803464, -73.537996], //hito14
      [-47.803761, -73.537311], //hito15
      [-47.803756, -73.538156], //hito16
      [-47.803679, -73.538694], //hito17
      [-47.803445, -73.538702], //hito18
      [-47.804509, -73.547059], //hito19


    ],
  },

]
