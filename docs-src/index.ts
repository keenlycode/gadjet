import { addStyle, bgColor, fontFluid, lift } from 'gadjet/src/style';
import { define, Gadjet } from 'gadjet/src/ui/ui';
import { Button } from 'gadjet/src/ui/button/button';
import { Badge } from 'gadjet/src/ui/badge/badge';
import { Card } from 'gadjet/src/ui/card/card';
import { BoxArrow } from 'gadjet/src/ui/box-arrow/box-arrow';

import { theme } from './color';
import { BoxArrowStyle } from '../src/ui/box-arrow/box-arrow.style';

addStyle`
.container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 90%;
    max-width: 1200px;
    margin: auto;
}
`;

define('el-badge', Badge);
define('el-card', Card);
define('el-box-arrow', BoxArrow);
BoxArrow.tagStyle(`
    padding: 0.5rem 0.7rem;
    p {
        margin: 0;
    }
`);
BoxArrow.classStyle('top', {
    arrow: 'top',
})
BoxArrow.classStyle('right', {
    arrow: 'right',
})
BoxArrow.classStyle('bottom', {
    arrow: 'bottom',
})
BoxArrow.classStyle('left', {
    arrow: 'left',
})

Button.tagStyle({color: theme.yellow});
Button.tagStyle(`border-radius: 5px;`);
Button.classStyle('violet', {color: theme.violet});
Button.classStyle('big', `font-size: 2em;`);
Button.classStyle('dark', {color: theme.dark});
Button.classStyle('light', {color: theme.light});

class Highlight extends Gadjet {};
define('el-highlight', Highlight);
Highlight.tagStyle(`
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

    [el="hl1"] {
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

class Feature extends Gadjet {};
define('el-feature', Feature);
Feature.tagStyle(`
    el-card {
        padding: 0rem 1rem;
        width: 90%;
        max-width: 450px;
        margin: 2%;
        h2 {
            width: 100%;
            text-align: center;
        }
    }
`)

class Explanation extends Gadjet {};
define('el-explanation', Explanation);
Explanation.tagStyle(`
    el-box-arrow.top {
        ${BoxArrowStyle.style({
            "bgColor": theme.yellow
        })}
    }
`)