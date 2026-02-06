import { startOfYear, differenceInDays } from 'date-fns';

const stories = [
    {
        id: 1,
        title: "El Castillo de Arena y la Ola Gigante",
        imageUrl: "/images/sandcastle.png",
        content: `Leo pasó toda la mañana construyendo el castillo de arena más alto de la playa. Tenía torres, puentes y hasta un foso. Estaba orgulloso y feliz.
    
    De repente, una ola enorme llegó y... ¡Inundó todo! El castillo se convirtió en un montón de arena mojada. Leo sintió que su cara se ponía roja y sus manos se cerraban en puños. Quería gritar y patear el agua.
    
    Su abuelo se sentó a su lado y le dijo: "Es normal estar enojado, Leo. Pero mira, la arena sigue aquí. El castillo se fue, pero tu habilidad para construirlo sigue en tus manos".
    
    Leo respiró hondo tres veces, como si inflara un globo en su panza. Poco a poco, el enojo se hizo pequeño. "Podemos hacer otro", dijo Leo, "y esta vez haremos los muros más fuertes".`,
        moral: "A veces las cosas se rompen, pero nosotros tenemos el poder de volver a empezar.",
        quiz: [
            {
                question: "¿Qué sintió Leo cuando la ola rompió su castillo?",
                options: ["Alegría", "Mucho enojo", "Miedo"],
                correctAnswer: "Mucho enojo"
            },
            {
                question: "¿Qué aprendió Leo al final?",
                options: ["Que no debe ir a la playa", "Que puede volver a construir mejor", "Que el mar es malo"],
                correctAnswer: "Que puede volver a construir mejor"
            }
        ]
    },
    {
        id: 2,
        title: "La Ardilla que Quería Volar Ya",
        imageUrl: "/images/flying_squirrel.png",
        content: `Nina, la ardilla voladora, veía a sus hermanos planear de árbol en árbol. Ella intentó saltar, pero ¡PUM! cayó en un arbusto. "¡Nunca podré hacerlo, soy malísima!", gritó Nina llorando.
    
    Su mamá bajó y le preguntó: "¿Crees que tus hermanos volaron perfecto el primer día?". Nina lo pensó y negó con la cabeza. "Ellos practicaron mucho. Tú no puedes volar... TODAVÍA".
    
    Esa palabra mágica cambió todo. "Todavía". Nina entendió que fallar no significaba ser mala, sino que estaba aprendiendo. Practicó saltos pequeños cada día, hasta que una mañana, el viento la atrapó y voló más alto que nadie.`,
        moral: "No saber hacer algo ahora no significa que nunca podrás; solo necesitas practicar.",
        quiz: [
            {
                question: "¿Qué pensó Nina al principio cuando falló?",
                options: ["Que era divertido", "Que nunca podría hacerlo", "Que el árbol era muy alto"],
                correctAnswer: "Que nunca podría hacerlo"
            },
            {
                question: "¿Qué palabra mágica aprendió Nina?",
                options: ["Abracadabra", "Todavía", "Rápido"],
                correctAnswer: "Todavía"
            }
        ]
    },
    {
        id: 3,
        title: "El Zorro y la Verdad Incómoda",
        imageUrl: "/images/fox.png",
        content: `Tico rompió sin querer el jarrón favorito de Mamá Zorra mientras jugaba a la pelota en la sala. Tenía mucho miedo de que lo regañaran.
    
    Cuando Mamá Zorra llegó y vio el desastre, preguntó: "¿Qué pasó aquí?". Tico pensó en culpar al viento o al gato vecino. Pero sintió un nudo en la panza.
    
    Con voz temblorosa, dijo: "Fui yo, mamá. Lo siento mucho". Esperaba un grito, pero Mamá Zorra lo abrazó. "Gracias por ser valiente y decir la verdad, Tico. El jarrón se puede pegar, pero la confianza, si se rompe con mentiras, es difícil de arreglar".`,
        moral: "La honestidad es valiente y construye confianza; las mentiras nos alejan de los demás.",
        quiz: [
            {
                question: "¿Por qué Tico tenía miedo de decir la verdad?",
                options: ["Porque no quería que lo regañaran", "Porque no sabía hablar", "Porque le gustaba mentir"],
                correctAnswer: "Porque no quería que lo regañaran"
            },
            {
                question: "¿Qué es más importante que el jarrón para Mamá Zorra?",
                options: ["La pelota", "La confianza", "El suelo limpio"],
                correctAnswer: "La confianza"
            }
        ]
    },
    {
        id: 4,
        title: "Los Zapatos Nuevos de Martín",
        imageUrl: "/images/shoes.png",
        content: `Martín llegó a la escuela con zapatillas nuevas que tenían luces. Todos sus amigos decían "¡Wow!". Martín se sentía el rey del patio.
    
    Pero en el recreo, vio a Tomás sentado solo. Tomás tenía las zapatillas rotas y viejas. Martín primero pensó: "Qué suerte que yo tengo luces". Pero luego miró la cara triste de Tomás.
    
    Martín se sentó a su lado. "No son luces, pero corren rápido", le dijo Martín sonriendo. "¿Hacemos una carrera?". Jugaron toda la tarde. Martín aprendió que presumir lo que tienes te hace sentir importante un rato, pero compartir tu tiempo te hace sentir feliz de verdad.`,
        moral: "Tener cosas nuevas es divertido, pero ser amable llena más el corazón.",
        quiz: [
            {
                question: "¿Cómo se sentía Tomás al principio?",
                options: ["Feliz", "Triste y solo", "Enojado"],
                correctAnswer: "Triste y solo"
            },
            {
                question: "¿Qué hizo Martín que fue muy amable?",
                options: ["Le regaló sus zapatos", "Jugó con Tomás y lo hizo sentir bien", "Le presumió sus luces"],
                correctAnswer: "Jugó con Tomás y lo hizo sentir bien"
            }
        ]
    },
    {
        id: 5,
        title: "El Día Gris de Cande",
        imageUrl: "/images/rainy_window.png",
        content: `Cande tenía planeado ir al parque, pero empezó a llover muy fuerte. "¡Qué día horrible!", se quejó. "Todo sale mal". Se sentó cruzada de brazos mirando la ventana.
    
    Su papá le trajo un papel y crayones. "No podemos cambiar la lluvia, Cande, pero podemos elegir qué hacer con ella".
    
    Cande dibujó monstruos de lluvia al principio, pero luego empezó a dibujar flores bebiendo agua. Se dio cuenta de que sin lluvia, las plantas tendrían sed. "Gracias lluvia", susurró. Cambió su enojo por gratitud y su día gris se llenó de colores en el papel.`,
        moral: "No siempre controlamos lo que pasa, pero siempre controlamos cómo reaccionamos.",
        quiz: [
            {
                question: "¿Por qué estaba enojada Cande?",
                options: ["No tenía crayones", "Llovía y no podía ir al parque", "Tenía sueño"],
                correctAnswer: "Llovía y no podía ir al parque"
            },
            {
                question: "¿Qué aprendió Cande sobre la lluvia?",
                options: ["Que moja y es fea", "Que es necesaria y puede aprovechar el tiempo", "Que debe llorar"],
                correctAnswer: "Que es necesaria y puede aprovechar el tiempo"
            }
        ]
    },
    {
        id: 6,
        title: "La Luna Celosa del Sol",
        imageUrl: "/images/moon.png",
        content: `La Luna miraba al Sol brillar y sentía un dolorcito en la panza. "Todos aman al Sol", pensaba. "Juegan cuando él está y duermen cuando yo salgo".
        
        Una noche, decidió no salir para que la extrañaran. Pero sin la Luna, el océano no se movía y las tortuguitas bebés se perdían en la playa. El Búho sabio voló a su cueva: "Luna, no necesitamos dos soles. Necesitamos tu luz suave para soñar y guiar a los que viajan de noche".
        
        La Luna entendió que no tenía que ser brillante y caliente como el Sol para ser importante. Salió esa noche más plateada que nunca, feliz de ser ella misma.`,
        moral: "No te compares con otros; tu luz es única y necesaria.",
        quiz: [
            {
                question: "¿Por qué estaba triste la Luna?",
                options: ["Tenía frío", "Quería ser brillante como el Sol", "No le gustaba la noche"],
                correctAnswer: "Quería ser brillante como el Sol"
            },
            {
                question: "¿Qué pasaba sin la Luna?",
                options: ["Las tortuguitas se perdían", "Hacía mucho calor", "Nadie dormía"],
                correctAnswer: "Las tortuguitas se perdían"
            }
        ]
    },
    {
        id: 7,
        title: "El Bambú Paciente",
        imageUrl: "/images/bamboo.png",
        content: `Un granjero plantó dos semillas: una de helecho y una de bambú. El helecho creció rápido y verde en pocos días. El bambú... nada.
        
        Pasó un año. El helecho cubría todo el jardín. El bambú seguía siendo solo tierra. Pasaron dos, tres, cuatro años. La gente decía: "Esa semilla no sirve".
        
        Pero en el quinto año, ¡BROOM! El bambú disparó hacia el cielo y creció metros y metros en pocas semanas. Durante esos años silenciosos, había estado creciendo hacia abajo, haciendo raíces fuertes para sostener su altura.`,
        moral: "Tener paciencia vale la pena; a veces crecemos por dentro antes de que se note por fuera.",
        quiz: [
            {
                question: "¿Qué pasó con el bambú los primeros años?",
                options: ["Murió", "Crecía hacia abajo (raíces)", "Se mudó de jardín"],
                correctAnswer: "Crecía hacia abajo (raíces)"
            },
            {
                question: "¿Por qué tardó tanto?",
                options: ["Era perezoso", "Estaba preparándose para ser muy alto", "No le gustaba el sol"],
                correctAnswer: "Estaba preparándose para ser muy alto"
            }
        ]
    },
    {
        id: 8,
        title: "El Pájaro que Cantaba Rock",
        imageUrl: "/images/rock_bird.png",
        content: `En el bosque de los Trinos Suaves, todos los pájaros cantaban melodías dulces. Pero Pipo tenía una voz ronca y fuerte: "¡CUA CUA YEAH!".
        
        Los otros pájaros le pedían silencio. Pipo intentó cantar bajito, pero le dolía la garganta. Un día, un oso enorme vino a robar los huevos de los nidos. Los trinos suaves no asustaban a nadie.
        
        Pipo voló frente al oso y soltó su mejor grito de rock: "¡GROOOAAAR CUA!". El oso, sorprendido por ese ruido tan raro, salió corriendo. Desde ese día, Pipo da los conciertos de alarma del bosque.`,
        moral: "Lo que te hace diferente puede ser exactamente lo que el mundo necesita.",
        quiz: [
            {
                question: "¿Cómo era la voz de Pipo?",
                options: ["Dulce y suave", "Ronca y fuerte", "Silenciosa"],
                correctAnswer: "Ronca y fuerte"
            },
            {
                question: "¿Cómo salvó el día Pipo?",
                options: ["Cantando una nana", "Asustando al oso con su voz única", "Dándole miel al oso"],
                correctAnswer: "Asustando al oso con su voz única"
            }
        ]
    },
    {
        id: 9,
        title: "Las Hormigas y la Migaja Gigante",
        imageUrl: "/images/ants.png",
        content: `Hormiguita Hércules se creía la más fuerte. Encontró un trozo de galleta enorme y quiso llevarlo sola al hormiguero para que todos la aplaudieran.
        
        Empujó y empujó, pero la galleta no se movía. Pasaron horas y Hércules estaba agotada. Su amiga Mili le dijo: "¿Te ayudo?". Hércules dijo "¡No!". Pero empezó a llover y la galleta se iba a mojar.
        
        Hércules tragó su orgullo y llamó a Mili y a sus hermanas. Entre diez, levantaron la galleta como si fuera una pluma. Comieron un banquete esa noche. Hércules aprendió que ser fuerte también significa saber pedir ayuda.`,
        moral: "Pedir ayuda no es debilidad, es la forma inteligente de lograr cosas grandes.",
        quiz: [
            {
                question: "¿Qué quería hacer Hércules sola?",
                options: ["Comerse la galleta", "Llevar la galleta gigante", "Dormir"],
                correctAnswer: "Llevar la galleta gigante"
            },
            {
                question: "¿Qué aprendió al final?",
                options: ["Que es mejor trabajar en equipo", "Que no le gustan las galletas", "Que la lluvia es mala"],
                correctAnswer: "Que es mejor trabajar en equipo"
            }
        ]
    },
    {
        id: 10,
        title: "El Robot que Olvidó Recargar",
        imageUrl: "/images/robot.png",
        content: `Robo-Tito amaba ayudar. Limpiaba, cocinaba y jugaba sin parar. "¡Yo nunca descanso!", decía orgulloso. Sus luces parpadeaban en rojo, pero él seguía.
        
        Un día, en medio de un partido de fútbol, ¡PLOP! Tito se apagó. Se cayó al suelo y no pudo moverse. Sus amigos tuvieron que llevarlo cargando a su estación.
        
        Tito estuvo apagado dos días enteros para recuperarse. Cuando despertó, entendió que para ser un buen robot y ayudar a sus amigos, primero tenía que cuidar su propia batería.`,
        moral: "Descansar no es perder el tiempo, es recargar energía para seguir brillando.",
        quiz: [
            {
                question: "¿Por qué se apagó Tito?",
                options: ["Se tropezó", "Nunca descansaba y se quedó sin batería", "Alguien lo apagó"],
                correctAnswer: "Nunca descansaba y se quedó sin batería"
            },
            {
                question: "¿Qué es importante hacer para poder ayudar a otros?",
                options: ["Cuidarse a uno mismo y descansar", "Correr muy rápido", "Nunca dormir"],
                correctAnswer: "Cuidarse a uno mismo y descansar"
            }
        ]
    }
];

export const getDailyStory = () => {
    const start = startOfYear(new Date());
    const today = new Date();
    const daysPassed = differenceInDays(today, start);
    const storyIndex = daysPassed % stories.length;
    return stories[storyIndex];
};

export const getAllStories = () => stories;
