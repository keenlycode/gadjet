import { define } from 'gadjet/src/ui';
import { addStyle } from 'gadjet/src/adapter';
import { bgColor } from 'gadjet/src/style';
import { theme } from '../color';

import { Sidebar } from 'gadjet/src/ui/sidebar/sidebar';
import { ButtonPin } from 'gadjet/src/ui/button/button-pin';
import { ButtonSquare } from 'gadjet/src/ui/button/button-square';
import { Badge } from 'gadjet/src/ui/badge/badge';
import { Tag } from 'gadjet/src/ui/tag/tag';

var Color = require('color');

Sidebar.define('el-sidebar');
ButtonPin.define('el-button-pin');
ButtonSquare.define('el-button-square');
Badge.define('el-badge');
Tag.define('el-tag');

Tag.tagStyle({
    color: theme.yellow
})

Tag.tagStyle(`
    code {
        margin-left: 0.5rem;
        padding-left: 0.5rem;
        padding-right: 0.5rem;
    }
`)

Tag.classStyle('title-blockquote', `
    margin-left: 1rem;
    margin-bottom: -1rem;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
    box-shadow: none;
`)

Tag.classStyle('title-block', `
    margin-bottom: -1rem;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
    box-shadow: none;
`);

Tag.classStyle('code', {
    color: theme.blueGreen
});

addStyle`

body {
    padding-bottom: 10rem;
}

.container {
    max-width: 800px;
    width: 90%;
    margin: auto;

    > h1 {
        text-align: center;
        padding-top: 1rem;
        margin-bottom: 0;
    }

    > h2 {
        margin-top: 2rem;
        margin-bottom: 0;
    }

    @media (min-width: 1150px) {
        margin-left: 27vw;
    }
    @media (min-width: 1450px) {
        margin-left: auto;
    }
}

.container {
}

.container a {
    color: ${theme.violet}
}

el-tag > code {
    ${bgColor(Color(theme.yellow).lighten(0.5))}
}

hr {
    border: none;
    height: 1px;
    background: #333;
}

p ~ ol {
    margin-top: -0.5rem;
}

blockquote {
    border-left: 4px solid ${theme.yellow};
    margin: 0;
    margin-left: 1rem;
    padding: 0.2rem 1rem 0.2rem 0.8rem;
    ${bgColor(theme.light)}
}

blockquote.fn-detail {
    margin-left: 0;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
}

.preview {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    margin-top: 3rem;
    margin-bottom: 3rem;
    .row {
        display: flex;
        justify-content: center;
    }
}

#sidebar-button {
    position: fixed;
    top: 1.5rem;
    left: 1.5rem;
    font-size: 1.25rem;
    z-index: 100;
}

el-sidebar {
    [el="content"] {
        width: 260px;
    }
    [el="title"] {
        display: flex;
        justify-content: space-between;
        align-items: stretch;
        margin-bottom: 0.5rem;
        a {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            font-size: 1.5rem;
            font-weight: bold;
            width: 100%;
            text-decoration: none;
        }

        el-button-square {
            font-size: 1.5rem;
            border-radius: 0;
        }
    }

    [el="menu"] {
        padding-bottom: 5rem;
        .h {
            font-size: 1.25rem;
            font-weight: bold;
            padding-left: 0.5rem;
        }
        div.list {
            padding-left: 0.5rem;
        }
        a {
            display: block;
            width: 100%;
            font-size: 1em;
            padding: 0.25rem 0.5rem;
        }

        a:hover {
            ${bgColor(theme.blueGreen)}
        }
    }
}
`;