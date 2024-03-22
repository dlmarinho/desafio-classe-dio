class CriandoPersonagem {
    constructor(nomeHeroi, idadeHeroi, classeHeroi){
        this.nomeHeroi = nomeHeroi
        this.idadeHeroi = idadeHeroi
        this.classeHeroi = classeHeroi
    }

    atacar(){
        let tipoAtaque = this.escolhendoAtaque(this.classeHeroi)
        console.log(`O ${this.classeHeroi} atacou usando ${tipoAtaque}`)
    }

    escolhendoAtaque(classeHeroi){
        if ((classeHeroi === "mago") || (classeHeroi === "Mago")){
            return "magia"
        }else if ((classeHeroi === "guerreiro") || (classeHeroi === "Guerreiro")) {
            return "espada"
        }else if ((classeHeroi === "monge") || (classeHeroi === "Monge")){
            return "artes marcias"
        }else if ((classeHeroi === "ninja") || (classeHeroi === "Ninja")){
            return "Shuriken"
        }
    }
}

let Personagem1 = new CriandoPersonagem("Ricardo", 23, "ninja")

Personagem1.atacar()
