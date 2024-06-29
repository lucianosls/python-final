function calcularEstacionConSwitch() {
    const fecha = new Date();
    const mes = fecha.getMonth() + 1; // getMonth() devuelve el mes (de 0 a 11), sumamos 1 para tenerlo de 1 a 12
    let estacion;

    switch (mes) {
        case 12:
        case 1:
        case 2:
            estacion = "Invierno";
            break;
        case 3:
        case 4:
        case 5:
            estacion = "Primavera";
            break;
        case 6:
        case 7:
        case 8:
            estacion = "Verano";
            break;
        case 9:
        case 10:
        case 11:
            estacion = "Otoño";
            break;
        default:
            estacion = "Mes desconocido";
            break;
    }

    return estacion;
}

console.log("La estación actual es: " + calcularEstacionConSwitch());
