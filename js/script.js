function validacion() {

    valorName = document.getElementById("InputName").value;
    if( valorName == null || valorName.length == 0 || /^\s+$/.test(valorName) ) {
    	alert('[ERROR] Debe incluir al menos un nombre');
    	return false;
    }

    valorApe = document.getElementById("InputApe").value;
    if( valorApe == null || valorApe.length == 0 || /^\s+$/.test(valorApe) ) {
    	alert('[ERROR] Debe incluir su apellido');
    	return false;
    }

}

var audio = document.getElementById("myaudio");
  audio.volume = 0.1;