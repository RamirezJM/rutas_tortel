const hitosImg = '/images/rutas/historica/hitos/';
const thumbnailsImg = '/images/rutas/historica/thumbnails/';
const iconosImg = '/images/rutas/historica/iconos/';

export default {

  id: 'historica',
  nombre: 'Pasarelas Históricas',
  bajada_titulo: 'Entre la madera y las formas de habitar',
  descripcion_card:
    'Las pasarelas de Tortel no solo conectan distintos sectores del pueblo: también permiten recorrer su historia. Esta ruta invita a descubrir cómo fue creciendo la localidad, reconociendo antiguos espacios de encuentro, viviendas, servicios y lugares vinculados al trabajo y la vida comunitaria. A lo largo del recorrido, la madera aparece como parte fundamental de esta historia, desde la construcción de pasarelas y viviendas hasta la carpintería de ribera y otros saberes desarrollados en el territorio. Una forma de conocer Tortel siguiendo las huellas de quienes lo construyeron y habitaron a lo largo del tiempo.',
  descripcion_ruta: [
    'En Tortel, las pasarelas son mucho más que una forma de desplazarse. A través de ellas es posible reconocer cómo fue creciendo la localidad, cómo se organizaron sus distintos sectores y cómo se fue construyendo la vida cotidiana en un territorio donde el agua y la naturaleza han condicionado las formas de habitar.',
    'Esta ruta propone seguir las huellas de ese proceso. En el camino aparecen antiguos espacios de encuentro, viviendas, servicios y lugares vinculados al trabajo y la organización comunitaria. Cada uno permite acercarse a distintas etapas de la historia local y comprender cómo se fue transformando el asentamiento.',
    'La madera atraviesa todo el recorrido. Está presente en las pasarelas, las construcciones y los oficios que han acompañado el desarrollo de Tortel. Detrás de estos elementos hay conocimientos, técnicas y decisiones que hablan de la relación entre sus habitantes y el entorno.',
    'Pasarelas Históricas invita a recorrer el pueblo con otra mirada: no solo para conocer sus lugares más representativos, sino también para comprender las historias y los saberes que les han dado forma.'
  ],
  caracteristicas: [
    {
      titulo: '01. Los primeros espacios del pueblo',
      descripcion: 'Desde los muelles hasta las antiguas casas de tejuelas, descubre algunos de los lugares que permiten reconstruir el desarrollo de la localidad y sus formas de ocupación del territorio.'
    },
    {
      titulo: '02. Una comunidad que se organiza',
      descripcion: 'La antigua escuela, el comité eléctrico, la radio y otros espacios permiten acercarse a las iniciativas e instituciones que han acompañado la vida cotidiana de Tortel.'
    },
    {
      titulo: '03. Personas que dejaron huella',
      descripcion: 'Las construcciones y lugares asociados al padre Antonio Ronchi abren una mirada hacia las personas y las iniciativas que han formado parte de las transformaciones del pueblo.'
    },
    {
      titulo: '04. La madera como oficio y material',
      descripcion: 'El antiguo aserradero y el sector de Junquillo permiten explorar el papel de la madera en el trabajo local, desde su procesamiento hasta la carpintería de ribera.'
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
  imagen_portada: '/images/rutas/historica/historicas-card.webp',
  galeria: [
    '/images/rutas/historica/galeria/1-comite-electrico.webp',
    '/images/rutas/historica/galeria/2-lancha-padre-ronchi.webp',
    '/images/rutas/historica/galeria/3-plaza-armas.webp'
  ],
  color: '#F2DC57',
  modalidad: 'Autoguiada, peatonal',
  duracion: '45 minutos',
  dificultad: 'Fácil',
  distancia: '2.3 kilometros',
  acceso: 'Gratuito',

  hitos: [
    {
      id: 1,
      nombre: 'Hito 1 — Muelle Juana Vidal (Muelle 1)',
      descripcion: [
        'El sector de Rincón Bajo fue uno de los primeros lugares habitados de Tortel. Aquí se encontraba la casa de Clorinda González, recordada como la primera pobladora del lugar. Este muelle permite acercarse a los orígenes del asentamiento y su relación con la bahía.',
        'En esta zona también estaba asentada la familia Vidal - Menko.'
      ],
      coordenadas: [-47.797992, -73.531748],
      thumbnail: `${thumbnailsImg}1-muelle-juana-vidal-sm.webp`,
      icono: `${iconosImg}1-muelle-juana-vidal.webp`,
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
      descripcion: [
        'Construida alrededor de 1968 por Vicente Ayán, esta vivienda de techo a dos aguas conserva técnicas tradicionales de trabajo en madera. Sus vigas y tablas interiores fueron labradas a hacha, mientras que las pequeñas ventanas ayudaban a conservar el calor y respondían a la escasa disponibilidad de vidrios.',
        'Las tejuelas fueron elaboradas en colaboración con un señor de apellido Herrera, utilizando metanes preparados en la isla Alberto Vargas, donde vivían Vicente Ayán, su esposa Clementina Urrutia y sus siete hijos e hijas.'
      ],
      coordenadas: [-47.797868, -73.531491],
      thumbnail: `${thumbnailsImg}2-casa-ayan-sm.webp`,
      icono: `${iconosImg}2-casa-ayan.webp`,
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
      descripcion: [
        'Esta plaza forma parte del proyecto Plazas Patrimoniales del MINVU y SERVIU. Es un espacio público que invita a detenerse y observar cómo los lugares de encuentro se integran a la red de pasarelas y a la vida cotidiana de Tortel.',
        'Esta plaza lleva el nombre de la barcaza LSM-90 _Elicura_ de la Armada de Chile, construida en Talcahuano y puesta en servicio en 1968. Durante sus viajes a Tortel, la embarcación transportaba víveres para abastecer a los pobladores y llevaba madera desde la localidad, como parte de las operaciones logísticas de la Armada. Su nombre recuerda una época en que el transporte marítimo era fundamental para el abastecimiento y la comercialización de los recursos del territorio.'
      ],
      coordenadas: [-47.798011, -73.53546],
      thumbnail: `${thumbnailsImg}3-plaza-elicura-sm.webp`,
      icono: `${iconosImg}3-plaza-elicura.webp`,
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
      descripcion: [
        'Esta construcción forma parte del sistema de alcantarillado de Tortel. Su revestimiento reúne madera de ciprés de las Guaitecas y cerca de 3.000 tejuelas elaboradas en 2021 por Olegario Hernández Yefe y Matías Poblete Poblete, integrando un oficio tradicional a la infraestructura contemporánea.',
        'La puesta en marcha del alcantarillado al vacío marcó un importante avance sanitario para Tortel, donde durante mucho tiempo las aguas residuales de las viviendas llegaban directamente a la bahía. Este sistema, adaptado a las pendientes y al terreno rocoso, comenzó a funcionar en 2022.'
      ],
      coordenadas: [-47.800615, -73.53566],
      thumbnail: `${thumbnailsImg}4-estacion-vacio-sm.webp`,
      icono: `${iconosImg}4-estacion-vacio.webp`,
      galeria: [
        `${hitosImg}4-estacion-vacio-a.webp`,
        `${hitosImg}4-estacion-vacio-b.webp`
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
      descripcion: [
        'Entre 1969 y 1970, pobladores de Tortel y personal de la Armada construyeron este edificio mediante el Departamento de Obras y Construcciones de la Tercera Zona Naval, conocido como DOCA o DOCATER. Las tejuelas utilizadas fueron donadas por los propios habitantes.',
        'Aquí funcionó la primera escuela de Tortel y, posteriormente, la sede del Club Deportivo y Social Caleta Tortel.',
        'La historia de Casa Caleta permite reconocer una forma de organización que fue fundamental durante los primeros años del pueblo: el trabajo compartido para levantar los espacios que la comunidad necesitaba.'
      ],
      coordenadas: [-47.801168, -73.53593],
      thumbnail: `${thumbnailsImg}5-casa-caleta-sm.webp`,
      icono: `${iconosImg}5-casa-caleta.webp`,
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
      descripcion: [
        'La construcción de la Iglesia Evangélica comenzó en 1985, con una ceremonia de colocación de la primera piedra encabezada por el pastor Luis Gaete.',
        'Para levantar el edificio, los pobladores donaron postes telefónicos que fueron subidos desde la bahía mediante un tecle, en una época en que trasladar materiales por las pendientes de Tortel requería importantes esfuerzos.',
        'En su construcción participaron Eliodoro Jara y Brígido Paredes.'
      ],
      coordenadas: [-47.801295, -73.535775],
      thumbnail: `${thumbnailsImg}6-iglesia-pentecostal-sm.webp`,
      icono: `${iconosImg}6-iglesia-pentecostal.webp`,
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
      descripcion: [
        'Antes de la construcción de la costanera, esta pasarela era una de las principales conexiones de Tortel. Construida por los mismos pobladores mediante el Programa de Empleo Mínimo (PEM), articulaba gran parte del centro cívico, conectando las viviendas destinadas a funcionarios municipales, la población SERVIU, Bomberos, Registro Civil, Quincho Municipal, la antigua escuela, la iglesia, la Municipalidad y el Comité Eléctrico.',
        'En este sector también se encontraban el retén y las viviendas de Carabineros. Su recorrido permite comprender cómo se organizaban los servicios, las viviendas y los espacios comunitarios antes de la construcción de las nuevas conexiones por el borde costero.'
      ],
      coordenadas: [-47.801453, -73.536332],
      thumbnail: `${thumbnailsImg}7-pasarela-padre-ronchi-sm.webp`,
      icono: `${iconosImg}7-pasarela-padre-ronchi.webp`,
      galeria: [
        `${hitosImg}7-pasarela-padre-ronchi-a.webp`,
        `${hitosImg}7-pasarela-padre-ronchi-b.webp`,
        `${hitosImg}7-pasarela-padre-ronchi-c.webp`
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
      descripcion: [
        'La población Jorge Echaurren reúne las primeras ocho viviendas sociales de Tortel, entregadas en diciembre de 1984. Construidas en pares y revestidas con fierro galvanizado, representan una etapa de crecimiento del pueblo y de incorporación de nuevas soluciones habitacionales.',
        'Los materiales y las personas encargadas de la construcción viajaron desde Punta Arenas.'
      ],
      coordenadas: [-47.801607, -73.536906],
      thumbnail: `${thumbnailsImg}8-primera-poblacion-sm.webp`,
      icono: `${iconosImg}8-primera-poblacion.webp`,
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
      descripcion: [
        'La 3°Compañía de Bomberos de Tortel pertenece al Cuerpo de Bomberos de Cochrane y surgió como una brigada formada por pobladores en 1982, luego de un incendio que afectó a varias viviendas.',
        'El antiguo cuartel, construido en 1996 y revestido con tejuelas, fue destruido por un incendio en junio de 2016 y posteriormente reconstruido.',
        'En un pueblo donde las pasarelas reemplazan a las calles, combatir incendios presenta desafíos particulares. Además del carro de bomberos, los voluntarios necesitan embarcaciones para trasladar equipos y acceder a distintos sectores desde el agua. En 2023 recibieron una embarcación más moderna, especialmente equipada para atender emergencias y realizar rescates.'
      ],
      coordenadas: [-47.801759, -73.536726],
      thumbnail: `${thumbnailsImg}9-bomberos-sm.webp`,
      icono: `${iconosImg}9-cuartel-bomberos.webp`,
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
      descripcion: [
        'En 1976, una construcción utilizada como campamento militar en Punta Buzeta fue trasladada hasta Tortel. El edificio llegó dividido en paneles que posteriormente fueron ensamblados para albergar una nueva escuela.',
        'Contaba con seis salas de clases, comedor, gimnasio e internado, y recibía estudiantes de primero a octavo básico.',
        'Muchos niños y niñas provenían de familias que vivían en los campos y permanecían internados durante gran parte del año escolar. Para ellos, la escuela no era solamente un lugar de aprendizaje: también era el espacio donde transcurría buena parte de su vida cotidiana, lejos de sus hogares.'
      ],
      coordenadas: [-47.802538, -73.537858],
      thumbnail: `${thumbnailsImg}10-escuela-antigua-sm.webp`,
      icono: `${iconosImg}10-escuela-antigua.webp`,
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
      descripcion: [
        'Construida entre 1976 y 1981 por iniciativa del padre Antonio Ronchi, contó con el trabajo de Eliodoro Jara, Brígido Paredes, Honorindo Guelet y René Ruiz.',
        'Los pobladores elaboraron la madera para la construcción a cambio de víveres y el interior fue revestido con colihue. Más tarde, el sacerdote habilitó un espacio donde se proyectaban filminas y luego películas a la comunidad a cambio de una moneda o un brazado de leña para calefaccionar la iglesia.',
        'Quienes asistieron recuerdan haber visto allí _Rambo_, _Rocky_, _Kojak_ y películas de _Cantinflas_.',
        'La torre de la campana fue construida posteriormente por Olegario Hernández.'
      ],
      coordenadas: [-47.803030, -73.537972],
      thumbnail: `${thumbnailsImg}11-capilla-catolica-sm.webp`,
      icono: `${iconosImg}11-capilla-catolica.webp`,
      galeria: [
        /* `${hitosImg}11-capilla-catolica-a.webp`, */
        `${hitosImg}11-capilla-catolica-c.webp`,
        `${hitosImg}11-capilla-catolica-b.webp`

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
      descripcion: [
        'Esta fue la primera escultura pública de Tortel. Ubicada junto a la iglesia católica, representa a tamaño natural al padre Antonio Ronchi, sacerdote que impulsó numerosas iniciativas comunitarias en la localidad.',
        'La obra fue realizada en 2001 por el escultor Augusto Hernández Aguilante, por encargo de la Municipalidad. Fue tallada a partir de una sola pieza de ciprés de las Guaitecas, extraída de las cercanías del glaciar Steffen.'
      ],
      coordenadas: [-47.803063, -73.537894],
      thumbnail: `${thumbnailsImg}12-escultura-padre-ronchi-sm.webp`,
      icono: `${iconosImg}12-escultura-padre-ronchi.webp`,
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
      descripcion: [
        'El 11 de octubre de 1983 comenzó a transmitir Radio Madre de la Divina Providencia (Madipro), fundada por el padre Antonio Ronchi como parte de una red de comunicaciones que conectaba distintas localidades de Aysén.',
        'El edificio que conocemos hoy fue construido en 1999, según un diseño del arquitecto Andrés Gutiérrez, con la participación de Luis Paredes, José Barría y Artidoro Vargas.',
        'Durante su historia, la emisora ha contado con la participación de vecinos como Ismael Mellado, Alejandra Zurita, Iván Valdés y Jaime Maripillán, entre muchas otras personas que contribuyeron a mantener informada a la comunidad.',
        'Tras un período sin transmisiones, Madipro volvió al aire el 20 de agosto de 2025, en la frecuencia 97.1 FM, dando continuidad a una historia de comunicación local iniciada más de cuatro décadas atrás.'
      ],
      coordenadas: [-47.803132, -73.537999],
      thumbnail: `${thumbnailsImg}13-radio-madipro-sm.webp`,
      icono: `${iconosImg}13-radio-madipro.webp`,
      galeria: [
        `${hitosImg}13-radio-madipro-a.webp`,
        `${hitosImg}13-radio-madipro-b.webp`,
        `${hitosImg}13-radio-madipro-c.webp`
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
      nombre: 'Hito 14 — Muncipalidad de Tortel',
      descripcion: [
        'El edificio municipal actual fue construido en 2006 por la Constructora Carlos Icarte. Tiene dos pisos y utiliza principalmente madera de ciprés de las Guaitecas.',
        'Su historia se relaciona con la conformación administrativa de Tortel. Aunque los antecedentes municipales sitúan la creación de la comuna-subdelegación en 1970, la Municipalidad comenzó a funcionar en 1981, con Óscar Quiroga Flores como primer alcalde.',
        'La construcción de una sede propia forma parte de las transformaciones que acompañaron el crecimiento de los servicios e instituciones locales.'
      ],
      coordenadas: [-47.803291, -73.537732],
      thumbnail: `${thumbnailsImg}14-municipalidad-sm.webp`,
      icono: `${iconosImg}14-municipalidad.webp`,
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
      descripcion: [
        'El edificio fue construido en 1992 por Juan Cárcamo, según un diseño de Carlos Mancilla, director de obras de la época.',
        'Este espacio albergó previamente a la oficina de Correos de Chile y central de llamadas. Aquí funcionaron el primer teléfono y una radio VHF que permitía comunicarse con los distritos rurales de Steffen, Pascua, Ventisquero Jorge Montt y Río Bravo. En sus primeros años, la oficina era atendida por Ernesto Ruiz.'
      ],
      coordenadas: [-47.803464, -73.537996],
      thumbnail: `${thumbnailsImg}15-comite-electrico-sm.webp`,
      icono: `${iconosImg}15-comite-electrico.webp`,
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
      descripcion: [
        'Antes de que Tortel contara con los espacios comunitarios actuales, la Plaza de Armas era uno de los principales lugares de encuentro del pueblo. Aquí se realizaban asados comunitarios, celebraciones, actos y recibimientos de autoridades, visitantes y pobladores que regresaban a la localidad.',
        'Su construcción original se remonta a la década de 1970 y, aunque su estructura fue remodelada posteriormente, sigue siendo un espacio que conserva la memoria de las celebraciones y encuentros que marcaron la vida comunitaria de Tortel.'
      ],
      coordenadas: [-47.803633, -73.537499],
      thumbnail: `${thumbnailsImg}16-plaza-armas-sm.webp`,
      icono: `${iconosImg}16-plaza-armas.webp`,
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
      descripcion: [
        'La presencia de la Armada en Tortel se remonta a mediados de la década de 1950. En 1955 se estableció el Puesto de Vigías y Señales de Caleta Tortel, donde el radiotelegrafista y enfermero Marcos Cancino, junto a su esposa, quedó a cargo de las primeras instalaciones navales.',
        'El edificio original de la Capitanía data de 1956 y actualmente se utiliza como vivienda del personal de la Armada. En este sector también funcionó una Posta de Uso Naval, que atendía a los pobladores antes de la creación de la Posta de Salud Rural.',
        'En 1976, Olegario Hernández construyó otra edificación de madera para la Armada, utilizada posteriormente por mujeres de CEMA Chile y por el profesor Germán Haro.'
      ],
      coordenadas: [-47.803840, -73.537281],
      thumbnail: `${thumbnailsImg}17-capitania-puerto-sm.webp`,
      icono: `${iconosImg}17-capitania-puerto.webp`,
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
      descripcion: [
        'La Empresa de Comercio Agrícola (ECA) se instaló en Tortel en 1966, con un poder comprador de postes de ciprés de las Guaitecas y un almacén de abastecimiento para los habitantes. Su funcionamiento fue importante para la consolidación de la localidad y para la economía vinculada a la explotación de madera.',
        'Casi todos sus productos se vendían a granel: incluso el aceite comestible llegaba en tambores. No se comercializaba alcohol y se utilizaba un sistema de vale vista. En los primeros años, los pobladores también podían intercambiar madera por mercaderías.',
        'En 1975 llegó a hacerse cargo del establecimiento Iván Valdés, según recuerda su esposa Carmen Rojas Chávez.',
        'El edificio actual data de 1998.'
      ],
      coordenadas: [-47.803756, -73.538156],
      thumbnail: `${thumbnailsImg}18-eca-sm.webp`,
      icono: `${iconosImg}18-eca.webp`,
      galeria: [
        `${hitosImg}18-eca-a.webp`,
        `${hitosImg}18-eca-b.webp`
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
      descripcion: [
        'A comienzos de la década de 1980, la Municipalidad de Tortel impulsó la instalación de un aserradero en este sector, con el propósito de producir madera elaborada para la construcción de edificios municipales y viviendas de los pobladores.',
        'El aserradero permitió disponer de madera procesada en la propia localidad, facilitando las labores de construcción en una época en que el abastecimiento de materiales dependía principalmente del transporte marítimo.',
        'Junto a este espacio también se construyó la lancha del padre Antonio Ronchi, vinculando el lugar con dos actividades fundamentales para el desarrollo de Tortel: el trabajo en madera y la construcción de embarcaciones.'
      ],
      coordenadas: [-47.803445, -73.538702],
      thumbnail: `${thumbnailsImg}19-ex-aserradero-sm.webp`,
      icono: `${iconosImg}19-ex-aserradero.webp`,
      galeria: [
        `${hitosImg}19-ex-aserradero.webp`
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
      descripcion: [
        'En 1979, José Maripillán y su hijo José llegaron a Tortel para construir una embarcación por encargo del padre Antonio Ronchi. En las obras también participó Juan Mera y, desde 1982, Jaime Maripillán, después de terminar su servicio militar.',
        'Según recuerda Jaime, la madera fue preparada con la colaboración de trabajadores locales, entre ellos integrantes de la familia Curinao y Manuel Vargas.',
        'La idea de Ronchi era utilizar la embarcación para llevar madera directamente a Punta Arenas y regresar con víveres. También buscaba impulsar la pesca como alternativa económica, anticipando que los recursos madereros podrían agotarse.',
        'La lancha se llamaría Madre de la Divina Providencia.'
      ],
      coordenadas: [-47.803679, -73.538694],
      thumbnail: `${thumbnailsImg}20-lancha-padre-ronchi-sm.webp`,
      icono: `${iconosImg}20-lancha-padre-ronchi.webp`,
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
      descripcion: [
        'El sector de Junquillo forma parte de la historia de la ocupación de la bahía de Tortel. Familias provenientes de los distritos Ventisqueros, Río Pascua y Lago Quetru se asentaron en sectores como Playa Ancha y Junquillo. Durante años, estos lugares se comunicaron con el sector Base principalmente mediante embarcaciones.',
        'Junquillo también está vinculado a la carpintería de ribera, oficio que reúne los conocimientos necesarios para construir, mantener y reparar embarcaciones de madera. Entre los carpinteros de Tortel reconocidos por su trayectoria se encuentran Artidoro Vargas, José Barría, José Maripillán y Jaime Maripillán.'
      ],
      coordenadas: [-47.804509, -73.547059],
      thumbnail: `${thumbnailsImg}21-junquillo-sm.webp`,
      icono: `${iconosImg}21-junquillo.webp`,
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
    //ruta principal
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
