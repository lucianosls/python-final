// Esta es la versión adaptada para los meses del año
let months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 
    'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

function getMonth(n) {
if (n < 1 || n > 12) {
throw new Error('out of range');
}
return months[n-1];
}

console.log(getMonth(5)); // Imprimirá "Mayo"
