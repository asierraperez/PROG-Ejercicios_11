function enemigo() {
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
        get get_ataque() {
            return this.ataque
        }
        get get_nombre() {
            return this.nombre
        }
        get get_nivel() {
            return this.nivel
        }


        set set_vida(aux_vida) {
            this.vida = aux_vida

        }
        set set_ataque(aux_ataque) {
            this.ataque = aux_ataque
        }
        set set_nombre(aux_nombre) {
            this.nombre = aux_nombre
        }
        set set_nivel(aux_nivel) {
            this.nivel = aux_nivel
        }




    }

}