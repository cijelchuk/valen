idAveriguar.onclick = function(LxH) {
    var largo = idLargo.value ;
    var ancho = idAncho.value ;
    var alto = idAlto.value ;
    var base = largo * ancho ;
    var numVol = base * alto ;
    idVol.value = numVol ;
}