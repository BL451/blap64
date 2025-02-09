export const mobileCheck = () => {
    const isMobile = /iPhone|iPad|Android/i.test(navigator.userAgent);
    const isTablet =
        /iPad/i.test(navigator.userAgent) ||
        (/Android/i.test(navigator.userAgent) &&
            !/Chrome/i.test(navigator.userAgent));
    const isDesktop = !(isMobile || isTablet);

    return !isDesktop;
};
