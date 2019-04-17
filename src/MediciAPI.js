const MediciAPI = {
    medici : [{
        id: 1,
        name: "Simon Bailey",
        spec: "Cardiolog",
        year: "2018",
        picture : "/images/medic1.jpg",
        id_loc:1
    }, {
        id: 2,
        name: "Thomas Burleson",
        spec: "Ortoped",
        year: "2017",
        picture : "/images/medic2.jpeg",
        id_loc:2
    }, {
        id: 3,
        name: "Will Button",
        spec: "Pediatru",
        year: "2016",
        picture : "/images/medic3.jpg",
        id_loc:3
    }, {
        id: 4,
        name: "Ben Clinkinbeard",
        spec: "Oftalmolog",
        year: "2015",
        picture : "/images/medic4.jpg",
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