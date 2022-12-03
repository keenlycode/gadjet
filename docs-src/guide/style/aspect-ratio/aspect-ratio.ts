import { addStyle, aspectRatio } from 'gadjet/src/style';

addStyle`
.aspectRatio-4-3 {
    ${aspectRatio('4/3')}
}
.aspectRatio-16-9 {
    ${aspectRatio('16/9')}
}
.aspectRatio-1-1 {
    ${aspectRatio('1')}
}
.aspectRatio-21-9 {
    ${aspectRatio('21/9')}
}

.box {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #eee;
    width: 80%;
    max-width: 250px;
    border: 1px solid;
    margin: 2rem;
    font-size: 2rem;
}

.video {
    iframe {
        width: 100%;
        height: 100%;
    }
}
`;