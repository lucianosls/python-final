function actividadSegunHora() {
    const hora = new Date().getHours();

    if (hora >= 6 && hora < 10) {
        return "Es hora de desayunar.";
    } else if (hora >= 12 && hora < 15) {
        return "Es hora de almorzar.";
    } else if (hora >= 17 && hora < 20) {
        return "Es hora de merendar.";
    } else if (hora >= 20 && hora <= 23) {
        return "Es hora de cenar.";
    } else {
        return "Probablemente sea tiempo de alguna otra actividad o descanso.";
    }
}

console.log(actividadSegunHora());
