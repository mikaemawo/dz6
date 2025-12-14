const show = [
    {
    title: "Breaking Bad",
    year: 2008,
    genre: "Crime",
    rating: 9.5,
    seasons: 5,
    duration: 47,
    finished: true,
    actors: ["Bryan Cranston", "Aaron Paul"],
    country: "USA"
    },
    {
    title: "Game of Thrones",
    year: 2011,
    genre: "Fantasy",
    rating: 9.2,
    seasons: 8,
    duration: 55,
    finished: true,
    actors: ["Emilia Clarke"],
    country: "USA"
    },
    {
    title: "Stranger Things",
    year: 2016,
    genre: "Sci-Fi",
    rating: 8.7,
    seasons: 4,
    duration: 50,
    finished: false,
    actors: ["Millie Bobby Brown"],
    country: "USA"
    },
    {
    title: "The Witcher",
    year: 2019,
    genre: "Fantasy",
    rating: 8.2,
    seasons: 3,
    duration: 60,
    finished: false,
    actors: ["Henry Cavill"],
    country: "USA"
    },
    {
    title: "Friends",
    year: 1994,
    genre: "Comedy",
    rating: 8.9,
    seasons: 10,
    duration: 22,
    finished: true,
    actors: ["Jennifer Aniston"],
    country: "USA"
    },
    {
    title: "Sherlock",
    year: 2010,
    genre: "Detective",
    rating: 9.1,
    seasons: 4,
    duration: 90,
    finished: true,
    actors: ["Benedict Cumberbatch"],
    country: "UK"
    },
    {
    title: "Dark",
    year: 2017,
    genre: "Sci-Fi",
    rating: 8.8,
    seasons: 3,
    duration: 60,
    finished: true,
    actors: ["Louis Hofmann"],
    country: "Germany"
    },
    {
    title: "The Office",
    year: 2005,
    genre: "Comedy",
    rating: 8.9,
    seasons: 9,
    duration: 22,
    finished: true,
    actors: ["Steve Carell"],
    country: "USA"
    },
    {
    title: "Vikings",
    year: 2013,
    genre: "History",
    rating: 8.5,
    seasons: 6,
    duration: 45,
    finished: true,
    actors: ["Travis Fimmel"],
    country: "Canada"
    },
    {
    title: "The Boys",
    year: 2019,
    genre: "Action",
    rating: 8.7,
    seasons: 4,
    duration: 60,
    finished: false,
    actors: ["Karl Urban"],
    country: "USA"
    }
]

show.forEach(function (s) {
    console.log(s.title + " (" + s.year + ") - Rating: " + s.rating);
    
})

let list = show.map(function (s) {
    return s.title + " ( "  + s.year + ") -" + s.seasons + " seasons";
    });
console.log(list);

let notFinished = show.filter(function (s) {
    return s.finished === false;   
});
console.log(notFinished);

let moreseasons5 = show.find(function (s) {
    return s.seasons > 5;   
});
console.log(moreseasons5);

let highRating = show.some(function (s) {
    return s.rating > 9.0;   
});
console.log(highRating);

let after2k= show.every(function (s) {
    return s.year > 2000;
} );
console.log(after2k);

let sum = show.reduce(function(total, s) {
    return total + s.rating
}, 0)
let avg = sum / show.length
console.log(avg)

let sorted = show.slice().sort(function (a, b) {
    return b.rating - a.rating;
});
console.log(sorted);