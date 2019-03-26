import localize from 'fronto-localize';

const en = {
    blah: "Baaaah",
    homeH:"Welcome to DAW",
    homeP:"The place with your solution",
    locH:"Our locations",
    locP:"You can find specialized solutions for your problems",
    docH:"Our team",
    docP:"Our team is composed of the best specialists"
};

const ro = {
    blah: "Bine baaa",
    homeH:"Bun venit la DAW",
    homeP:"Solutia pentru problema ta",
    locH:"Clinicile noastre",
    locP:"Puteti gasi clinici specializate pentru o gama vasta de probleme",
    docH:"Echipa noastra",
    docP:"Avem cei mai buni specialisti in echipa"
};

export default localize({ en, ro });
