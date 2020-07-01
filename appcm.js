idAveriguar.onclick = function(pulgadas) {
    var strCM = idCM.value ; 
    var numCM = +strCM ; 
    var numPulg = numCM / 2.54 ;
    idPulg.value = numPulg ;
}
