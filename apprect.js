idAveriguar.onclick = function(LxH) {
    var largo = idLargo.value ;
    var ancho = idAncho.value ;
    var numPer = ancho*2 + largo*2 ;
    var numSup = ancho * largo ;
    idPer.value = numPer ;
    idSup.value = numSup ;
}