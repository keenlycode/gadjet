import { theme } from './color';

import './_index.html/widget';

sidebar.showAt = null;
sidebar.mediaChange();

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
        min-height: 100vh;
        height: auto;
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
        min-height: 100vh;
        height: auto;
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