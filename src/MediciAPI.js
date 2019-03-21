const MediciAPI = {
    medici : [{
        id: 1,
        name: "Simon Bailey",
        spec: "Cardiolog",
        year: "2018",
        picture : "https://i41.photobucket.com/albums/e256/rider_of_the_dragon/pup5ox5o-1.jpg",
        id_loc:1
    }, {
        id: 2,
        name: "Thomas Burleson",
        spec: "Ortoped",
        year: "2017",
        picture : "https://i228.photobucket.com/albums/ee236/jokuidari/Chocobo-2.jpg",
        id_loc:2
    }, {
        id: 3,
        name: "Will Button",
        spec: "Pediatru",
        year: "2016",
        picture : "https://i1001.photobucket.com/albums/af135/lRial/Avatar/karvinen_lomalla.jpg",
        id_loc:3
    }, {
        id: 4,
        name: "Ben Clinkinbeard",
        spec: "Oftalmolog",
        year: "2015",
        picture : "https://i84.photobucket.com/albums/k17/Flizia/Icons/Animals/thunderbird-v2-64x64.png",
        id_loc:1
    }],
    all: function () {
        return this.medici;
    },
    getById: function (id) {
        const isMedic = m => m.id===id;
        return this.medici.find(isMedic)
    },

    getByIdLoc: function (idLoc) {
        return this.medici.filter(med => med.id_loc === idLoc)
    }
};

export default MediciAPI;