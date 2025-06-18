export const mobileCheck = () => {
    const isMobile = /iPhone|iPad|Android/i.test(navigator.userAgent);
    const isTablet =
        /iPad/i.test(navigator.userAgent) ||
        (/Android/i.test(navigator.userAgent) &&
            !/Chrome/i.test(navigator.userAgent));
    const isDesktop = !(isMobile || isTablet);

    return !isDesktop;
};

export const smoothFollow = (raw, follow, smoothing) => {
    return follow + smoothing * (raw - follow);
};

export const easeInCubic = (x) => {
    return x * x * x;
};

export const getFontSizes = (w, h) => {
    if (w < 1000){
        return { "small": 32, "medium": 64, "large": 128};
    } else {
        return { "small": 24, "medium": 32, "large": 64};
    }
}

export const widthCheck = (w) => {
    if (w < 1000){
        return true;
    }
    return false;
};

// injectFontLink and loadGoogleFontSet from Dave Pagurek: https://editor.p5js.org/davepagurek/sketches/Q6HAN1qhX
export const injectFontLink = (href) => {
    const link = document.createElement('link');
    link.id = 'font';
    link.href = href;
    link.rel = 'stylesheet';
    document.head.appendChild(link);
};

export const loadGoogleFontSet = async (url, p = window) => {
    injectFontLink(url);
    await document.fonts.ready; // ??
    let pfonts = Array.from(document.fonts).map(f => {
    let pf = new p5.Font(p, f);
    pf.path = pf.path || url;
    });
    return pfonts;
};
