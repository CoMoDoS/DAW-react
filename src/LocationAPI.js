const LocationAPI = {
    locatii : [{
        id: 1,
        name: "Sangra vita",
        type: "Blood",
        address: "Loc1",
        picture : "/images/02.png"
    }, {
        id: 2,
        name: "Hearth attack",
        type: "Cardiac",
        address: "Loc 2",
        picture : "/images/03.png"
    }, {
        id: 3,
        name: "MedComplete",
        type: "General",
        address: "Loc3",
        picture : "/images/01.png"
    }],
    all: function () {
        return this.locatii;
    },
    getById: function (id) {
        const isLocation = l => l.id===id;
        return this.locatii.find(isLocation)
    }
};

export default LocationAPI;