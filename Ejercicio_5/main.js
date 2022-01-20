function main() {
    class enemigo {
        constructor(vida, ataque, nombre, nivel) {
            this.vida = vida
            this.ataque = ataque
            this.nombre = nombre
            this.nivel = nivel
        }
        get get_vida() {
            return this.vida
        }

        set set_vida(aux_vida) {
            this.vida = aux_vida

        }

        damage_recibido(damage) {
            this.vida = this.vida - damage
            return this.vida
        }

        experiencia_recibida(valor) {
            var experiencia = (this.nivel * 5) / valor
            return experiencia
        }


    }

    var elite = new enemigo(250, 60, "Élite", 50)
    console.log(elite.vida)
    console.log(elite.get_vida)

    elite.set_vida = 300
    console.log(elite.vida)
    console.log(elite.get_vida)

    elite.damage_recibido(13)
    console.log(elite.vida)
    console.log(elite.get_vida)

    var xp = elite.experiencia_recibida(5)
    console.log(xp)

}
main()