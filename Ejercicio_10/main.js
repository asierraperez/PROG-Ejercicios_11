function main() {
    class enemigo {
        constructor(vida, ataque, nombre, nivel, experiencia) {
            this.vida = vida
            this.ataque = ataque
            this.nombre = nombre
            this.nivel = nivel
            this.experiencia = experiencia
        }
        get get_vida() {
            return this.vida
        }
        get get_xp() {
            return this.experiencia
        }

        set set_vida(aux_vida) {
            this.vida = aux_vida

        }
        set set_xp(aux_xp) {
            this.experiencia = aux_xp
        }

        damage_recibido(damage) {
            this.vida = this.vida - damage
            return this.vida
        }

        experiencia_recibida(valor) {
            var experiencia = (this.nivel * 5) / valor
            return experiencia
        }
        comprueba_muerto() {
            if (this.vida <= 0) {
                return true
            } else {
                return false
            }
        }

        control_nivel(valor) {
            this.experiencia = this.experiencia + valor
            if (this.experiencia >= 10) {
                this.nivel++
                this.experiencia = 0
            }
        }


    }

    var elite = new enemigo(250, 60, "Élite", 50, 5)
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

    muerto = elite.comprueba_muerto()
    console.log(muerto)

    elite.control_nivel(5)
    console.log(elite.experiencia)
    console.log(elite.nivel)

}
main()