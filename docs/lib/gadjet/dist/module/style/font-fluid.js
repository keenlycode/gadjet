export const fontFluid = ({ vwMin = 300, vwMax = 1200, fontSizeMin = 16, fontSizeMax = 18 } = {}) => {
    let viewportRatio = `(100vw - ${vwMin}px) / (${vwMax} - ${vwMin})`;
    let fontScaleRatio = `(${fontSizeMax} - ${fontSizeMin}) * ${viewportRatio}`;
    return `
    font-size: ${fontSizeMin}px;
    @media screen and (min-width: ${vwMin}px) {
        font-size: calc(
            ${fontSizeMin}px + ${fontScaleRatio}
        );
    }
    @media screen and (min-width: ${vwMax}px) {
        font-size: ${fontSizeMax}px;
    }
    `.trim();
};
