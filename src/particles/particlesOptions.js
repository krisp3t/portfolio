const options = {
    background: {
        image: "linear-gradient(to bottom, #432F70, #8a3459)",
    },
    fullScreen: {
        enable: true,
        zIndex: -1
    },
    particles: {
        move: {
            enable: true,
            outModes: {
                default: "out",
            },
            random: true,
            speed: 0.4,
            straight: false,
        },
        opacity: {
            animation: {
                enable: true,
                speed: 1,
                sync: false,
            },
            value: {min: 0, max: 1},
        },
        size: {
            value: {min: 1, max: 3},
        },
    },
};

export default options;