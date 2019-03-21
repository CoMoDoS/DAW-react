const LocationAPI = {
    locatii : [{
        id: 1,
        name: "Name 1",
        type: "Type 1",
        address: "Loc1",
        picture : "/images/02.png"
    }, {
        id: 2,
        name: "Name 2",
        type: "Type 2",
        address: "Loc 2",
        picture : "/images/03.png"
    }, {
        id: 3,
        name: "Name 3",
        type: "Type3",
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