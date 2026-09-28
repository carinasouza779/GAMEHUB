// ==============================
// ETAPA 3 - CADASTRO DOS JOGOS
// ==============================

export const jogos = [

    {
        id: "1",
        nome: "GTA V",
        genero: "Ação",
        nota: 4.9,
        plataforma: "PC, Console",
        descricao: "Um jogo de mundo aberto com muita ação, missões e exploração.",
        imagem: require("../../assets/games/gta-v.jpg"),
        destaque: true,
    },

    {
        id: "2",
        nome: "Red Dead Redemption 2",
        genero: "Aventura",
        nota: 4.9,
        plataforma: "PC, Console",
        descricao: "Uma aventura no Velho Oeste com uma grande história.",
        imagem: require("../../assets/games/red-dead-redemption-2.jpg"),
        destaque: true,
    },

    {
        id: "3",
        nome: "God of War",
        genero: "Ação",
        nota: 4.8,
        plataforma: "PC, Console",
        descricao: "Kratos e seu filho Atreus embarcam em uma grande aventura.",
        imagem: require("../../assets/games/god-of-war.jpg"),
        destaque: true,
    },

    {
        id: "4",
        nome: "The Last of Us",
        genero: "Aventura",
        nota: 4.8,
        plataforma: "PC, Console",
        descricao: "Uma jornada de sobrevivência em um mundo devastado.",
        imagem: require("../../assets/games/the-last-of-us.jpg"),
        destaque: true,
    },

    {
        id: "5",
        nome: "Call of Duty",
        genero: "FPS",
        nota: 4.6,
        plataforma: "PC, Console, Mobile",
        descricao: "Combates intensos em partidas multiplayer e campanhas.",
        imagem: require("../../assets/games/call-of-duty.jpg"),
        destaque: false,
    },

    {
        id: "6",
        nome: "League of Legends",
        genero: "MOBA",
        nota: 4.7,
        plataforma: "PC",
        descricao: "Batalhas estratégicas entre equipes com diferentes campeões.",
        imagem: require("../../assets/games/league-of-legends.jpg"),
        destaque: false,
    },

    {
        id: "7",
        nome: "Elden Ring",
        genero: "RPG",
        nota: 4.9,
        plataforma: "PC, Console",
        descricao: "Explore um enorme mundo de fantasia cheio de desafios.",
        imagem: require("../../assets/games/elden-ring.jpg"),
        destaque: false,
    },

    {
        id: "8",
        nome: "Counter-Strike 2",
        genero: "FPS",
        nota: 4.6,
        plataforma: "PC",
        descricao: "Um clássico jogo competitivo de tiro em equipes.",
        imagem: require("../../assets/games/counter-strike-2.jpg"),
        destaque: false,
    },

];
//  VAMOS PARA ETAPA 4 - CRIAR O ARQUIVO GameCard.js COM OS DADOS DOS JOGOS
