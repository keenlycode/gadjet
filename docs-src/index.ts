import { Button } from 'gadjet/src/ui/button/button';
import { Badge } from 'gadjet/src/ui/badge/badge';
import { theme } from './color';

import './global.d';

sidebar.showAt = null;

addStyle`
.container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 90%;
    max-width: 1200px;
    margin: auto;
}`;

Badge.define('el-badge');

Button.tagStyle({color: theme.yellow});
Button.tagStyle(`border-radius: 5px;`);
Button.classStyle('violet', {color: theme.violet});
Button.classStyle('big', `font-size: 2em;`);
Button.classStyle('dark', {color: theme.dark});
Button.classStyle('light', {color: theme.light});

class Highlight extends Adapter {};
Highlight.define('el-highlight');
Highlight.tagStyle(`
    display: flex;
    flex-wrap: wrap;
    h1 {
        ${fontFluid({
            fontSizeMin: 30, fontSizeMax: 70,
            vwMin: 280, vwMax: 600
        })}
        margin: 0;
        width: 100%;
        text-align: center;
    }
    h2 {
        ${fontFluid({
            fontSizeMin: 15, fontSizeMax: 40,
            vwMin: 280, vwMax: 600
        })}
        width: 100%;
        text-align: center;
    }


    [el="hl1"] {
        ${bgColor(theme.violet)}
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        width: 50%;
        height: 100vh;
        font-size: 1.2em;
        transition: background-color 1s ease;
        @media (max-width: 1000px) {
            width: 100%;
        }
    }
    [el="hl2"] {
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
`);