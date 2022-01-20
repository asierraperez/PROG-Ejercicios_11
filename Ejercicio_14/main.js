function main() {
    var personajes = personaje()
    var enemigos = enemigo(personajes)
    var heroes = heroe(personajes)
    var nombre_personaje = entrada("Ponle un nombre a tu héroe")
    var ultimo_turno = 0
    var enemigo_muerto = false
    var heroe_muerto = false

    var bandido = new enemigos(150, 35, "Bandido", 10)
    var nordico = new heroes(300, 50, nombre_personaje, 17, 3)


    alert("Empieza el combate\n" +
        bandido.nombre + "  " + bandido.vida + " HP\n" +
        nordico.nombre + "  " + nordico.vida + " HP\n")


    while (!enemigo_muerto && !heroe_muerto) {

        if (ultimo_turno == 0 | ultimo_turno == 1) {

            bandido.damage_recibido(nordico.ataque)
            enemigo_muerto = bandido.comprueba_muerto()
            alert(bandido.nombre + "  " + bandido.vida + " HP\n" +
                nordico.nombre + "  " + nordico.vida + " HP\n")
            if (enemigo_muerto) {
                ultimo_turno = 0
            }
            ultimo_turno = -1

        } else if (ultimo_turno == -1) {
            nordico.damage_recibido(bandido.ataque)
            heroe_muerto = nordico.comprueba_muerto()
            alert(bandido.nombre + "  " + bandido.vida + " HP\n" +
                nordico.nombre + "  " + nordico.vida + " HP\n")
            ultimo_turno = 1
        }

    }

    if (enemigo_muerto) {
        nordico.control_nivel(bandido.nivel)
        alert("Ganaste el combate\n" +
            nordico.nombre + "\n" +
            "Experiencia ganada " + bandido.nivel + "\n" +
            "Experiencia actual " + nordico.experiencia + "\n" +
            "Nivel actual " + nordico.nivel)
    } else if (heroe_muerto) {
        alert("Perdiste el combate y tu heroe murió")
    }

}
main()