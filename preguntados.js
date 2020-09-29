function inicio()
{
    
    document.getElementById("inicio").innerHTML=
    `<div class="inicioCSS">
                <br>
                <br>
                <br>
                <br>
                <br>
                <div class="estasListo"><img class="estasListo" src="imagenes/estasListo_1.png"></div>
                <br>
                <br>
                <br>
                <div><button type="button" class="btnComenzar" onclick="ingresarNombre()">¡Estoy Listo!</button></div>
                <div class="personajes">
                    <img class="muñeco" src="imagenes/culturageneralPersonaje.png">
                    <img class="muñeco" src="imagenes/deportesPersonaje.png">
                    <img class="muñeco" src="imagenes/aleatorioPersonaje.png">
                    <img class="muñeco" src="imagenes/entretenimientoPersonaje.png">
                    <img class="muñeco" src="imagenes/cienciaPersonaje.png">
                </div>
                <br>
                <br>
    </div>`
};

function comoJugar()
{
    
    document.getElementById("inicio").innerHTML=`
        <div class="comoJuegoCSS">
            <div class="dibujoNene"><img src="imagenes/nene.png"></div>
            <div class="cjTitulo">¡Hola!</div>
            <div class="cjSubTit">Me llamo Airam, y me enteré que no sabés cómo jugar... ¡No te preocupes! Es muy fácil.<br> Para empezar debes elegir una categoría (Cultura general, ciencia, entretenimiento o deportes) o, si sos indeciso,
                tocá la opción de aleatorio para que el juego decida por vos. <br> Una vez que hayas elegido una categoría vas a tener 5 preguntas que van a ir apareciendo de a una; tenés 10 segundos para responderlas, pero no te preocupes, son multiple choice ;) <br>
                Espero que disfrutes respondiendo las preguntas. Cuando termines con las 5 vas a ver tu puntuación y tu posición en el gran ranking ETNASUM.<br> Espero que hayas comprendido, <br>¡Mucha Suerte!
            </div>
            <button class="jugar" onclick="ingresarNombre()">Jugar</button>
        </div>`;
};

function ingresarNombre()
{

  document.getElementById("inicio").innerHTML=`  
  <div id= "comenzar1" class="comenzar">
        <div class="dibujoNene2"><img src="imagenes/nene.png"></div>
        <div class="txtPedirNombre">¡Ya estás por comenzar a jugar!</div>
        <div class="txtPedirNombre2">Por favor ingresá tu nombre, así sabemos como llamarte. Con el nombre que ingreses te vas a encontrar en el gran ranking ETNASUM.</div>
        <div class="nombre">Nombre:</div>
        <div><input class="nombreJugador" id="Jugador"></input></div>
        <button id="btnRegistrarNombre" onclick="chequeoNombre()" type="button" class="btnRegistrarNombre">Jugar</button>
  </div>`;

 
   


};


function chequeoNombre()
{
        var jugador=document.getElementById("Jugador").value;
        if(jugador=="")
        {
            alert("Para manija!!! Ingresá tu nombre o apodo antes así podes jugar :)");
        } else elegirCategoria(jugador,"");

} 

function elegirCategoria(jugador,nombreActivo,denuevo)
{
    if(jugador!=="")
    {
        infoJugadores.nombre.push(jugador);//agregamo el jugador al objeto
        posJugador=infoJugadores.nombre.length-1;
        infoJugadores.categoriaJugada[posJugador]=[];
        infoJugadores.puntuacion[posJugador]=0;
    };

    document.getElementById("inicio").innerHTML=
        `  <div class="eleccionCategoria">
                <img class="neneDeCote" src="imagenes/neneDeCote.png">
                <div class="elegi">¡Hola ${infoJugadores.nombre[posJugador]}! Elegí tu categoría</div>
                <a onclick="categoria(0)"><img class="dibujoCategoria" src="${categoriasypreguntas[0].personaje}"></a>
                <a onclick="categoria(1)"><img class="dibujoCategoria"src="${categoriasypreguntas[1].personaje}"></a>
                <a onclick="categoria(4)"><img class="dibujoCategoria" src="imagenes/aleatorioPersonaje.png"></a>
                <a onclick="categoria(2)"><img class="dibujoCategoria" src="${categoriasypreguntas[2].personaje}"></a>
                <a onclick="categoria(3)"><img class="dibujoCategoria" src="${categoriasypreguntas[3].personaje}"></a>
                <div class="txtTituloPersonaje"><a onclick="categoria(0)">Deportes</a></div>
                <div class="txtTituloPersonaje"><a onclick="categoria(1)">Ciencia</a></div>
                <div class="txtTituloPersonaje"><a onclick="categoria(4)">Aleatorio</a></div>
                <div class="txtTituloPersonaje"><a onclick="categoria(2)">Cultura General</a></div>
                <div class="txtTituloPersonaje"><a onclick="categoria(3)">Entretenimiento</a></div>
            </div>`;
           
}



var categoriaElegida2;
var categoriasJugadas=[];

function categoria(categoriaElegida,nombreActivo,numero)
{
    if(categoriaElegida==4)
    {
        categoriaElegida = Math.floor(Math.random()*(4));
        categoria(categoriaElegida);
    }else{
        categoriaElegida2 = categoriaElegida;
        document.getElementById("inicio").innerHTML=` 
           <div class="categoriaElegida">
                <img class="neneDeCote" src="imagenes/neneDeCote.png">
                <div class="categoriaTit">Elegiste la categoría ${categoriasypreguntas[categoriaElegida].nombre}</div>
                <img class="personajeElegido" src="${categoriasypreguntas[categoriaElegida].personaje}">
                <button class="btnComenzarJuego" onclick="mostrarPreguntas(${categoriaElegida2},${1},0,${nombreActivo})">Comenzar</button>
            </div>`
    
    };   
};

var ordenPreguntas=[];
//var ordenRespuestas=[];
var ordenAleatorioP;
var ordenAleatorioR;
var posicionAleatorio=0;

function funcionAleatorio(ordenPreguntas,ordenRespuestas)
{
   if(ordenRespuestas==0)
   {
        ordenPreguntas = ordenPreguntas.sort(function() {return Math.random() - 0.5});
        return ordenPreguntas;
   }else{
        ordenRespuestas=ordenRespuestas.sort(function() {return Math.random() - 0.5});
        return ordenRespuestas;
   }

};

var rta=[];
var downloadTimer;

function mostrarPreguntas(categoriaElegida,respuesta,denuevo,nombreActivo)
//muestra las preguntas; se llama cada vez que se apreta la rta
{ 
    
  //denuevo es si juega el mismo jugador que antes o no
    if(denuevo==0) posicionAleatorio=0;
    //si posicion aleatorio es 0 van a empezar a mostrarse las preg desde la 0, por eso se hace todo lo de aleatorio de cero
    if(posicionAleatorio==0){
        for(let i=0; i<5 ; i++) //me da las preguntas que se van a seleccionar (pongo 5 porq siempre son 5)
        {
        ordenPreguntas[i]=i;//vector comun sin desordenar (0,1,2,3,4)
        }
        ordenAleatorioP = funcionAleatorio(ordenPreguntas,0); //Me da el orden aleatorio de las preguntas
        
    }

    if(posicionAleatorio<5)//si no es la ultima pregunta
    {
        var rta=categoriasypreguntas[categoriaElegida].respuestas[ordenAleatorioP[posicionAleatorio]]; //las respuestas de la pregunta que se seleccionó
        var cantidadRta=rta.length; //cantidad de respuestas de esa pregunta

        var hola = 0;
        var ordenRespuestas =[];

        for(let j=0;j<cantidadRta;j++) 
        {
            ordenRespuestas[j] =hola;
            hola +=1;
        };

        
        ordenAleatorioR= funcionAleatorio(0,ordenRespuestas);//Me da el orden aleatorio de las respuestas de la pregunta seleccionada
     
        //ponemos todo en el HTML
        document.getElementById("inicio").innerHTML=`
            <div class="cuadroPreguntas">
                <div class="arribaPreguntas">
                    <img class="personajePreguntas" src=${categoriasypreguntas[categoriaElegida].personaje}>
                    <div class="tituloPregunta" id="tituloPregunta">${categoriasypreguntas[categoriaElegida].preguntas[ordenAleatorioP[posicionAleatorio]]}</div>
                    <div class="numPregunta">${posicionAleatorio+1}/5</div>
                </div> 
                <img class="imgPregunta" id="imgPregunta" src="${categoriasypreguntas[categoriaElegida].imagenes[ordenAleatorioP[posicionAleatorio]]}">
                <div class="tiempo"><progress class="progress" value="0" max="10" id="progressBar"></progress></div>
                <div class="respuesta" id="respuestas"></div>
                <br>
                <br>
                <br>
            
            </div>
            `
        //agregamos las respuestas que como son aleatorioas las arma la funcion funcionRta
        document.getElementById("respuestas").innerHTML= funcionRta(categoriaElegida,ordenAleatorioP,ordenAleatorioR,cantidadRta);

        clearInterval(downloadTimer); //timer
        var timeleft = 10; //10 seg
        downloadTimer = setInterval(function(){
            document.getElementById("progressBar").value = 10 - --timeleft;
            if(timeleft <= 0)
            {
                clearInterval(downloadTimer);
                if (posicionAleatorio == 5)
                {
                    ranking("",nombreActivo);
                }else mostrarPreguntas(categoriaElegida,respuesta,1,nombreActivo);
            }
           }   ,1000);
        

        if(respuesta==0)//la respuesta 0 es siempre la correcta
        {
            infoJugadores.puntuacion[posJugador]+=1;
        }
        posicionAleatorio +=1; //posicionAleatorio me dice la posicion de pregunta que se esta usando

    }else if(posicionAleatorio == 5)//son 5 preguntas nada mas
        {
            if(respuesta==0)//rta correcta
            {
                infoJugadores.puntuacion[posJugador]+=1; //sumamos a su puntuacion
            }
        clearInterval(downloadTimer);//se frena el tiempo
        ranking(categoriaElegida,nombreActivo); 
        }

    
};

function funcionRta(categoriaElegida,ordenAleatorioP,ordenAleatorioR,cantidadRta) //muestra las rtas en orden aleatorio
{
    var respuestasDeLaPregunta = "";//aca vamos a ir poniendo el html de las respuestas
    for(let y=0;y<cantidadRta;y++)
    {
         respuestasDeLaPregunta += `<button id="btnRtaSelec" onclick="mostrarPreguntas(${categoriaElegida},${ordenAleatorioR[y]},1)" class="btnRespuesta" >${categoriasypreguntas[categoriaElegida].respuestas[ordenAleatorioP[posicionAleatorio]][ordenAleatorioR[y]]}</button>`
    };
    return respuestasDeLaPregunta;
    
}




var sustituto;
function ranking(categoriaElegida,nombreActivo)
{

    infoJugadores.categoriaJugada[posJugador].push(categoriaElegida); //agregamos la categoria que jugó el juador para q no la pueda jugar de nuevo
    var hastaDonde= (infoJugadores.puntuacion.length);//cant de jugadores
    var nombreDelQueJuega = infoJugadores.nombre[posJugador];
    

    var big=0;
    var posicionBig;
    var jugadorAct = infoJugadores.nombre[posJugador];

    for(var hola=0;hola<hastaDonde;hola++)
    {
        big=0;
        for(var w=hola;w<hastaDonde;w++)
        //buscar el mayor puse que w = hola para que no empiece a contar desde el q ya hice
        {
            if(big<infoJugadores.puntuacion[w])
            {
                big=infoJugadores.puntuacion[w] 
                posicionBig=w;
                
            };  
            
        };
        //tenemos en big el mayor y en posicion big su posición
        infoJugadores.puntuacion.unshift(infoJugadores.puntuacion[posicionBig]);//pongo el mas grande adelante 
        infoJugadores.nombre.unshift(infoJugadores.nombre[posicionBig]);
        infoJugadores.categoriaJugada.unshift(infoJugadores.categoriaJugada[posicionBig]);
        infoJugadores.puntuacion.splice(posicionBig+1,1);//elimino a big de donde estaba 
        infoJugadores.nombre.splice(posicionBig+1,1);
        infoJugadores.categoriaJugada.splice(posicionBig+1,1);
        
        
    }

    // Busco la nueva posJugador porq ahora como esta ordenado cambio todo
    posJugador=0;
    var contador=0;
    var buscando=0;
    
    while(buscando==0)
    {
        if(jugadorAct==infoJugadores.nombre[contador])//cuando encuentra donde esta le da 1 a buscando
        {
            posJugador=contador;
            buscando=1;
        }
        contador+=1;
    }
    
    var creandoElRanking; //aca va a estar la tabla
    var numero=0; //porq la tengo q hacer al reves xd
    for(var n=infoJugadores.nombre.length-1;n>-1;n--)
    {
        creandoElRanking+=`
            <tr>
                <td>${numero+1}</td>
                <td>${infoJugadores.nombre[n]}</td>
                <td>${infoJugadores.puntuacion[n]}</td>
            </tr>`
        numero+=1;
    }
    

 
    //alert("Hola linda aca apareceria el ranking");  
    document.getElementById("inicio").innerHTML=`
        <div class="elRanking">
            <img class="neneDeCoteRanking" src="imagenes/neneDeCote.png">
            <div class="txtRanking">
                ¡Felicidades ${nombreDelQueJuega}! Aquí puedes ver tu posición en el ranking ETSANUM,
                 tu puntaje actual es de ${infoJugadores.puntuacion[posJugador]} puntos.
            </div>
        </div>
        <table class="w3-table-all">
        <tr>
            <th>#</th>
            <th>Jugador</th>
            <th>Puntos</th>
        </tr>
        ${creandoElRanking}
        </table>
        <div class="btnDenuevo">
            <button class="btnAgain" onclick="elegirCategoria('',4)">Volver a Jugar como <i>${nombreDelQueJuega}</i></button>
            <button class="btnAgain" onclick="inicio()" >Jugar como otro usuario</button>
            <button class="btnAgain2" onclick="creditos()" >Ir a los créditos</button>
        </div>
    `;

};

function creditos()//Acá va mi nombre apellido, etc
{
    document.getElementById("inicio").innerHTML=`
        <div class="htmlCreditos">
            <img class="nenedeCote4" src="imagenes/nenedeCote.png">
            <p class="gracias">¡Gracias por Jugar!</p>
            <img class="nenedeCote4" src="imagenes/yo.png">
        </div>
        <div class="creditos2">
            <p class="credTit">Docentes:</p>
            <p class="credInfo" >Nicolás Facón<br>Nicolás Manhic</p>
            <p class="credTit">Integrantes del grupo:</p>
            <p class="credInfo">Valentín Maragliano<br>Juan Ignacio Máscolo<br>María Musante<br>Juan Manuel Nahas<br>Santiago Rivas</p> 
            <p class="credTit">Desarrolladora JavaScript:</p>
            <p class="credInfo">María Musante</p>
            <p class="credTit">Curso:</p>
            <p class="credInfo" >5to A Informática</p>
        </div>
        <button class="btnVolverInicio" onclick="inicio()">Volver al Inicio</button>
        <br>
        <br>
        <br>
       `
}



