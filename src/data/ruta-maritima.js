const hitosImg = '/images/rutas/maritima/hitos/';
const thumbnailsImg = '/images/rutas/maritima/thumbnails/';
const iconosImg = '/images/rutas/maritima/iconos/';

export default {

  id: 'maritima',
  nombre: 'Ruta Marítima',
  bajada_titulo: 'La historia desde el agua',
  descripcion_card:
    'Descubrir Tortel desde el agua es descubrirla desde otra perspectiva. Esta ruta marítima invita a navegar por la bahía y contemplar el pueblo, sus pasarelas y el bosque desde un paisaje que cambia a medida que avanza el recorrido. La navegación permite acercarse a la historia de Tortel y a su estrecha relación con el agua, mientras se observan aves y otros elementos del entorno natural. Una experiencia para disfrutar la bahía con otros ritmos y comprender por qué navegar ha sido parte fundamental de la vida en este territorio.',
  descripcion_ruta: [
    'En Tortel, el agua ha sido mucho más que una característica del paisaje. Durante décadas, la navegación permitió conectar lugares, transportar materiales y abastecer a sus habitantes, en un territorio donde desplazarse por tierra no siempre fue posible. Las embarcaciones formaron parte de la vida cotidiana y del desarrollo de una localidad estrechamente vinculada a los ríos, canales y fiordos',
    'Recorrer la bahía permite acercarse a esa historia y reconocer cómo el asentamiento fue tomando forma junto a la costa. Desde la embarcación es posible observar la disposición de las viviendas, las pasarelas que conectan distintos sectores y la presencia del bosque que rodea el pueblo.',
    'La ruta contempla un recorrido principal por la bahía hasta el sector de Playa Ancha y una versión extendida que continúa remontando el río Baker hasta el aeródromo de Tortel. Ambas alternativas permiten descubrir el territorio desde el agua, incorporando distintas perspectivas de su historia y su paisaje.',
    'Una oportunidad para comprender Tortel desde una perspectiva que ha sido fundamental para quienes lo habitan: la del agua.'
  ],
  caracteristicas: [
    {
      titulo: '01. Tortel desde el agua',
      descripcion: 'Observa cómo se distribuyen las viviendas, las pasarelas y los distintos sectores del pueblo a lo largo de la bahía. Una perspectiva que permite comprender cómo el asentamiento se ha adaptado a las condiciones del territorio.'
    },
    {
      titulo: '02. Historias de navegación',
      descripcion: 'Descubre cómo las embarcaciones han permitido conectar lugares, transportar personas y materiales, y sostener la vida cotidiana en un territorio donde el agua ha sido una de las principales vías de comunicación.'
    },
    {
      titulo: '03. Las pasarelas desde el agua',
      descripcion: 'Descubre cómo se construyen y sostienen las pasarelas de Tortel, observando desde el agua sus estructuras y sistemas de apoyo. Una perspectiva diferente que permite comprender las soluciones constructivas desarrolladas para conectar los distintos sectores del pueblo en un territorio de pendientes, rocas y mareas.'
    },
    {
      titulo: '04. La naturaleza de la bahía',
      descripcion: 'Contempla el bosque desde la costa y observa las aves que habitan o recorren este entorno. Una oportunidad para reconocer la diversidad natural de la bahía y su relación con el paisaje que rodea Tortel.'
    }
  ],
  recorrido: {
    introduccion: 'Para realizar la Ruta Marítima puedes contactar a operadores turísticos locales que ofrecen servicios de navegación por la bahía de Tortel. Consulta directamente con ellos las alternativas de recorrido, horarios, tarifas y disponibilidad. Las salidas están sujetas a las condiciones meteorológicas y de navegación',
    consejos: [
      {
        consejo: 'Vestimenta',
        descripcion: 'lleva ropa abrigada e impermeable, incluso en días soleados. Durante la navegación, el viento y la sensación térmica pueden hacer que la temperatura se perciba más baja.'
      },
      {
        consejo: 'Calzado',
        descripcion: 'utiliza zapatos cómodos, con suela antideslizante, especialmente para subir y bajar de la embarcación.'
      },
      {
        consejo: 'Seguridad',
        descripcion: 'sigue las indicaciones del guía y utiliza el chaleco salvavidas durante toda la navegación. Evita desplazarte dentro de la embarcación sin autorización.'
      },
      {
        consejo: 'Condiciones meteorológicas',
        descripcion: 'la realización del recorrido depende del estado del tiempo y de las condiciones de navegación. La salida puede modificarse o suspenderse por razones de seguridad.'
      }
    ]

  },
  imagen_portada: '/images/rutas/maritima/maritima-card.webp',
  galeria: [
    '/images/rutas/maritima/galeria/1-sector-base.webp',
    '/images/rutas/maritima/galeria/2-pasarelas.webp',
    '/images/rutas/maritima/galeria/3-rio-baker.webp'
  ],
  color: '#ED7133',
  modalidad: 'Guiada, en embarcación',
  duracion: '1,5 horas',
  dificultad: 'Difícil',
  distancia: '4 kilometros',
  acceso: 'Mediante contratación de un servicio de navegación con operadores locales',
  hitos: [
    {
      id: 1,
      nombre: 'Hito 1 — Muelle señora Carmen (Muelle 3)',
      descripcion: [
        'En Tortel, la navegación ha sido fundamental para la vida cotidiana desde los primeros asentamientos. Durante décadas, las embarcaciones fueron el principal medio para transportar personas, alimentos, materiales y madera, conectando a los habitantes de la bahía con los sectores rurales y otras localidades de la Patagonia.',
        'Aunque la llegada del camino en 2003 transformó las posibilidades de acceso, el transporte marítimo sigue siendo parte esencial de la vida en Tortel. Los muelles permiten mantener estas conexiones y son puntos de partida para actividades de pesca, trabajo y navegación.',
        'Desde el Muelle Señora Carmen comienza este recorrido, que invita a descubrir Tortel desde el agua y observar cómo la navegación ha influido en su historia, sus construcciones y sus formas de habitar el territorio.'
      ],
      coordenadas: [-47.797639, -73.534000],
      thumbnail: `${thumbnailsImg}1-muelle-carmen-sm.webp`,
      icono: `${iconosImg}1-muelle-3.webp`,
      galeria: [
        `${hitosImg}1-muelle-carmen-a.webp`,
        `${hitosImg}1-muelle-carmen-b.webp`
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
      descripcion: [
        'La historia del poblamiento de Tortel está estrechamente relacionada con la colonización de los valles del Río Baker y la explotación del ciprés de las Guaitecas. Durante la primera mitad del siglo XX, familias provenientes de Chiloé y otras zonas del sur de Chile comenzaron a establecerse en distintos sectores del territorio, dedicándose principalmente al trabajo con la madera, la ganadería y la agricultura de subsistencia.',
        'Con el tiempo, algunas de estas familias se trasladaron hacia la bahía de Tortel, donde los primeros asentamientos se concentraron en Rincón Bajo y Playa Ancha. Los pobladores provenientes de Río Bravo, Lago Vargas y Ventisquero Steffen se establecieron principalmente en el sector Rincón, mientras que quienes llegaban desde Río Pascua, Lago Quetru y el Glaciar Jorge Montt se ubicaron hacia Playa Ancha y Junquillo.',
        'La elección de los lugares para construir sus viviendas respondía a necesidades concretas: encontrar protección del viento, buenos sitios para desembarcar y resguardar los botes, y acceso cercano al agua dulce. Así fueron formándose pequeños grupos de viviendas vinculados por relaciones familiares, actividades productivas y recorridos marítimos.',
        'Desde la bahía todavía es posible reconocer esta distribución del poblamiento, que no surgió a partir de calles o manzanas, sino de la relación entre las familias, sus embarcaciones y las condiciones naturales del territorio.'
      ],
      coordenadas: [-47.797834, -73.533402],
      thumbnail: `${thumbnailsImg}2-poblamiento-bahia-sm.webp`,
      icono: `${iconosImg}2-poblamiento-bahia.webp`,
      galeria: [
        `${hitosImg}2-poblamiento-bahia-a.webp`,
        `${hitosImg}2-poblamiento-bahia-b.webp`
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
      descripcion: [
        'Tortel se encuentra en un territorio modelado por los glaciares, entre los Campos de Hielo Norte y Sur. Durante miles de años, el movimiento de grandes masas de hielo fue excavando valles y dando forma a las montañas, fiordos y canales que caracterizan este paisaje austral.',
        'Las laderas que rodean la bahía están cubiertas por bosques templados lluviosos, donde crecen especies como el coihue, el canelo, el mañío, el tepú y el ciprés de las Guaitecas. Este último ha tenido una importancia especial en la historia de Tortel, por su utilización en la construcción de viviendas, embarcaciones y pasarelas.',
        'La presencia del agua también define este paisaje. Las lluvias abundantes, los ríos alimentados por los deshielos y las aguas marinas que ingresan desde los fiordos forman un entorno donde el agua dulce y salada interactúan constantemente.'
      ],
      coordenadas: [-47.799526, -73.534217],
      thumbnail: `${thumbnailsImg}3-paisaje-austral-sm.webp`,
      icono: `${iconosImg}3-paisaje-austral.webp`,
      galeria: [
        `${hitosImg}3-paisaje-austral-a.webp`,
        `${hitosImg}3-paisaje-austral-b.webp`,
        `${hitosImg}3-paisaje-austral-c.webp`
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
      descripcion: [
        'Las pasarelas de Tortel no surgieron como una red continua. En sus comienzos, los habitantes se desplazaban principalmente en bote y utilizaban pequeños caminos de madera para recorrer los tramos terrestres. Estos primeros senderos, conocidos como _envaralados_, se construían con tablas y postes de madera labrados a hacha, que permitían atravesar sectores de monte, terrenos húmedos y zanjas.',
        'A medida que el pueblo creció, los _envaralados_ fueron dando paso a pasarelas elevadas, puentes y escaleras de ciprés de las Guaitecas. Su construcción permitió conectar progresivamente las viviendas y los distintos sectores de la bahía, adaptándose a las pendientes y a los roqueríos.',
        'Desde el agua todavía pueden reconocerse algunos de esos antiguos recorridos, que transcurren a distintas alturas del terreno. Uno de sus puntos de referencia es la escalera situada junto a la actual Estación de Vacío, donde antiguamente terminaba un tramo del sendero para conectarse con la pasarela Padre Antonio Ronchi.'
      ],
      coordenadas: [-47.800428, -73.534531],
      thumbnail: `${thumbnailsImg}4-antiguos-recorridos-sm.webp`,
      icono: `${iconosImg}4-antiguos-recorridos.webp`,
      galeria: [
        `${hitosImg}4-antiguos-recorridos-a.webp`,
        `${hitosImg}4-antiguos-recorridos-b.webp`,
        `${hitosImg}4-antiguos-recorridos-c.webp`
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
      nombre: 'Hito 5 — Bajo las pasarelas',
      descripcion: [
        'Al navegar junto a la costa de Tortel es posible observar las pasarelas desde una perspectiva poco habitual: por debajo de la superficie que recorremos al caminar. Desde aquí quedan a la vista las vigas, los soportes y las distintas soluciones utilizadas para sostener estas estructuras sobre las rocas, las pendientes y el agua.',
        'Las pasarelas tradicionales se construyen principalmente con ciprés de las Guaitecas, una madera apreciada por su resistencia a la humedad. Su estructura se apoya en puntos específicos del terreno, evitando la necesidad de nivelar grandes superficies. En algunos sectores, los soportes descansan sobre la roca; en otros, las estructuras se elevan sobre el borde costero.',
        'Estas construcciones son también testimonio del conocimiento de los carpinteros y madereros locales, que han desarrollado y transmitido formas de trabajar la madera adaptadas a las condiciones de Tortel. Observarlas desde abajo permite comprender que las pasarelas no son solamente caminos, sino una parte fundamental de la arquitectura y los oficios de la localidad.'
      ],
      coordenadas: [-47.801719, -73.534069],
      thumbnail: `${thumbnailsImg}5-bajo-las-pasarelas-sm.webp`,
      icono: `${iconosImg}5-bajo-las-pasarelas.webp`,
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
      descripcion: [
        'El sector Base comenzó a adquirir importancia en 1955, cuando la Armada de Chile estableció en este lugar el Puesto de Vigías y Señales de Caleta Tortel, en respuesta a las necesidades de comunicación y abastecimiento de los pobladores del Bajo Baker.',
        'La presencia de la Armada permitió establecer comunicaciones por radio, brindar atención sanitaria y organizar el transporte de provisiones y de la producción maderera. Los propios pobladores participaron en la construcción de las primeras instalaciones, entre ellas el recordado Galpón Rosado.',
        'Con los años, el sector fue concentrando servicios e instituciones. En 1966 se instaló la Empresa de Comercio Agrícola (ECA), que compraba postes de ciprés y abastecía de alimentos a la población. Más adelante, la puesta en funcionamiento de la Municipalidad en 1981 contribuyó a consolidar este lugar como centro cívico de Tortel.',
        'Actualmente, el sector Base reúne parte importante de los servicios públicos y mantiene su función como punto de conexión marítima. Desde su rampa opera actualmente el ferry que conecta a Tortel con Puerto Natales, recordando la importancia que tiene aún la navegación para el abastecimiento y la vida cotidiana de sus habitantes.'
      ],
      coordenadas: [-47.803792, -73.535913],
      thumbnail: `${thumbnailsImg}6-sector-base-sm.webp`,
      icono: `${iconosImg}6-sector-base.webp`,
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
      descripcion: [
        'La llegada de la electricidad a Tortel fue resultado del esfuerzo de sus habitantes y de la colaboración del padre Antonio Ronchi. En 1989, el sacerdote llegó a la localidad con la noticia de que había conseguido una turbina para generar energía eléctrica. En ese entonces, el alcalde era Jorge Vera.',
        'Para concretar su instalación se formó un comité presidido por Iris Herrera. Los vecinos organizaron beneficios y actividades para reunir parte del dinero necesario, participando activamente en un proyecto que transformaría la vida cotidiana del pueblo.',
        'La central hidroeléctrica fue inaugurada el 9 de septiembre de 1991. Su funcionamiento permitió aprovechar la fuerza del agua para generar electricidad, aunque durante años el suministro estuvo sujeto a horarios y a la disponibilidad de agua, por lo que posteriormente fue necesario complementarlo con generadores diésel.'
      ],
      coordenadas: [-47.804508, -73.536676],
      thumbnail: `${thumbnailsImg}6-sector-base-sm.webp`,
      icono: `${iconosImg}7-turbina.webp`,
      galeria: [
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
      id: 8,
      nombre: 'Hito 8 — Cultura y comunidad',
      descripcion: [
        'Este sector del borde costero reúne distintas iniciativas que dan cuenta de la creación artística, los oficios y la investigación científica que se desarrollan en Tortel.',
        'La Casa de la Cultura es uno de los principales espacios para la realización de talleres, exposiciones, presentaciones y encuentros comunitarios. En sus alrededores se encuentran esculturas del artesano y escultor local Augusto Hernández Aguilante, dedicadas a la memoria de los pueblos canoeros y a los oficios tradicionales de la madera.',
        'Junto a ella se extiende el Centro de Interpretación Ambiental y Turístico de COPAS Coastal de la Universidad de Concepción. A través de cinco estaciones instaladas sobre una pasarela de madera, el recorrido acerca a los visitantes al conocimiento de los fiordos, la biodiversidad, la historia y las formas de vida de Tortel.',
        'En este sector también se encuentra el taller del Colectivo de Madereros de Tortel, organización dedicada a la preservación y transmisión de los oficios tradicionales de la madera. A través de talleres, encuentros y proyectos comunitarios, sus integrantes mantienen activos conocimientos vinculados a la carpintería, el tallado y otras prácticas del territorio.',
        'La Plaza Kawésqar, situada junto al borde costero, completa este conjunto de espacios públicos y culturales.'
      ],
      coordenadas: [-47.804402, -73.538624],
      thumbnail: `${thumbnailsImg}8-cultura-comunidad-sm.webp`,
      icono: `${iconosImg}8-cultura-comunidad.webp`,
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
      descripcion: [
        'Durante años, recorrer Tortel a pie implicaba subir y bajar escaleras, atravesando distintos niveles del terreno para desplazarse entre los sectores de la localidad.',
        'La construcción de la costanera transformó esta forma de recorrer el pueblo. Hoy, una pasarela continua cuyo último tramo fue inaugurado en 2022, permite desplazarse por todo el borde costero, siguiendo un recorrido prácticamente plano que conecta los distintos sectores sin necesidad de subir hacia las pasarelas más altas.',
        'Desde el agua se puede apreciar cómo esta extensa estructura de madera bordea la bahía, adaptándose a las rocas y al relieve. Además de facilitar los desplazamientos cotidianos, la costanera permite disfrutar de una nueva perspectiva del paisaje y de la vida junto al agua.'
      ],
      coordenadas: [-47.805144, -73.539484],
      thumbnail: `${thumbnailsImg}9-nueva-costanera-sm.webp`,
      icono: `${iconosImg}9-nueva-costanera.webp`,
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
      descripcion: [
        'Desde la bahía de Tortel se abre un extenso territorio de fiordos, canales e islas que conecta la desembocadura del río Baker con el océano Pacífico. Estas vías marítimas han sido fundamentales para la navegación y las comunicaciones en la Patagonia austral.',
        'Hacia el noroeste se encuentra el golfo de Penas, mientras que hacia el sur se extiende una red de canales que permite llegar a Puerto Edén y Puerto Natales. En este territorio también se encuentran los glaciares que descienden desde los Campos de Hielo Norte y Sur, entre ellos el Jorge Montt y el Steffen.',
        'Durante generaciones, estas rutas han permitido transportar personas, alimentos, madera y otros productos, conectando localidades y asentamientos que durante mucho tiempo dependieron casi exclusivamente de las embarcaciones.'
      ],
      coordenadas: [-47.805895, -73.540866],
      thumbnail: `${thumbnailsImg}10-hacia-el-fiordo-sm.webp`,
      icono: `${iconosImg}10-hacia-fiordo.webp`,
      galeria: [
        `${hitosImg}10-hacia-el-fiordo.webp`
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
      descripcion: [
        'El Muelle La Bertola es uno de los principales puntos de embarque y desembarque de Tortel, especialmente utilizado por los habitantes de Playa Ancha y Junquillo. Su importancia refleja el papel que sigue teniendo la navegación en los desplazamientos cotidianos de la localidad.',
        'Su nombre recuerda a Berta Muñoz, pobladora y propietaria del Almacén La Bertola, considerado el primer negocio particular de Tortel. En una época en que el abastecimiento era especialmente difícil, el almacén recibía sus productos por avioneta, convirtiéndose en un importante punto de provisiones para los habitantes.',
        'Este muelle conserva así una parte de la memoria comercial y cotidiana de Tortel, vinculada a las distintas formas en que sus pobladores han conseguido abastecerse y mantenerse conectados con el resto del territorio.'
      ],
      coordenadas: [-47.805736, -73.543595],
      thumbnail: `${thumbnailsImg}11-muelle-la-bertola-sm.webp`,
      icono: `${iconosImg}11-muelle-9.webp`,
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
      descripcion: [
        'La playa de Tortel se encuentra cerca de la desembocadura del río Baker, en un sector donde el paisaje de la bahía comienza a dar paso al entorno del río y sus canales.',
        'Este lugar también está vinculado a la historia del trabajo maderero. Hasta aquí llegaban los trabajadores que transportaban por el río los postes de ciprés, aprovechando la corriente para trasladar la madera desde los sectores de explotación hacia la costa, donde se reunía para su posterior embarque.',
        'Además de su importancia en la actividad maderera, la playa ha sido durante generaciones un lugar de recreación y encuentro para los habitantes de Tortel. En verano, las familias siguen llegando para bañarse, compartir y disfrutar del paisaje, mientras que el espacio también se utiliza para jugar al fútbol y realizar actividades comunitarias.',
      ],
      coordenadas: [-47.807531, -73.548637],
      thumbnail: `${thumbnailsImg}13-rio-baker-sm.webp`,
      icono: `${iconosImg}12-playa.webp`,
      galeria: [
        `${hitosImg}13-rio-baker-b.webp`
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
      nombre: 'Hito 13 — Río Baker',
      descripcion: [
        'El río Baker, el más caudaloso de Chile, fue durante décadas una de las principales vías de transporte y trabajo de los habitantes del territorio. Sus aguas conectaban los sectores del interior con Caleta Tortel y permitían trasladar la producción maderera hacia la costa.',
        'Una de las prácticas más características era el _balseo_. Los madereros reunían los postes de ciprés de las Guaitecas, los ordenaban en hileras y los amarraban para construir grandes balsas que descendían por el río. Los propios balseros viajaban sobre estas estructuras, guiándolas entre corrientes y obstáculos hasta llegar a los puntos de acopio, donde la madera esperaba su embarque hacia Magallanes.',
        'Este oficio exigía experiencia y un profundo conocimiento del río. Hoy, navegar por el Baker permite reconocer los paisajes que recorrieron generaciones de balseros y acercarse a una de las actividades que marcaron la historia y la identidad maderera de Tortel.'
      ],
      coordenadas: [-47.793645, -73.547785],
      thumbnail: `${thumbnailsImg}13-rio-baker-sm.webp`,
      icono: `${iconosImg}13-rio-baker.webp`,
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
      descripcion: [
        'Antes de la llegada de la Carretera Austral, Tortel dependía de las embarcaciones y las avionetas para comunicarse con otras localidades. La construcción del aeródromo por parte del Ministerio de Obras Públicas en 1980 representó un importante avance para sus habitantes, al facilitar el transporte de personas y el acceso a servicios fuera de la localidad',
        'En este sector también se encuentra el estadio, un importante lugar de encuentro para los habitantes de Tortel. Durante años, los pobladores llegaban remando desde distintos sectores de la bahía para reunirse cada semana y jugar al fútbol, haciendo del deporte una instancia de convivencia comunitaria.',
        'La apertura del camino en 2003 transformó las posibilidades de acceso al pueblo, pero el aeródromo y la cancha conservan parte de la memoria de una época en que la navegación era fundamental tanto para viajar como para encontrarse con otros habitantes de Tortel.'
      ],
      coordenadas: [-47.785239, -73.528048],
      thumbnail: `${thumbnailsImg}14-aerodromo-sm.webp`,
      icono: `${iconosImg}14-aerodromo.webp`,
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
