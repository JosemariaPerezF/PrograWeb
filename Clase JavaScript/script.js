    var a = 1;
    var b = 2;
    
    var c = a + b;
    function mostrarMensaje(){
        alert(`MENSAJE: ${c}`);
    }

    /*CONTADOR*/

    /*DIFERENTES VARIABLES LOCAL LET, GLOBAL VAR
    var contador = 0;
    const variable1 = 0;
    let variable2 = 0;
    var variable3 = 0;
    */

    let contador = 0;
    const contarClick = () => {
        contador = contador + 1;
        document.getElementById('spnContador').innerHTML = contador;
        console.log(contar);
    }

    const Caluladora = () => {

    }