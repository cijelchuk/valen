idAveriguar.onclick = function(LxH) {
    var fah = idFar.value ;
    var numC = ( fah-32 )*5/9 ;
    var numK = numC + 273.15  ;
    idCel.value = numC ;
    idKel.value = numK ;
}