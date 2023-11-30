class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar() {
        let ataque;

        switch (this.tipo) {
            case 'mago':
                ataque = 'usou magia';
                break;
            case 'guerreiro':
                ataque = 'usou espada';
                break;
            case 'monge':
                ataque = 'usou artes marciais';
                break;
            case 'ninja':
                ataque = 'usou shuriken';
                break;
            default:
                ataque = 'usou um ataque desconhecido';
        }

        const mensagem = `O ${this.tipo} ${this.nome} atacou usando ${ataque}`;
        console.log(mensagem);
    }
}

function interagir() {
    const nomeHeroi = prompt("Digite o nome do herói:");
    const idadeHeroi = prompt("Digite a idade do herói:");
    const tipoHeroi = prompt("Escolha o tipo do herói (mago, guerreiro, monge, ninja):");

    const heroi = new Heroi(nomeHeroi, idadeHeroi, tipoHeroi);
    heroi.atacar();
}

// Verifica se a função prompt está disponível (ou seja, se o código está sendo executado em um navegador)
if (typeof prompt === 'function') {
    interagir();
} else {
    console.log("A função prompt não está disponível neste ambiente. Execute este código em um navegador para interagir.");
}
