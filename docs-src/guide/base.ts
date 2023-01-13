import { theme } from '../color';
import { addStyle } from 'gadjet/dist/module/gadjet';

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

.container a {
    color: ${theme.violet}
}

hr {
    border: none;
    height: 1px;
    background: #333;
}

p ~ ol {
    margin-top: -0.5rem;
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
`;