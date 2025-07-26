const getTheme = (currentPageSlug) => {
    const screenHeight = window.innerHeight;
    const themes = {
        home: [
            {
                range: [0, screenHeight * 0.2],
                background: 'bg-transparent', 
                text: 'text-white', 
            },
            {
                range: [screenHeight * 0.2, Infinity],
                // background: '#350C41', 
                background: 'linear-gradient(to right,rgb(57, 10, 72), rgb(21, 20, 21),rgb(21, 20, 21))',
                text: 'text-white', 
            },
            // {
            //     range: [screenHeight, Infinity],
            //     // background: 'bg-white', 
            //     background: 'linear-gradient(to right,rgb(182, 130, 200),rgb(222, 222, 222))',
            //     text: 'text-black', 
            // },
        ],
        about: [
            {
                range: [0, 20],
                background: 'bg-transparent',
                text: 'text-black',
            },
            {
                range: [21, screenHeight * 0.6],
                background: 'bg-white',
                text: 'text-black',
            },
            {
                range: [screenHeight * 0.6, Infinity],
                // background: '#350C41', 
                background: 'linear-gradient(to right,rgb(57, 10, 72), rgb(21, 20, 21),rgb(21, 20, 21))',
                text: 'text-white', 
            },
        ],
        "about-us": [
            {
                range: [0, 20],
                background: 'bg-transparent',
                text: 'text-black',
            },
            {
                range: [21, screenHeight * 0.6],
                background: 'bg-white',
                text: 'text-black',
            },
            {
                range: [screenHeight * 0.6, Infinity],
                // background: '#350C41', 
                background: 'linear-gradient(to right,rgb(57, 10, 72), rgb(21, 20, 21),rgb(21, 20, 21))',
                text: 'text-white', 
            },
        ],
        events: [
            {
                range: [0, screenHeight * 0.2],
                background: 'bg-transparent', 
                text: 'text-white', 
            },
            {
                range: [screenHeight * 0.2, Infinity],
                // background: '#350C41', 
                background: 'linear-gradient(to right,rgb(57, 10, 72), rgb(21, 20, 21),rgb(21, 20, 21))',
                text: 'text-white', 
            },
        ],
        resources: [
            {
                range: [0, screenHeight * 0.05],
                background: 'bg-transparent', 
                text: 'text-black', 
            },
            {
                range: [screenHeight * 0.05, Infinity],
                // background: '#350C41', 
                background: 'linear-gradient(to right,rgb(57, 10, 72), rgb(21, 20, 21),rgb(21, 20, 21))',
                text: 'text-white', 
            },
        ],
        default: [
            {
                range: [0, screenHeight * 0.05],
                background: 'bg-transparent', 
                text: 'text-white', 
            },
            {
                range: [screenHeight * 0.05, Infinity],
                // background: '#350C41', 
                background: 'linear-gradient(to right,rgb(57, 10, 72), rgb(21, 20, 21),rgb(21, 20, 21))',
                text: 'text-white', 
            },
        ],
    };

    return themes[currentPageSlug] || themes['default'];
};

export default getTheme;