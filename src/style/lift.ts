export interface LiftParam {
    level?: number;
    shadowColor?: string;
}

export const lift = ({
    level = 3,
    shadowColor = 'rgb(0, 0, 0, 50%)'
}: LiftParam) => {
    if (level < 0 || level > 5) {
        level = 0;
    };

    const boxShadow = [
        `0 0 0 0 ${shadowColor}`,
        `0 1px 3px 0 ${shadowColor}`,
        `0 2px 5px 0 ${shadowColor}`,
        `0 4px 9px 0 ${shadowColor}`,
        `0 8px 17px 0 ${shadowColor}`,
        `0 16px 33px 0 ${shadowColor}`,
    ]
    return `box-shadow: ${boxShadow[level]};`.trim();
}

export interface FontFluidParam {
    vwMin?: number;
    vwMax?: number;
    fontSizeMax?: number;
    fontSizeMin?: number;
}