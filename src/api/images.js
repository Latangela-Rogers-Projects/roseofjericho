
const isDev = process.env.NODE_ENV === "development";

const ImagesDev = {
    heroVideo: isDev ? "/assets/img/VIDEO-2025-04-30-12-11-18.mp4" : "https://www.thetransformationcollective.org/wp-content/uploads/2025/05/VIDEO-2025-04-30-12-11-18.mp4",
    heroImages: isDev ?
        [
            "/assets/img/herosection/herosection_14.jpg",
            "/assets/img/herosection/herosection_15.jpg",
            "/assets/img/herosection/herosection_16.jpg",
            "/assets/img/herosection/herosection_17.jpg",
            "/assets/img/herosection/herosection_18.jpg",
            "/assets/img/herosection/herosection_19.jpg",
            "/assets/img/herosection/herosection_20.jpg",
            "/assets/img/herosection/herosection_21.jpg",
            "/assets/img/herosection/herosection_22.jpg",
            "/assets/img/herosection/herosection_23.jpg",
            "/assets/img/herosection/herosection_24.jpg",
            "/assets/img/herosection/herosection_25.jpg",
        ]
        :
        [
            "https://tsoministries.com/wp-content/uploads/2025/02/herosection_14.jpg",
            "https://tsoministries.com/wp-content/uploads/2025/02/herosection_15.jpg",
            "https://tsoministries.com/wp-content/uploads/2025/02/herosection_16.jpg",
            "https://tsoministries.com/wp-content/uploads/2025/02/herosection_17.jpg",
            "https://tsoministries.com/wp-content/uploads/2025/02/herosection_18.jpg",
            "https://tsoministries.com/wp-content/uploads/2025/02/herosection_19.jpg",
            "https://tsoministries.com/wp-content/uploads/2025/02/herosection_20.jpg",
            "https://tsoministries.com/wp-content/uploads/2025/02/herosection_21.jpg",
            "https://tsoministries.com/wp-content/uploads/2025/02/herosection_22.jpg",
            "https://tsoministries.com/wp-content/uploads/2025/02/herosection_23.jpg",
            "https://tsoministries.com/wp-content/uploads/2025/02/herosection_24.jpg",
            "https://tsoministries.com/wp-content/uploads/2025/02/herosection_25.jpg",
        ],
    heroImagesDesk: isDev ?
        [
            "/assets/img/herosection/herosection_35.jpg",
            "/assets/img/herosection/herosection_36.jpg",
            "/assets/img/herosection/herosection_37.jpg",
            "/assets/img/herosection/herosection_26.jpg",
            "/assets/img/herosection/herosection_27.jpg",
            "/assets/img/herosection/herosection_28.jpg",
            "/assets/img/herosection/herosection_29.jpg",
            "/assets/img/herosection/herosection_30.jpg",
            "/assets/img/herosection/herosection_31.jpg",
            "/assets/img/herosection/herosection_32.jpg",
            "/assets/img/herosection/herosection_33.jpg",
            "/assets/img/herosection/herosection_34.jpg",
            // "/assets/img/herosection/herosection_23.jpg",
            // "/assets/img/herosection/herosection_24.jpg",
            // "/assets/img/herosection/herosection_25.jpg",
        ]
        :
        [
            "https://tsoministries.com/wp-content/uploads/2025/02/herosection_35.jpg",
            "https://tsoministries.com/wp-content/uploads/2025/02/herosection_36.jpg",
            "https://tsoministries.com/wp-content/uploads/2025/02/herosection_37.jpg",
            "https://tsoministries.com/wp-content/uploads/2025/02/herosection_26.jpg",
            "https://tsoministries.com/wp-content/uploads/2025/02/herosection_27.jpg",
            "https://tsoministries.com/wp-content/uploads/2025/02/herosection_28.jpg",
            "https://tsoministries.com/wp-content/uploads/2025/02/herosection_29.jpg",
            "https://tsoministries.com/wp-content/uploads/2025/02/herosection_30.jpg",
            "https://tsoministries.com/wp-content/uploads/2025/02/herosection_31.jpg",
            "https://tsoministries.com/wp-content/uploads/2025/02/herosection_32.jpg",
            "https://tsoministries.com/wp-content/uploads/2025/02/herosection_33.jpg",
            "https://tsoministries.com/wp-content/uploads/2025/02/herosection_34.jpg",
        ],
    SLIDE1: isDev ?
        [
            { img: "/assets/img/herosection/herosection_35.jpg" },
            { img: "/assets/img/herosection/herosection_36.jpg" },
            { img: "/assets/img/herosection/herosection_37.jpg" },
            { img: "/assets/img/herosection/herosection_26.jpg" },
            { img: "/assets/img/herosection/herosection_27.jpg" },
            { img: "/assets/img/herosection/herosection_28.jpg" },
            { img: "/assets/img/herosection/herosection_29.jpg" },
            { img: "/assets/img/herosection/herosection_30.jpg" },
            { img: "/assets/img/herosection/herosection_31.jpg" },
            { img: "/assets/img/herosection/herosection_32.jpg" },
            { img: "/assets/img/herosection/herosection_33.jpg" },
            { img: "/assets/img/herosection/herosection_34.jpg" },
        ]
        :
        [
            { img: "https://tsoministries.com/wp-content/uploads/2025/02/herosection_35.jpg" },
            { img: "https://tsoministries.com/wp-content/uploads/2025/02/herosection_36.jpg" },
            { img: "https://tsoministries.com/wp-content/uploads/2025/02/herosection_37.jpg" },
            { img: "https://tsoministries.com/wp-content/uploads/2025/02/herosection_26.jpg" },
            { img: "https://tsoministries.com/wp-content/uploads/2025/02/herosection_27.jpg" },
            { img: "https://tsoministries.com/wp-content/uploads/2025/02/herosection_28.jpg" },
            { img: "https://tsoministries.com/wp-content/uploads/2025/02/herosection_29.jpg" },
            { img: "https://tsoministries.com/wp-content/uploads/2025/02/herosection_30.jpg" },
            { img: "https://tsoministries.com/wp-content/uploads/2025/02/herosection_31.jpg" },
            { img: "https://tsoministries.com/wp-content/uploads/2025/02/herosection_32.jpg" },
            { img: "https://tsoministries.com/wp-content/uploads/2025/02/herosection_33.jpg" },
            { img: "https://tsoministries.com/wp-content/uploads/2025/02/herosection_34.jpg" },
        ],
    SLIDE2: isDev ?
        [
            { img: "/assets/img/herosection/herosection_14.jpg" },
            { img: "/assets/img/herosection/herosection_15.jpg" },
            { img: "/assets/img/herosection/herosection_16.jpg" },
            { img: "/assets/img/herosection/herosection_17.jpg" },
            { img: "/assets/img/herosection/herosection_18.jpg" },
            { img: "/assets/img/herosection/herosection_19.jpg" },
            { img: "/assets/img/herosection/herosection_20.jpg" },
            { img: "/assets/img/herosection/herosection_21.jpg" },
            { img: "/assets/img/herosection/herosection_22.jpg" },
            { img: "/assets/img/herosection/herosection_23.jpg" },
            { img: "/assets/img/herosection/herosection_24.jpg" },
            { img: "/assets/img/herosection/herosection_25.jpg" },
        ]
        :
        [
            { img: "https://tsoministries.com/wp-content/uploads/2025/02/herosection_14.jpg" },
            { img: "https://tsoministries.com/wp-content/uploads/2025/02/herosection_15.jpg" },
            { img: "https://tsoministries.com/wp-content/uploads/2025/02/herosection_16.jpg" },
            { img: "https://tsoministries.com/wp-content/uploads/2025/02/herosection_17.jpg" },
            { img: "https://tsoministries.com/wp-content/uploads/2025/02/herosection_18.jpg" },
            { img: "https://tsoministries.com/wp-content/uploads/2025/02/herosection_19.jpg" },
            { img: "https://tsoministries.com/wp-content/uploads/2025/02/herosection_20.jpg" },
            { img: "https://tsoministries.com/wp-content/uploads/2025/02/herosection_21.jpg" },
            { img: "https://tsoministries.com/wp-content/uploads/2025/02/herosection_22.jpg" },
            { img: "https://tsoministries.com/wp-content/uploads/2025/02/herosection_23.jpg" },
            { img: "https://tsoministries.com/wp-content/uploads/2025/02/herosection_24.jpg" },
            { img: "https://tsoministries.com/wp-content/uploads/2025/02/herosection_25.jpg" },
        ],
    litsImg: isDev ? "/assets/img/lits.jpg" : "https://tsoministries.com/wp-content/uploads/2025/02/lits.jpg",
    BSImg: isDev ? "/assets/img/BS.jpg" : "https://tsoministries.com/wp-content/uploads/2025/02/BS.jpg",
    futuristic_pattern: isDev ? "/assets/img/futuristic_pattern.png" : "https://tsoministries.com/wp-content/uploads/2025/03/futuristic_pattern.png",
    hpGImg: isDev ? "/assets/img/hpG.jpg" : "https://tsoministries.com/wp-content/uploads/2025/02/hpG.jpg",
    logo: isDev ? "/assets/img/logo.png" : "https://tsoministries.com/wp-content/uploads/2025/02/logo.png",
    MobileBG: isDev ? "/assets/img/bg1.jpeg" : "https://tsoministries.com/wp-content/uploads/2025/02/bg1.jpeg",
    //ministers
    ministers: {
        pflo: isDev ? "/assets/img/ministers/Apostle-Dr.-Flourish-Peters.jpg" : "https://tsoministries.com/wp-content/uploads/2025/03/Apostle-Dr.-Flourish-Peters.jpg",
        magPsalm: isDev ? "/assets/img/ministers/MagPsalms.jpg" : "https://tsoministries.com/wp-content/uploads/2025/03/MagPsalms.jpg",
        minTSO: isDev ? "/assets/img/ministers/Min.-TitOluwa-Sam-Oladapo-1.jpg" : "https://tsoministries.com/wp-content/uploads/2025/03/Min.-TitOluwa-Sam-Oladapo-1.jpg",
        png: isDev ? "/assets/img/ministers/Pastor_Noble_G.jpg" : "https://tsoministries.com/wp-content/uploads/2025/03/Pastor_Noble_G.jpg",
        pLanre: isDev ? "/assets/img/ministers/Pastor-Lanre.jpg" : "https://tsoministries.com/wp-content/uploads/2025/03/Pastor-Lanre.jpg",
    },
    pageHeroImages: {
        about: isDev ? "/assets/img/herosection/herosection_11.jpg" : "https://tsoministries.com/wp-content/uploads/2025/02/herosection_11.jpg",
        contact: isDev ? "/assets/img/herosection/herosection_35.jpg" : "https://tsoministries.com/wp-content/uploads/2025/02/herosection_35.jpg",
        gallery: isDev ? "/assets/img/herosection/herosection_16.jpg" : "https://tsoministries.com/wp-content/uploads/2025/02/herosection_16.jpg",
        library: isDev ? "/assets/img/herosection/herosection_17.jpg" : "https://tsoministries.com/wp-content/uploads/2025/02/herosection_17.jpg",
    },
    gallery: {
        healingParty: [
            isDev ? "/assets/img/gallery/healingParty/hp_1.jpg" : "https://tsoministries.com/wp-content/uploads/2025/03/hp_1.jpg",
            isDev ? "/assets/img/gallery/healingParty/hp_2.jpg" : "https://tsoministries.com/wp-content/uploads/2025/03/hp_2.jpg",
            isDev ? "/assets/img/gallery/healingParty/hp_3.jpg" : "https://tsoministries.com/wp-content/uploads/2025/03/hp_3.jpg",
        ],
        bibleStudy: [
            isDev ? "/assets/img/gallery/bibleStudy/bs_1.jpg" : "https://tsoministries.com/wp-content/uploads/2025/02/bs_1.jpg",
            isDev ? "/assets/img/gallery/bibleStudy/bs_2.jpg" : "https://tsoministries.com/wp-content/uploads/2025/03/bs_2.jpg",
        ],
        lifeInTheSpirit: [
            isDev ? "/assets/img/gallery/lifeInTheSpirit/lits_1.jpg" : "https://tsoministries.com/wp-content/uploads/2025/02/lits_1.jpg",
            isDev ? "/assets/img/gallery/lifeInTheSpirit/lits_2.jpg" : "https://tsoministries.com/wp-content/uploads/2025/03/lits_2.jpg",
        ],
    }
}

export default ImagesDev;