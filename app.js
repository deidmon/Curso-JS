let numeroMaximoPosible = 10;
let numeroSecreto = Math.floor(Math.random()*numeroMaximoPosible)+1;
let numeroUsuario = 0;
let intentos = 1;
//let palabraVeces = 'vez';
let maximosIntentos = 3;

while (numeroUsuario != numeroSecreto){
    numeroUsuario = parseInt(prompt(`Me indicas un número entre 1 y ${numeroMaximoPosible} por favor:`));

    //console.log(numeroUsuario);

    if (numeroUsuario == numeroSecreto) {
        alert(`Acertaste, el número es: ${numeroUsuario}. Lo hiciste en ${intentos} ${intentos == 1 ? 'vez' : 'veces'}.`);
    } else {
        if (numeroUsuario > numeroSecreto){
            alert('El número secreto es menor');
        } else {
            alert('El número secreto es mayor');
        }
        //alert('Lo siento, no acertaste el número');
        intentos += 1;
        //palabraVeces = 'veces'
        if (intentos >maximosIntentos){
            alert(`Llegaste al número máximo de ${maximosIntentos} intentos.`);
            break;
        }
    }
}
    