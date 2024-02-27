export const fakeData = [
    {
        name: "Tyrion",
        avatar: "./img/avatar_1.png",
        visible: true,
        messages: [
            {
                date: "10/01/2020 15:30:55",
                message: "Hai portato a spasso il drago?",
                status: "received" as const,
            },
            {
                date: "10/01/2020 15:50:00",
                message: "Ricordati di portarmi il vino",
                status: "received" as const,
            },
            {
                date: "10/01/2020 16:15:22",
                message: "Tutto fatto!",
                status: "sent" as const,
            },
        ],
    },
    {
        name: "Sansa",
        avatar: "./img/avatar_2.jpg",
        visible: true,
        messages: [
            {
                date: "20/03/2020 16:30:00",
                message: "Ciao come sta Daenerys?",
                status: "received" as const,
            },
            {
                date: "20/03/2020 16:30:55",
                message: "Bene grazie! Stasera ci vediamo?",
                status: "sent" as const,
            },
            {
                date: "20/03/2020 16:35:00",
                message: "Mi piacerebbe ma l'Inverno sta Arrivando.",
                status: "received" as const,
            },
        ],
    },
    {
        name: "Cersei",
        avatar: "./img/avatar_3.png",
        visible: true,
        messages: [
            {
                date: "28/03/2020 10:10:40",
                message: "Come mai sei vivo?",
                status: "received" as const,
            },
            {
                date: "28/03/2020 10:20:10",
                message: "Sicura di non aver sbagliato chat?",
                status: "sent" as const,
            },
            {
                date: "28/03/2020 16:15:22",
                message: "Ah, scusa, era per Bran",
                status: "received" as const,
            },
        ],
    },
    {
        name: "Bran",
        avatar: "./img/avatar_4.png",
        visible: true,
        messages: [
            {
                date: "10/01/2020 15:30:55",
                message: "Cosa si prova ad essere re?",
                status: "sent" as const,
            },
            {
                date: "10/01/2020 15:50:00",
                message: "Cosa si prova ad essere morto?",
                status: "received" as const,
            },
        ],
    },
    {
        name: "Ned",
        avatar: "./img/avatar_5.jfif",
        visible: true,
        messages: [
            {
                date: "10/01/2020 15:30:55",
                message: "Ricordati di portare i fiori alla mamma",
                status: "received" as const,
            },
            {
                date: "10/01/2020 15:50:00",
                message: "Ma non mi hai mai detto chi è...",
                status: "sent" as const,
            },
        ],
    },
    {
        name: "Samwell",
        avatar: "./img/avatar_6.png",
        visible: true,
        messages: [
            {
                date: "10/01/2020 15:30:55",
                message: "Ciao Sam, hai novità?",
                status: "sent" as const,
            },
            {
                date: "10/01/2020 15:50:00",
                message: "Non ancora",
                status: "received" as const,
            },
            {
                date: "10/01/2020 15:51:00",
                message: "Ali nere, nere parole",
                status: "sent" as const,
            },
        ],
    },
    {
        name: "Thormund",
        avatar: "./img/avatar_7.png",
        visible: true,
        messages: [
            {
                date: "10/01/2020 15:30:55",
                message: "Fai gli auguri a Brienne che è il suo compleanno!",
                status: "sent" as const,
            },
            {
                date: "10/01/2020 15:50:00",
                message: "Grazie per avermelo ricordato, le scrivo subito!",
                status: "received" as const,
            },
        ],
    },
    {
        name: "Daenerys",
        avatar: "./img/avatar_8.png",
        visible: true,
        messages: [
            {
                date: "10/01/2020 15:30:55",
                message: "Ciao, andiamo a mangiare la pizza stasera?",
                status: "received" as const,
            },
            {
                date: "10/01/2020 15:50:00",
                message: "No, andiamo a cercare il Re della Notte!",
                status: "sent" as const,
            },
            {
                date: "10/01/2020 15:51:00",
                message: "OK!!",
                status: "received" as const,
            },
        ],
    },
];
