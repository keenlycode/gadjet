const Color = require('color');

export const bgColor = (color: string = 'blue') => {
    let fontColor: string = Color(color).isDark() ? 'white' : 'black';
    return `
    background-color: ${color};
    color: ${fontColor};
    `.trim();
}