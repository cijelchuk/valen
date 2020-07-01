idAveriguar.onclick = function(SyP) {
    var radio = idRadio.value ;
    var diametro = radio*2;
    var pi = Math.PI ;
    var numPer = pi * diametro ;
    var numSup = pi * radio * radio ;
    idPer.value = numPer ;
    idSup.value = numSup ;
    idDia.value = diametro;
}