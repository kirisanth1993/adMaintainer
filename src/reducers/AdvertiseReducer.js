import { CHANGE_ADVERTISE_LIST } from '../types';

const initalState = [
    {
        id: 0,
        author: "Minish Jakie",
        authorImg: "profile1.jpeg",
        productId: "PCD 001",
        tags: ["#Business", "#Fashion", "#Modern", "#Attractive", "#Reasonable"],
        likeCount: 32,
        commentCount: 12,
        title: "House in Colombo",
        category: "housing",
        description: "With the increasing demand for quality accommodation in and around Colombo, 'OPAL RESIDENCE' offering the only modern luxury boutique development with only 19 houses in 01 Acre land. (Right next to CINEC Campus) We have beautifully designed, luxurious 05 bedroom houses (4,300 sq.ft.) with 05 Bathrooms, built to the highest quality, situated close to Malabe town, highway entrance (1km) at a convenient location with many public & private institutions. All our houses are built to the highest quality with German / European fittings and expert finishes handpicked to suit elegant and modern living. Witness it to your eyes! You will never be disappointed.",
        image: "house.jpg",
        isFav: false
    },
    {
        id: 1,
        author: "Biop Midywa",
        authorImg: "profile2.jpg",
        productId: "PCD 002",
        tags: ["#Business", "#Fashion", "#Modern", "#Attractive", "#Reasonable"],
        likeCount: 32,
        commentCount: 12,
        title: "Money Exchange",
        category: "selling",
        description: "Selling Category sample Advertisement. Selling Category sample Advertisement. Selling Category sample Advertisement. Selling Category sample Advertisement. Selling Category sample Advertisement. Selling Category sample Advertisement. Selling Category sample Advertisement. Selling Category sample Advertisement. Selling Category sample Advertisement. Selling Category sample Advertisement. Selling Category sample Advertisement. Selling Category sample Advertisement. Selling Category sample Advertisement. Selling Category sample Advertisement. Selling Category sample Advertisement. Selling Category sample Advertisement. Selling Category sample Advertisement. Selling Category sample Advertisement. Selling Category sample Advertisement. Selling Category sample Advertisement. Selling Category sample Advertisement. Selling Category sample Advertisement. Selling Category sample Advertisement. Selling Category sample Advertisement. Selling Category sample Advertisement. Selling Category sample Advertisement. Selling Category sample Advertisement. Selling Category sample Advertisement. Selling Category sample Advertisement. Selling Category sample Advertisement. Selling Category sample Advertisement. ",
        image: "money.jpg",
        isFav: false
    },
    {
        id: 2,
        author: "Miresh Bgkeep",
        authorImg: "profile3.jpeg",
        productId: "PCD 003",
        tags: ["#Business", "#Fashion", "#Modern", "#Attractive", "#Reasonable"],
        likeCount: 32,
        commentCount: 12,
        title: "Maths Classes",
        category: "education",
        description: "Education Category sample Advertisement. Education Category sample Advertisement. Education Category sample Advertisement. Education Category sample Advertisement. Education Category sample Advertisement. Education Category sample Advertisement. Education Category sample Advertisement. Education Category sample Advertisement. Education Category sample Advertisement. Education Category sample Advertisement. Education Category sample Advertisement. Education Category sample Advertisement. Education Category sample Advertisement. Education Category sample Advertisement. Education Category sample Advertisement. Education Category sample Advertisement. Education Category sample Advertisement. Education Category sample Advertisement. Education Category sample Advertisement. Education Category sample Advertisement. Education Category sample Advertisement. Education Category sample Advertisement. Education Category sample Advertisement. Education Category sample Advertisement. Education Category sample Advertisement. Education Category sample Advertisement. Education Category sample Advertisement. Education Category sample Advertisement. Education Category sample Advertisement. Education Category sample Advertisement. Education Category sample Advertisement. ",
        image: "class.jpg",
        isFav: false
    },
    {
        id: 3,
        author: "John Khals",
        authorImg: "profile4.jpeg",
        productId: "PCD 004",
        tags: ["#Business", "#Fashion", "#Modern", "#Attractive", "#Reasonable"],
        likeCount: 32,
        commentCount: 12,
        title: "Get-together",
        category: "community",
        description: "Community Category sample Advertisement. Community Category sample Advertisement. Community Category sample Advertisement. Community Category sample Advertisement. Community Category sample Advertisement. Community Category sample Advertisement. Community Category sample Advertisement. Community Category sample Advertisement. Community Category sample Advertisement. Community Category sample Advertisement. Community Category sample Advertisement. Community Category sample Advertisement. Community Category sample Advertisement. Community Category sample Advertisement. Community Category sample Advertisement. Community Category sample Advertisement. Community Category sample Advertisement. Community Category sample Advertisement. Community Category sample Advertisement. Community Category sample Advertisement. Community Category sample Advertisement. Community Category sample Advertisement. Community Category sample Advertisement. Community Category sample Advertisement. Community Category sample Advertisement. Community Category sample Advertisement. Community Category sample Advertisement. Community Category sample Advertisement. Community Category sample Advertisement. Community Category sample Advertisement. Community Category sample Advertisement. ",
        image: "party.jpg",
        isFav: false
    },
    {
        id: 4,
        author: "Peter paker",
        authorImg: "profile5.jpg",
        productId: "PCD 005",
        tags: ["#Business", "#Fashion", "#Modern", "#Attractive", "#Reasonable"],
        likeCount: 32,
        commentCount: 12,
        title: "CEO",
        category: "professional",
        description: "Professional Category sample Advertisement. Professional Category sample Advertisement. Professional Category sample Advertisement. Professional Category sample Advertisement. Professional Category sample Advertisement. Professional Category sample Advertisement. Professional Category sample Advertisement. Professional Category sample Advertisement. Professional Category sample Advertisement. Professional Category sample Advertisement. Professional Category sample Advertisement. Professional Category sample Advertisement. Professional Category sample Advertisement. Professional Category sample Advertisement. Professional Category sample Advertisement. Professional Category sample Advertisement. Professional Category sample Advertisement. Professional Category sample Advertisement. Professional Category sample Advertisement. Professional Category sample Advertisement. Professional Category sample Advertisement. Professional Category sample Advertisement. Professional Category sample Advertisement. Professional Category sample Advertisement. Professional Category sample Advertisement. Professional Category sample Advertisement. Professional Category sample Advertisement. Professional Category sample Advertisement. Professional Category sample Advertisement. Professional Category sample Advertisement. Professional Category sample Advertisement. ",
        image: "man.png",
        isFav: false
    },
    {
        id: 5,
        author: "Livaas Hipeers",
        authorImg: "profile6.jpg",
        productId: "PCD 006",
        tags: ["#Business", "#Fashion", "#Modern", "#Attractive", "#Reasonable"],
        likeCount: 32,
        commentCount: 12,
        title: "Villa",
        category: "housing",
        description: "Housing Category sample Advertisement. Housing Category sample Advertisement. Housing Category sample Advertisement. Housing Category sample Advertisement. Housing Category sample Advertisement. Housing Category sample Advertisement. Housing Category sample Advertisement. Housing Category sample Advertisement. Housing Category sample Advertisement. Housing Category sample Advertisement. Housing Category sample Advertisement. Housing Category sample Advertisement. Housing Category sample Advertisement. Housing Category sample Advertisement. Housing Category sample Advertisement. Housing Category sample Advertisement. Housing Category sample Advertisement. Housing Category sample Advertisement. Housing Category sample Advertisement. Housing Category sample Advertisement. Housing Category sample Advertisement. Housing Category sample Advertisement. Housing Category sample Advertisement. Housing Category sample Advertisement. Housing Category sample Advertisement. Housing Category sample Advertisement. Housing Category sample Advertisement. Housing Category sample Advertisement. Housing Category sample Advertisement. Housing Category sample Advertisement. Housing Category sample Advertisement. ",
        image: "villa.jpg",
        isFav: false
    },
    
];

export const AdvertiseReducer = (state=initalState, action) => {
    switch(action.type){
        case CHANGE_ADVERTISE_LIST:
            return (
                action.payload
            )
        default:
            return state;
    }
};