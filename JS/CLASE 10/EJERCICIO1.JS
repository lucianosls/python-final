function calcularEstacion() {
    const fecha = new Date();
    const mes = fecha.getMonth() + 1; // getMonth() devuelve el mes (de 0 a 11), sumamos 1 para tenerlo de 1 a 12
    const dia = fecha.getDate();

    if ((mes === 3 && dia >= 21) || (mes === 4) || (mes === 5) || (mes === 6 && dia < 21)) {
        return "Primavera";
    } else if ((mes === 6 && dia >= 21) || (mes === 7) || (mes === 8) || (mes === 9 && dia < 23)) {
        return "Verano";
    } else if ((mes === 9 && dia >= 23) || (mes === 10) || (mes === 11) || (mes === 12 && dia < 21)) {
        return "Otoño";
    } else {
        return "Invierno";
    }
}

console.log("La estación actual es: " + calcularEstacion());
