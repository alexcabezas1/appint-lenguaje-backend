import GameModel, { IGameDocument } from "../models/game.model";

export async function up() {
  const game1: IGameDocument = new GameModel({
    name: "Organizar de Oraciones",
    slug: "sort-sentences",
    difficulty: {
      EASY: {
        challengesNumber: 1,
        countDown: 4,
        allowNegativePoints: false,
        movementsBonusFactor: 2,
        pointsPerChallenge: 20,
        sentenceAttribute: "short_text",
      },
      NORMAL: {
        challengesNumber: 2,
        countDown: 1.5,
        allowNegativePoints: false,
        movementsBonusFactor: 1.5,
        pointsPerChallenge: 40,
        sentenceAttribute: "short_text",
      },
      HARD: {
        challengesNumber: 4,
        countDown: 1,
        allowNegativePoints: true,
        movementsBonusFactor: 1.2,
        pointsPerChallenge: 80,
        sentenceAttribute: "text",
      },
    },
    options: [
      {
        image: "030.jpg",
        short_text: [
          "Muchos niños juegan en la pileta",
          "No solo hay niños en la pileta también hay adultos",
          "Los niños se están divirtiendo en la pileta",
          "Hay animales en la pileta jugando junto a los otros niños",
          "No puede ser!, parece que hay una sirena en la pileta",
          "La niña del fondo está tomando una toalla para secarse",
          "Una niña se está lanzando por el tobogan",
        ],
        text: [
          "Hay muchos niños jugando en la pileta. Algunos de ellos usan flotadores y otros no.",
          "Mientras que los niños se divierten en la pileta, un adulto los supervisa",
          "Los niños no son los únicos que se encuentran en la pileta, también hay animales. Con ellos hay un pingüino, un gato y peces.",
        ],
      },
      {
        image: "042.jpg",
        short_text: [
          "La familia esta comiendo su desayuno",
          "Las niñas están comiendo cereal y pan tostado",
          "Los padres de las niñas están tomando una taza de café",
          "La familia esta desayunando cereal, tostadas, frutas y jugos",
          "Las niñas están usando sus pijamas aún",
          "Hay un pez arriba de la cocina",
          "A las niñas les gusta mucho lo que están comiendo",
        ],
        text: [
          "La familia esta empezando su día, las niñas tienen que ir a la escuela y los padres a trabajar",
          "A las niñas les gusta mucho el cereal y las tostadas de desayuno. Las niñas se ven muy felices.",
          "Dense prisa niñas tenemos que terminar de prepararlas para llevarlas a la escuela",
          "Deja a las niñas que coman el desayuno con calma. No podrán tener una buena digestión si comen tan rápido.",
        ],
      },
      {
        image: "048.jpg",
        short_text: [
          "Vamos a cubrirte con la manta, ya es hora de dormir mi niña",
          "Hay muchos peluches en la habitación de la niña",
          "La madre está preparando a su hija para dormir",
          "La niña tiene muchos juguetes y peluches en su habitación",
          "A la niña le gustan mucho los peluches de animales",
        ],
        text: [
          '"Vamos a cubrirte con la manta, ya es hora de dormir mi niña", dice la madre mientras su padre se despide desde la puerta de la habitación',
          "La niña tiene una habitación muy ordenada y limpia, aún cuando tiene muchos juguetes y peluches distribuidos en alredor de la habitación",
          "Los padres acompañan a la niña a su habitación y la ayudan a prepararse para dormir",
        ],
      },
      {
        image: "052.jpg",
        short_text: [
          "El padre y su hija fueron a la joyería",
          "El vendedor atiende al señor y la niña amablemente",
          "La niña rompió un collar que estaba viendo por accidente",
          "La niña está preocupada porque rompió un collar de la tienda mientras lo estaba viendo",
          "El vendedor de la tienda vende todo tipo de joyas y accesorios",
          "En esta tienda también se venden relojes",
          "Al romperse el collar muchas de sus partes cayeron al suelo",
        ],
        text: [
          "El padre y su hija fueron a la joyería a comprar un regalo para su mamá porque hoy es su cumpleaños. La niña quería que su papá la ayudará a elegir algo bonito para su mamá.",
          "La niña rompió un collar que estaba viendo por accidente. Aunque al vendedor parace no darle mucha importancia, parece que su padre la regañará por esto.",
          "Hija, en esta joyería venden todo tipo de joyas y accesorios. Además el vendedor que atiende es muy amable. Seguro podremos encontrar algo que te guste para tu mamá.",
        ],
      },
      {
        image: "Imagen-3-El-recreo.jpg",
        short_text: [
          "A pesar de estar en temporada de invierno hay muchos niños jugando en el parque",
          "Hay muchos niños jugando y divirtiendose en el parque",
          "Los niños se divierten con los diferentes juegos del parque",
          "Hay niños jugando en los columpios del parque",
        ],
        text: [
          "Mientras hay una niña recogiendo pelotas del suelo, otros niños juegan con un aro y otros juegan con arena",
          "Como es temporada de invierno, todos los niños que están jugando el parque están bien abrigados con buzos, bufandas y gorros.",
          "La maestra está cuidando a los niños mientras ellos juegan en el parque. A pesar de ser un grupo grande niños, ella está haciendo un buen trabajo.",
        ],
      },
      {
        image: "Imagen-5-Las-dependencias-del-colegio.jpg",
        short_text: [
          "En la escuela hay una bilioteca con muchos libros para leer",
          "La biblioteca tiene computadoras que los niños pueden usar para conectarse a internet",
          "Los niños pueden hacer ejercicio en la escuela",
          "En la escuela los niños pueden jugar y compartir con otros niños en el receso",
          "Los niños aprenden muchas cosas nuevas en la escuela",
          "Hay niños que llegan a la escuela porque sus padres los traen",
          "Hay niños que van a la escuela en el transporte escolar",
          "La escuela esta preparada para niños discapacitados",
        ],
        text: [
          "La escuela es un lugar emocionante porque hay muchos niños haciendo cosas diferentes al mismo tiempo en un espacio cerrado",
          "En la escuela hay un comedor donde los niños pueden comer sus almuerzos o meriendas. También hay un parque donde pueden jugar con otros niños durante el receso.",
          "En un aula una maestra enseña los números a un grupo de niños mientras otros niños se encuentran en la biblioteca leyendo libros y usando las computadoras para navegar en internet.",
        ],
      },
      {
        image: "Imagen-7-La-calle-los-transportes.jpg",
        short_text: [
          "En las ciudades siempre ocurren muchas situaciones al mismo tiempo",
          "Hay un grupo de personas haciendo fila para entrar al cine",
          "El centro comercial tiene varias tiendas que venden ropa",
          "En el kiosko venden revistas y parece estar abierto",
          "Hay muchos autos y motos en la calle y hay un policia controlando el transito",
          "Hay una persona barriendo las hojas caídas de los árboles",
        ],
        text: [
          "Debido a que estamos en temporada de otoño, hay personas barriendo las hojas caídas de los árboles",
          "Hay un policia controlando el transito en las calles, porque hoy hay muchos vehículos circulando tanto transporte público, autos y motos",
          "Mientras que el policia controla el transito, hay otras personas haciendo diferentes actividades como cruzar la calle, vender revistas en un kiosko, pasear su mascota y haciendo fila para entrar al cine",
        ],
      },
      {
        image: "Imagen-15-El-parque-zoológico-II.jpg",
        short_text: [
          "El zoológico es un lugar que puedes visitar para ver animales de cerca",
          "Un zoológico tiene diferentes tipos de animales pero ellos están enjaulados",
          "En este zoológico hay animales colgados de los árboles",
          "Hay una amplia variedad de pajaros y mariposas",
          "En el zoológico hay un área donde habitan algunos cocodrilos",
          "A los adultos junto a sus niños les gusta visitar el zoológico con mucha frecuencia",
        ],
        text: [
          "Mientras una señora observa a los cocodrilos y tortugas, en otra parte del zoológico una señora y su hijo observan la jaula de los insectos",
          "En el área donde habitan los monos hay una niña con mono encima de su cabeza y su padre se prepara para tomarle una foto con su cámara",
          "El zoológico les provee a los animales todo los cuidados y las condiciones necesarias para que los animales se sientan en su habitad natural",
        ],
      },
    ],
  });
  await game1.save();

  const game2: IGameDocument = new GameModel({
    name: "Detector de Sílabas",
    slug: "syllables-detector",
    difficulty: {
      EASY: {
        challengesNumber: 1,
        countDown: 2.5,
        allowNegativePoints: false,
        pointsPerChallenge: 40,
      },
      NORMAL: {
        challengesNumber: 2,
        countDown: 2,
        allowNegativePoints: false,
        pointsPerChallenge: 60,
      },
      HARD: {
        challengesNumber: 4,
        countDown: 1,
        allowNegativePoints: true,
        pointsPerChallenge: 80,
      },
    },
    options: [
      {
        text:
          "Hubo una vez una princesa a la que le gustaba mucho montar a caballo por el bosque y descubrir, cada día, nuevos lugares.<br/>Un día, cabalgó tanto, tanto que se perdió y no sabía volver.<br/>Estuvo horas y horas buscando el camino de vuelta, hasta que se hizo de noche y ya no sabía que hacer.<br/>No había luna y todo estaba oscuro. La princesa iba muy despacio, casi a tientas, arañándose<br/>con las ramas de los arbustos.<br/>Cuando empezaba a tener miedo, vio de pronto una luz.<br/>- ¿Qué estoy viendo?, dijo la princesa. ¡Qué suerte he tenido!. Iré hacia allí a ver quien hay.<br/>Después de mucho andar, llegó a la cabaña. Golpeó la puerta tres veces y abrió un viejo leñador.<br/>- ¿Qué haces aquí sola a estas horas de la noche? Preguntó el leñador.<br/>- Me interné en el bosque con mi caballo y me he perdido. Tengo mucha hambre y algunas heridas. ¿Podrías dejarme pasar la noche en tu cabaña?.<br/>- Pasa y caliéntate. Te curaré y compartiré contigo mi cena, dijo el anciano.<br/>Después de vendarle las heridas, el leñador puso en la mesa dos platos de sopa de pan y ajo, un poco de leche y un trozo de queso, porque era pobre y no tenía otra cosa que ofrecerle.<br/>La princesa no le dijo al leñador que era princesa y, después de cenar, se quedó profundamente dormida, porque estaba muy cansada.<br/>Cuando se despertó a la mañana siguiente, el leñador le dijo a la princesa el camino que debía seguir para volver a casa y no perderse.<br/>En el castillo, el padre y la madre de la princesa estaban muy preocupados porque no sabían donde estaba su hija.<br/>Entonces, alguien gritó:<br/>¡Han visto a la princesa llegar por el camino del bosque!.<br/>Los padres corrieron a encontrarse con su hija, que les contó todo lo que había ocurrido.<br/>El rey, para agradecer al leñador lo que hizo con su hija, lo invitó a vivir en el castillo durante toda su vida.<br/>",
        syllables:
          "al an ar as ba bal ban bo bos bre brir brió bus bí ca can cas ce cer ces cia cio co com con cu cuan da dar das de del der des di dió do don dor dos dre dres drí du dí dó e el em en es fre fun ga gar go gol gra gri gu guien guir gun gus gó ha ham has hay he hi ho hu i in ja jar jo la las le lec les lién lle llo llí lo los lu luz ma mas me men mi mie mon muc muy na nar nas ner ni no noc nue né ní o os pa pan par pe per pla po por pre prin pro pron pu puer pués que quien quí ra ran ras res rey ri rle ro ron rri rrie ré sa sar se si so su suer ta tan tar tas te ten ter ti tien to ton tos toy tra trar tres tro tu tó u un ve ven ver vez vi vie vien vio vir vis vo vol vos vuel y ya za zo han qué po qué ña ñán ó",
      },
      {
        text:
          "La antigua China<br/>La civilización china creció a orillas del río Huang (Amarillo), al norte del país, hace más de 7000 años. Se desarrolló aislada del resto del mundo durante cientos de años. Sus habitantes desconocían la existencia de otras civilizaciones en el mundo hasta el siglo II a. C. Antes de esa fecha, los únicos con los que se relacionaban eran nómadas de las tierras del norte y del este.<br/>Los campesinos cultivaban cereales en las fértiles tierras de las orillas del río (su tierra amarilla le dio nombre al río) y vivían en pequeñas aldeas de cabañas hechas de barro y palos. A medida que los métodos de cultivo se hicieron más eficaces, los granjeros podían producir suficiente comida para alimentar a otras personas, además de a sus familias. La población creció y empezó a extenderse por otras regiones de China.<br/>Según se iba desarrollando la civilización china, las familias reinantes o dinastías empezaron a adquirir poder, como la dinastía Shang que llegó al poder hacia el año 1750 a. C. Entonces, ya había ciudades grandes donde la gente desempeñaba diversos oficios. Los herreros usaban bronce y una mezcla de cobre y latón para hacer veleros para los reyes y nobles. Los veleros de bronce encontrados en los cementerios chinos de esa época tenían inscripciones, muestra de que la dinastía Shang había desarrollado su propio sistema de escritura. Los artesanos trabajaban con otros materiales además del bronce. Hacían carros de madera para que los nobles y los oficiales pasearan, y adornos de jade, una piedra semipreciosa. Los estribos también fueron un gran invento, ya que proporcionaban a los jinetes más control sobre sus caballos, lo cual les ayudaba en la batalla. Los científicos chinos fueron los primeros en entender el magnetismo e inventaron la brújula hace más de 2000 años.<br/>",
        syllables:
          "ad ais al an ar as ba ban bi bién bla bles bos bre bron brú bí c ca cam ce cer ces chi ci cia cie cien cio cios cir ciu ció ción cla co con cos cre cri crip cual cul cí da das de del der des di dio do don dor dos dra du dí e el em en es ex exis fa fec fi fue fér gen gio glo gran gua gó gún ha has he hec hi hua i ii in ins ja je ji ju la las le les li lias lla llan llas lle llo llos lló lo los ma mag me men mez mi mo mues mun más mé na nan nas ne nes ng ni no nom nor nos ní nó o pa pe per pie pio po por pre pri pro que qui ra ran re rei res ri ria rios rir ron ros rra rras rre rro rros rí sa se sem sha si sis so sos su sus ta tam tan tar te ten tes ti tie tis to ton tos tra tras tri trol tros tu tí tón u un va ve ven ver vi vo ví y ya yes yu za zó é ís ña ñas ño ños ú",
      },
      {
        text:
          "Las ciudades romanas<br/>Los romanos procedían de esa parte de Europa que ahora llamamos Italia. Construyeron un gran imperio. A medida que conquistaban nuevas tierras, contagiaban su estilo de vida a los pueblos conquistados. Todavía hoy siguen presentes muchos signos de la ocupación romana, puesto que fueron excelentes ingenieros y constructores. Hicieron 85000 km de carreteras y muchos acueductos.<br/>Los arqueólogos han encontrado ejemplos de ciudades romanas por todo el imperio. Las primeras casas romanas estaban hechas de ladrillo o piedra, pero algunas más modernas se construyeron con cemento decorado con ladrillo o piedra. Las calles de las ciudades formaban una cuadrícula; es decir, eran rectas y se cruzaban formando ángulos rectos. Muchas de las ciudades se construyeron, en principio, como fuerte para los soldados. Otras se hicieron para aquellos ciudadanos que decidían asentarse en los territorios conquistados.<br/>Los campesinos llevaban sus productos a las ciudades para venderlos en el mercado. El foro era el mercado principal. Los romanos usaban monedas, compraban las cosas por un precio estipulado en lugar de intercambiar mercancías. La mayoría de las ciudades tenían baños públicos que cualquiera podía visitar. Además de ser una forma de mantenerse limpios y sanos, era la oportunidad para charlar y hacer amigos.<br/>Mucha de la información que tenemos de las ciudades romanas nos ha llegado a través de Pompeya y Herculano, dos ciudades destruidas en el año 79 d.C. con la erupción del volcán Vesubio. Pompeya quedó enterrada por la lava y las cenizas y Herculano desapareció bajo el barro que produjo el volcán. En ambas ciudades se han descubierto calles enteras con tiendas y casas.<br/>",
        syllables:
          "al am an ar as ba ban bas biar bier bio bli blos c ca cam can ce cer cha ci cie cio cir ciu ció ción co com con cons cos cru cu cua cual cue cán cí d. da dad das de del der des di do dos dra dri drí du duc dí dó e el en es eu ex fo for fue fuer ga gar ge gia gos gran gu guen ha han has hec her hi ho hos hoy i im in jem jo km la las len lia lim lla lle lles llo llos lo los lu ma man me men mer mi mo mos muc más na nas ne ner ni nie no nos nue ní o pa pal par pe pie pio pios plos po pom por pra pre pri prin pro pu pue pues pú que quie quis ra ran ras rcam re rec res rio rios rlar rlos ro ron ros rra rras rre rri rro rup rí sa sas se sen ser si sig sol su sus ta tar tas te tes ti tie tien to tos tra tras tru truc trui tu u un va vas ve ven vi vol vés ví y ya ye yo za zas án ño ños ó",
      },
      {
        text:
          "Las ballenas<br/>¿Qué es enorme, gris, vive en el agua, es un mamífero y no es pez? ¿Quieres que te lo diga otra vez?<br/>La respuesta a esta pregunta es la ballena. Los científicos dan a las ballenas, los delfines y las marsopas el nombre de cetáceos. Los cetáceos viven en casi todos los océanos del mundo.<br/>Algunas ballenas pasan el verano en el círculo polar Ártico o en el Antártico y cuando empieza el frío, se desplazan hacia aguas más cálidas. Viajan en bandada y nadan sin parar durante dos o tres meses, solo paran para descansar o para relacionarse, pero nunca para comer, hasta que llegan a su destino: los trópicos. Allí se quedan para pasar el invierno, aparearse o tener las crías y cuidarlas. Cuando llega el buen tiempo, vuelven a las zonas frías.<br/>Las ballenas son animales de sangre caliente. Tienen la piel suave, orejas (unos orificios pequeños situados detrás de los ojos) y respiran a través de los orificios nasales, llamados espiráculos. Controlan conscientemente cada respiración, es decir, tienen respiración voluntaria, al contrario de los humanos que respiramos automáticamente, tenemos respiración involuntaria. Como respiran aire, las ballenas pasan mucho tiempo nadando cerca de la superficie del mar, pero son expertas buceando para buscar comida. Bajo del agua, las ballenas pueden aguantar la respiración desde diez segundos hasta dos horas.<br/>Aunque sus pulmones son pequeños en relación con su tamaño corporal, su respiración es eficiente porque cada vez que las ballenas respiran sustituyen el 80% del aire almacenado en los pulmones por aire nuevo (los humanos solo sustituimos un 25%), así almacenan suficiente oxígeno en la sangre.<br/>",
        syllables:
          "ai al an ar as au aun ba ban bre bu buen bus ca can car ce cer cia cie cien cio cios cir ción co con cons cor cos crí cu cuan cui cá cé cír da dan das de del den des di diez do dos du e el em en es ex fe fi frí ga gan ge gre gris gu gua guan guas gun ha has ho hu in jan jas jo jos la lan lar las les li lien lla lle llí lo los lun ma mar me men mer mi mo mos muc mun má más mí na nan nar nas ne nen ner nes ni no nom nor nos nue nun o os oxí pa pas pe per pez pi pie piel pla po por pre pue pues pul que ra ral ran rar ras re res ri ria rio rlas ro rá sa san sar se ses si sin so son su sua sus sí ta tar tas te ti tie tiem to tra tres tro trás tró tu tua tui tá tár tí u un ve ven vez vi via vier vo vuel vés y yen za zan zo quie qué ár ño ños",
      },
      {
        text:
          "Cómo empezamos a contar<br/>Cuando la gente empezó a contar, casi con toda seguridad utilizó las manos. Como casi todo el mundo tiene 10 dedos, es comprensible que contaran en decenas, y así fue como comenzó nuestro moderno sistema para contar: el sistema decimal.<br/>Los dedos eran una forma de contar antes de que existieran palabras para los números. Tocarte los dedos al contar ayuda a llevar la cuenta, y levantar los dedos en el aire es una forma de expresar números sin palabras. El vínculo entre dedos y números es antiguo. Hoy día usamos la palabra dígito (“dedo” en latín) para referirnos a un número.<br/>Los matemáticos dicen que contamos en base diez, lo que significa que contamos en decenas. No existe razón matemática para contar en decenas, es un mero accidente biológico. Algunas culturas antiguas utilizaban las manos para contar en base 5. Si existieran extraterrestres con ocho dedos, seguramente contarían en base 8.<br/>Durante gran parte de la historia, los hombres apenas han necesitado los números. Antes de la agricultura, recolectaban alimentos de la naturaleza. Cogían sólo lo que necesitaban y apenas les sobraba nada para comerciar o intercambiar; por eso no tenía sentido contar las cosas.<br/>En algunos lugares, la gente todavía vive como cazadores-recolectores. La mayoría sabe contar, pero apenas se molestan. La tribu piraña de la selva amazónica sólo cuenta hasta 2; todos los números grandes son “muchos”.<br/>Si se puede vivir sin números grandes, ¿por qué alguien empezó a contar? Para evitar los engaños. Imagina que pescas 10 peces y le pides a un amigo que te los lleve a casa. Si no supieras contar podría robarte alguno y nunca lo sabrías.<br/>",
        syllables:
          "ac ai al an as ba ban bar be biar bio ble bra bras bres brí bu ca car cas ce cen ces ci co com con cos cu cuan cuen cul có da dad de den der des di diez do dos drí du dí e el em en es ex exis fe fi for fue ga gen gi go gran gri gu guas guien guo gí han has his ho hom hos hoy i in la las le lec les li lle lo los lu ló ma mal me men mi mo mos muc mun má na nas ne ni no nos nues nun ní nú o oc pa par pe pes pi pie po por pre pren pue que qué ra ran ras rcam rciar re res ri ria rir ro ros rres rí sa sar sas se sel sen si sig sin sis so son su sí só ta tan tar te tes ti tie to tos tra tre tres tri tro tu tín u un va van var ve vi vir ví vín y yo yu za zó zón por ña ños",
      },
      {
        text:
          "Los dinosaurios<br/>Los dinosaurios son reptiles que vivieron en la tierra mucho antes que aparecieran los seres humanos. Estos animales dominaron a las demás especies durante 150 millones de años y se extinguieron hace 65 millones.<br/>Se sabe que hubo alrededor de 300 tipos distintos de dinosaurios, existieron en períodos diferentes y habitaron en todos los continentes del planeta.<br/>Eran reptiles de todas formas y tamaños, y como casi todos ellos, los dinosaurios eran terrestres y ponían huevos.<br/>Los dinosaurios carnívoros eran feroces. Se valían de los afilados dientes y garras para atacar a otros animales, ya fuera para cazar y alimentarse o para defender su territorio. Parece probable que algunos, como el Avimimus, se escondiesen para abalanzarse por sorpresa sobre el animal que pasara.<br/>El tiranosaurio era el dinosaurio más feroz entre los predadores. También se encuentra entre los carnívoros más grandes de todos los tiempos. Superaba los 8 metros de altura. Caminaba erguido sobre las patas traseras y tenía tres dedos en cada uno de los pies. Los dientes eran curvos y muy afilados. Los utilizaba para arrancar pedazos de carne. Se alimentaba de animales muertos y, cuando perseguía manadas de herbívoros, atacaba a los ejemplares viejos, enfermos o jóvenes que se separaban de los demás.<br/>Los dinosaurios herbívoros, que se alimentaban de vegetales, eran, en muchas ocasiones, más grandes que los dinosaurios carnívoros. Sin embargo, solían ser más lentos, lo que implicaba que los carnívoros pudieran cazarlos. Muchos herbívoros tenían un cuello muy largo con el que alcanzar el follaje de las plantas y árboles más altos.<br/>",
        syllables:
          "al an ba ban bar be bi bién ble bo bre bí ca can car ce ces cie cies co con cuan cue cuen cur da das de del der des di die dien dis do dor dos du e el em en er es ex exis fe fen fer fi fo for fue ga ge go gran gu gui guie guí ha has her ho hos hu hue im je jem jos jó la lan lar las len les li lla llo llos lo los lre lí ma mal mas me men mi mo mos muc muer mus muy más na ne nen nes ni no nos ní o pa pe per pies pla plan pli po por pos pre pro pu que ra ran ras re ren rep res rio rios rlos ro ron ros roz rra rran rras rres rri rí sa sau se sen ser si sin sio so son sor su ta tam tar tas te tes ti tie tiem tin to tos tra tre tres tros tu u un va ve vi vie vo vos y ya za zar zos ár ños",
      },
      {
        text:
          "Puro músculo<br/>¿Has probado a no mover ni un músculo? Es imposible. Sí que puedes decidir no dar ni un paso o doblar el meñique. Pero el corazón y el estómago también son músculos y no los puedes controlar.<br/>Los músculos están compuestos principalmente de fibras contráctiles. Ellos son las plantas energéticas de tu cuerpo. Transforman la energía en fuerza. Los que tú controlas son los músculos esqueléticos. Tienes unos 650. Unen los huesos con unas franjas de tejido muy duro llamadas tendones. Los músculos esqueléticos actúan por parejas y sirven para poder moverse. Uno de los dos se contrae para tensar un hueso, mientras que su complementario se relaja. Después el complementario se contrae y el primero se relaja. El hueso vuelve a su sitio.<br/>Los músculos que no puedes controlar se llaman músculos lisos; forman las paredes de los vasos sanguíneos y de los intestinos. Permiten también la contracción del estómago para procesar la comida.<br/>El músculo más potente que tienes no es ni liso ni esquelético. Se llama músculo cardíaco o miocardio. Es el corazón. Tu corazón late más de 4500 veces por hora. Su músculo, de aspecto fibroso, es único, y no lo puedes controlar.<br/>Los vasos sanguíneos y los nervios llegan a todos los músculos. La sangre les aporta energía y los nervios controlan las acciones.<br/>Los músculos que no utilizas pierden fuerza y volumen. Los que utilizas se vuelven fuertes y gruesos. El ejercicio repetido hace que las fibras musculares se hagan más gruesas. Los culturistas hacen ejercicios especiales para desarrollar todos los músculos principales, pero no es necesario ser culturista para estar fuerte. Haciendo ejercicio con regularidad mantendrás los músculos en forma.<br/>",
        syllables:
          "ac an as ba bién blar ble bras bro car cas ce cen ces ci cia cien cio cios ción co com con cos cu cuer cul da dad dar das de del den der des dio dir do dos drás du dí e el en es fi for fran fuer gan go gre grue gu guí gé gí ha ho hue im in ja jas jer ji la lan lar las les li lla llar lle llos lo los lu lé ma man me men mi mien mio mo mus muy más mús nas ne nen ner nes ni no nos o os pa pal pe pec per pier plan ple po por pri prin pro pu pue pues pués que ra re res ri rio ris ro rro sa san sar sas se ser si sir so son sos su sí ta tam tar tas te ten tes ti tie tio to tos tra trac trans tras tro trác tu tán tó tú u un va ve ven ver vios vo vuel y za zas zón has ñi ú",
      },
      {
        text:
          "Los principios de la ciencia<br/>Al principio, el mundo se explicaba por medio de supersticiones y mitos. Pero eso cambió hace unos 3000 años, en Grecia. La gente dejó de confiar en sus antiguas creencias y decidió examinarlo todo desde el principio. Así es como empezó la ciencia.<br/>Los griegos tenían grandes ideas, pero casi nunca realizaban experimentos para comprobarlas. Aún así hicieron descubrimientos científicos. Hacia el año 600 a.C. descubrieron la electricidad estática. Se dieron cuenta de que al frotar el ámbar contra la lana, la piedra atraía mágicamente a las plumas.<br/>Según la leyenda, Magnes, un pastor griego, descubrió la fuerza magnética cuando su pie se quedó pegado a una montaña, pues una roca magnética llamada magnetita tenía un “espíritu” que atraía el metal.<br/>La mayoría de la gente pensaba que la Tierra era plana, pero los griegos no sólo se dieron cuenta de que era redonda sino que estimaron su tamaño al medir sombras en distintos lugares. Pero como no sabían que la Tierra giraba, creían que el Sol y las estrellas cruzaban el cielo porque giraban a nuestro alrededor. Por este error, los griegos pensaban que la Tierra era el centro del Universo.<br/>Uno de los griegos más inteligentes fue Arquímedes, un inventor brillante. En una ocasión, mientras se bañaba y pensaba cómo saber si una corona del rey era de oro o no, descubrió que se podía conocer el volumen de los objetos viendo como subía el nivel del agua cuando se sumergían en ella. Al darse cuenta, salió de la bañera y corrió desnudo por la calle gritando ¡eureka!<br/>Arquímedes entendió, también, que las palancas aumentan las fuerzas y utilizó el principio de la palanca para diseñar máquinas de guerra que utilizaron contra los romanos.<br/>",
        syllables:
          "al an ar as au ba ban bar ber bién bió bras bri brie brió bí c. ca cam cas ce cen cer ci cia cias cie cien cio co com con cos cre cru cu cuan cuen có da dad dar de del des di die dio dir dis dió do don dor dra dí dó e el em en es ex exa fi fiar fro fue fuer ga gen gi go gos gran gre gri grie gua guas gue gí gún ha hi i in je jó ka la lan las le lec li lió lla llan llas lle lo los lre lu ma mag mas me men mer mi mien mo mon mun má más na nas ne nes ni no nos nu nues nun né ní o ob pa pas pe pen pers pie pio pios pla pli plu po por prin pro pues pí que qui quí ra re res rey ri rlas rlo ro ron rra rrió rror rí sa se si sión so sol som su sus sí só ta tal tam tan tar te ten tes ti tie tin to tor tos tra tras tre tri tro tu tá tí u un vel ven ver vien vo y yen yo za zas zó ¡eu ám í ña ñar ñe ño ños ún",
      },
      {
        text:
          "Los caracoles<br/>Los caracoles son moluscos gasterópodos, con una concha en espiral. Pueden aparecer en la tierra, en agua dulce y en el mar, aunque cuando se habla de caracoles, se suele entender que se habla de caracoles terrestres.<br/>Los caracoles se mueven principalmente mediante ondas que pasan a lo largo de la superficie inferior de su pie muscular. Este movimiento varía con las especies.<br/>Muchos caracoles son vegetarianos: comen materias vegetales que raspan con la rádula (lengua rasposa) de su boca. Los fragmentos, mezclados con saliva, entran en el estómago, donde las enzimas digestivas producen la digestión.<br/>Algunos caracoles son carnívoros y normalmente tienen la rádula modificada y enzimas digestivos más poderosos, así como un estómago más corto.<br/>En la Península Ibérica abunda el caracol común. También se encuentran el caracol serrano, el caracol judío y el caracol de bosque.<br/>En los caracoles acuáticos, la función de la concha es, probablemente, la de protección ante los depredadores, mientras que en los caracoles terrestres su papel principal es el de permitir la conservación de la humedad.<br/>El caracol de tierra puede cerrar la boca de su concha mediante una puerta de mucus o de calcificación que segrega el animal en períodos de estiaje o cuando hiberna, o sea cuando en verano las condiciones climáticas son demasiado secas y cálidas o cuando en invierno hace demasiado frío. De este modo, los caracoles pueden explotar los períodos favorables y, después, retirarse a su micro hábitat protegido cuando el clima les es contrario.<br/>",
        syllables:
          "al an aun ba ber bi bién bla ble bles bo bos bun bé ca cal car cas ce cen cer cha ci cie cies cio ción cla cli co col con cor cos cro cu cuan cuen cus cuá cá da dad das de den der des di dian do don dos du dul dí el en es ex fa fe fi frag frí fun ga gas ge ges gi go gre gu gua ha hi hos hu há i in je ju la lar las le len les li lo los lus ma mal mar mas me men mez mi mien mo mu muc mue mus má más mún na nen nes ni no nor nos ní nín o on pa pal pan pe pel per pi pie plo po pre prin pro pue puer pués que ra ral rar ras re res ri ria rias rio rior rmi ro ros rra rrar rres rá rí ró sa san se ser sia son sos su sue sí ta tam tar tat te tec ten ti tia tie tir tión to tos tra tran tras tres tó u un va vas ve ven vi vier vo vos y zi",
      },
      {
        text:
          "El palacio del Olimpo<br/>Los doce dioses más importantes de la Grecia antigua, llamados dioses del Olimpo, pertenecían a la misma gran familia. Vivían juntos en un palacio enorme, situado, por encima del nivel habitual de las nubes, en la cumbre del monte Olimpo, la elevación más alta de Grecia. Unas paredes altísimas, imposibles de escalar por ser demasiado escarpadas, protegían el palacio. Los Cíclopes, gigantes con un solo ojo, habían construido estas paredes según el mismo esquema que los palacios reales de la Tierra.<br/>En el extremo meridional, inmediatamente detrás de la Sala del Consejo, estaban las habitaciones privadas del rey Zeus, el dios-padre, y la reina Hera, la diosa-madre. El lado septentrional del palacio, estaba integrado por la cocina, la sala de banquetes, la armería, los talleres y las habitaciones de los criados. En la parte central había un patio cuadrado, abierto hacia el firmamento, con galerías cubiertas y habitaciones privadas a ambos lados, propiedad de los otros cinco dioses y de las otras cinco diosas del Olimpo. Más allá de la cocina y de las habitaciones de los criados habían sido construidas casetas para los dioses menores, cobertizos para los carros, establos para los caballos, perreras y una especie de parque zoológico donde los dioses del Olimpo guardaban sus animales sagrados.<br/>Los dioses del Olimpo se encontraban a veces en la Sala del Consejo para hablar de los asuntos de los mortales: por ejemplo, de qué ejército tenía que ganar una guerra o de si hacía falta castigar a algún rey o alguna reina que se habían comportado de manera orgullosa o censurable. Pero durante la mayor parte del tiempo estaban demasiado ocupados con sus propias peleas y sus pleitos para prestar mucha atención a los asuntos de los mortales.<br/>",
        syllables:
          "al am an ar as ba ban ber bes bi bier blar ble bles blos bos bre bí ca car cas ce cen ces ci cia cie cin cio cios ción clo co com con cons cria cu cua cum cí da dad das de del des dia dio do don dos dra dre du e el en es ex fa fal fir ga gan gar gi gra gran gre gu gua guar gue gí gún ha he im in jem jo jun jér la lar las le les lia lim lla lle llo llos llá lo los ló ma mas me men mi mis mo mon mor muc más na nal nar nas ne nes ni no nor nu ní o or pa par pe per pes pias pie plei plo po por pres pri pro que qué ra ran ras re rei res rey ri ro rra rre rros rí s- sa sa- sas se sep ser ses si sia so su sun sus ta tan tar tas te ten tes ti tie tiem tio to tos tra tral tras tre trio tros trui trás tua tual tí u un va ve vel vi ví y yor zeus zo zos",
      },
      {
        text:
          "Arácnidos<br/>Los arácnidos son una clase de artrópodos quelicerados. Los arácnidos tienen un origen antiquísimo (las formas más antiguas se remontan a cientos de millones de años atrás, con animales similares a los actuales escorpiones) y suelen habitar en tierra firme, sobre todo en las zonas muy cálidas y húmedas. Otros habitan en países templados y algunos, como ciertas especies de arañas, llegan hasta la región ártica. Se conocen unas 36000 especies de arácnidos, pero se calcula que existen muchos miles más.<br/>El cuerpo de los arácnidos está dividido en una parte anterior (cefalotórax) y una parte posterior (abdomen). Los arácnidos no tienen antenas. Los dos primeros apéndices articulados constituyen los quelíceros, que al estar acabados en quela o pinza les permite sujetar la comida, desmenuzarla y llevarla la boca. Los escorpiones, las arañas y algunos ácaros disponen de glándulas venenosas.<br/>Los arácnidos son carnívoros y temibles depredadores. Los escorpiones se alimentan de presas vivas, como coleópteros, escarabajos y otros artrópodos. Tras desmenuzarlos con los quelíceros, succionan las partes comestibles. Las arañas recubren a sus presas con jugos gástricos para ablandarlas y “derretirlas” antes de comérselas.<br/>Machos y hembras tienen a menudo formas muy distintas (dimorfismo sexual), como en el caso de las arañas. La reproducción es ovípara, raramente ovovivípara (es decir, con mantenimiento de los huevos en el cuerpo materno hasta que se abren).<br/>Todos los arácnidos son animales muy agresivos siempre dispuestos a emprender un ataque para conquistar a sus presas. Los escorpiones utilizan su venenoso aguijón caudal para matar. Las arañas son muy hábiles en la construcción de telas finísimas, transparentes y viscosas que sirven, entre otras cosas, para atrapar a sus presas.<br/>",
        syllables:
          "ab ac al an ar ba bi blan bles bo bras bre bren ca cal car cau ce cen ces cien cier cies cio cir ción cla co con cons cor cos cu cuer cá da dal das de der des di dis do dos du duc el em en es exis fa fi fir fis for gan gen gión glán gos gre gu guas gui gás ha has hem hos hue há hú je jos ju jón la las le len les li lle llo lo los lí ma mac man mas me men mes mi mien mo mon mor muc muy más mér na nan nas ne nen nes ni no nos nu ní o pa par pe per pin pio pla po pos pre pren pri pro pues pén que quis quí ra rax re ren res ri rior rla rlas rlos ro ros rra rre rác sas se ses sexual si siem sir so son su suc sue sus ta tan tar tas te tem ten ter tes ti tie tin to tos tra trans tras tre tri tros truc trás tró tu tua tá tó u un va vas ve ven vi vis vo vos ví y yen za zan zo á ár í ñas ños óp",
      },
      {
        text:
          "La lluvia ácida<br/>Contaminamos o ensuciamos el aire de muchas formas. El combustible quemado por los motores de los automóviles desprende gases a través de los tubos de escape que contaminan el aire. Las centrales de energía eléctrica queman carbón y petróleo; y las chimeneas de las casas también contaminan el ambiente.<br/>Algunos contaminantes caen en forma de polvo y el resto asciende a la atmósfera. El humo contaminado se mezcla con el vapor de agua de las nubes y se transforma en ácido; por tanto, la lluvia contendrá ácido diluido. La lluvia que cae de las nubes contaminadas se denomina lluvia ácida.<br/>Las nubes que contienen esta lluvia pueden ser arrastradas por el viento unos 500 kilómetros diarios. La contaminación puede trasladarse así de un país a otro situado a miles de kilómetros. Los gases contaminantes emitidos a la atmósfera en España pueden ser arrastrados por el viento a regiones de Francia o Italia en tan sólo dos o tres días. Las altas chimeneas contribuyen a que el humo llegue más lejos.<br/>La lluvia ácida puede tener efectos terribles en los bosques. El ácido erosiona los minerales del suelo y dificulta la actividad vital en las hojas. Ello puede influir en el crecimiento de los árboles y de las plantas, que pierden sus hojas y se debilitan. Entonces, no tienen defensas frente a los hongos, las enfermedades o las heladas, y pueden quedar a merced del voraz apetito de los insectos. Todo el bosque puede morir.<br/>La lluvia ácida fue observada por primera vez hace 200 años en Gran Bretaña cuando se dieron cuenta de que las estatuas de mármol lentamente perdían sus detalles más finos y los edificios de piedra o de ladrillo se erosionaban.<br/>",
        syllables:
          "ac ai al am an as at au ban bes bi bien bién ble bles bo bos bre bu bus bón ca car ce ced cen ces chi ci cia cien cios ción cla com con cre cuan cuen cul da dad dar das de del den des di dia die do dos dra dri drá dí e el en es fe fec fen fer fi fluir for fran fren fue ga gio gos gran gu gua gue gí ha has he ho hon hu i in jas jos ki la las le len les li lia lle lles llo llu lo los lui léc ló ma man mas me men mer mez mi mien mo mol mos muc már más mó mós na nan ne nen ner nes no nos nu o ob pa pe per pie pier plan pol por pren pri pue que ques ra raz re res rios rir ro ron rras rri sas se sec ser ses si sio su sue sus sí só ta tal tam tan tas te ten tes ti tie to ton tos tra trans tras tres tri tro tros tró tu tua tuas u un va vez vi via vien vo vés y yen á ár ís ña ños",
      },
      {
        text:
          "El desafío espacial<br/>En el espacio no hay atmósfera, es decir, ni gases ni aire, por ello, es imposible respirar. Como las vibraciones del sonido solo se pueden transmitir si hay gases, en el espacio, lo que reina es el silencio.<br/>Tampoco hay gravedad, ya que su atracción sólo se siente junto a cuerpos de grandes dimensiones, como los planetas o las estrellas. Y si no hay gravedad, tampoco hay peso. Al no haber gravedad ni resistencia del aire, todo lo que se mueva continuará haciéndolo a la misma velocidad y en la misma dirección... para siempre. Estas y otras circunstancias imponen una serie de inconvenientes a los viajes espaciales.<br/>Primeramente, los astronautas están atraídos por la fuerza de gravedad de la Tierra. Para escapar a esta atracción, serán impulsados de la superficie del planeta a una velocidad de 8 km/seg. Esto bastará para ponerlos en órbita; pero para salir de ella, necesitarán una velocidad de 11,2 km/seg (velocidad de escape).<br/>Una vez en el espacio, el siguiente obstáculo será la falta de aire, agua y alimentos; lógicamente, los astronautas viajarán en el interior de una nave espacial que contenga el equipo de supervivencia necesario para tan largo viaje. Dicha nave les proporcionará también luz y calor, además de protegerles de las radiaciones solares. Pero antes habrá que pensar cómo propulsar la nave espacial. Tanto los motores de gasolina como los cohetes necesitan oxígeno para funcionar, por lo que los astronautas necesitan un sistema de propulsión que funcione sin él.<br/>Para volver a la Tierra, la nave tendrá que ser capaz de resistir el regreso, atravesando la atmósfera, teniendo en cuenta que esto producirá un rozamiento que pondrá la nave al rojo vivo. Ya superados estos problemas, queda el último: realizar un aterrizaje seguro.<br/>",
        syllables:
          "ai al an as at bas ber bi bién ble bra brá ca ce ci cia cial cias cie cio cir cién ción co con cu cuen cuer cuns có da dad de del den des di dia dic do dos drá du e el en es fal fe fi fuer fun fí ga ge gi go gra gran gre gu gua guien ha hay he im in ja je jes jo jun km la lar las len les li lir lla llas llo lo lor los luz ló ma mas me men mi mien mis mo mue más mós na nar nau ne nen nes ni nien no nua o obs oxí pa par paz pe pen per pi pla po pon por pos pre pri pro pue pul que qui ra rar re rec rei res rie rio rior rles rlos ro rra rri rá rán sa san sar se seg ser ses si siem sien sin sio sis sión so su só ta tam tan tas te ten tes ti tie tir to tos tra trac trans tras tre tro tá tán u un va ve ven ver vez vi via vo vol y ya za zar él í ór úl",
      },
      {
        text:
          "La piel<br/>El cuerpo humano está cubierto por una capa elástica que se llama piel, la cual tiene entre otras funciones la de mantener unidos todos los elementos del cuerpo y evitar que se evapore el agua o que penetren sustancias nocivas.<br/>El grosor de la piel cambia. En la mayor parte del cuerpo mide 2 mm. Es más gruesa en la planta del pie que en los párpados, donde mide sólo 0,5 mm. La piel también tiene texturas diferentes. La de los párpados es flexible, mientras que la de la palma de la mano es dura.<br/>La piel está formada por capas diferentes. La exterior se llama epidermis y es una capa compacta de células muertas que contiene queratina. Esto hace que nuestra piel sea resistente. Estas células se renuevan constantemente. Hay también otras células que producen un pigmento llamado melanina, que es el que hace nuestra piel oscura, protegiéndola del sol.<br/>Bajo la epidermis tenemos una capa más gruesa y elástica que se llama dermis. Aquí, las glándulas sebáceas secretan una sustancia oleosa que mantiene nuestra piel y nuestro pelo suaves e impermeables. Los vasos sanguíneos, los folículos pilosos y las glándulas sudoríparas ayudan a mantener la temperatura corporal. Cuando el cuerpo está muy caliente, los vasos sanguíneos se dilatan y llevan más sangre caliente cerca de la superficie de la piel para que el aire exterior la refresque. Las glándulas sudoríparas producen más sudor y éste también hace sentir frescor.<br/>Cuando el cuerpo está frío, los vasos sanguíneos se contraen. Unos pequeños músculos estiran los pelos para que capten el aire caliente que pasa cerca; a eso se le llama tener la piel de gallina.<br/>Bajo la dermis tenemos otra capa, la hipodermis. Es una capa de grasa que mantiene caliente el cuerpo y almacena energía.<br/>",
        syllables:
          "ai al as ba bia bier bién ble bles bá ca cam cap ce cen cer ci cia cias cie cio com con cons cor cre cu cual cuan cuer cé da dan de del der di do don dor dos du e el en es ex fe fi flexi fo for fres frí fun ga gién glán gra gre gro grue gua guí gí ha hay hi hu im jo la las le lien lla lle lli lo los lu lás lí ma man me men mi mien mis mm mos muer muy más mús na ne ner nes ni no nos nue nues o os pa pac pal par pas pe per pi pie piel pig plan po por pro pár que quí ra ral ran ras re ren rior rí sa san se sen sis so sol sor sos su sua sus só ta tam tan tar tas te tem ten tes tex ti tie tir to tos tra tras tre tren tro tu tá u un va van vas ves vi y yor yu és ños",
      },
      {
        text:
          "El fuego<br/>Se llama fuego al proceso de oxidación violenta de una materia combustible, con desprendimiento de llamas, calor y gases.<br/>Para que exista el fuego debe existir oxígeno. Así pues, para que se quemen las cosas necesitan aire. Una hoja de papel arde bien ya que puede recibir una buena cantidad de aire. Si se hace una bola con la hoja de papel, sólo se quemará por los lados, porque el aire no puede llegar al centro de la bola.<br/>Cuando preparas un fuego, dispones la leña y los papeles de forma que pueda penetrar el aire. Un fogón tiene agujeros de manera que el aire pueda entrar por ellos y así ayude a quemar la madera y el carbón. Si un fuego no arde bien, se le sopla, se utiliza un fuelle, o se le avienta con un trozo de cartón para que entre más aire.<br/>En ocasiones queremos apagar un fuego. Para conseguirlo evitamos que el aire llegue a él. Muchos fuegos se pueden apagar con agua. El agua enfría el fuego y lo aísla del aire. Pero el agua no se puede utilizar en fuegos donde se quema petróleo o gasolina, porque flotan sobre el agua y esparcen el fuego. Los bomberos rocían con espuma los incendios de petróleo o de gasolina. La espuma apaga el fuego al no dejar llegar el aire. Un buen sistema para salvar a alguien a quien se le quema la ropa es enrollarlo con una manta o con una sábana. Eso impide que el aire llegue a las llamas y enseguida se apaga.<br/>",
        syllables:
          "ai al an ar ba be bien bir ble bo bom bre bue buen bus bón ca can car ce cen ci ción co com con cuan cí da dad de del den des di dios dis do don dos e el en es exis flo fo for frí fue ga gar ge go gos gu gua gue gui guien gón ha ho hos im in ja jar je la las le len les li lla lle llos lo lor los ma man mar mas men mien mos muc más na ne nes no nro o oxi oxí pa par pe pel pi pla po por pre pren pro pu pue pues que quien ra ras re ria rlo ro ros rá sal sas se ses si sio sis so sá sí só ta tan te ti tie tir to trar tre tro tró tón u un var vi vien vio y ya yu za zar zo él ís ña",
      },
      {
        text:
          "Inventos<br/>Un invento es algún objeto, herramienta o dispositivo que no existía anteriormente, y que ha sido ideado por el ingenio humano para facilitar el trabajo o la vida cotidiana. Se diferencia del descubrimiento en que este se refiere a algo que ya existía pero no era conocido.<br/>Los inventos surgen rara vez de forma inesperada. Suelen ser el resultado de aunar otras tecnologías de una nueva manera. Pueden llevarse a cabo como respuesta a una necesidad humana específica, como resultado del deseo del inventor de hacer algo de modo más rápido o eficaz, o por casualidad. Con ellos, los inventores, han impulsado el progreso de la humanidad.<br/>Algunos inventos:<br/>Las tijeras se inventaron hace más de 3 000 años, pero más o menos a la vez en diferentes sitios. Los modelos de tijeras han ido evolucionando hasta el tipo actual, que emplea el principio del eje y la palanca, añadiendo así comodidad y eficacia.<br/>Las cerillas modernas fueron inventadas por el químico británico John Walker en 1827. Utilizó palitos mojados por una punta en una mixtura de productos químicos que se inflamaban con el calor engendrado al rascar la cabeza en papel de lija. De esa mixtura les vino el nombre antiguo de “mixtos”, que perdura en lugares como Cataluña y Andalucía.<br/>La bombilla eléctrica evolucionó desde los primeros experimentos que demostraron que una corriente eléctrica, al pasar por un alambre, crea calor debido a la resistencia del metal. Si la corriente es lo suficientemente fuerte, el alambre se pone incandescente y brilla. Hubo varios inventores independientes, entre ellos Thomas A. Edison y Joseph Swan.<br/>",
        syllables:
          "ac al an as au ba ban be bi bo bom bre bri ca can car caz ce cen cer ci cia cien cio co con cos cre cu cí da dad das de del den der des di dia dien dis do dos dra du duc e el em en es ex exis fa fe fi fie fla for fue fuer ga ge gen go gre gu guo gí gún ha han has he hn hu i im in ja je jo ker la lam lan las len les li lla llas lle llos lo lor los lu léc ma mas me men mi mien mix mo mos más na nan nar nas ne nes ni nio no nom nos nue nó o ob pa pe pel pen per ph pi pio ple po por pri prin pro pue pues pul pun que quí ra ras re ren res ri rior rios ro ron ros rra rrien rá sa sar se ser si sis so son su sua sue sul sur swan sí ta tal tar te tec ten tes tho ti tios to tor tos tra tras tre tri tu tual tá tí u un va var ven vez vi vo wal y ya za zó ña ños",
      },
    ],
  });
  await game2.save();

  const game3: IGameDocument = new GameModel({
    name: "Comprender las Lecturas",
    slug: "reading-comprehension",
    difficulty: {
      EASY: {
        challengesNumber: 1,
        countDown: 2.5,
        allowNegativePoints: false,
        pointsPerChallenge: 20,
      },
      NORMAL: {
        challengesNumber: 2,
        countDown: 2,
        allowNegativePoints: false,
        pointsPerChallenge: 40,
      },
      HARD: {
        challengesNumber: 4,
        countDown: 1,
        allowNegativePoints: true,
        pointsPerChallenge: 80,
      },
    },
    options: [
      {
        text:
          "Carlos:<br/>Cuando vuelvas del colegio, recuerda lo que tienes que hacer:<br/>- Sacar al perro de paseo.<br/>- Arreglar tu habitación.<br/>Mamá.",
        questions: [
          {
            question: "¿Quién escribe la nota?",
            answers: ["La mamá de Carlos.", "Carlos.", "La tía de Carlos."],
            right_answer: "La mamá de Carlos.",
          },
          {
            question: "¿Para quién es la nota?",
            answers: [
              "Para la mamá de Carlos.",
              "Para Carlos.",
              "Para la hermana de Carlos.",
            ],
            right_answer: "Para Carlos.",
          },
          {
            question: "¿Para qué se escribió esta nota?",
            answers: [
              "Para informarnos de Carlos.",
              "Para recordar a Carlos lo que tiene que hacer.",
              "Para contarnos de Carlos y su mamá.",
            ],
            right_answer: "Para recordar a Carlos lo que tiene que hacer.",
          },
        ],
      },
      {
        text:
          "Pelitos blancos<br/>Había una vez una villa de conejos llamada “Orejas Caídas” que quedaba al norte de un bosque. A los conejos que vivían ahí les decían “orejas caídas” porque tenían las orejas inclinadas completamente hacia abajo. Los conejos de esta villa estaban muy orgullosos de sus orejas largas y caídas. Pero había un conejo joven de la villa que no se sentía muy feliz. Sus orejas eran diferentes pues las tenía paradas. Todos se burlaban de él y lo llamaban “Pelitos blancos”.<br/>- Deberías estar orgulloso ya que tus orejas son igualitas a las que tenía tu abuelito, - le decía siempre su mamá.<br/>Pero a Pelitos blancos no le gustaba verse diferente. Quería que sus orejas fueran largas y caídas como las de los demás conejos de su villa.",
        questions: [
          {
            question: "¿De qué estaban orgullosos los conejos de la villa?",
            answers: [
              "De sus padres.",
              "De sus orejas caídas.",
              "De su villa.",
            ],
            right_answer: "De sus orejas caídas.",
          },
          {
            question: "¿Por qué el conejito joven no se sentía feliz?",
            answers: [
              "Porque sus orejas eran diferentes.",
              "Porque su mamá lo reñía.",
              "Porque sus amigos lo molestaban.",
            ],
            right_answer: "Porque sus orejas eran diferentes.",
          },
          {
            question: "¿Qué quiere decir “orejas inclinadas”?",
            answers: [
              "Orejas paradas.",
              "Orejas caídas.",
              "Orejas diferentes.",
            ],
            right_answer: "Orejas caídas.",
          },
          {
            question: "“Pelitos blancos” debía estar orgulloso porque:",
            answers: [
              "Su madre lo quería mucho.",
              "Sus orejas eran únicas e iguales a las que tenía su abuelito.",
              "Porque sus orejas eran grandes y caídas.",
            ],
            right_answer:
              "Sus orejas eran únicas e iguales a las que tenía su abuelito.",
          },
          {
            question: "Este cuento nos enseña principalmente que:",
            answers: [
              "Debemos aceptarnos como somos.",
              "No debemos tratar de aparentar lo que no somos.",
              "No debemos preocuparnos por parecernos a los demás.",
            ],
            right_answer: "Debemos aceptarnos como somos.",
          },
        ],
      },
      {
        text:
          "El sol y el girasol<br/>Una mañana de duro invierno, las flores se quedaron dormidas. Tenían tanto frío, que unas a otras se abrazaban para calentarse. Pero una de ellas abrió sus pétalos amarillos, buscando la luz del día. Y, a pesar de que el sol estaba oculto por las nubes, la flor siguió elevando sus pétalos amarillos como buscándolo.<br/>Al darse cuenta de esto, el sol, que todo lo veía, se acercó a la hermosa flor y le preguntó como se llamaba.<br/>- No tengo nombre – le dijo tímidamente.<br/>- Desde hoy, te llamarás girasol. Tendrás los pétalos tan brillantes como mis rayos y siempre se abrirán hacia donde yo esté –<br/>- Le dijo el sol, acariciándola con sus rayos de luz y calor.",
        questions: [
          {
            question: "¿Qué tipo de texto es el que acabas de leer?",
            answers: ["Narrativo.", "Descriptivo.", "Instructivo."],
            right_answer: "Narrativo.",
          },
          {
            question: "¿Cuál de estos hechos ocurrió primero en el cuento?",
            answers: [
              "La flor siguió elevando sus pétalos.",
              "Las flores se quedaron dormidas.",
              "Las flores se abrazaban para calentarse.",
            ],
            right_answer: "Las flores se quedaron dormidas.",
          },
          {
            question: "¿Por qué el sol se acercó al girasol?",
            answers: [
              "Porque le pareció gracioso.",
              "Porque observó el esfuerzo que hacía por encontrarlo.",
              "Porque quiso ayudarlo.",
            ],
            right_answer:
              "Porque observó el esfuerzo que hacía por encontrarlo.",
          },
          {
            question: "¿Cómo era el girasol?",
            answers: ["Era haragán.", "Era perseverante.", "Era miedoso."],
            right_answer: "Era perseverante.",
          },
          {
            question: "Este cuento nos enseña principalmente que:",
            answers: [
              "Debemos esforzarnos por lograr lo que nos proponemos.",
              "Debemos pedir ayuda a los demás.",
              "Debemos esperar a que todo pase.",
            ],
            right_answer:
              "Debemos esforzarnos por lograr lo que nos proponemos.",
          },
        ],
      },
      {
        text:
          "A un campesino se le cayó su hacha en un río, y apenado se puso a llorar. El espíritu de las aguas se compadeció de él y presentándole un hacha de oro, le preguntó:<br/>- ¿Es ésta tu hacha? El campesino respondió:<br/>- No, no es la mía.<br/>El espíritu de las aguas le presentó un hacha de plata.<br/>- Tampoco es ésa- dijo el campesino.<br/>Entonces el espíritu de las aguas le presentó su propia hacha de hierro. Viéndola el campesino exclamó:<br/>- ¡Ésa es la mía !<br/>Para recompensarlo por su honradez, el espíritu de las aguas le dio las tres hachas.<br/>De regreso a su casa, el campesino mostró su regalo, contando su aventura a sus amigos. Uno de ellos quiso probar suerte; fue a la orilla del río, dejó caer su hacha y rompió a llorar.<br/>El espíritu de las aguas le presentó un hacha de oro y le preguntó:<br/>-¿Es ésta tu hacha?<br/>El campesino, lleno de alegría respondió:<br/>- Sí, sí, es la mía.<br/>El espíritu no le dio el hacha de oro ni la suya de hierro, en castigo de su mentira.",
        questions: [
          {
            question: "¿Qué se le cayó al campesino en el río?",
            answers: [
              "Un hacha de oro.",
              "Un hacha de hierro.",
              "Un hacha de plata.",
            ],
            right_answer: "Un hacha de hierro.",
          },
          {
            question:
              "El espíritu de las aguas le dio las tres hachas al campesino por que:",
            answers: [
              "El campesino mintió.",
              "El campesino fue honrado y dijo la verdad.",
              "El campesino lloraba mucho.",
            ],
            right_answer: "El campesino fue honrado y dijo la verdad.",
          },
          {
            question:
              "En el texto ¿qué quiere decir “ el espíritu se compadeció de él”?",
            answers: [
              "El espíritu tuvo pena de él.",
              "El espíritu lo castigo a él.",
              "El espíritu lo premió a él.",
            ],
            right_answer: "El espíritu tuvo pena de él.",
          },
          {
            question: "Esta historia nos enseña principalmente que:",
            answers: [
              "Debemos ser honrados y decir siempre la verdad.",
              "Debemos aprovecharnos para lograr lo que queremos.",
              "Debemos mentir para tener lo que deseamos.",
            ],
            right_answer: "Debemos ser honrados y decir siempre la verdad.",
          },
          {
            question: "El texto que leíste es un:",
            answers: ["Aviso.", "Leyenda.", "Receta.", "Cuento."],
            right_answer: "Cuento.",
          },
        ],
      },
      {
        text:
          "Los pingüinos son aves. La mayoría de ellos viven cerca del polo sur. Tienen el pecho blanco, su espalda y cabeza son negros. <br/>Aunque tienen alas, no pueden volar; las usan como si fueran remos para desplazarse velozmente por el agua. También se impulsan con sus patas palmeadas como los patos. Los pingüinos son excelentes nadadores.<br/>Los pingüinos andan con bastante torpeza; por eso les llama también pájaros bobos. No pueden ir muy rápido y andan de forma divertida, balanceándose de un lado a otro.<br/>Los pingüinos solo comen cuando están en el agua: peces, calamares, cangrejos y gambas.<br/>Viven en colonias donde se congregan millones de ellos. Anidan una vez por año.",
        questions: [
          {
            question: "¿Dónde viven los pingüinos?",
            answers: [
              "En los mares de todo el mundo.",
              "Cerca del polo sur.",
              "En la orilla de la playa.",
            ],
            right_answer: "Cerca del polo sur.",
          },
          {
            question: "¿Por qué se les llama pájaros bobos:",
            answers: [
              "Porque caminan con gracia y rapidez.",
              "Porque son veloces como el delfín.",
              "Porque andan con bastante torpeza.",
            ],
            right_answer: "Porque andan con bastante torpeza.",
          },
          {
            question: "Según el texto ¿Qué quiere decir viven en colonias?",
            answers: [
              "Que viven agrupados en millones de ellos.",
              "Que viven solos.",
              "Que viven en grupos por familias.",
            ],
            right_answer: "Que viven en grupos por familias.",
          },
          {
            question: "¿Por qué los pingüinos son excelentes nadadores?",
            answers: [
              "Porque les gusta el mar.",
              "Porque con sus alas que usan como remos se desplazan velozmente.",
              "Porque nadan de forma graciosa.",
            ],
            right_answer:
              "Porque con sus alas que usan como remos se desplazan velozmente.",
          },
        ],
      },
      {
        text:
          "El puma es un animal carnívoro que vive especialmente en las montañas o bosques de América.<br/>Pertenece a la familia de los félidos y llega a medir casi dos metros de longitud sin incluir su cola.<br/>Trepa muy ágilmente a los árboles y en ellos se refugia cuando se ve en peligro. Puede saltar 9 metros en terreno llano y hasta 12 m desde la rama de un árbol.<br/>Tiene un cuerpo flexible que parece que se alargara al correr, y sus músculos se contraen y estiran dibujándose debajo de su piel.<br/>Este es un felino silencioso, se desplaza furtivamente y es el terror de los animales como cabras, ciervos, alces ,aunque también son sus presas ratones, peces y aves.<br/>Ataca a sus víctimas saltando a su lomo y destrozándole las vértebras del cuello, para darse después un festín con sus despojos. En ocasiones mata más de lo que necesita y cubre con ramas y tierra lo que no come para volver a buscarlo cuando tiene hambre.<br/>La hembra tiene de dos a cuatro cachorritos cada año. Debido a los daños que ocasiona al ganado, es perseguido por los granjeros y se ha convertido en una especie amenazada, habitando actualmente en zonas<br/>áridas.",
        questions: [
          {
            question: "El puma vive especialmente en:",
            answers: [
              "En las selvas de América",
              "Las zonas montañosas y boscosas de América.",
              "En el campo.",
            ],
            right_answer: "Las zonas montañosas y boscosas de América.",
          },
          {
            question: "El cuerpo del puma es flexible por qué:",
            answers: [
              "Acecha a sus presas",
              "Sus músculos se contraen y estiran al correr.",
              "Es veloz",
            ],
            right_answer: "Sus músculos se contraen y estiran al correr.",
          },
          {
            question: "¿Qué quiere decir se desplaza furtivamente?",
            answers: [
              "Se desplaza haciendo gran ruido.",
              "Se desplaza silenciosamente.",
              "Se desplaza lentamente.",
            ],
            right_answer: "Se desplaza silenciosamente.",
          },
          {
            question: "¿Por qué el puma es una especie amenazada?",
            answers: [
              "Porque es perseguida por los granjeros.",
              "Porque es un animal protegido.",
              "Porque abunda en las montañas.",
            ],
            right_answer: "Porque es perseguida por los granjeros.",
          },
          {
            question: "¿De qué trata el texto que leíste?",
            answers: [
              "Trata de cómo es el puma.",
              "Trata de cómo son las montañas.",
              "Trata de cómo son los felinos.",
            ],
            right_answer: "Trata de cómo es el puma.",
          },
          {
            question: "El texto que leíste se escribió para:",
            answers: [
              "Contarnos una historia.",
              "Darnos información.",
              "Darnos una opinión.",
            ],
            right_answer: "Darnos información.",
          },
        ],
      },
      {
        text:
          "Algunas personas lo llaman caballete o caballito de San Pedro, pero su nombre real es libélula. La libélula es un insecto grande y atractivo que no hace daño a la gente. Puede ser de cualquiera de los bellos colores brillantes del arco iris: rojo, azul, verde o amarillo. Casi siempre puedes verla en el verano volando cerca de un estanque o de un arroyo.<br/>La libélula es muy diferente a la mayoría de los insectos y puede hacer muchas cosas sorprendentes.<br/>Es un insecto que puede volar muy rápido y de manera elegante. Puede volar muy rápido hacia arriba o hacia abajo o volar de lado a lado. Hace todas estas cosas porque tiene dos pares de alas grandes.<br/>La libélula puede ver mejor que la mayoría de los demás insectos; pues tiene dos ojos gigantescos que ocupan la mitad de su cabeza.<br/>Con sus grandes ojos, la libélula puede ver las cosas a 40 pies de distancia. <br/>La libélula tiene más apetito que la mayoría de los demás insectos. Pasa mucho tiempo buscando que comer. Todos los días se come cientos de mosquitos y moscas.<br/>Usa las patas como una canastita para recoger insectos mientras vuela.<br/>Algunas libélulas son tan fuertes que pueden sacar un pez pequeño del agua.",
        questions: [
          {
            question: "¿Con qué otro nombre se le conoce a la libélula?",
            answers: [
              "Insecto aéreo.",
              "Caballito de San Pedro.",
              "Cazador de arco iris.",
            ],
            right_answer: "Caballito de San Pedro.",
          },
          {
            question: "¿Por qué la libélula vuela muy alto?",
            answers: [
              "Porque así llama a las demás.",
              "Porque posee dos pares de alas.",
              "Porque le gusta la velocidad y altura.",
            ],
            right_answer: "Porque posee dos pares de alas.",
          },
          {
            question: "La libélula es un insecto asombroso por qué:",
            answers: [
              "Tiene alas a los lados.",
              "Puede hacer muchas cosas que la mayoría de los demás insectos.",
              "No le hacen daño a las personas.",
            ],
            right_answer:
              "Puede hacer muchas cosas que la mayoría de los demás insectos.",
          },
          {
            question: "¿De qué trata principalmente el texto que leíste?",
            answers: [
              "Trata de que se alimenta la libélula.",
              "Trata de lo sorprendente que es la libélula.",
              "Trata de donde viven las libélulas.",
            ],
            right_answer: "Trata de lo sorprendente que es la libélula.",
          },
          {
            question: "El texto que leíste se escribió para:",
            answers: [
              "Contarnos una historia.",
              "Darnos información.",
              "Darnos una opinión.",
            ],
            right_answer: "Darnos información.",
          },
        ],
      },
      {
        text:
          "Las hormigas son insectos sociales, que viven en grupos muy numerosos. Se desarrollan a través de la metamorfosis; pasan de ser larvas, luego pupas y finalmente se convierten en hormigas adultas.<br/>Las hormigas viven en nidos llamados hormigueros. En un hormiguero puede haber más de medio millón de hormigas!<br/>Se pueden distinguir varios grupos de hormigas, y cada uno de ellos se encarga de realizar una tarea determinada.<br/>La reina: es la hembra encargada de poner huevos. Es la única hembra fértil. ¡Es la mamá del hormiguero! Algunas reinas viven más de 30 años.<br/>Los machos: se aparean con la reina; después se mueren.<br/>Las obreras: son hembras estériles, es decir, incapaces de reproducirse, que desempeñan diferentes tareas en el hormiguero: se encargan de su limpieza, de la alimentación de las larvas, etc.<br/>Los soldados: especializados en la defensa del hormiguero contra intrusos, e incluso, contra otras hormigas vecinas.<br/>Las hormigas para comunicarse entre ellas liberan unas sustancias olorosas, llamadas feromonas, que transmiten información a las otras hormigas (por ejemplo, ante la presencia de un intruso).<br/>También pueden depositar las feromonas en el suelo para trazar pistas que indican, por ejemplo, dónde han encontrado un buen alimento.",
        questions: [
          {
            question: "¿Dónde viven las hormigas?",
            answers: [
              "En los hormigueros.",
              "En todos lados.",
              "En las hojas.",
            ],
            right_answer: "En los hormigueros.",
          },
          {
            question:
              "En el texto ¿qué quiere decir que las hormigas son sociales?",
            answers: [
              "Que las hormigas viven aisladas.",
              "Que las hormigas viven en grupos numerosos.",
              "Que viven en parejas.",
            ],
            right_answer: "Que las hormigas viven en grupos numerosos.",
          },
          {
            question: "¿Por qué las hormigas pueden comunicarse con facilidad?",
            answers: [
              "Porque segregan una sustancia llamada feromonas.",
              "Porque tienen unas enormes antenas.",
              "Porque caminan en hileras.",
            ],
            right_answer: "Porque segregan una sustancia llamada feromonas.",
          },
          {
            question: "La reina es la mamá del hormiguero por qué:",
            answers: [
              "Porque desempeña tareas en el hormiguero.",
              "Porque es la única fértil capaz de poner huevos.",
              "Porque defienda a las otras hormigas.",
            ],
            right_answer: "Porque es la única fértil capaz de poner huevos.",
          },
          {
            question: "¿De qué trata principalmente el texto que leíste?",
            answers: [
              "Trata de la vida de las hormigas.",
              "Trata de cómo es la reina.",
              "Trata de cómo son los hormigueros.",
            ],
            right_answer: "Trata de la vida de las hormigas.",
          },
          {
            question: "El texto que leíste se escribió para:",
            answers: [
              "Darnos información sobre las hormigas.",
              "Contarnos una historia sobre las hormigas.",
              "Pedirnos que cuidemos a las hormigas.",
            ],
            right_answer: "Darnos información sobre las hormigas.",
          },
        ],
      },
    ],
  });
  await game3.save();
}
export async function down() {
  await GameModel.deleteOne({ slug: "sort-sentences" });
  await GameModel.deleteOne({ slug: "syllables-detector" });
  await GameModel.deleteOne({ slug: "reading-comprehension" });
}
