//Objeto de los jugadores
var posJugador=3;
var infoJugadores={
    nombre:["Ricky el Comandante", "Edgar Allan Poe" , "Lio Messi jeje", "el kun agüeropapa"],
    puntuacion:[1,21,24,12],
    categoriaJugada:[[0,1,2,3],[0,1,2,3],[0,1,2,3],[0,1,2,3]]
}

var deportes ={
    nombre:"Deportes",
    personaje:"imagenes/deportesPersonaje.png",
    preguntas:["¿Qué deporte es este?","¿Qué deporte juega este crack?",
        "¿A que deporte corresponde esta cancha?","¿De a cuantos jugadores se juega el fútbol?",
        "¿Qué deporte practicaba Lucha Aymar?"],
    respuestas:[["Tennis","Fútbol","Golf"],["Fútbol", "Hockey", "Tennis"],
    ["Rugby","Hockey", "Handball"],["11","10","12"],["Hockey","Tennis", "Judo", "Karate"]],
    imagenes: ["imagenes/tennis.jpg","imagenes/messi.jpg","imagenes/canchaDeRugby.jpg","imagenes/futbol.jpg","imagenes/luchaAymar.jpg"]
};

var ciencia ={
    nombre:"Ciencia",
    personaje:"imagenes/cienciaPersonaje.png",
    preguntas:["¿Cómo se llama este elemento?","¿Qué animal es el de la foto?","¿Qué animales representan timón y pumba?",
        "¿Cuantos tentáculos tienen los pulpos?","¿Qué animal es el de la foto?"],
    respuestas:[["Tubo de ensayo","Lupa","Guitarra"],["Rinoceronte","Elefante","Mamut"],
    ["Zuricata y Jabali","Zuricata y Cerdo", "Conejo y Cerdo" , "Conejo y Jabalí"],["8","5","10","9"],["Koala","Perezoso","Mono","Iguana"]],
    imagenes:["imagenes/tuboDeEnsayo.png","imagenes/rinoceronte.jpg","imagenes/timonypumba.jpg","imagenes/pulpo.jpg","imagenes/koala.jpg"]
};

var culturaGeneral={
    nombre:"Cultura General",
    preguntas:["¿Qué colores tiene la bandera argentina?","¿Cuántos huesos tiene el cuerpo humano?",
        "¿Quién es la de la foto?","¿Cómo se llama lo de la foto?", "¿Quién es esta cantante?"],
    respuestas:[["Celeste, blanco y amarillo","Celeste, azul y blanco","Amarillo y blanco"],
        ["206","178","243"],["Mirtha Legrand","Cristina Kirchner", "Mercedes Sosa","Moria Casán"],
        ["Mate","Jarro","Cantimplora"],["Tini", "Lali Espósito", "Ángela Torres"]],
    imagenes:["imagenes/banderaArg.jpg","imagenes/cuerpo humano.jpg","imagenes/Mirtha.jpg","imagenes/mate.jpg","imagenes/tini.jpg"],
    personaje: "imagenes/culturaGeneralPersonaje.png"
};

var entretenimiento={
    nombre:"Entretenimiento",
    personaje:"imagenes/entretenimientoPersonaje.png",
    preguntas:["¿Cómo se llama el padre de esta familia?","¿A qué película pertenece este auto?",
        "¿Qué princesa es esta?", "¿Cómo se llama esta película?","¿A qué película pertenecen estos personajes?"],
    respuestas:[["Homero", "José", "Pepe", "Alejo"],["Cars","Toy Story", "Monsters Inc"],
        ["Mérida", "Rapunzel","Mulán", "Elsa"],["Los Increíbles","Bolt","Intensa Mente"],["Toy Story","Intensa Mente", "Shrek"]],
    imagenes:["imagenes/LosSimpsons.jpg","imagenes/Sally.jpg","imagenes/merida.png","imagenes/losIncreibles.jpg","imagenes/toyStory.jpg"]
};

var aleatorio = 0;
//0=deportes 1=ciencia 2=culturaGeneral 3=entretenimiento 4=Aleatorio;

var categoriasypreguntas = [deportes,ciencia,culturaGeneral,entretenimiento,aleatorio];

