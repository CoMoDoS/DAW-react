import { initReactI18next } from "react-i18next";
import i18n from "i18next";

i18n
    .use(initReactI18next)
    .init({
        interpolation: {
            // React already does escaping
            escapeValue: false,
        },
        lng: 'EN', // 'en' | 'es'
        fallbackLng: "en",
        // Using simple hardcoded resources for simple example
        resources: {
            EN: {
                translation: {
                    home: { label: 'Home'},
                    doctors: { label: 'Doctors'},
                    hospitals: { label: 'Hospitals'},
                    name: { label: "Name"},
                    speciality: { label: "Speciality"},
                    graduation: { label: "Graduation Year"},
                    hospital: { label: "Hospital"},
                    address: { label: "Address"},
                    type: { label: "Type"},
                    welcome: { label: "Welcome!"},

                },
            },
            RO: {
                translation: {
                    home: { label: 'Acasa'},
                    doctors: { label: 'Doctori'},
                    hospitals: { label: 'Spitale'},
                    name: { label: "Nume"},
                    speciality: { label: "Specializare"},
                    graduation: { label: "An absolvire"},
                    hospital: { label: "Spital"},
                    address: { label: "Adresa"},
                    type: { label: "Tip"},
                    welcome: { label: "Bine ai venit!"},
                },
            },
        },
    });

export default i18n;