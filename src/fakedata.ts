import {Contact} from './types'

export const fakeData: Contact[] = [
    {
        name: 'Tyrion',
        id: 0,
        avatar: './img/avatar_1.png',
        visible: true,
        messages: [
            {
                date: '10/01/2020 15:30:55',
                message: 'Hai portato a spasso il drago?',
                status: 'received',
            },
            {
                date: '10/01/2020 15:50:00',
                message: 'Ricordati di portarmi il vino',
                status: 'received',
            },
            {
                date: '10/01/2020 16:15:22',
                message: 'Tutto fatto!',
                status: 'sent',
            },
        ],
    },
    {
        name: 'Sansa',
        id: 1,
        avatar: './img/avatar_2.jpg',
        visible: true,
        messages: [
            {
                date: '20/03/2020 16:30:00',
                message: 'Ciao come sta Daenerys?',
                status: 'received',
            },
            {
                date: '20/03/2020 16:30:55',
                message: 'Bene grazie! Stasera ci vediamo?',
                status: 'sent',
            },
            {
                date: '20/03/2020 16:35:00',
                message: "Mi piacerebbe ma l'Inverno sta Arrivando.",
                status: 'received',
            },
        ],
    },
    {
        name: 'Cersei',
        id: 2,
        avatar: './img/avatar_3.png',
        visible: true,
        messages: [
            {
                date: '28/03/2020 10:10:40',
                message: 'Come mai sei vivo?',
                status: 'received',
            },
            {
                date: '28/03/2020 10:20:10',
                message: 'Sicura di non aver sbagliato chat?',
                status: 'sent',
            },
            {
                date: '28/03/2020 16:15:22',
                message: 'Ah, scusa, era per Bran',
                status: 'received',
            },
        ],
    },
    {
        name: 'Bran',
        id: 3,
        avatar: './img/avatar_4.png',
        visible: true,
        messages: [
            {
                date: '10/01/2020 15:30:55',
                message: 'Cosa si prova ad essere re?',
                status: 'sent',
            },
            {
                date: '10/01/2020 15:50:00',
                message: 'Cosa si prova ad essere morto?',
                status: 'received',
            },
        ],
    },
    {
        name: 'Ned',
        id: 4,
        avatar: './img/avatar_5.jfif',
        visible: true,
        messages: [
            {
                date: '10/01/2020 15:30:55',
                message: 'Ricordati di portare i fiori alla mamma',
                status: 'received',
            },
            {
                date: '10/01/2020 15:50:00',
                message: 'Ma non mi hai mai detto chi è...',
                status: 'sent',
            },
        ],
    },
    {
        name: 'Samwell',
        id: 5,
        avatar: './img/avatar_6.png',
        visible: true,
        messages: [
            {
                date: '10/01/2020 15:30:55',
                message: 'Ciao Sam, hai novità?',
                status: 'sent',
            },
            {
                date: '10/01/2020 15:50:00',
                message: 'Non ancora',
                status: 'received',
            },
            {
                date: '10/01/2020 15:51:00',
                message: 'Ali nere, nere parole',
                status: 'sent',
            },
        ],
    },
    {
        name: 'Thormund',
        id: 6,
        avatar: './img/avatar_7.png',
        visible: true,
        messages: [
            {
                date: '10/01/2020 15:30:55',
                message: 'Fai gli auguri a Brienne che è il suo compleanno!',
                status: 'sent',
            },
            {
                date: '10/01/2020 15:50:00',
                message: 'Grazie per avermelo ricordato, le scrivo subito!',
                status: 'received',
            },
        ],
    },
    {
        name: 'Daenerys',
        id: 7,
        avatar: './img/avatar_8.png',
        visible: true,
        messages: [
            {
                date: '10/01/2020 15:30:55',
                message: 'Ciao, andiamo a mangiare la pizza stasera?',
                status: 'received',
            },
            {
                date: '10/01/2020 15:50:00',
                message: 'No, andiamo a cercare il Re della Notte!',
                status: 'sent',
            },
            {
                date: '10/01/2020 15:51:00',
                message: 'OK!!',
                status: 'received',
            },
        ],
    },
]
