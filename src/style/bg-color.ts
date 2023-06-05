import Color from 'color';

export const bgColor = (color: string = 'blue'): string => {
    let fontColor: string = new Color(color).isDark() ? 'white' : 'black';
    return `
    background-color: ${color};
    color: ${fontColor};
    `.trim();
}