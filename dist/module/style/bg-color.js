const Color = require('color');
export const bgColor = (color = 'blue') => {
    let fontColor = Color(color).isDark() ? 'white' : 'black';
    return `
    background-color: ${color};
    color: ${fontColor};
    `.trim();
};
