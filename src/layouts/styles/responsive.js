const size = {
    mobileS: 320,
    mobileM: 375,
    mobileL: 425,
    tabletM: 576,
    tablet: 768,
    laptop: 1024,
    laptopL: 1440,
    desktop: 2560
};

export const devices = {
    mobileS: "mobileS",
    mobileM: "mobileM",
    mobileL: "mobileL",
    tabletM: "tabletM",
    tablet: "tablet",
    laptop: "laptop",
    laptopL: "laptopL",
    desktop: "desktop"
}

export const lessThan = device => `(max-width: ${size[device]}px)`;

export const greaterThan = device => `(min-width: ${size[device]}px)`;

export const between = (fDevice, sDevice) => `(min-width: ${size[fDevice]}px) and (max-width: ${size[sDevice] - 1}px)`;