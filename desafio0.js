const miPlaylistApx = [
  {
    titulo:"¿Para qué sirven los bucles?",
    url: "https://www.youtube.com/watch?v=N9SNSlsY2aE&ab_channel=apx.school",
    resumen: "En esta clase vamos a introducirnos a uno de los temas que más dolores de cabeza genera en devs principinates: los bucles!",
    tags:["prgramacion", "javascript"],
    visto: true,
    dificultad: 2

  },

  {
    titulo:"Usando AI para programar profesionalmente",
    url:"https://www.youtube.com/watch?v=ZjwMQkherN4&ab_channel=apx.school",
    resumen: "En este video vamos a resolver un problema de código bastante simple en apariencia pero vamos a esforzarnos en avanzar de metódica y dejarle a la AI lo que hace bastante bien.",
    tags:["chatGpt", "IA"],
    visto: false,
    dificultad: 3

  },
  {
    titulo: "El mejor lenguaje de programación para empezar",
    url: "https://www.youtube.com/watch?v=bo3AnDcRY3o&t=25s&ab_channel=apx.school",
    resumen: "En este video vamos a hablar de JavaScript, el lenguaje que elegimos para iniciarnos en este mundo de la programación y con el cual nos vamos a ir encariñando.",
    tags:["javascript", "python"],
    visto: true,
    dificultad: 1

  },
  {
    titulo:"Motivación: ¿De dónde saco las ganas?",
    url:"https://www.youtube.com/watch?v=sXtCKAvnzvc&ab_channel=apx.school",
    resumen:"En este video te quiero compartir mi experiencia sobre encarar proyectos y cómo mantener (o no) las ganas de seguir adelante. ",
    tags: ["java", "programacion"],
    visto:true,
    dificultad: 1

  },
  {
    titulo:"Aprender programación de forma autodidacta",
    url:"https://www.youtube.com/watch?v=qDM4Fm7RRBY&ab_channel=apx.school",
    resumen:"¿Estás considerando aprender programación de forma autodidacta? En este video vemos los pros y contras de este método y revisamos las claves para tener éxito en la formación autodidacta. No te pierdas esta charla sobre aprender a programar.",
    tags:["apx", "programacion"],
    visto:true,
    dificultad: 4

  },
  
];
console.log(miPlaylistApx);
/*console.log("la cantidad de videos en mi lista es de:", miPlaylistApx.length);

console.log("primer video, titulo:", miPlaylistApx[0].titulo);
console.log("primer video, url:", miPlaylistApx[0].url);
console.log("primer video, resumen:", miPlaylistApx[0].resumen);
console.log("primer video, tags:", miPlaylistApx[0].tags);
console.log("primer video, visto:", miPlaylistApx[0].visto);
console.log("primer video, dificultad:", miPlaylistApx[0].dificultad);

console.log("ultimo video, titulo:", miPlaylistApx[4].titulo);
console.log("ultimo video, url:", miPlaylistApx[4].url);
console.log("ultimo video, resumen:", miPlaylistApx[4].resumen);
console.log("ultimo video, tags:", miPlaylistApx[4].tags);
console.log("ultimo video, visto:", miPlaylistApx[4].visto);
console.log("ultimo video, dificultad:", miPlaylistApx[4].dificultad);*/

//feedback Lisa

console.log("ultimo video, titulo:", miPlaylistApx[miPlaylistApx.length - 1].titulo);
console.log("ultimo video, url:", miPlaylistApx[miPlaylistApx.length - 1].url);
console.log("ultimo video, resumen:", miPlaylistApx[miPlaylistApx.length - 1].resumen);
console.log("ultimo video, tags:", miPlaylistApx[miPlaylistApx.length - 1].tags);
console.log("ultimo video, visto:", miPlaylistApx[miPlaylistApx.length - 1].visto);
console.log("ultimo video, dificultad:", miPlaylistApx[miPlaylistApx.length - 1].dificultad);

