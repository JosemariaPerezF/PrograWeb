var nuevatemp = 0;
function calculartemp(){
    const temp = document.getElementById('valor').value;
    const tipo = document.getElementById('tipo').value;
    if(tipo == 'F'){
        nuevatemp = valor * 5/9;
    }else{
        nuevatemp = valor * 9/5;
    }
    mostrar(nuevatemp)
}

function mostrar(valor){
    document.getElementById('resultado').value = nuevatemp;
    close;
}