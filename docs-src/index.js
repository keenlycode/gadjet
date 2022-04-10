import { addStyle, bgColor, fontFluid, lift } from 'gadjet/src/style';
import { Button } from 'gadjet/src/ui/button/button';
import { define, StyledElement } from 'gadjet/src/ui/ui';
import { Badge } from 'gadjet/src/ui/badge/badge';
import { Card } from 'gadjet/src/ui/card/card';
import { theme } from './color';

define('el-styled', StyledElement);
define('el-badge', Badge);
define('el-card', Card);

Button.tagStyle({color: theme.yellow});
Button.classStyle('violet', {color: theme.violet});
Button.classStyle('big', `font-size: 2em;`);
Button.classStyle('dark', {color: theme.dark});
Button.classStyle('light', {color: theme.light});

addStyle`
#highlight {
    display: flex;
    flex-wrap: wrap;
    h1 {
        ${fontFluid({fontSizeMin: 50, fontSizeMax: 100})}
        margin: 0;
        width: 100%;
        text-align: center;
    }
    h2 {
        ${fontFluid({fontSizeMin: 25, fontSizeMax: 50})}
        width: 100%;
        text-align: center;
    }
    h3 {
        ${fontFluid({fontSizeMin: 20, fontSizeMax: 40})}
        width: 100%;
        text-align: center;
        margin-bottom: 0;
        padding-bottom: 0.5rem;
        border-bottom: 1px solid;
    }
}

#hl1 {
    ${bgColor(theme.violet)}
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    width: 50%;
    height: 100vh;
    transition: background-color 1s ease;
    @media (max-width: 1000px) {
        width: 100%;
    }
}
#hl2 {
    ${bgColor(theme.blueGreen)}
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    width: 50%;
    height: 100vh;
    box-sizing: border-box;
    padding: 1rem;
    transition: background-color 1s ease;
    @media (max-width: 1000px) {
        width: 100%;
    }
    > div {
        width: 100%;
    }
    pre code {
        ${lift({level: 3})}
        margin-top: 2rem;
        margin-bottom: 2rem;
    }
}

el-card {
    padding: 0rem 1rem;
    width: 90%;
    max-width: 500px;
    margin: 2%;
    h2 {
        width: 100%;
        text-align: center;
    }
}
`;